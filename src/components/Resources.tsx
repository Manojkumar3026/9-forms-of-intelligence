import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Book, Video, GraduationCap, Globe } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      category: "Primary Sources",
      icon: Globe,
      items: [
        { title: "Multiple Intelligences Oasis", author: "Official Site", link: "https://www.multipleintelligencesoasis.org/", desc: "The official home of Howard Gardner's theory of multiple intelligences." },
        { title: "Howard Gardner's Official Site", author: "Howard Gardner", link: "https://howardgardner.com/", desc: "Personal website of the psychologist who developed the theory." },
      ]
    },
    {
      category: "Books",
      icon: Book,
      items: [
        { title: "Frames of Mind", author: "Howard Gardner", link: "https://www.amazon.com/Frames-Mind-Theory-Multiple-Intelligences/dp/0465024351", desc: "The seminal work that introduced the theory of multiple intelligences." },
        { title: "Multiple Intelligences in the Classroom", author: "Thomas Armstrong", link: "https://www.ascd.org/books/multiple-intelligences-in-the-classroom-4th-edition", desc: "Practical applications for educators and parents." },
      ]
    },
    {
      category: "Online Courses",
      icon: GraduationCap,
      items: [
        { title: "Introduction to Psychology", platform: "Coursera", link: "https://www.coursera.org/learn/introduction-psychology", desc: "Foundational concepts in cognitive psychology and intelligence." },
        { title: "Learning How to Learn", platform: "Coursera", link: "https://www.coursera.org/learn/learning-how-to-learn", desc: "Techniques to leverage your unique intelligence profile." },
      ]
    },
    {
      category: "Videos & Media",
      icon: Video,
      items: [
        { title: "Howard Gardner on MI Theory", platform: "YouTube", link: "https://www.youtube.com/watch?v=l2QtSbP4FRg", desc: "A series of lectures by the founder of the theory." },
        { title: "The Power of the Mind", platform: "TED", link: "https://www.ted.com/talks?topics%5B%5D=intelligence", desc: "Inspiring talks on human potential and cognitive diversity." },
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4 block">Deepen Your Knowledge</span>
        <h1 className="text-5xl md:text-7xl font-serif italic text-zinc-900 mb-8">Learning Resources</h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Curated materials to help you explore the science of intelligence and apply these 
          insights to your life and career.
        </p>
      </motion.div>

      <div className="space-y-16">
        {resources.map((section, i) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center">
                <section.icon className="w-5 h-5 text-zinc-900" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">{section.category}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-8 rounded-3xl border border-zinc-100 bg-white hover:border-zinc-900 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-zinc-900 transition-colors">{item.title}</h3>
                    <ExternalLink className="w-4 h-4 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <p className="text-sm text-zinc-400 mb-4 font-medium">
                    {item.author || item.platform}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-20 p-12 rounded-[40px] border border-dashed border-zinc-200 text-center"
      >
        <Globe className="w-12 h-12 text-zinc-200 mx-auto mb-6" />
        <h3 className="text-2xl font-serif italic text-zinc-900 mb-4">Stay Curious</h3>
        <p className="text-zinc-500 max-w-md mx-auto">
          We are constantly updating our resource library with the latest research and tools. 
          Check back soon for more.
        </p>
      </motion.div>
    </div>
  );
}
