import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const projectData = [
	{
		title: 'Code Your Own Adventure',
		description:
			'A terminal-style adventure game to help UMD CS students navigate realistic college scenarios and explore skill-building, career prep, and CS involvement.',
		moreDetails:
			'Showcased to 80+ attendees at DCC Capstone Fair. Features stat tracking for Academic/Social/Career balance, energy limits for tradeoffs, and a modular system for expandable story scenarios.',
		imageUrl:
			'https://github.com/judelwin/code-your-own-adventure/blob/main/public/title-screen.png?raw=true',
		githubLink: 'https://github.com/judelwin/code-your-own-adventure',
		hostedLink: '',
	},
	{
		title: 'Habit Tracker',
		description: 'A Firebase app for tracking habits with task management and Google sign-in.',
		moreDetails: 'Add, delete, and check in on tasks to track your progress over time.',
		imageUrl: 'https://i.imgur.com/DA7NqlH.png',
		githubLink: 'https://github.com/judelwin/habit-tracker-new',
		hostedLink: 'https://habits.judelwin.com/',
	},
	{
		title: 'To-Do List',
		description: 'A MERN stack app with real-time task management.',
		moreDetails:
			'This app allows users to add, edit, delete tasks, and mark them as completed. Note: The backend may take up to 30 seconds to load due to the hosting service.',
		imageUrl: 'https://i.imgur.com/W8M9Ndz.png',
		githubLink: 'https://github.com/judelwin/fullstack-todo-list',
		hostedLink: 'https://tasks.judelwin.com/',
	},
	{
		title: 'Game Recommendation Engine',
		description:
			'A tool to help friends find similar games by comparing descriptions and metadata from a 97K+ Steam dataset.',
		moreDetails:
			'Serves top game recommendations and metadata through a Flask backend with simple query routing for local use.',
		imageUrl: 'https://placehold.co/600x400?text=Game+Recommendation+Engine',
		githubLink: '',
		hostedLink: '',
	},
	{
		title: 'Shell Junior',
		description:
			'A custom shell program in C supporting command execution, file redirection, piping, and subshell execution.',
		moreDetails:
			'Implements process management and error handling using fork, execvp, wait, dup2, and pipe to manage child processes and handle input/output redirection.',
		imageUrl: 'https://placehold.co/600x400?text=Shell+Junior',
		githubLink: '',
		hostedLink: '',
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
		const translateZ = 135;
		const rotationDirection = distance === 0 ? 0 : distance > 0 ? 1 : -1;
		const rotationAngle = angle * rotationDirection;
		return {
			transform: `rotateY(${rotationAngle}deg) translateZ(${translateZ}px)`,
			transformStyle: 'preserve-3d' as 'preserve-3d',
			transition: 'transform 0.5s ease',
		};
	};

	return (
		<div className="relative font-semibold text-white h-screen flex flex-col items-center justify-center bg-gradient-to-b from-lavender to-violet">
			<div className="relative w-full h-full flex flex-col items-center justify-center">
				<div className="relative w-1/2 h-1/2 flex flex-col items-center justify-center min-h-[300px]">
					<h2 className="text-4xl font-bold ">Projects</h2>
					<div
						className="relative carousel-container w-full "
						style={{ perspective: '1000px' }}
					>
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
					</div>
					<div className="flex justify-center w-full mt-4">
						<div className="cursor-pointer" onClick={handlePrev}>
							<ChevronLeftIcon className="h-10 w-10 text-white" />
						</div>
						<div className="cursor-pointer" onClick={handleNext}>
							<ChevronRightIcon className="h-10 w-10 text-white" />
						</div>
					</div>
				</div>
			</div>
			<Modal
				isOpen={modalOpen}
				closeModal={() => setModalOpen(false)}
				project={selectedProject}
			/>
			<div className="absolute bottom-0 text-xs text-white opacity-70 ramen">
				<a
					href="https://www.flaticon.com/free-icons/ramen"
					title="ramen icon"
				>
					Ramen icon created by Freepik - Flaticon
				</a>
			</div>
		</div>
	);
};

export default ProjectsSection;
