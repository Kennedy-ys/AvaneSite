#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const requireFactoryPattern = ["create", "Require"].join("");
const evaluationPattern = ["e", "val"].join("");
const suspiciousPatterns = [
  {
    pattern: /\bglobal(?:This)?\s*(?:\.\s*[\w$]+|\[\s*["'][^"']+["']\s*\])\s*=/,
    name: "Global object assignment",
  },
  { pattern: /_\$_[0-9a-f]{2,}/i, name: "Obfuscated variable name" },
  {
    pattern: /\b(?:new\s+)?Function\s*\(/,
    name: "Dynamic Function constructor",
  },
  { pattern: /\beval\s*\(/, name: "Dynamic evaluation" },
  {
    pattern: /\bString\s*\.\s*fromCharCode\s*\(/,
    name: "Encoded string construction",
  },
  {
    pattern: new RegExp(
      requireFactoryPattern + "[\\s\\S]{0,120}" + evaluationPattern,
      "i",
    ),
    name: "Dynamic require with evaluation",
  },
];

const configFilesToValidate = new Set([
  "postcss.config.mjs",
  "next.config.js",
  "tailwind.config.js",
  "eslint.config.js",
  "metro.config.js",
  "babel.config.js",
  "vite.config.js",
  "webpack.config.js",
  "rollup.config.js",
]);
const ignoredDirectories = new Set([
  ".git",
  ".next",
  ".turbo",
  "build",
  "coverage",
  "dist",
  "node_modules",
  "out",
]);

function collectFiles(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name))
        files.push(...collectFiles(entryPath));
    } else if (entry.isFile()) {
      files.push(entryPath);
    }
  }

  return files;
}

let hasIssue = false;
let scannedFileCount = 0;
const rootDirectory = globalThis.process ? globalThis.process.cwd() : ".";
const filesToCheck = collectFiles(rootDirectory);

for (const absolutePath of filesToCheck) {
  const fileBuffer = fs.readFileSync(absolutePath);
  if (fileBuffer.includes(0)) continue;

  scannedFileCount += 1;
  const file = path.relative(rootDirectory, absolutePath);
  const content = fileBuffer.toString("utf8");
  const lines = content.split("\n");

  suspiciousPatterns.forEach(({ pattern, name }) => {
    const matches = new RegExp(pattern.source, `${pattern.flags}g`);
    const reportedLines = new Set();

    for (const match of content.matchAll(matches)) {
      const lineNumber = content.slice(0, match.index).split("\n").length;
      const line = lines[lineNumber - 1];
      const isWorkflowRule =
        file === path.join(".github", "workflows", "config-security.yml") &&
        (/grep -E/.test(line) || /^\s*(?:echo\s|- name:)/.test(line));
      const isHookRule =
        file === path.join(".husky", "pre-commit") && /grep -E/.test(line);
      if (isWorkflowRule || isHookRule || reportedLines.has(lineNumber))
        continue;

      hasIssue = true;
      reportedLines.add(lineNumber);
      const excerpt = line.trim();
      const displayExcerpt =
        excerpt.length > 180 ? `${excerpt.slice(0, 177)}...` : excerpt;
      console.log(`❌ ${file}:${lineNumber} -> ${name}`);
      console.log(`   ${displayExcerpt}`);
    }
  });

  if (configFilesToValidate.has(path.basename(file))) {
    try {
      execFileSync("node", ["-c", absolutePath], { stdio: "pipe" });
      console.log(`✅ ${file} syntax parse OK (file was not executed)`);
    } catch {
      hasIssue = true;
      console.log(`❌ ${file} has syntax errors`);
    }
  }
}

console.log(`Scanned ${scannedFileCount} text files for suspicious patterns.`);

if (hasIssue) {
  console.log("\n🚨 Security check failed. Review the flagged code.");
  globalThis.process.exit(1);
}

console.log("\n✅ Security check passed.");
