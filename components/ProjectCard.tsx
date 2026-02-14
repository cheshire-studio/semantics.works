
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Pattern: 8-4, 8-4, 6-6
  let spanClass = 'md:col-span-4';
  if (index === 0 || index === 2) spanClass = 'md:col-span-8';
  if (index === 4 || index === 5) spanClass = 'md:col-span-6';

  return (
    <div className={`group relative mb-24 md:mb-32 overflow-hidden ${spanClass}`}>
      <div className="aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-neutral-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-6 flex flex-col md:flex-row md:justify-between items-start gap-4">
        <div>
          <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 block mb-2">{project.category}</span>
          <h3 className="text-xl md:text-2xl font-light tracking-tight italic">{project.title}</h3>
        </div>
        <p className="max-w-xs text-sm font-light opacity-70 leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="mt-4 flex gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[9px] border border-black/10 px-2 py-0.5 rounded-full opacity-40">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
