import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const agendaItems = [
  {
    day: "Day 1",
    title: "Future of AI + Live Demos",
    color: "from-cyan-500 to-blue-500",
  },
  {
    day: "Day 2",
    title: "Web3, Blockchain, & Decentralized Apps",
    color: "from-purple-500 to-pink-500",
  },
  {
    day: "Day 3",
    title: "Quantum Computing & Startup Pitch Battle",
    color: "from-indigo-500 to-teal-500",
  },
];

const Agenda = () => {
  return (
    <section className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">🗓️ Agenda Preview</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {agendaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-2">{item.day}</h3>
              <p className="text-lg">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <a
          href="/techwave-agenda.pdf" 
          className="btn btn-outline btn-accent flex items-center gap-2"
          download
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          Download Full Agenda (PDF)
        </a>
      </div>
    </section>
  );
};

export default Agenda;
