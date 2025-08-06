import { Link } from "wouter";
import { Feather, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <Feather className="text-black text-lg" />
              </div>
              <span className="text-2xl text-black font-bold">Garuda Invest Corp</span>
            </div>
            <p className="text-gray-900 mb-6 leading-relaxed">
              Category 2 AIF (SEBI registration in process) focused on strategic investments in EMS, Aerospace, and Defence sectors. 
              Building India's technological sovereignty through strategic capital deployment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-black transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-black transition-colors duration-200">About</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-black transition-colors duration-200">Team</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-black transition-colors duration-200">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-black transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-black transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-black transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-black transition-colors duration-200">SEBI Disclosures</a></li>
              <li><a href="#" className="text-gray-300 hover:text-black transition-colors duration-200">Risk Disclosures</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Garuda Invest Corp. All rights reserved. | SEBI Registration: In Process
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Investment in securities market are subject to market risks. Read all related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
