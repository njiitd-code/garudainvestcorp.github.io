import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Search, Handshake, Target } from "lucide-react";

const Portfolio = () => {
  const portfolioCompanies = [
    {
      name: "Loren Ipsum Electronics",
      description: "Leading EMS provider specializing in automotive electronics and IoT devices with state-of-the-art manufacturing facilities",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      sector: "EMS",
      growth: "+25% Growth",
      stage: "Series B",
      details: "Specialized in high-precision PCB manufacturing and IoT device assembly with clients across automotive and industrial sectors"
    },
    {
      name: "Loren Ipsum  AeroSpace Dynamics",
      description: "Next-gen satellite communication systems and UAV technology solutions for defence and commercial applications",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      sector: "Aerospace",
      growth: "+40% Growth", 
      stage: "Series A",
      details: "Developing advanced satellite communication systems and autonomous UAV platforms for strategic applications"
    },
    {
      name: "Loren Ipsum Systems",
      description: "Advanced cybersecurity and secure communication solutions for defence and critical infrastructure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      sector: "Defence",
      growth: "+35% Growth",
      stage: "Series B", 
      details: "Providing end-to-end cybersecurity solutions and encrypted communication systems for government agencies"
    }
  ];

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case "EMS": return "bg-blue-100 text-blue-800";
      case "Aerospace": return "bg-yellow-100 text-yellow-800";
      case "Defence": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-black">Our Portfolio</h1>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
              Strategic investments across EMS, Aerospace, and Defence sectors driving 
              India's technological advancement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "6", label: "Portfolio Companies", desc: "Active investments" },
              { value: "₹125Cr", label: "Deployed Capital", desc: "Total investment" },
              { value: "35%", label: "Average Growth", desc: "Portfolio CAGR" },
              { value: "3", label: "Strategic Sectors", desc: "Focus areas" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-navy mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Companies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Portfolio Companies</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              We partner with visionary founders driving innovation across strategic sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={company.image}
                  alt={`${company.name} - ${company.sector} company`}
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={getSectorColor(company.sector)}>
                      {company.sector}
                    </Badge>
                    <span className="text-sm font-medium text-green-600">{company.growth}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{company.name}</h3>
                  <p className="text-black mb-4 text-sm leading-relaxed">{company.description}</p>
                  <div className="flex items-center justify-between text-sm text-black">
                    <span>Stage: {company.stage}</span>
                    <TrendingUp size={16} className="text-green-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Our Investment Approach</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Strategic, value-driven investments with active partnership
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Deep Due Diligence",
                description: "Comprehensive evaluation of technology, market potential, competitive landscape, and management capabilities"
              },
              {
                icon: Handshake,
                title: "Strategic Partnership", 
                description: "Active involvement in strategy development, operational improvements, and access to our extensive network"
              },
              {
                icon: Target,
                title: "Value Creation",
                description: "Long-term focus on building sustainable competitive advantages and market leadership positions"
              }
            ].map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <motion.div
                  key={approach.title}
                  className="text-center bg-gray-50 rounded-2xl p-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-navy">{approach.title}</h4>
                  <p className="text-black">{approach.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl text-black font-bold mb-8">Portfolio Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl text-black font-bold mb-2">Yx</div>
                <div className="text-lg text-black mb-2">Average Multiple</div>
                <div className="text-sm text-black">Across realized investments</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl text-black font-bold  mb-2">X%</div>
                <div className="text-lg text-black mb-2">Portfolio CAGR</div>
                <div className="text-sm text-black">Compound annual growth rate</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-4xl text-black font-bold  mb-2">Z%</div>
                <div className="text-lg text-black mb-2">Success Rate</div>
                <div className="text-sm text-black">Positive outcomes to date</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
