/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Globe, 
  FileText, 
  UserCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight,
  ExternalLink,
  Info,
  ShieldCheck,
  Plane
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex flex-col border border-white/10 overflow-hidden rounded-sm">
              <div className="flex-1 bg-comoros-yellow h-1/4"></div>
              <div className="flex-1 bg-white h-1/4"></div>
              <div className="flex-1 bg-comoros-red h-1/4"></div>
              <div className="flex-1 bg-comoros-blue h-1/4"></div>
              <div className="absolute inset-y-0 left-0 w-1/2 bg-comoros-green clip-path-triangle flex items-center justify-center">
                 <div className="w-1 h-1 bg-white rounded-full mb-0.5"></div>
              </div>
            </div>
            <div>
              <span className={`block font-display font-bold text-lg leading-none ${scrolled ? 'text-comoros-green' : 'text-white'}`}>
                CONSULATE OF COMOROS
              </span>
              <span className={`block text-[10px] uppercase tracking-widest font-bold ${scrolled ? 'text-slate-500' : 'text-white/80'}`}>
                Republic of Uganda
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-comoros-green ${scrolled ? 'text-slate-700' : 'text-white font-medium'}`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-comoros-green text-white px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-lg hover:shadow-comoros-green/30">
              Apply for Visa
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-700' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-bold text-slate-800 hover:text-comoros-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-comoros-green text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-comoros-green/20">
                Apply for Visa
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1543716627-839b54c40519?auto=format&fit=crop&q=80&w=2000" 
          alt="Comoros Landscape" 
          className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-10000"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
            <Globe size={16} className="text-comoros-yellow animate-spin-slow" />
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">Official Diplomatic Mission</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tighter">
            Bridging <span className="text-comoros-green underline decoration-comoros-yellow underline-offset-8">Comoros</span> <br />
            with <span className="text-comoros-yellow">Uganda</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed font-light max-w-2xl">
            Welcome to the official portal of the Consulate of the Union of the Comoros. 
            Providing visa services, assisting citizens, and fostering diplomatic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-comoros-green text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-opacity-90 hover:translate-y-[-4px] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-comoros-green/40 group">
              Apply for Visa
              <Plane size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              View All Services
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-comoros-yellow rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Visa Applications',
      description: 'Requirements and guidelines for Tourist, Business, and Diplomatic visas to Comoros.',
      icon: <FileText className="text-comoros-blue" />,
      color: 'bg-comoros-blue/5 border-comoros-blue/10 hover:border-comoros-blue/30'
    },
    {
      title: 'Citizen Assistance',
      description: 'Registration, passport renewals, and legal assistance for Comorians in Uganda.',
      icon: <UserCheck className="text-comoros-green" />,
      color: 'bg-comoros-green/5 border-comoros-green/10 hover:border-comoros-green/30'
    },
    {
      title: 'Legalization',
      description: 'Official attestation of educational, commercial, and personal documents.',
      icon: <ShieldCheck className="text-comoros-red" />,
      color: 'bg-comoros-red/5 border-comoros-red/10 hover:border-comoros-red/30'
    },
    {
      title: 'Travel Advisories',
      description: 'Latest updates on travel requirements, health guidelines, and safety info.',
      icon: <Info className="text-comoros-yellow" />,
      color: 'bg-comoros-yellow/5 border-comoros-yellow/10 hover:border-comoros-yellow/30'
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-comoros-green text-sm font-black uppercase tracking-[0.3em] mb-4 block"
          >
            Digital Consulate
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 tracking-tight">Our Services</h2>
          <div className="w-20 h-1.5 bg-comoros-yellow mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[40px] border transition-all duration-500 group cursor-pointer ${service.color}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-slate-200 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all ring-1 ring-slate-100">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm md:text-base">
                {service.description}
              </p>
              <div className="flex items-center gap-3 text-slate-400 group-hover:text-comoros-green font-bold text-sm uppercase tracking-widest transition-colors">
                Explore <ChevronRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="flex-1 relative order-2 lg:order-1">
             <div className="absolute -top-12 -left-12 w-64 h-64 bg-comoros-green/5 rounded-full blur-3xl animate-pulse"></div>
             <motion.div 
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.5 }}
               className="relative rounded-[60px] overflow-hidden shadow-2xl z-10 aspect-[4/5] lg:aspect-square"
             >
                <img 
                  src="https://images.unsplash.com/photo-1551041777-ed030386ab5d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Consulate Engagement"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl max-w-xs">
                   <p className="text-xl font-display font-medium text-white italic leading-relaxed">
                     "Our commitment is to transparency, efficiency, and the unity of our people."
                   </p>
                </div>
             </motion.div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <span className="text-comoros-red text-sm font-black uppercase tracking-[0.3em] mb-4 block">Diplomatic Relations</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-10 leading-[1.1]">
              A Partnership Built on <br />
              <span className="text-comoros-green">Trust</span> & <span className="text-comoros-blue text-opacity-50 italic">Ambition</span>
            </h2>
            <div className="space-y-8 text-slate-600 leading-relaxed text-lg">
              <p>
                The Consulate of the Union of the Comoros in Uganda was established to strengthen the historical, 
                economic, and cultural ties between our two nations. We represent the interests of Comoros 
                and its citizens while fostering a spirit of mutual prosperity.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                 <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-comoros-green/10 flex items-center justify-center text-comoros-green mb-4">
                       <ShieldCheck size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Diplomacy</h4>
                    <p className="text-sm">Maintaining high-level engagement with the Ugandan government.</p>
                 </div>
                 <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-comoros-blue/10 flex items-center justify-center text-comoros-blue mb-4">
                       <Globe size={20} />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Heritage</h4>
                    <p className="text-sm">Promoting the unique culture of the Perfume Islands in East Africa.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-comoros-blue text-sm font-black uppercase tracking-[0.3em] mb-4 block">Reach Out</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-12">Connect With Us</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-comoros-green group-hover:text-white group-hover:scale-110 transition-all duration-500 shrink-0 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-display">Office Address</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Plot 12, Nakasero Road<br />
                    Kampala, Republic of Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-comoros-yellow group-hover:text-white group-hover:scale-110 transition-all duration-500 shrink-0 shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-display">Phone & WhatsApp</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    +256 414 123 456<br />
                    +256 700 000 000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-[24px] bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-comoros-red group-hover:text-white group-hover:scale-110 transition-all duration-500 shrink-0 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-display">Email Correspondece</h4>
                  <p className="text-slate-500 text-lg leading-relaxed overflow-hidden text-ellipsis">
                    consulate@comoros-uganda.com<br />
                    visas@comoros-uganda.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="bg-slate-900 rounded-[60px] p-10 md:p-16 shadow-2xl shadow-slate-200 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-comoros-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <h4 className="text-3xl font-display font-bold mb-10 relative z-10">Send a Secure Inquiry</h4>
            <form className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:bg-white/10 focus:ring-2 focus:ring-comoros-green transition-all outline-none" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:bg-white/10 focus:ring-2 focus:ring-comoros-green transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Subject of Inquiry</label>
                <input type="text" placeholder="e.g. Tourist Visa" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:bg-white/10 focus:ring-2 focus:ring-comoros-green transition-all outline-none" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-1">Your Message</label>
                <textarea rows={4} placeholder="How can we assist you today?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 focus:bg-white/10 focus:ring-2 focus:ring-comoros-green transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-white text-slate-900 py-6 rounded-2xl font-black text-lg hover:bg-comoros-green hover:text-white transition-all shadow-xl flex items-center justify-center gap-3">
                SUBMIT FORM <ChevronRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-32 pb-12 text-white relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-comoros-green/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-20 mb-20 pb-20 border-b border-white/5">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 flex flex-col rounded overflow-hidden">
                <div className="flex-1 bg-comoros-yellow h-1/4"></div>
                <div className="flex-1 bg-white h-1/4"></div>
                <div className="flex-1 bg-comoros-red h-1/4"></div>
                <div className="flex-1 bg-comoros-blue h-1/4"></div>
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase underline decoration-comoros-green underline-offset-4">Consulate of Comoros</span>
            </div>
            <p className="text-white/40 max-w-md text-lg leading-relaxed mb-10">
              The official diplomatic portal for the Republic of the Union of the Comoros in Uganda. 
              Dedicated to service, unity, and bilateral growth.
            </p>
            <div className="flex gap-6">
              {[Globe, Mail, Phone].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-comoros-green hover:border-comoros-green transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-white">Consular links</h5>
            <ul className="space-y-6 text-white/40 font-medium">
              <li><a href="#home" className="hover:text-comoros-green transition-colors">Home Portal</a></li>
              <li><a href="#services" className="hover:text-comoros-green transition-colors">Consular Services</a></li>
              <li><a href="#about" className="hover:text-comoros-green transition-colors">Our Mission</a></li>
              <li><a href="#contact" className="hover:text-comoros-green transition-colors">Contact Office</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-black uppercase tracking-[0.2em] mb-10 text-white">External Resources</h5>
            <ul className="space-y-6 text-white/40 font-medium">
              <li className="flex items-center gap-3"><ExternalLink size={14} /> MFA Comoros</li>
              <li className="flex items-center gap-3"><ExternalLink size={14} /> Uganda Gov Portal</li>
              <li className="flex items-center gap-3"><ExternalLink size={14} /> E-Visa Portal</li>
              <li className="flex items-center gap-3"><ExternalLink size={14} /> Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-black uppercase tracking-widest text-white/20">
          <p>© {new Date().getFullYear()} Consulate of the Union of the Comoros in Uganda.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Digital Governance</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="selection:bg-comoros-green selection:text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      
      {/* Global Flag Strip */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] flex">
        <div className="flex-1 bg-comoros-yellow"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-comoros-red"></div>
        <div className="flex-1 bg-comoros-blue"></div>
      </div>
    </main>
  );
}
