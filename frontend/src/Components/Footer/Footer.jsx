import React, { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Twitter, Instagram, Youtube, Facebook, Send } from 'lucide-react';

// Import your logo - update this path to match your actual logo location
import logoImage from '../../../favicon.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = () => {
    if (!email) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      alert('Thank you for subscribing!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/company/ehm-consultancy-pvt-ltd/', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://x.com/EHMOfficial1', label: 'Twitter' },
    { icon: Instagram, url: 'https://www.instagram.com/ehmofficial1/', label: 'Instagram' },
    { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100063877967113', label: 'Facebook' },
    { icon: Youtube, url: 'https://www.youtube.com/@EHMOfficial1', label: 'YouTube' },
  ];

  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Offerings', url: '/offerings' },
    { name: 'Projects', url: '/projects' },
    { name: 'Resources', url: '/resources/blogs' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
     <footer className="w-full bg-[#022c22] text-gray-100 relative overflow-hidden font-outfit">
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Decorative Gradient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-white rounded-xl shadow-xl">
                <img src={logoImage} alt="EHM Logo" className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">EHM</h3>
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Earth Hydro Management</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-md">
              Leading the global transition toward environmental stewardship through deep-tech innovation and sustainable engineering.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-500 border border-white/10 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Sitemap</h4>
            <nav className="grid grid-cols-1 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Get in Touch</h4>
            <div className="space-y-6 text-gray-400 font-light">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="leading-relaxed">
                  TECHNOPARK, IIT KANPUR<br />
                  Kalyanpur, Kanpur - 208016, India
                </span>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <a href="mailto:info@ehmconsultancy.co.in" className="hover:text-emerald-400 transition-colors">
                  info@ehmconsultancy.co.in
                </a>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <a href="tel:+919892396408" className="hover:text-emerald-400 transition-colors">
                  +91 9892396408
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-light">
            © {new Date().getFullYear()} EHM Consultancy. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;