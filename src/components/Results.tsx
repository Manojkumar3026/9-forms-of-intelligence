import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer 
} from 'recharts';
import { IntelligenceType } from '../types';
import { INTELLIGENCE_DATA } from '../constants';
import { Share2, RefreshCw, Download, Briefcase, Activity, Loader2, Book } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

interface ResultsProps {
  scores: Record<IntelligenceType, number>;
  onReset: () => void;
  onNavigate: (state: 'resources') => void;
}

export default function Results({ scores, onReset, onNavigate }: ResultsProps) {
  const resultsRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const chartData = Object.entries(scores).map(([type, value]) => ({
    subject: type,
    A: (value / 15) * 100,
    fullMark: 100,
  }));

  const sortedIntelligences = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .map(([type]) => type as IntelligenceType);

  const topIntelligence = sortedIntelligences[0];

  const getPercentage = (score: number) => Math.round((score / 15) * 100);

  const handleDownloadPDF = async () => {
    if (!resultsRef.current) return;
    
    setIsDownloading(true);
    try {
      // Wait for animations and charts to render completely
      await new Promise(resolve => setTimeout(resolve, 1000));

      const element = resultsRef.current;
      const currentWidth = element.offsetWidth;
      
      // Dynamically adjust capture width based on screen size but maintain a professional layout
      // Mobile: 800px (tablet-like), Desktop: Actual width up to 1200px
      const captureWidth = currentWidth < 768 ? 800 : Math.min(currentWidth, 1200);
      
      const canvas = await html2canvas(element, {
        scale: 2, // High resolution for printing
        useCORS: true,
        logging: false,
        backgroundColor: '#FAFAFA',
        windowWidth: captureWidth,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('results-content');
          if (clonedElement) {
            clonedElement.style.width = `${captureWidth}px`;
            clonedElement.style.maxWidth = 'none';
            clonedElement.style.margin = '0';
            clonedElement.style.padding = '40px';
            
            // Force all animated elements to their final visible state
            const animatedElements = clonedElement.querySelectorAll('*');
            animatedElements.forEach((el) => {
              const style = (el as HTMLElement).style;
              if (style) {
                style.opacity = '1';
                style.transform = 'none';
                style.transition = 'none';
                style.animation = 'none';
              }
            });
          }
        },
        ignoreElements: (el) => el.hasAttribute('data-html2canvas-ignore') || el.classList.contains('no-print')
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.9);
      
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate dimensions to fit the page width
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;

      // Add subsequent pages if content overflows
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;
      }

      const date = new Date().toISOString().split('T')[0];
      pdf.save(`intelligence-profile-${date}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div id="results-content" ref={resultsRef} className="max-w-6xl mx-auto px-4 py-12 bg-[#FAFAFA]">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] mb-4 block"
        >
          Your Profile is Ready
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif italic text-zinc-900 mb-6"
        >
          The {topIntelligence} Mind
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-600 max-w-2xl mx-auto"
        >
          {INTELLIGENCE_DATA[topIntelligence].description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-xl shadow-zinc-100 h-[500px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid stroke="#e4e4e7" />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{ fill: '#71717a', fontSize: 10, fontWeight: 500 }}
              />
              <Radar
                name="Intelligence"
                dataKey="A"
                stroke="#18181b"
                fill="#18181b"
                fillOpacity={0.1}
              />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="space-y-6">
          <h3 className="text-2xl font-serif italic text-zinc-900 mb-6">Intelligence Breakdown</h3>
          {sortedIntelligences.map((type, index) => (
            <motion.div 
              key={type}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="group"
            >
              <div className="flex justify-between items-end mb-2">
                <span className="font-medium text-zinc-900">{type}</span>
                <span className="text-sm font-mono text-zinc-500">{getPercentage(scores[type])}%</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-zinc-900"
                  initial={{ width: 0 }}
                  animate={{ width: `${getPercentage(scores[type])}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="space-y-12 mb-20">
        <h3 className="text-3xl font-serif italic text-zinc-900 text-center">Your Primary Intelligences</h3>
        <div className="grid grid-cols-1 gap-8">
          {sortedIntelligences.slice(0, 3).map((type, index) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="p-8 md:p-12 rounded-[40px] border border-zinc-100 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden relative group"
            >
              <div 
                className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] -mr-20 -mt-20 rounded-full transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundColor: INTELLIGENCE_DATA[type].color }}
              />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg" 
                    style={{ backgroundColor: INTELLIGENCE_DATA[type].color }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-zinc-900 mb-2">{type} Intelligence</h4>
                    <div className="flex flex-wrap gap-2">
                      {INTELLIGENCE_DATA[type].traits.map(trait => (
                        <span key={trait} className="px-3 py-1 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] uppercase tracking-wider font-semibold text-zinc-500">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-zinc-600 text-lg leading-relaxed mb-10 max-w-3xl">
                  {INTELLIGENCE_DATA[type].description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold uppercase text-xs tracking-widest">
                      <Briefcase className="w-4 h-4" />
                      Potential Careers
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {INTELLIGENCE_DATA[type].careers.map(career => (
                        <li key={career} className="flex items-center gap-2 text-zinc-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-900 font-bold uppercase text-xs tracking-widest">
                      <Activity className="w-4 h-4" />
                      Engaging Activities
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {INTELLIGENCE_DATA[type].activities.map(activity => (
                        <li key={activity} className="flex items-center gap-2 text-zinc-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 no-print" data-html2canvas-ignore="true">
        <button 
          onClick={onReset}
          className="flex items-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200"
        >
          <RefreshCw className="w-4 h-4" />
          Retake Assessment
        </button>
        <button 
          onClick={() => onNavigate('resources')}
          className="flex items-center gap-2 px-8 py-4 border border-zinc-200 text-zinc-600 rounded-full font-medium hover:bg-zinc-50 transition-all"
        >
          <Book className="w-4 h-4" />
          View Resources
        </button>
        <button className="flex items-center gap-2 px-8 py-4 border border-zinc-200 text-zinc-600 rounded-full font-medium hover:bg-zinc-50 transition-all">
          <Share2 className="w-4 h-4" />
          Share Profile
        </button>
        <button 
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="flex items-center gap-2 px-8 py-4 border border-zinc-200 text-zinc-600 rounded-full font-medium hover:bg-zinc-50 transition-all disabled:opacity-50"
        >
          {isDownloading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Download className="w-4 h-4" />
          )}
          {isDownloading ? 'Generating PDF...' : 'Download PDF'}
        </button>
      </div>
    </div>
  );
}
