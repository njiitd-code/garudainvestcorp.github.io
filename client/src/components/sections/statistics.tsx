import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/animated-counter";

const Statistics = () => {
  const stats = [
    { value: 1000, prefix: "₹", suffix: " Cr", label: "Target AUM" },
    { value: 25, suffix: "+", label: "Portfolio Companies" },
    { value: 20, suffix: "%", label: "Target IRR" },
    { value: 3, label: "Strategic Sectors" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-navy to-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Fund Performance</h2>
          <p className="text-xl text-black">Strategic investments driving exceptional returns</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-black mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  prefix={stat.prefix || ""} 
                  suffix={stat.suffix || ""} 
                />
              </div>
              <div className="text-black text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
