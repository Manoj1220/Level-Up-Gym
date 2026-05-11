import { motion } from 'motion/react';
import { Power, Shield, Zap, Trophy, ArrowRight } from 'lucide-react';

export default function ApplicationForm() {
  return (
    <div className="min-h-screen pt-32 pb-24 flex flex-col items-center">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30 fixed" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card border-surface-tint/30 text-surface-tint font-label text-xs uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-surface-tint animate-pulse" />
            No Excuses • Just Results
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-8xl text-white uppercase mb-4 text-shadow-neon"
          >
            Start Your <span className="text-surface-tint italic">Transformation</span>
          </motion.h1>
          <p className="font-sans text-on-surface-variant max-w-xl mx-auto text-lg">
            Take the first step toward becoming your strongest self. 
            Fill out the form below to join the elite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Benefit Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {[
              { icon: Power, label: 'Build Strength' },
              { icon: Zap, label: 'Transform Physique' },
              { icon: Shield, label: 'Train With Discipline' },
              { icon: Trophy, label: 'Become Elite' },
            ].map((benefit, idx) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-xl flex items-center gap-6 hover:border-surface-tint/50 transition-all group"
              >
                <benefit.icon className="text-surface-tint group-hover:scale-110 transition-transform" size={28} />
                <span className="font-display text-xl uppercase text-white tracking-widest">{benefit.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8 glass-card rounded-2xl p-8 md:p-12 border-surface-tint/20 relative group overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-surface-tint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             
             <h2 className="font-display text-4xl text-white mb-10 uppercase tracking-widest text-center">Join The Elite</h2>
             
             <form className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label text-xs text-on-surface-variant uppercase tracking-widest font-bold">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="JOHN DOE"
                    className="w-full bg-surface-container/50 border border-white/10 rounded-lg p-4 font-sans text-white placeholder:text-on-surface-variant/30 focus:border-surface-tint focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs text-on-surface-variant uppercase tracking-widest font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 012-3456"
                    className="w-full bg-surface-container/50 border border-white/10 rounded-lg p-4 font-sans text-white placeholder:text-on-surface-variant/30 focus:border-surface-tint focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs text-on-surface-variant uppercase tracking-widest font-bold">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    placeholder="JOHN@EXAMPLE.COM"
                    className="w-full bg-surface-container/50 border border-white/10 rounded-lg p-4 font-sans text-white placeholder:text-on-surface-variant/30 focus:border-surface-tint focus:outline-none transition-colors"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-surface-tint text-surface font-display text-2xl py-5 rounded-lg uppercase tracking-widest mt-8 hover:scale-[1.02] active:scale-[0.98] transition-all neon-glow-strong flex items-center justify-center gap-3 group/btn"
                >
                  Join The Gym
                  <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
