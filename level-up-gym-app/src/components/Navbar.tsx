"use client";
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isJoinPage = pathname === '/join';

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 md:px-12">
        <Link 
          href="/"
          className="font-display text-2xl md:text-3xl text-white tracking-widest hover:text-surface-tint transition-colors uppercase italic"
        >
          Level Up Gym
        </Link>
        
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
          <Link 
            href="/"
            className="font-label text-sm uppercase tracking-widest text-surface-tint border border-surface-tint px-6 py-2 rounded hover:bg-surface-tint hover:text-surface transition-all"
          >
            Back to Home
          </Link>
        ) : (
          <Link 
            href="/join"
            className="bg-surface-tint text-surface font-display text-lg px-6 py-2 rounded uppercase hover:scale-105 transition-all neon-glow inline-block"
          >
            Join Now
          </Link>
        )}
      </div>
    </motion.header>
  );
}
