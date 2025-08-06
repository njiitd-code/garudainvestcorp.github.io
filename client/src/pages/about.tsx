import { motion } from "framer-motion";
import { CheckCircle, Target, Award, Users, TrendingUp } from "lucide-react";
import Statistics from "@/components/sections/statistics";

const About = () => {
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
            <h1 className="text-5xl font-bold mb-6 text-black">About Garuda Invest Corp</h1>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
              Building India's technological sovereignty through strategic investments in 
              critical growth sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-black mb-6 leading-relaxed">
                Garuda Invest Corp is a Category 2 Alternative Investment Fund (AIF) (SEBI registration in process) with SEBI registration 
                in process, strategically focused on India's most critical growth sectors: Electronics 
                Manufacturing Services, Aerospace, and Defence.
              </p>
              <p className="text-lg text-black mb-8 leading-relaxed">
                Our fund leverages deep sector expertise and strategic partnerships to identify and 
                nurture companies that are building India's technological sovereignty and strategic capabilities. 
                We believe in the transformative power of strategic capital deployment in critical sectors.
              </p>
              
              <div className="space-y-4">
                {[
                  "SEBI Cat 2 AIF registration in process",
                  "Strategic focus on EMS, Aerospace, and Defence",
                  "Experienced investment team with sector expertise",
                  "Value-added partnership approach with portfolio companies",
                  "Strong network of industry experts and advisors"
                ].map((item, index) => (
                  <motion.div 
                    key={item} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-black">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Investment strategy and portfolio management" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Statistics />

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Principles that guide our investment decisions and partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Focus",
                description: "Concentrated investments in sectors critical to India's national security and technological independence"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Commitment to the highest standards in due diligence, portfolio management, and investor relations"
              },
              {
                icon: Users,
                title: "Partnership",
                description: "Building long-term relationships with founders, co-investors, and stakeholders"
              },
              {
                icon: TrendingUp,
                title: "Value Creation",
                description: "Active involvement in strategy development and operational improvements for sustainable growth"
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-navy to-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-black">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fund Strategy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Strategic planning and analysis" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">Fund Strategy</h2>
              <p className="text-lg text-black mb-6 leading-relaxed">
                Our investment strategy is built on deep sector knowledge, rigorous due diligence, 
                and a commitment to supporting India's strategic industrial capabilities.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Investment Criteria</h3>
                  <p className="text-black">
                    We target companies with strong management teams, differentiated technology, 
                    scalable business models, and significant market opportunities in our focus sectors.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Value Addition</h3>
                  <p className="text-gray-600">
                    Beyond capital, we provide strategic guidance, industry connections, 
                    operational expertise, and access to our extensive network of advisors and partners.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Exit Strategy</h3>
                  <p className="text-gray-600">
                    We work closely with portfolio companies to build sustainable, profitable 
                    businesses with clear paths to strategic acquisitions or public offerings.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
