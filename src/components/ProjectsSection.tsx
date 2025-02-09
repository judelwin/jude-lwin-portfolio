import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import { ChevronLeftIcon, ChevronRightIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'; // Import icons

const projectData = [
  {
    title: 'Habit Tracker',
    description: 'A Firebase app for tracking habits with task management and Google sign-in.',
    moreDetails: 'Add, delete, and check in on tasks to track your progress over time.',
    imageUrl: 'https://i.imgur.com/DA7NqlH.png',
    githubLink: 'https://github.com/judelwin/habit-tracker-new',  // Replace with your GitHub link
    hostedLink: 'https://habits.judelwin.com/',  // Replace with your hosted link
  },
  {
    title: 'To-Do List',
    description: 'A MERN stack app with real-time task management.',
    moreDetails: 'This app allows users to add, edit, delete tasks, and mark them as completed. Note: The backend may take up to 30 seconds to load due to the hosting service.',
    imageUrl: 'https://i.imgur.com/W8M9Ndz.png',
    githubLink: 'https://github.com/judelwin/fullstack-todo-list',  // Replace with your GitHub link
    hostedLink: 'https://tasks.judelwin.com/',  // Replace with your hosted link
  }
  ,
  {
    title: ':)',
    description: '',
    moreDetails: '',
    imageUrl: 'https://placehold.co/600x400?text=:)',
    githubLink: '',  // If no GitHub link
    hostedLink: '',  // If no hosted link
  },
  
];


const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  const handleCardClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const getTransformStyle = (index: number): React.CSSProperties => {
    const totalItems = projectData.length;
    let distance = (index - currentIndex + totalItems) % totalItems;
    if (distance < 0) distance += totalItems;
    let angle = (360 / totalItems) * distance;
    if (angle > 180) angle -= 360;
    const translateZ = 250;
    const rotationDirection = distance === 0 ? 0 : distance > 0 ? 1 : -1;
    const rotationAngle = angle * rotationDirection;
    return {
      transform: `rotateY(${rotationAngle}deg) translateZ(${translateZ}px)`,
      transformStyle: 'preserve-3d' as 'preserve-3d',
      transition: 'transform 0.5s ease',
    };
  };

  return (
    <div className="font-semibold text-white h-screen flex flex-col items-center justify-center bg-gradient-to-b from-lavender to-violet">
  <div className="relative w-full h-full flex flex-col items-center justify-center">
    <div className="relative w-1/2 h-1/2 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold mb-6">Projects</h2>
      <div className="relative carousel-container w-full " style={{ perspective: '1000px' }}>
        {projectData.map((project, index) => (
          <div
            key={index}
            className="carousel-item z-10"
            style={getTransformStyle(index)}
            onClick={() => handleCardClick(project)}
          >
            <ProjectCard project={project} />
          </div>
          
        ))}
        <div
          className="absolute left-[-70px] top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="h-10 w-10 text-black" />
        </div>

        <div
          className="absolute right-[-70px] top-1/2 transform -translate-y-1/2 cursor-pointer z-50"
          onClick={handleNext}
        >
          <ChevronRightIcon className="h-10 w-10 text-black" />
        </div>
        {/* Arrows positioned outside */}
        
      </div>
    </div>
  </div>
  <Modal
    isOpen={modalOpen}
    closeModal={() => setModalOpen(false)}
    project={selectedProject}
  />
  <div className="text-center mt-8 mb-1 text-xs text-white opacity-70">
    <a href="https://www.flaticon.com/free-icons/ramen" title="ramen icon">
      Ramen icon created by Freepik - Flaticon
    </a>
  </div>
</div>

  );
};

export default ProjectsSection;
