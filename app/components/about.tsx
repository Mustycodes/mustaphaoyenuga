import SectionHeading from "./sectionHeading";

const About = () => {
  return (
    <section
      id='about'
      className='mb-14 md:mb-20 lg:mb-24'
      aria-label='about me brief'
    >
      {/*mb-4 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 */}
      <SectionHeading>About me</SectionHeading>

      <div>
        <p className='text-muted leading-relaxed mb-6'>
          I'm a Front-End Developer passionate about building clean, scalable
          web experiences using tools like Next.js, React, and Tailwind. I care
          deeply about clarity—in code, design, and life—and I share what I
          learn to help others grow. Right now, I'm focused on building real
          projects, improving my craft, and documenting the journey to
          world-class.
        </p>
        <p className='text-muted leading-relaxed mb-6'>
          Currently, I'm a Senior Front-End Engineer at{" "}
          <span className='text-white hover:text-accent cursor-pointer font-medium'>
            Klaviyo
          </span>
          , specializing in accessibility. I contribute to the creation and
          maintenance of UI components that power Klaviyo's frontend, ensuring
          our platform meets web accessibility standards and best practices to
          deliver an inclusive user experience.
        </p>
      
        <p className='text-muted leading-relaxed'>
          In my spare time, I'm usually climbing, reading, hanging out with my
          wife and two cats, or running around Hyrule searching for{" "}
          <span className='text-white hover:text-accent cursor-pointer font-medium'>
            Korok seeds
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default About;
