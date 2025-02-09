// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  project: {
    title: string;
    description: string;
    moreDetails: string;
    imageUrl: string;
    githubLink?: string;  // Optional property for GitHub link
    hostedLink?: string;  // Optional property for hosted link
  };
}


const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, project }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50" 
      onClick={closeModal}
    >
      <div className="bg-white p-6 rounded-lg max-w-lg w-3/4 shadow-lg text-black relative" onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full" 
          onClick={closeModal}
        >
          X
        </button>
        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="w-full h-auto mb-4" />
        <p className="mb-2">{project.description}</p>
        <p>{project.moreDetails}</p>
  
        {/* Conditionally render GitHub and hosted links */}
        {project.githubLink && (
          <div className="mt-4">
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View GitHub Repository
            </a>
          </div>
        )}
  
        {project.hostedLink && (
          <div className="mt-2">
            <a href={project.hostedLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Live App
            </a>
          </div>
        )}
      </div>
    </div>
  );
  
  
};

export default Modal;
