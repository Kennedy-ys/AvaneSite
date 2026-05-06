import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen dark:bg-linear-to-br dark:from-[#0b1220] dark:via-[#0d1b2a] dark:to-[#0a0f1c] bg-linear-to-br from-[#ecf1fc] to-[#ecf3f8] text-white overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute -top-25 -left-25 w-100 h-100 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-25 -right-25 w-100 h-100 bg-orange-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            SOLUTIONS THAT CREATE IMPACT
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Design.
            </span>{" "}
            <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Build.
            </span>{" "}
            <span className="bg-linear-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Validate
            </span>
            <br />
            digital products
            <br />
            that scale.
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            We help startups and businesses create intuitive experiences,
            build scalable applications, and validate ideas with real data.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-linear-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition shadow-lg shadow-blue-500/20">
              View Our Work →
            </button>

            <button className="px-6 py-3 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 transition">
              Start a Project →
            </button>
          </div>

          {/* SERVICES */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="text-blue-400 text-xl mb-2">✏️</div>
              <h4 className="font-semibold">UI/UX Design</h4>
              <p className="text-sm text-gray-400">
                Crafting intuitive and engaging user experiences.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="text-purple-400 text-xl mb-2">{"</>"}</div>
              <h4 className="font-semibold">Development</h4>
              <p className="text-sm text-gray-400">
                Building scalable and high-performance apps.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="text-orange-400 text-xl mb-2">🔍</div>
              <h4 className="font-semibold">Research</h4>
              <p className="text-sm text-gray-400">
                Data-driven insights for smarter decisions.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex items-center justify-center">

          {/* Dashboard Card */}
          <div className="absolute top-0 right-0 w-105 bg-[#111827] border border-white/10 rounded-2xl shadow-xl p-4 backdrop-blur">
            <div className="h-40 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-lg mb-4"></div>
            <div className="h-24 bg-white/5 rounded-lg"></div>
          </div>

          {/* Mobile Card */}
          <div className="relative z-10 w-55 bg-[#111827] border border-white/10 rounded-2xl shadow-2xl p-3 rotate-[-10deg]">
            <div className="h-40 bg-linear-to-br from-blue-400/20 to-cyan-400/20 rounded-lg mb-3"></div>
            <div className="h-6 bg-white/10 rounded w-2/3 mb-2"></div>
            <div className="h-6 bg-white/10 rounded w-1/2"></div>
          </div>

          {/* Code Card */}
          <div className="absolute bottom-0 right-10 w-65 bg-[#111827] border border-white/10 rounded-xl p-3 shadow-lg">
            <div className="h-24 bg-black/40 rounded text-xs text-green-400 p-2 font-mono">
              const solve = () =&gt; &#123;<br />
              &nbsp;&nbsp;return insights;<br />
              &#125;
            </div>
          </div>

          {/* Chart Card */}
          <div className="absolute -bottom-5 -right-5 w-50 bg-[#111827] border border-white/10 rounded-xl p-3 shadow-lg">
            <div className="h-24 bg-linear-to-br from-purple-500/20 to-blue-500/20 rounded"></div>
          </div>

        </div>

      </div>
    </section>
  );
}