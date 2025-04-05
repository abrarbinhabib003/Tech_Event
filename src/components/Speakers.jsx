import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";


const speakers = [
  {
    name: "Dr. Ayesha Rahman",
    title: "AI Ethicist, MIT",
    bio: "Global voice on responsible AI, shaping future tech policies.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/ayesha",
      twitter: "https://twitter.com/ayesha_ai"
    }
  },
  {
    name: "James Park",
    title: "Founder of BitSecure",
    bio: "Blockchain pioneer revolutionizing digital asset security.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/jamespark",
      twitter: "https://twitter.com/james_bit"
    }
  },
  {
    name: "Amina Chowdhury",
    title: "CTO, NovaSpace",
    bio: "Leading aerospace innovation with quantum AI systems.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/amina",
      twitter: "https://twitter.com/amina_nova"
    }
  }
];

const Speakers = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">🎤 Keynote Speakers</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#1f2937] rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{speaker.name}</h3>
              <p className="text-blue-400 mb-2">{speaker.title}</p>
              <p className="text-gray-300 text-sm mb-4">{speaker.bio}</p>
              <div className="flex justify-center gap-4 text-xl text-white">
                <a
                  href={speaker.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={speaker.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
