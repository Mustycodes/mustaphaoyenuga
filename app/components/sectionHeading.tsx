interface SectionHeadingProps {
  children: React.ReactNode;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div
      className={`sticky top-0 z-20 w-screen lg:w-auto -mx-6 px-6 py-5 md:-mx-12 md:px-12 mb-2 bg-primary/75 backdrop-blur`}
    >
      <h2
        className={`uppercase text-white text-sm tracking-[0.3em] font-bold after:content-[''] after:block after:bg-accent after:w-12 after:h-px after:mt-1.5
        `}
      >
        {children}
      </h2>
    </div>
  );
};
export default SectionHeading;
