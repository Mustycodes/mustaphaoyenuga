import ProjectCard from "@/app/components/cards/projectCard";
import { PROJECTS } from "@/app/constants";

const WorkPage = () => {
  
  return (
    <section>
      <header className='max-w-2xl'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold'>
          Things I&apos;ve made trying to put my dent in the universe.
        </h1>
        <p className='mt-6'>
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </header>
      <div className='mt-16 sm:mt-20'>
        <div className='max-w-4xl mx-auto'>
          <div className='grid grid-cols-1 gap-y-16'>
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                isReverse={project.isReverse}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPage;
