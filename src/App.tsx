/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, ArrowRight, Github } from 'lucide-react';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Theory from './components/Theory';
import Types from './components/Types';
import Resources from './components/Resources';
import { IntelligenceType } from './types';

type AppState = 'landing' | 'quiz' | 'results' | 'theory' | 'types' | 'resources';

export default function App() {
  const [state, setState] = useState<AppState>('landing');
  const [scores, setScores] = useState<Record<IntelligenceType, number> | null>(null);

  const handleQuizComplete = (finalScores: Record<IntelligenceType, number>) => {
    setScores(finalScores);
    setState('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetApp = () => {
    setScores(null);
    setState('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (newState: AppState) => {
    setState(newState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={resetApp}>
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold tracking-tight text-lg">MindMap</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
            <button 
              onClick={() => navigateTo('theory')} 
              className={`hover:text-zinc-900 transition-colors ${state === 'theory' ? 'text-zinc-900' : ''}`}
            >
              Theory
            </button>
            <button 
              onClick={() => navigateTo('types')} 
              className={`hover:text-zinc-900 transition-colors ${state === 'types' ? 'text-zinc-900' : ''}`}
            >
              Types
            </button>
            <button 
              onClick={() => navigateTo('resources')} 
              className={`hover:text-zinc-900 transition-colors ${state === 'resources' ? 'text-zinc-900' : ''}`}
            >
              Resources
            </button>
          </div>
          <button 
            onClick={() => navigateTo('quiz')}
            className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all"
          >
            Start Test
          </button>
        </div>
      </nav>

      <main className="pt-16">
        <AnimatePresence mode="wait">
          {state === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* Hero Section */}
              <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 text-zinc-600 text-sm font-medium mb-8"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Based on Howard Gardner's Theory
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl md:text-8xl font-serif italic tracking-tight text-zinc-900 mb-8 leading-[1.1]"
                >
                  Discover your unique <br />
                  <span className="text-zinc-400">Intelligence Profile.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                  Intelligence isn't just about IQ. Explore the 9 distinct ways humans process information, 
                  solve problems, and create value in the world.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <button
                    onClick={() => navigateTo('quiz')}
                    className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white rounded-full font-semibold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-zinc-200"
                  >
                    Begin Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => navigateTo('theory')}
                    className="w-full sm:w-auto px-10 py-5 border border-zinc-200 text-zinc-600 rounded-full font-semibold text-lg hover:bg-zinc-50 transition-all"
                  >
                    Learn the Theory
                  </button>
                </motion.div>
              </div>

              {/* Feature Grid */}
              <div className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: '9 Dimensions', desc: 'Comprehensive analysis across all nine intelligence types identified by modern psychology.' },
                    { title: 'Visual Profile', desc: 'Get a detailed radar chart and percentage breakdown of your cognitive strengths.' },
                    { title: 'Scientific Basis', desc: 'Assessment designed based on Gardner’s Multiple Intelligences criteria.' },
                  ].map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="p-10 rounded-[40px] bg-white border border-zinc-100 shadow-sm"
                    >
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-zinc-500 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {state === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Quiz onComplete={handleQuizComplete} />
            </motion.div>
          )}

          {state === 'results' && scores && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Results scores={scores} onReset={resetApp} onNavigate={navigateTo} />
            </motion.div>
          )}

          {state === 'theory' && (
            <motion.div
              key="theory"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Theory />
            </motion.div>
          )}

          {state === 'types' && (
            <motion.div
              key="types"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Types />
            </motion.div>
          )}

          {state === 'resources' && (
            <motion.div
              key="resources"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Resources />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={resetApp}>
            <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center">
              <Brain className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold tracking-tight">MindMap</span>
          </div>
          <p className="text-zinc-400 text-sm">
            © 2026 MindMap Research. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Github className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
