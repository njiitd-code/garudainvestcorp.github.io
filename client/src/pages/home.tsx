import Hero from "@/components/sections/hero";
import FocusAreas from "@/components/sections/focus-areas";
import Statistics from "@/components/sections/statistics";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Search, Handshake, TrendingUp } from "lucide-react";
console.log("Changed nitin!")
const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <FocusAreas />
      <Statistics />
      
      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">About Garuda Invest Corp</h2>
              <p className="text-lg text-black mb-6 leading-relaxed">
                Garuda Invest Corp is a Category 2 Alternative Investment Fund (AIF) with SEBI registration 
                in process, strategically focused on India's most critical growth sectors: Electronics 
                Manufacturing Services, Aerospace, and Defence.
              </p>
              <p className="text-lg text-black mb-8 leading-relaxed">
                Our fund leverages deep sector expertise and strategic partnerships to identify and 
                nurture companies that are building India's technological sovereignty and strategic capabilities.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "SEBI Registration in Process",
                  "Strategic Sector Focus",
                  "Experienced Investment Team",
                  "Value-Added Partnership"
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-black">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="about">
                <Button className="bg-navy hover:bg-navy-light text-white">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Investment portfolio charts and analytics" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl border">
                <div className="text-3xl font-bold text-navy">₹1000Cr+</div>
                <div className="text-gray-600">Fund Size Target</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Approach Section */}
      <section className="py-20 bg-gray-50">
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
              Strategic, value-driven investments in India's critical sectors
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Deep Due Diligence",
                description: "Rigorous evaluation of technology, market, and management capabilities"
              },
              {
                icon: Handshake,
                title: "Strategic Partnership", 
                description: "Active involvement in strategy, operations, and growth initiatives"
              },
              {
                icon: TrendingUp,
                title: "Value Creation",
                description: "Long-term value creation through operational excellence and market expansion"
              }
            ].map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <motion.div
                  key={approach.title}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-navy">{approach.title}</h4>
                  <p className="text-black">{approach.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Partner with India's Strategic Future?
            </h2>
            <p className="text-xl text-black mb-8 leading-relaxed">
              Join us in building India's technological sovereignty through strategic investments 
              in EMS, Aerospace, and Defence sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-black font-semibold">
                  Start Investing <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="portfolio">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-black hover:bg-white hover:text-navy"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
