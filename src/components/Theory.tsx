import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, Users, Lightbulb } from 'lucide-react';

export default function Theory() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 block">The Foundation</span>
        <h1 className="text-5xl md:text-7xl font-serif italic text-zinc-900 mb-8">Multiple Intelligences</h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Proposed by psychologist Howard Gardner in 1983, this theory suggests that traditional IQ tests 
          fail to capture the full range of human cognitive abilities.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-serif italic text-zinc-900">The Core Concept</h2>
          <p className="text-zinc-600 leading-relaxed">
            Gardner argued that intelligence is not a single, general ability (often referred to as "g"). 
            Instead, he identified distinct "modalities" of intelligence that allow individuals to solve 
            problems or create products that are valued in one or more cultural settings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-serif italic text-zinc-900">Cultural Context</h2>
          <p className="text-zinc-600 leading-relaxed">
            The theory emphasizes that different cultures value different types of intelligence. 
            While Western education systems heavily prioritize linguistic and logical-mathematical 
            skills, other societies might place higher value on spatial, musical, or naturalistic abilities.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-zinc-900 rounded-[40px] p-12 text-white"
      >
        <div className="flex items-center gap-4 mb-8">
          <Lightbulb className="w-8 h-8 text-amber-400" />
          <h2 className="text-3xl font-serif italic">Why it Matters</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Personalized Learning</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Understanding your profile helps you choose learning methods that work best for your unique mind.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Career Alignment</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Identifying your dominant intelligences can guide you toward careers where you'll naturally excel.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Self-Acceptance</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              It shifts the focus from "How smart are you?" to "How are you smart?", fostering a healthier self-image.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Holistic Development</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Encourages the development of all cognitive areas, not just those traditionally measured in schools.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
