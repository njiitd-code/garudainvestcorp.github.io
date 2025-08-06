import { motion } from "framer-motion";
import { Cpu, Rocket, Shield } from "lucide-react";

const FocusAreas = () => {
  const areas = [
    {
      title: "EMS",
      description: "Electronics Manufacturing Services - Driving India's electronic hardware capabilities and reducing import dependency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Cpu,
      features: [
        "PCB Manufacturing",
        "Component Assembly", 
        "IoT Device Production",
        "Testing & Quality Control"
      ],
      gradient: "from-navy to-navy-light"
    },
    {
      title: "Aerospace",
      description: "Next-generation aerospace technologies powering India's space ambitions and aviation industry.",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Rocket,
      features: [
        "Satellite Technology",
        "UAV Systems",
        "Propulsion Systems", 
        "Avionics Development"
      ],
      gradient: "from-gold to-gold-dark"
    },
    {
      title: "Defence",
      description: "Strategic defence technologies supporting India's Make in India initiative for national security.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      icon: Shield,
      features: [
        "Surveillance Systems",
        "Cybersecurity Solutions",
        "Communication Systems",
        "Advanced Materials"
      ],
      gradient: "from-green-600 to-green-700"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Our Investment Focus</h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Strategically positioned in India's most critical growth sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={area.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={area.image}
                  alt={`${area.title} technology`}
                  className="rounded-xl w-full h-48 object-cover mb-6" 
                />
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${area.gradient} rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">{area.title}</h3>
                </div>
                <p className="text-black mb-6">{area.description}</p>
                <ul className="text-sm text-black space-y-2">
                  {area.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
