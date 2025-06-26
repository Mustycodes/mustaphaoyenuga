import { ChevronRight } from "lucide-react";

const ArticleCard = () => {
  return (
    <article className='hover:bg-[#1f1f1f] text-slate-100 p-6 rounded-xl hover:shadow-md space-y-4 group'>
      <header>
        <time
          dateTime='2025-06-25'
          className='text-sm border-l-2 border-gray-400 text-gray-400 pl-2 block'
        >
          September 5, 2022
        </time>
        <h2 className='text-lg font-semibold mt-2 group-hover:text-accent'>
          Crafting a design system for a multiplanetary future
        </h2>
      </header>
      <p className='text-gray-300 text-sm'>
        Most companies try to stay ahead of the curve when it comes to visual
        design, but for Planetaria we needed to create a brand that would still
        inspire us 100 years from now when humanity has spread across our entire
        solar system.
      </p>
      <footer>
        <a
          href='#'
          className='text-sm inline-flex font-medium items-center gap-x-1 text-accent'
          aria-label='Read full article'
        >
          Read article <ChevronRight size='12' />{" "}
        </a>
      </footer>
    </article>
  );
};

export default ArticleCard;
