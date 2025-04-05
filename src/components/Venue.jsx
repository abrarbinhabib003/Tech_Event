import { FaMapMarkerAlt, FaHotel, FaPlaneDeparture, FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";

const Venue = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">📍 Venue & Travel</h2>
          <p className="text-lg text-gray-600">
            TechWave 2025 will take place at the iconic Toronto Convention Centre.
          </p>
        </div>

   
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9342594371823!2d-79.38429348496888!3d43.6425669791216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2cd799c21%3A0x6c1b3c33eb6b5b57!2sMetro%20Toronto%20Convention%20Centre!5e0!3m2!1sen!2sca!4v1712291420650!5m2!1sen!2sca"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
              title="Venue Map"
              className="border-none"
            ></iframe>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-6 rounded-xl shadow-md flex gap-4 items-start"
            >
              <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-black">Toronto Convention Centre</h4>
                <p className="text-sm text-gray-600">
                  255 Front St W, Toronto, ON M5V 2W6, Canada
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-green-50 p-6 rounded-xl shadow-md flex gap-4 items-start"
            >
              <FaPlaneDeparture className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-black ">Nearest Airports</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Toronto Pearson International Airport (YYZ) – 30 mins</li>
                  <li>Billy Bishop Toronto City Airport (YTZ) – 10 mins</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-yellow-50 p-6 rounded-xl shadow-md flex gap-4 items-start"
            >
              <FaHotel className="text-yellow-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-black">Nearby Hotels</h4>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  <li>Delta Hotels by Marriott Toronto</li>
                  <li>InterContinental Toronto Centre</li>
                  <li>Hyatt Regency Toronto</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="bg-purple-50 p-6 rounded-xl shadow-md flex gap-4 items-start"
            >
              <FaLaptop className="text-purple-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-black">Virtual Access</h4>
                <p className="text-sm text-gray-600">
                  Can’t make it in person? Grab a virtual ticket to join sessions online.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
