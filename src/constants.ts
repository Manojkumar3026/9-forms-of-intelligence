import { IntelligenceType, Question, IntelligenceInfo } from './types';

export const INTELLIGENCE_DATA: Record<IntelligenceType, IntelligenceInfo> = {
  'Linguistic': {
    type: 'Linguistic',
    description: 'Ability to use language to express what is on your mind and to understand other people.',
    traits: ['Enjoy writing', 'Reading', 'Telling stories', 'Crossword puzzles'],
    color: '#3b82f6',
    careers: ['Writer', 'Journalist', 'Lawyer', 'Teacher', 'Editor'],
    activities: ['Creative writing', 'Debating', 'Public speaking', 'Storytelling']
  },
  'Logical-Mathematical': {
    type: 'Logical-Mathematical',
    description: 'Ability to understand the underlying principles of some kind of causal system.',
    traits: ['Patterns', 'Categories', 'Arithmetic problems', 'Strategy games'],
    color: '#10b981',
    careers: ['Scientist', 'Engineer', 'Computer Programmer', 'Accountant', 'Mathematician'],
    activities: ['Solving puzzles', 'Coding', 'Data analysis', 'Scientific experiments']
  },
  'Bodily-Kinesthetic': {
    type: 'Bodily-Kinesthetic',
    description: 'Ability to use your whole body or parts of your body to solve a problem or make something.',
    traits: ['Athletic', 'Dancing', 'Crafts', 'Woodworking'],
    color: '#f59e0b',
    careers: ['Athlete', 'Dancer', 'Surgeon', 'Actor', 'Physical Therapist'],
    activities: ['Sports', 'Yoga', 'Sculpting', 'Building models']
  },
  'Spatial': {
    type: 'Spatial',
    description: 'Ability to present the spatial world in your mind.',
    traits: ['Think in images', 'Mazes', 'Jigsaw puzzles', 'Drawing'],
    color: '#8b5cf6',
    careers: ['Architect', 'Graphic Designer', 'Artist', 'Pilot', 'Interior Decorator'],
    activities: ['Painting', 'Photography', 'Map reading', '3D modeling']
  },
  'Musical': {
    type: 'Musical',
    description: 'Ability to think in music; to be able to hear patterns, recognize them, and perhaps manipulate them.',
    traits: ['Singing', 'Drumming', 'Aware of sounds', 'Discriminating listeners'],
    color: '#ec4899',
    careers: ['Musician', 'Composer', 'Singer', 'Music Teacher', 'Sound Engineer'],
    activities: ['Playing instruments', 'Composing', 'Singing', 'Attending concerts']
  },
  'Interpersonal': {
    type: 'Interpersonal',
    description: 'Ability to understand other people.',
    traits: ['Leaders', 'Good communicators', 'Understand feelings', 'Motives'],
    color: '#ef4444',
    careers: ['Manager', 'Psychologist', 'Salesperson', 'Politician', 'Social Worker'],
    activities: ['Team sports', 'Volunteering', 'Mentoring', 'Networking']
  },
  'Intrapersonal': {
    type: 'Intrapersonal',
    description: 'Ability to understand yourself, knowing who you are, what you can do.',
    traits: ['Self-aware', 'Self-motivated', 'Reflective', 'Independent'],
    color: '#6366f1',
    careers: ['Philosopher', 'Writer', 'Theologian', 'Entrepreneur', 'Counselor'],
    activities: ['Journaling', 'Meditation', 'Solo travel', 'Self-reflection']
  },
  'Naturalistic': {
    type: 'Naturalistic',
    description: 'Ability to identify, classify, and manipulate elements of the environment, objects, animals, or plants.',
    traits: ['Nature smart', 'Classifying species', 'Gardening', 'Animal care'],
    color: '#059669',
    careers: ['Biologist', 'Conservationist', 'Farmer', 'Veterinarian', 'Geologist'],
    activities: ['Hiking', 'Bird watching', 'Gardening', 'Nature photography']
  },
  'Existential': {
    type: 'Existential',
    description: 'Ability to contemplate deep questions about human existence, such as the meaning of life.',
    traits: ['Philosophical', 'Big picture thinker', 'Abstract concepts', 'Deep questions'],
    color: '#4b5563',
    careers: ['Theologian', 'Philosopher', 'Theoretical Physicist', 'Spiritual Leader', 'Ethicist'],
    activities: ['Philosophical debate', 'Deep meditation', 'Abstract thinking', 'Existential inquiry']
  }
};

export const QUESTIONS: Question[] = [
  // Linguistic
  { id: 1, text: "I enjoy writing letters, stories, or reports.", type: 'Linguistic' },
  { id: 2, text: "I am good at word games like Scrabble or crosswords.", type: 'Linguistic' },
  { id: 3, text: "I find it easy to explain things to others using words.", type: 'Linguistic' },
  
  // Logical-Mathematical
  { id: 4, text: "I enjoy solving math problems and logic puzzles.", type: 'Logical-Mathematical' },
  { id: 5, text: "I like to organize things by categories or patterns.", type: 'Logical-Mathematical' },
  { id: 6, text: "I am curious about how things work and enjoy experiments.", type: 'Logical-Mathematical' },

  // Bodily-Kinesthetic
  { id: 7, text: "I learn best by doing or touching things.", type: 'Bodily-Kinesthetic' },
  { id: 8, text: "I enjoy physical activities like sports or dancing.", type: 'Bodily-Kinesthetic' },
  { id: 9, text: "I am good at working with my hands (crafts, building).", type: 'Bodily-Kinesthetic' },

  // Spatial
  { id: 10, text: "I can easily visualize objects in my mind.", type: 'Spatial' },
  { id: 11, text: "I enjoy drawing, painting, or photography.", type: 'Spatial' },
  { id: 12, text: "I am good at reading maps and navigating new places.", type: 'Spatial' },

  // Musical
  { id: 13, text: "I often have a song or rhythm playing in my head.", type: 'Musical' },
  { id: 14, text: "I can easily tell when a note is off-key.", type: 'Musical' },
  { id: 15, text: "I enjoy playing a musical instrument or singing.", type: 'Musical' },

  // Interpersonal
  { id: 16, text: "I am sensitive to the moods and feelings of others.", type: 'Interpersonal' },
  { id: 17, text: "I enjoy working in groups and collaborating with others.", type: 'Interpersonal' },
  { id: 18, text: "People often come to me for advice or leadership.", type: 'Interpersonal' },

  // Intrapersonal
  { id: 19, text: "I spend time reflecting on my own thoughts and feelings.", type: 'Intrapersonal' },
  { id: 20, text: "I have a clear sense of my strengths and weaknesses.", type: 'Intrapersonal' },
  { id: 21, text: "I prefer to work independently on projects.", type: 'Intrapersonal' },

  // Naturalistic
  { id: 22, text: "I feel a strong connection to nature and the outdoors.", type: 'Naturalistic' },
  { id: 23, text: "I enjoy gardening or caring for animals.", type: 'Naturalistic' },
  { id: 24, text: "I am good at identifying different types of plants or birds.", type: 'Naturalistic' },

  // Existential
  { id: 25, text: "I often think about the meaning of life and death.", type: 'Existential' },
  { id: 26, text: "I am interested in philosophy and abstract concepts.", type: 'Existential' },
  { id: 27, text: "I wonder about our place in the universe.", type: 'Existential' },
];
