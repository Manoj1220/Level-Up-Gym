"use client";
import { motion } from 'motion/react';
import { Power, Shield, Zap, Trophy, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { submitApplication } from '@/app/join/actions';
import Link from 'next/link';

export default function ApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await submitApplication(formData);
      if (response.success) {
        setSuccess(true);
      } else {
        setError(response.error || "Failed to submit application.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 flex flex-col items-center relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30 fixed pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/90 to-surface z-0 pointer-events-none" />

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
             
             {success ? (
                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 py-8">
                  <CheckCircle className="text-surface-tint w-20 h-20 mb-4" />
                  <h2 className="font-display text-4xl text-white uppercase tracking-widest">Application Received</h2>
                  <p className="font-sans text-lg text-on-surface-variant">Your journey begins now. We will contact you shortly.</p>
                  <Link href="/" className="bg-surface-tint text-surface font-display text-2xl px-10 py-4 rounded-lg uppercase tracking-widest mt-8 hover:scale-[1.02] active:scale-[0.98] transition-all neon-glow-strong inline-flex items-center gap-3">
                    Return to Home
                  </Link>
                </div>
             ) : (
                <>
                  <h2 className="font-display text-4xl text-white mb-10 uppercase tracking-widest text-center relative z-10">Join The Elite</h2>
                  {error && <div className="bg-red-500/20 text-red-200 border border-red-500/50 p-4 rounded-lg mb-6 text-center font-label uppercase tracking-wider relative z-10">{error}</div>}
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="space-y-2">
                      <label className="font-label text-xs text-on-surface-variant uppercase tracking-widest font-bold" htmlFor="fullName">Full Name</label>
                      <input 
                        id="fullName"
                        name="fullName"
                        type="text" 
                        required
                        placeholder="JOHN DOE"
                        className="w-full bg-surface-container/50 border border-white/10 rounded-lg p-4 font-sans text-white placeholder:text-on-surface-variant/30 focus:border-surface-tint focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs text-on-surface-variant uppercase tracking-widest font-bold" htmlFor="phone">Phone Number</label>
                      <input 
                        id="phone"
                        name="phone"
                        type="tel" 
                        required
                        placeholder="(555) 012-3456"
                        className="w-full bg-surface-container/50 border border-white/10 rounded-lg p-4 font-sans text-white placeholder:text-on-surface-variant/30 focus:border-surface-tint focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label text-xs text-on-surface-variant uppercase tracking-widest font-bold" htmlFor="email">Email Address (Optional)</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="JOHN@EXAMPLE.COM"
                        className="w-full bg-surface-container/50 border border-white/10 rounded-lg p-4 font-sans text-white placeholder:text-on-surface-variant/30 focus:border-surface-tint focus:outline-none transition-colors"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-surface-tint text-surface font-display text-2xl py-5 rounded-lg uppercase tracking-widest mt-8 hover:scale-[1.02] active:scale-[0.98] transition-all neon-glow-strong flex items-center justify-center gap-3 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "SUBMITTING..." : "JOIN THE GYM"}
                      {!loading && <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />}
                    </button>
                  </form>
                </>
             )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
