import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const StayInTouch = () => {
  return (
    <section className="bg-base-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">📬 Stay in Touch</h2>
        <p className="text-gray-500 mb-12 text-lg">
          Subscribe for event updates and stay connected with us!
        </p>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto mb-12"
        >
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered input-primary w-full"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              Subscribe
            </button>
          </form>
        </motion.div>


        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-white">📍 Contact Us</h3>
          <div className="flex justify-center gap-8 text-lg text-gray-700">
            <div>
              <p className="font-bold text-white">Email</p>
              <p className="text-white">info@techwave2025.com</p>
            </div>
            <div>
              <p className="font-bold text-white">Phone</p>
              <p className="text-white">+1 (123) 456-7890</p>
            </div>
            <div>
              <p className="font-bold text-white">Address</p>
              <p className="text-white">123 Tech Street, Toronto, Canada</p>
            </div>
          </div>
        </div>

     
        <div className="flex justify-center gap-8 text-2xl text-gray-600">
          <motion.a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-linkedin hover:text-primary transition-all"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-twitter hover:text-primary transition-all"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-instagram hover:text-primary transition-all"
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default StayInTouch;
