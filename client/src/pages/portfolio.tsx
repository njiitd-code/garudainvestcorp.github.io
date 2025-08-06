import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="pt-32 pb-32 bg-gradient-to-r from-navy to-navy-light min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-black mb-6">Coming Soon</h1>
        <p className="text-xl text-black opacity-80">
          We're actively building our portfolio section. Stay tuned.
        </p>
      </motion.div>
    </div>
  );
};

export default Portfolio;
