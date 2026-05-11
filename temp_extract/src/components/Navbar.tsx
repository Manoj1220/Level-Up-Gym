import { motion } from 'motion/react';

interface NavbarProps {
  onJoinClick: () => void;
  isJoinPage: boolean;
  onHomeClick: () => void;
}

export default function Navbar({ onJoinClick, isJoinPage, onHomeClick }: NavbarProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 md:px-12">
        <button 
          onClick={onHomeClick}
          className="font-display text-2xl md:text-3xl text-white tracking-widest hover:text-surface-tint transition-colors uppercase italic"
        >
          Level Up Gym
        </button>
        
        {!isJoinPage && (
          <nav className="hidden md:flex gap-8">
            {['Programs', 'Trainers', 'Results', 'Membership', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-label text-sm text-on-surface hover:text-surface-tint transition-colors uppercase tracking-widest font-semibold"
              >
                {item}
              </a>
            ))}
          </nav>
        )}

        {isJoinPage ? (
          <button 
            onClick={onHomeClick}
            className="font-label text-sm uppercase tracking-widest text-surface-tint border border-surface-tint px-6 py-2 rounded hover:bg-surface-tint hover:text-surface transition-all"
          >
            Back to Home
          </button>
        ) : (
          <button 
            onClick={onJoinClick}
            className="bg-surface-tint text-surface font-display text-lg px-6 py-2 rounded uppercase hover:scale-105 transition-all neon-glow"
          >
            Join Now
          </button>
        )}
      </div>
    </motion.header>
  );
}
