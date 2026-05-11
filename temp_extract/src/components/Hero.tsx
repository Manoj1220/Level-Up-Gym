import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

const STATS = [
  { label: 'Active Members', value: '500+' },
  { label: 'Elite Trainers', value: '20+' },
  { label: 'Specialized Programs', value: '15' },
];

const HIGHLIGHTS = ["Build Power", "Break Limits", "Level Up", "Train Elite"];

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Cinematic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8uTNPzguWf9sONZx_IFLNSmAVW-zexFKUIw9paVDIIu6Grtkj_1FEP5gYexyX3hXQI0F4goQFnQ00HZoQPI37gqYSvVz2LH5fEgTJV2CwRc8Ic6rGoQPY1H9c8mifBYfftP0Gv9OTb6ByWxv2H16QVYlt7SizQXwyyfWqSlv-BAY0Zh5H3F_WvacVs4jpIgsoqmoUjQm23BacOq1OehGVqm51ScwOfoh8n3LKB2yxY2drpkmeLYf6tE0GgLHU8jJQolCrUtAd_t-d')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-12 md:h-16 overflow-hidden mb-2">
            <div className="animate-rotate-text flex flex-col items-center">
              {HIGHLIGHTS.map((text) => (
                <span key={text} className="font-display text-2xl md:text-4xl text-surface-tint uppercase tracking-wider h-12 md:h-16 flex items-center">
                  {text}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-display text-5xl md:text-8xl text-white uppercase mb-6 leading-none text-shadow-lg drop-shadow-2xl">
            Level Up Your <span className="text-surface-tint italic">Body</span>
          </h1>
          
          <p className="font-sans text-on-surface-variant max-w-2xl mx-auto mb-10 text-lg md:text-xl">
            Transform your physique, strength, and mindset with elite training. 
            Step into the arena where champions are forged.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <button 
              onClick={onJoinClick}
              className="bg-surface-tint text-surface font-display text-xl px-12 py-4 rounded uppercase hover:scale-105 transition-all neon-glow-strong tracking-widest"
            >
              Start Journey
            </button>
            <button 
              className="bg-transparent border-2 border-surface-tint text-surface-tint font-display text-xl px-12 py-4 rounded uppercase hover:bg-surface-tint/10 transition-all tracking-widest backdrop-blur-sm"
            >
              Book Free Trial
            </button>
          </div>

          {/* Trusted Badge */}
          <div className="flex flex-col items-center gap-3 mb-16 glass-card px-6 py-3 rounded-full border-surface-tint/20 inline-flex">
            <div className="flex -space-x-3">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCmcdM38wadUkVmkrJJ0Z1uZs5ncOwC5K3Zb3wGC0m8SUvk7NGhvD5eXca5f5awenIHasRFaHZ2n4_x0tm515yS05IAyPgiDfjXuEyo1zcotPJywr-Kkk3IvpjfYe8Sau0U3Mowq8TKahEHLrqvKeoQJreOPtK1au5azuovW9rvVs_loeu2ZkvAl6xyTRSnzx92aPb2UtzoKW7QUlfXFtQc54m8jEGil65jg4hahKUF6vxwiD3JWQD77KwWm7pxkL4CRU6oZp6m-gnF',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDyEKAla5g7j4zw4dKFhrreJVlGgQJMcsLCQ-OOHqwXUYEcgBnbnO4K0wPF84YsmJ1wP-N2PPmElWqPA-kQK9ketio0ZoqoK1EI3cfR_svhlVKCnzNQk-5qgNWfvZVMOx6ysu7eVabHJb93B4Cpow307sDh-3itAFp00SGOa0AWp3nzajZroQjU3SwsYW5GovOndLEAMjfuQhU5EYwQmvK2ISWfaPVYb6kOcsnF9tAUI1CM96uEoxjwqKpt1JsDJdf38GM7Frd_bbXY',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuDFElee0YZvBULvOZGQ9om4bNcH4PMoqIjiIwpVm0LBnH95gZZXs-yBylKrU5f4wmLhd4DmU5w7saxMOJDHAaXJiBvvNfpse8p5l70dmiLK2MFKUlLYzhPtazCtMHeamEQON5H_qcuWLvs13X10cN21exjfkcDFaDfjigOsgsrbyWvCb3eJwwAn3xRbi9co-VpXAmviC5DlcaKZpZMZQLwdy5YrEr7Y9Z_IsgsKSDe8IhWH9h9QLpu07vHSH6LZKrNM-nWloZPBv06Y',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBAiF0RYqX2Y4VXR8mh6cdrYCanFV2J5GRduHYyAAuE7CsQz_hadKfOt-wDYVh3Xysj7bPt6ZNG2PY6ZHP2KSMS7p_EHL4bykvwsSR3FRDHGI7IVsXLBHLdQRi1ibQt8AL9nKJ3ffPGuzWN7eYFa-ylUMPSIqHodUhRLfk3QvGXO-7-H6Wcs0rRDqFzulchokbEI4IRhh9RuancQ0iSYmPU7AZ6Au8vsJvDv1VDXXYZNJhM_LVfjOnqjJSya5aj0EGJJiKskwGPDvMB'
              ].map((src, i) => (
                <img key={i} alt="Athlete" className="w-8 h-8 rounded-full border-2 border-surface-tint object-cover" src={src} />
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-surface-tint bg-surface flex items-center justify-center text-xs font-bold text-surface-tint">+</div>
            </div>
            <span className="font-label text-on-surface-variant tracking-widest uppercase text-xs font-bold">Trusted by 500+ Elite Athletes</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl glass-card rounded-2xl p-8 md:p-10 border-t border-surface-tint/30"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="font-display text-4xl md:text-5xl text-surface-tint mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="font-label text-white/70 uppercase tracking-widest text-xs md:text-sm font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
      >
        <span className="font-label text-surface-tint uppercase tracking-widest text-[10px] mb-2 font-bold">Scroll</span>
        <ChevronDown size={24} className="text-surface-tint" />
      </motion.div>
    </section>
  );
}
