const About = () => {
  return (
    <section className='mb-12'>
      <h2 className='uppercase mb-4 font-semibold tracking-[0.4em] relative after:content-[""] after:absolute after:top-full after:left-0 after:w-12 after:h-0.5 after:bg-accent after:mt-1.5'>
        About Me
      </h2>
      <p className='text-slate-300 leading-relaxed mb-6'>
        I'm a developer passionate about crafting accessible, pixel-perfect user
        interfaces that blend thoughtful design with robust engineering. My
        favorite work lies at the intersection of design and development,
        creating experiences that not only look great but are meticulously built
        for performance and usability.
      </p>

      <p className='text-slate-300 leading-relaxed mb-6'>
        Currently, I'm a Senior Front-End Engineer at{" "}
        <span className='text-white hover:text-accent cursor-pointer font-medium'>
          Klaviyo
        </span>
        , specializing in accessibility. I contribute to the creation and
        maintenance of UI components that power Klaviyo's frontend, ensuring our
        platform meets web accessibility standards and best practices to deliver
        an inclusive user experience.
      </p>

      <p className='text-slate-300 leading-relaxed mb-6'>
        In the past, I've had the opportunity to develop software across a
        variety of settings — from{" "}
        <span className='text-white hover:text-accent cursor-pointer font-medium'>
          advertising agencies
        </span>{" "}
        and{" "}
        <span className='text-white hover:text-accent cursor-pointer font-medium'>
          large corporations
        </span>{" "}
        to{" "}
        <span className='text-white hover:text-accent cursor-pointer font-medium'>
          start-ups
        </span>{" "}
        and{" "}
        <span className='text-white hover:text-accent cursor-pointer font-medium'>
          small digital product studios
        </span>
        . Additionally, I also released a{" "}
        <span className='text-white hover:text-accent cursor-pointer font-medium'>
          comprehensive video course
        </span>{" "}
        a few years ago, guiding learners through building a web app with the
        Spotify API.
      </p>

      <p className='text-slate-300 leading-relaxed'>
        In my spare time, I'm usually climbing, reading, hanging out with my
        wife and two cats, or running around Hyrule searching for{" "}
        <span className='text-white hover:text-accent cursor-pointer font-medium'>
          Korok seeds
        </span>
        .
      </p>
    </section>
  );
};

export default About;
