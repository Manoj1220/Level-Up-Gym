"use client";
import { motion } from 'motion/react';
import { Dumbbell, Users, Brain } from 'lucide-react';

const FEATURES = [
  {
    title: 'Iron Discipline',
    description: 'No excuses. Just heavy lifting, proper form, and relentless consistency in our state-of-the-art facility.',
    icon: Dumbbell,
  },
  {
    title: 'Wolf Pack',
    description: 'Surround yourself with individuals pushing for greatness. Our community elevates your standards.',
    icon: Users,
  },
  {
    title: 'Bulletproof Mind',
    description: 'Physical transformation follows mental fortitude. We train the mind to push past perceived limits.',
    icon: Brain,
  },
];

export default function Features() {
  return (
    <section id="programs" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(121,223,0,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-7xl text-white uppercase mb-4 text-shadow-lg"
          >
            More Than A Gym
          </motion.h2>
          <p className="font-sans text-on-surface-variant max-w-2xl mx-auto text-lg">
            An ecosystem designed for those who refuse to settle for average. 
            We provide the tools, you provide the fire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-10 rounded-2xl flex flex-col items-center text-center relative overflow-hidden group hover:border-surface-tint/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-surface-tint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-8 relative z-10">
                <feature.icon className="text-surface-tint" size={32} />
              </div>
              
              <h3 className="font-display text-3xl text-white mb-4 relative z-10 uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="font-sans text-on-surface-variant relative z-10 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-8 h-1 w-12 bg-surface-tint/30 group-hover:w-24 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
