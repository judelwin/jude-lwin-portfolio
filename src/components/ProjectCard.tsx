import React from 'react';

interface ProjectProps {
  project: { title: string; description: string; moreDetails: string; imageUrl: string };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="carousel-item cursor-pointer">
      <div className="front">
        <div className="flex flex-col items-stretch p-4 h-full ">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover mb-3 rounded text-black"
          />
        </div>
      </div>
      <div className="back">
      </div>
    </div>
  );
};

export default ProjectCard;
