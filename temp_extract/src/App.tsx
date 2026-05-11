import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

type View = 'landing' | 'join';

export default function App() {
  const [view, setView] = useState<View>('landing');

  // Smooth scroll back to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-surface flex flex-col selection:bg-surface-tint selection:text-surface">
      <Navbar 
        isJoinPage={view === 'join'} 
        onJoinClick={() => setView('join')}
        onHomeClick={() => setView('landing')}
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'landing' ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onJoinClick={() => setView('join')} />
              <Features />
              {/* Additional sections like Trainers or Membership would go here */}
            </motion.div>
          ) : (
            <motion.div
              key="join"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ApplicationForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
