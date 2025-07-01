import { ChevronRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  href: string;
  date: string; //ISO format
  formattedDate: string;
  description: string;
}

const ArticleCard = ({
  title,
  href,
  date,
  formattedDate,
  description,
}: ArticleCardProps) => {
  return (
    <article className='hover:bg-[#1f1f1f] hover:shadow-md text-slate-100 p-6 rounded-xl group cursor-pointer'>
      <header className='flex flex-col'>
        <time
          dateTime={date}
          className='text-sm border-l-2 border-gray-400 text-gray-400 pl-3 block'
        >
          {formattedDate}
        </time>

        <h2 className='text-lg font-semibold mt-1 tracking-tight group-hover:text-accent'>
          {title}
        </h2>
      </header>
      <p className='text-sm text-gray-300 mt-2'>{description}</p>
      <footer className='mt-4'>
        <a
          href={href}
          className='text-sm inline-flex font-medium items-center gap-x-1 text-accent'
          aria-label='Read full article'
        >
          Read Full Post <ChevronRight size='12' />
        </a>
      </footer>
    </article>
  );
};

export default ArticleCard;
