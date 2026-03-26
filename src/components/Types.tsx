import React from 'react';
import { motion } from 'motion/react';
import { INTELLIGENCE_DATA } from '../constants';
import { IntelligenceType } from '../types';

export default function Types() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 block">The Spectrum</span>
        <h1 className="text-5xl md:text-7xl font-serif italic text-zinc-900 mb-8">The 9 Intelligences</h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Explore the distinct ways we process the world around us. Each type represents a unique 
          cognitive strength and perspective.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(Object.keys(INTELLIGENCE_DATA) as IntelligenceType[]).map((type, index) => (
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="p-8 rounded-[32px] bg-white border border-zinc-100 hover:shadow-2xl transition-all duration-500 group"
          >
            <div 
              className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center text-white font-bold shadow-lg"
              style={{ backgroundColor: INTELLIGENCE_DATA[type].color }}
            >
              {index + 1}
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{type}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              {INTELLIGENCE_DATA[type].description}
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {INTELLIGENCE_DATA[type].traits.map(trait => (
                  <span key={trait} className="px-2 py-1 bg-zinc-50 text-[9px] uppercase tracking-wider font-bold text-zinc-400 rounded">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
