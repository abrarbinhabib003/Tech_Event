import { motion } from "framer-motion";

const packages = [
  {
    tier: "🎖️ Platinum",
    label: "Most Popular",
    perks: [
      "Prime Booth Placement",
      "Keynote Stage Mention",
      "10 Full-Access Passes",
      "VIP Lounge Access",
    ],
    gradient: "from-yellow-100 via-yellow-50 to-white",
    border: "border-yellow-400",
  },
  {
    tier: "🥈 Gold",
    label: "Great Value",
    perks: ["Premium Booth Location", "Website Logo", "5 Access Passes"],
    gradient: "from-gray-100 via-white to-gray-50",
    border: "border-gray-400",
  },
  {
    tier: "🥉 Silver",
    label: "Starter",
    perks: ["Basic Booth Space", "Banner Name Placement", "2 Entry Passes"],
    gradient: "from-slate-100 via-slate-50 to-white",
    border: "border-slate-400",
  },
];

const Sponsors = () => {
  return (
    <section className="bg-base-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">💼 Sponsor Packages</h2>
        <p className="text-gray-500 mb-12 text-lg">
          Choose the perfect sponsorship tier for your brand
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pack, i) => (
            <motion.div
              key={pack.tier}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative group rounded-2xl p-8 backdrop-blur bg-gradient-to-br ${pack.gradient} border-4 ${pack.border} shadow-lg hover:shadow-2xl transition-all`}
            >
            
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-xl shadow-md">
                {pack.label}
              </div>

           
              <div className="text-4xl text-black mb-4">{pack.tier}</div>

    
              <ul className="text-left text-gray-700 mt-6 space-y-4 text-black">
                {pack.perks.map((perk, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✔️</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

 
              <div className="mt-8">
                <button className="btn btn-primary btn-wide shadow-md hover:shadow-xl transition duration-200">
                  Contact Us
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
