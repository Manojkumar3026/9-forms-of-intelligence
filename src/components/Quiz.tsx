import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';
import { QUESTIONS } from '../constants';
import { IntelligenceType } from '../types';
import { cn } from '../lib/utils';

interface QuizProps {
  onComplete: (scores: Record<IntelligenceType, number>) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const isComplete = Object.keys(answers).length === QUESTIONS.length;

  const calculateResults = () => {
    const scores: Record<string, number> = {};
    
    QUESTIONS.forEach(q => {
      const type = q.type;
      const score = answers[q.id] || 0;
      scores[type] = (scores[type] || 0) + score;
    });

    // Normalize to percentages (each type has 3 questions, max score 5 each = 15 max)
    const normalizedScores: any = {};
    const totalRawScore = Object.values(scores).reduce((a, b) => a + b, 0);
    
    Object.keys(scores).forEach(type => {
      normalizedScores[type] = totalRawScore > 0 ? (scores[type] / totalRawScore) * 100 : 0;
    });

    onComplete(normalizedScores);
  };

  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-sm font-mono text-zinc-500 uppercase tracking-wider">
            Question {currentStep + 1} of {QUESTIONS.length}
          </span>
          <span className="text-sm font-mono text-zinc-500">{Math.round(progress)}%</span>
        </div>
        <div className="h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-zinc-900"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="min-h-[300px]"
        >
          <h2 className="text-3xl font-serif italic mb-8 text-zinc-900 leading-tight">
            "{QUESTIONS[currentStep].text}"
          </h2>

          <div className="grid grid-cols-1 gap-3">
            {[
              { label: 'Strongly Disagree', value: 1 },
              { label: 'Disagree', value: 2 },
              { label: 'Neutral', value: 3 },
              { label: 'Agree', value: 4 },
              { label: 'Strongly Agree', value: 5 },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(QUESTIONS[currentStep].id, option.value)}
                className={cn(
                  "w-full p-4 text-left border border-zinc-200 rounded-xl transition-all duration-200 hover:border-zinc-900 hover:bg-zinc-50 group flex justify-between items-center",
                  answers[QUESTIONS[currentStep].id] === option.value && "border-zinc-900 bg-zinc-900 text-white hover:bg-zinc-900"
                )}
              >
                <span className="font-medium">{option.label}</span>
                <ChevronRight className={cn(
                  "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity",
                  answers[QUESTIONS[currentStep].id] === option.value && "opacity-100"
                )} />
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex justify-between items-center">
        <button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Previous</span>
        </button>

        {isComplete && currentStep === QUESTIONS.length - 1 && (
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={calculateResults}
            className="bg-zinc-900 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200"
          >
            See Results
            <CheckCircle2 className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </div>
  );
}
