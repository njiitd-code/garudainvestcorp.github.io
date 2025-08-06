import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
    const strategicAdvisors = [
    {
      name: "Advisor 1",
      title: "Former Defence Secretary",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Expert in defence procurement, government policy, and national strategy with decades of experience in the public sector."
    },
    {
      name: "Advisor 2",
      title: "Aerospace Industry Veteran",
      image: "https://images.unsplash.com/photo-1603415526960-f8f6ebd58066?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Led aerospace design and systems engineering teams at global MNCs, now consulting on strategic partnerships and manufacturing scale-up."
    },
    {
      name: "Advisor 3",
      title: "EMS Policy Expert",
      image: "https://images.unsplash.com/photo-1614281660566-9252abdd2f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Instrumental in drafting and advising on India's PLI scheme for electronics; works closely with MSMEs and large EMS players."
    }
  ];
  const teamMembers = [
    {
      name: "Partner 1",
      title: "Managing Partner",
      experience: "15+ years in investments",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Loren Ipsum is a seasoned investment professional with over 15 years of experience in private equity and venture capital. He has a proven track record of successful investments in the EMS, Aerospace, and Defence sectors."
    },
    {
      name: "Partner 2", 
      title: "General Partner",
      experience: "12+ years in Manufacturing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Loren Ipsum specializes in manufacturing and technology investments. Former consultant at leading consulting firms with deep expertise in operational excellence and supply chain optimization."
    },
    {
      name: "Partner 3",
      title: "General Partner", 
      experience: "10+ years in Strategic Investments",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Loren Ipsum manages our portfolio companies and drives value creation initiatives. Previously worked at top-tier investment banks and has extensive experience in cross-border transactions and strategic partnerships."
    },
    {
      name: "Partner 4",
      title: "General Partner",
      experience: "8+ years in Fund Operations", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Loren Ipsum oversees fund operations, compliance, and investor relations. Former VP at leading financial institutions with expertise in regulatory compliance and institutional investor management."
    }
  ];

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
            <h1 className="text-5xl font-bold mb-6 text-black">Our Leadership Team</h1>
            <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
              Experienced professionals with deep sector expertise and proven track record 
              in strategic investments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    className="w-32 h-32 rounded-full object-cover shadow-lg" 
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-navy mb-2">{member.name}</h3>
                    <p className="text-gold font-medium text-lg mb-2">{member.title}</p>
                    <p className="text-black text-sm mb-4">{member.experience}</p>
                    <p className="text-black leading-relaxed mb-6">{member.bio}</p>
                    <div className="flex justify-center md:justify-start space-x-4">
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-navy transition-colors duration-200"
                        aria-label={`${member.name} LinkedIn profile`}
                      >
                        <Linkedin size={24} />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-navy transition-colors duration-200"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Collective Expertise</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Our team combines decades of experience across investment banking, 
              private equity, and sector-specific operational expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Investment Experience",
                description: "Combined 45+ years of experience in private equity, venture capital, and strategic investments across target sectors",
                stat: "45+ Years"
              },
              {
                title: "Deal Flow",
                description: "Extensive network across EMS, Aerospace, and Defence sectors with access to high-quality deal flow and co-investment opportunities",
                stat: "XX+ Deals"
              }
            /*  {
                title: "Value Creation",
                description: "Proven track record of working with portfolio companies to achieve operational excellence and sustainable growth",
                stat: "25x Average"
              }*/
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-gold mb-4">{expertise.stat}</div>
                <h3 className="text-xl font-bold text-navy mb-4">{expertise.title}</h3>
                <p className="text-black">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="pt-20">

      {/* Strategic Advisors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Strategic Advisors</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Our strategic advisors offer deep technical and policy expertise that strengthens our fund's direction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategicAdvisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                className="bg-white rounded-2xl p-6 text-left shadow-md hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-16 h-16 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-navy">{advisor.name}</h4>
                    <p className="text-sm text-gold font-medium">{advisor.title}</p>
                  </div>
                </div>
                <p className="text-black text-sm leading-relaxed">{advisor.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>

          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-12 text-white text-center">
            <h3 className="text-2xl text-black font-bold mb-6">Distinguished Industry Leaders</h3>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Our advisory board includes former defence secretaries, aerospace industry veterans, 
              electronics manufacturing experts, and senior government officials who provide strategic 
              guidance and help navigate regulatory landscapes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-black mb-2">5+</div>
                <div className="text-black">Former Government Officials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">10+</div>
                <div className="text-black">Industry Veterans</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">25+</div>
                <div className="text-black">Subject Matter Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
