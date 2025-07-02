import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  url: string;
  description: string;
  image: string;
  technologies: string[];
  isLarge?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  url, 
  description, 
  image, 
  technologies, 
  isLarge = false 
}) => {
  return (
    <div className={`bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 group ${isLarge ? 'col-span-2' : ''}`}>
      {/* Project Image */}
      <div className="relative bg-slate-900 p-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-md bg-slate-700"
        />
        <div className="absolute inset-4 bg-slate-700 rounded-md opacity-20"></div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <ExternalLink className="w-4 h-4 text-slate-400" />
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-blue-400 text-sm font-medium">{url}</span>
        </div>
        
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Technology Icons */}
        <div className="flex items-center gap-3 mb-6">
          {technologies.map((tech, index) => (
            <div key={index} className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-white">{tech.charAt(0).toUpperCase()}</span>
            </div>
          ))}
        </div>
        
        {/* View Case Study Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors duration-200 group-hover:bg-blue-500">
          View case study
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};


export default ProjectCard;