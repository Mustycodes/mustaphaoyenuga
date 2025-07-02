import ProjectCard from "@/app/components/cards/projectCard";

const WorksPage = () => {
  const projects = [
    {
      title: "Agency Landing Page",
      url: "https://themesberg.com",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
      image: "/api/placeholder/400/200",
      technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
      isLarge: false,
    },
    {
      title: "Mail management system",
      url: "https://ui.glass",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
      image: "/api/placeholder/400/200",
      technologies: [
        "TypeScript",
        "Tailwind",
        "React",
        "Node.js",
        "HTML",
        "CSS",
      ],
      isLarge: false,
    },
  ];
  return (
    <section>
      <header className='max-w-2xl'>
        <h1 className='text-4xl sm:text-5xl tracking-tight font-bold'>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              url={project.url}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              isLarge={project.isLarge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
