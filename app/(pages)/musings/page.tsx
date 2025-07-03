import ArticleCard from "@/app/components/cards/articleCard";

const MusingsPage = () => {
  return (
    <section>
      <header className='max-w-2xl'>
        <h1 className='text-4xl sm:text-5xl tracking-tight font-bold'>
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className='mt-6'>
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </header>
      <div className='mt-16 sm:mt-20'>
        <div className='flex flex-col max-w-3xl'>
          <ArticleCard
            title='Crafting a design system for a multiplanetary future'
            href='#'
            date='2025-05-30'
            formattedDate='September 30, 2025'
            description='Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.'
          />

          <ArticleCard
            title='Crafting a design system for a multiplanetary future'
            href='#'
            date='2025-05-30'
            formattedDate='September 30, 2025'
            description='Most companies try to stay ahead of the curve when it comes to visual design, but not us.'
          />
        </div>
      </div>
    </section>
  );
};

export default MusingsPage;
