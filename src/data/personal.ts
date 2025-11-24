export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio?: string;
  location?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  resume?: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Jude Lwin',
  title: 'Computer Science & Mathematics Student',
  bio: "Hi, I'm Jude Lwin, a Computer Science and Mathematics student at the University of Maryland. My main focus is infrastructure, distributed systems, and machine learning applications. I'm currently working on improving my skills in building scalable systems and seeing my code come to life on the screen. When I'm not doing computer science things, you'll probably find me eating, sleeping, or playing video games with friends!",
  shortBio: "Computer Science & Mathematics student focused on infrastructure, distributed systems, and machine learning applications.",
  github: 'https://github.com/judelwin',
  linkedin: 'https://www.linkedin.com/in/jude-lwin/',
  resume: '/jude_lwin_resume.pdf',
};

