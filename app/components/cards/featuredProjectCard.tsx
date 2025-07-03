import { ExternalLink, Github } from "lucide-react";

interface FeaturedProjectCardProps {
  title: string;
  liveUrl: string;
  githubUrl: string;
  description: string;
  image: string;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  title,
  liveUrl,
  githubUrl,
  description,
  image,
}) => {
  return (
    <div
      className={`bg-primary hover:bg-primary-light rounded-lg overflow-hidden transition-all duration-300 group`}
    >
      <div className='flex flex-col'>
        {/* Project Image */}
        <div className={`w-full h-48 sm:h-56`}>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-t-md bg-transparent group-hover:scale-105 transition-transform duration-300'
          />
        </div>

        {/* Project Content */}
        <div className='p-4 flex flex-col justify-between'>
          <div>
            <h3 className='text-xl font-semibold text-white tracking-tight mb-3'>
              {title}
            </h3>

            <p className='hidden md:block text-slate-300 text-sm leading-snug mb-6'>
              {description}
            </p>
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

export default FeaturedProjectCard;
