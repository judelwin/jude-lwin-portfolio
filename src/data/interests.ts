export interface Interest {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const interests: Interest[] = [
  {
    id: 'ml-math',
    title: 'Machine Learning & Mathematics',
    description: 'Fascinated by the applications of mathematics and statistics in machine learning, exploring how theoretical concepts translate to practical solutions.',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'Love seeing code come to life on screen. Enjoy building both frontend interfaces and backend systems that work seamlessly together.',
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Enjoy playing video games with friends and exploring game development concepts.',
  },
  {
    id: 'food',
    title: 'Food',
    description: 'Always exploring new cuisines and flavors.',
  },
];

