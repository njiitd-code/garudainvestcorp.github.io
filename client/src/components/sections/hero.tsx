import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/animated-counter";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy-light/80"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Powering India's
              <span className="text-gold"> Strategic Future</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Category 2 AIF (SEBI registration in process) focused on EMS, Aerospace, and Defence sectors. 
              Building tomorrow's strategic capabilities today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-white font-bold text-lg">
                  Start Investing<Rocket className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-black hover:bg-white hover:text-navy"
                >
                  Learn More <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>

            <motion.div 
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">
                  <AnimatedCounter end={1000} prefix="₹" suffix="Cr+" />
                </div>
                <div className="text-sm text-gray-200">AUM Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="text-sm text-gray-200">Portfolio Companies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">
                  <AnimatedCounter end={20} suffix="%" />
                </div>
                <div className="text-sm text-gray-200">Target IRR</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Aerospace technology and satellite" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
