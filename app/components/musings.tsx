import ArticleCard from "./cards/articleCard";
import SectionHeading from "./sectionHeading";

const Musings = () => {
  return (
    <section id="musings">
      <SectionHeading>Musings</SectionHeading>
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
