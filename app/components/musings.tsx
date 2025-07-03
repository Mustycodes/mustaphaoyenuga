import ArticleCard from "./cards/articleCard";

const Musings = () => {
  return (
    <section>
      <h2 className='uppercase mb-8 font-semibold tracking-[0.4em] relative after:content-[""] after:absolute after:top-full after:left-0 after:w-12 after:h-0.5 after:bg-accent after:mt-1.5'>
        Musings
      </h2>
      <div className='space-y-4'>
        {[...Array(3)].map((article) => (
          <ArticleCard
            title='Crafting a design system for a multiplanetary future'
            href='#'
            date='2025-05-30'
            formattedDate='September 30, 2025'
            description='Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
          />
        ))}
      </div>
    </section>
  );
};

export default Musings;
