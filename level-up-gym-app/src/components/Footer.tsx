import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-24 pb-12 border-t border-surface-tint/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-surface-tint/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-3xl text-surface-tint tracking-widest mb-6 italic uppercase">Level Up Gym</h3>
            <p className="font-sans text-on-surface-variant mb-8 leading-relaxed">
              The ultimate training facility engineered for excellence. Build power, break limits, and transform your life with the elite.
            </p>
            <div className="flex gap-4">
              {[FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-surface-tint hover:text-surface transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-label text-sm text-white uppercase tracking-[0.2em] mb-6 font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {['Facilities', 'Schedule', 'Elite Trainers', 'Mobile App'].map(link => (
                <li key={link}>
                  <a href="#" className="font-sans text-on-surface-variant hover:text-surface-tint transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-sm text-white uppercase tracking-[0.2em] mb-6 font-bold">Programs</h4>
            <ul className="space-y-4">
              {['Hypertrophy', 'Powerlifting', 'CrossFit', 'HIIT'].map(link => (
                <li key={link}>
                  <a href="#" className="font-sans text-on-surface-variant hover:text-surface-tint transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-sm text-white uppercase tracking-[0.2em] mb-6 font-bold">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-surface-tint shrink-0" size={20} />
                <span className="font-sans text-on-surface-variant">Near, Hanuman chowk Retlav, Udvada, Kikarla, Gujarat 396185</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-surface-tint shrink-0" size={20} />
                <span className="font-sans text-on-surface-variant">096871 18262</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-surface-tint shrink-0" size={20} />
                <span className="font-sans text-on-surface-variant">elite@levelupgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-on-surface-variant text-sm">
            © {new Date().getFullYear()} LEVEL UP GYM. ENGINEERED FOR EXCELLENCE.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-label text-[10px] text-on-surface-variant hover:text-surface-tint uppercase tracking-widest transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="font-label text-[10px] text-on-surface-variant hover:text-surface-tint uppercase tracking-widest transition-colors font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
