import { motion } from "framer-motion";

const tickets = [
  {
    type: "Student Pass",
    price: "$99",
    features: ["Access to all sessions", "Networking Events", "Student Lounge"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    type: "General",
    price: "$199",
    features: ["All Student features", "Tech Demos", "Workshops"],
    color: "from-purple-500 to-pink-500",
  },
  {
    type: "VIP",
    price: "$499",
    features: ["All General features", "VIP Lounge", "1-on-1 Mentorship", "After Party"],
    color: "from-yellow-500 to-orange-500",
  },
];

const Tickets = () => {
  return (
    <section className="py-20 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">🎫 Ticket Options</h2>
        <p className="text-lg text-gray-300 mb-8">
          Early bird pricing ends <span className="text-red-400 font-bold">April 10</span>
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tickets.map((ticket, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${ticket.color} shadow-lg hover:scale-105 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold mb-2">{ticket.type}</h3>
              <p className="text-3xl font-extrabold mb-4">{ticket.price}</p>
              <ul className="text-left text-sm mb-6 space-y-2">
                {ticket.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline btn-white hover:btn-accent transition">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">📊 Compare Ticket Benefits</h3>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full text-white border border-gray-600">
            <thead>
              <tr className="text-accent">
                <th>Benefit</th>
                <th>Student</th>
                <th>General</th>
                <th>VIP</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Access to all sessions", true, true, true],
                ["Networking Events", true, true, true],
                ["Tech Demos", false, true, true],
                ["Workshops", false, true, true],
                ["1-on-1 Mentorship", false, false, true],
                ["VIP Lounge", false, false, true],
                ["After Party", false, false, true],
              ].map(([feature, student, general, vip], index) => (
                <tr key={index}>
                  <td>{feature}</td>
                  <td>{student ? "✅" : "—"}</td>
                  <td>{general ? "✅" : "—"}</td>
                  <td>{vip ? "✅" : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
