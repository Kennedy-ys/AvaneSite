import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function TeamSection() {

  const team = [
    {
      name: "Daniel Brooks",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Sophia Carter",
      role: "Lead UI Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "James Wilson",
      role: "Frontend Engineer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
  ];

  return (
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black md:text-6xl">
            Meet The Team
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
            A creative collective of designers, developers, and
            strategists building the future of digital experiences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-2xl"
            >
              <div className="relative h-105 overflow-hidden">
                <img
                  src={`${member.image}?w=800`}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-3xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-violet-400">
                    {member.role}
                  </p>

                  <div className="mt-6 flex gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <button className="rounded-full bg-white/5 p-3 backdrop-blur-md">
                      <FaLinkedinIn className="text-white" size={18} />
                    </button>

                    <button className="rounded-full bg-white/5 p-3 backdrop-blur-md">
                      <FaGithub className="text-white" size={18} />
                    </button>

                    <button className="rounded-full bg-white/5 p-3 backdrop-blur-md">
                      <FaXTwitter className="text-white" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  );
}