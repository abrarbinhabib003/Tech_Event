import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto text-center">
  
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <a href="/privacy-policy" className="text-lg hover:text-primary transition-all">
            Privacy Policy
          </a>
          <a href="/terms-conditions" className="text-lg hover:text-primary transition-all">
            Terms & Conditions
          </a>
          <a href="/faqs" className="text-lg hover:text-primary transition-all">
            FAQs
          </a>
        </motion.div>


        <p className="text-sm text-gray-400">
          &copy; 2025 TechWave. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
