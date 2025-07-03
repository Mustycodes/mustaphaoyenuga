import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  liveUrl: string;
  githubUrl: string;
  description: string;
  image: string;
  technologies: string[];
  isReverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  liveUrl,
  githubUrl,
  description,
  image,
  technologies,
  isReverse = false,
}) => {
  return (
    <div
      className={`bg-primary hover:bg-primary-light rounded-lg overflow-hidden transition-all duration-300 group`}
    >
      <div
        className={`flex flex-col md:gap-x-12 ${
          isReverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Project Image */}
        <div className={`w-full h-48 sm:h-56 md:h-64 md:w-2/5 lg:h-72 xl:h-80`}>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-md bg-transparent group-hover:scale-105 transition-transform duration-300'
          />
        </div>

        {/* Project Content */}
        <div className='p-4 md:w-3/5 flex flex-col justify-between'>
          <div>
            <h3 className='group-hover:text-accent text-xl font-semibold text-white tracking-tight mb-3'>
              {title}
            </h3>

            <p className='hidden md:block text-muted text-sm leading-snug mb-6'>
              {description}
            </p>

            {/* Technology Icons */}
            <div className='flex items-center gap-3 mb-6'>
              {technologies?.map((tech, index) => (
                <div
                  key={index}
                  className='w-8 h-8 bg-slate-700 rounded flex items-center justify-center'
                  title={tech}
                >
                  <span className='text-xs font-bold text-white'>
                    {tech.charAt(0).toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* View Project buttons */}
          <div className='flex items-center gap-4'>
            <a
              href={liveUrl}
              className='bg-accent hover:bg-accent-alt cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium text-center inline-flex items-center gap-x-2 transition-colors duration-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              View Live Project
              <ExternalLink className='w-3 h-3' />
            </a>
            <a
              href={githubUrl}
              className='bg-transparent border border-accent hover:bg-accent-alt text-accent hover:text-white px-4 py-2 rounded-md inline-flex items-center text-sm font-medium transition-colors duration-200 self-stretch'
              target='_blank'
              rel='noopener noreferrer'
              title='View on Github'
            >
              <Github className='w-4 h-4' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
