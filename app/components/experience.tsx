import SectionHeading from "./sectionHeading";

const experiences = [
  {
    company: "Cbit Industries (SpringRock Group)",
    role: "Front-End Developer",
    startDate: "2021-12",
    endDate: null,
    location: "Remote",
    description:
      "Built and optimized responsive web applications using React and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Material UI"],
    currentlyWorking: true,
  },
  {
    company: "Tomation Solutions",
    role: "Front-End Developer",
    startDate: "2021-04",
    endDate: "2021-12",
    location: "Remote",
    description:
      "Oversaw daily logistics and fleet operations, ensuring timely deliveries and efficient route planning.",
    technologies: ["React", "Tailwind CSS", "TypeScript", "Chakra UI"],
    currentlyWorking: false,
  },
  {
    company: "Imaginative Tech Hub",
    role: "Front-End Developer",
    startDate: "2020-09",
    endDate: "2021-03",
    location: "Lagos, Nigeria",
    description:
      "Oversaw daily logistics and fleet operations, ensuring timely deliveries and efficient route planning.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Bootstrap"],
    currentlyWorking: false,
  },
  // {
  //   company: "Freelance",
  //   role: "Frontend Developer",
  //   startDate: "2022-03",
  //   endDate: null,
  //   location: "Remote",
  //   description: "Working with startups and small businesses to design and build user-centric web experiences.",
  //   technologies: ["Next.js", "Shadcn UI", "Framer Motion", "Supabase"],
  //   currentlyWorking: true
  // }
];

const Experience = () => {
  return (
    <section className='mb-12'>
      <SectionHeading>Experience</SectionHeading>
      <div className='border border-border/40 rounded-2xl p-5 bg-primary'>
        <ol className='space-y-4'>
          {experiences.map((experience, index) => (
            <li className='flex gap-4'>
              <dl className='flex flex-auto flex-wrap gap-x-2'>
                <dt className='sr-only'>Company</dt>
                <dd className='w-full flex-none text-sm font-medium text-white'>
                  {experience.company}
                </dd>
                <dt className='sr-only'>Role</dt>
                <dd className='text-xs text-muted '>{experience.role}</dd>
                <dt className='sr-only'>Date</dt>
                <dd
                  className='ml-auto text-xs text-muted'
                  aria-label='2021 until Present'
                >
                  <time dateTime='2019'>{experience.startDate}</time>{" "}
                  <span aria-hidden='true'>—</span>{" "}
                  <time dateTime='2025'>{experience.endDate}</time>
                </dd>
              </dl>
            </li>
          ))}
        </ol>
        <a
          href=''
          className='inline-flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-light/90 transition rounded-md bg-accent hover:bg-accent-alt group mt-6 w-full'
        >
          Download my CV
          <svg
            viewBox='0 0 16 16'
            fill='none'
            aria-hidden='true'
            className='h-4 w-4 stroke-slate-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50'
          >
            <path
              d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Experience;
