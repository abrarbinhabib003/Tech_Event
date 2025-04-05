import { CodeBracketIcon, LightBulbIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const attendees = ["Developers", "Founders", "Students", "Researchers", "Corporates"];

const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          📘 About TechWave 2025
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto">
          TechWave 2025 is the premier global conference on emerging technologies like AI, Web 3.0,
          Quantum Computing, and more. Designed for engineers, tech leaders, students, and startups
          to connect and co-create the future.
        </p>

    
        <div className="grid md:grid-cols-3 gap-8 text-center mb-20">
          <div className="p-6 bg-[#1f2937] rounded-xl hover:bg-[#334155] transition">
            <CodeBracketIcon className="w-12 h-12 mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">Cutting-Edge Tech</h3>
            <p className="mt-2 text-gray-300">
              Dive into the latest in AI, Quantum, Web 3.0, and future-defining technologies.
            </p>
          </div>
          <div className="p-6 bg-[#1f2937] rounded-xl hover:bg-[#334155] transition">
            <LightBulbIcon className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold">Innovator Hub</h3>
            <p className="mt-2 text-gray-300">
              Meet the minds shaping tomorrow — from startups to tech giants.
            </p>
          </div>
          <div className="p-6 bg-[#1f2937] rounded-xl hover:bg-[#334155] transition">
            <UserGroupIcon className="w-12 h-12 mx-auto text-green-400 mb-4" />
            <h3 className="text-xl font-semibold">Global Community</h3>
            <p className="mt-2 text-gray-300">
              Network with developers, founders, and innovators from over 30 countries.
            </p>
          </div>
        </div>

    
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">🎯 Who Should Attend?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {attendees.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.08 }}
                className="relative group w-40 h-32 p-4 bg-[#0f172a] border-2 border-blue-500 rounded-xl shadow-xl text-white flex items-center justify-center font-semibold cursor-pointer overflow-hidden"
              >
    
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 opacity-20 blur-lg z-0 group-hover:opacity-40 transition-all duration-300" />
                
                <span className="relative z-10 text-lg">{role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
