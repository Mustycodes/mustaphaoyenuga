import { Link } from "lucide-react";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <article className='p-4 flex items-start gap-x-4 hover:bg-[#1f1f1f] rounded-xl hover:shadow-md group'>
      <figure className="flex-shrink-0">
        <Image
          src='/images/project_2.png'
          alt='Docura App Preview'
          className='object-cover'
          width={112}
          height={80}
        />
      </figure>
      <div className='flex-1'>
        <header>
          <a href='#' className='group-hover:text-primary-accent font-medium'>
            Docura
          </a>
        </header>
        <p className='text-sm text-gray-300 mt-2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          excepturi quaerat possimus ratione nisi rem magnam alias praesentium
          cum harum.
        </p>
        <footer className='text-sm mt-4 w-full inline-flex justify-between text-gray-400'>
          <a
            href='#'
            className='font-semibold inline-flex items-center gap-x-2 group-hover:text-primary-accent'
          >
            <Link size={12} /> github.com
          </a>
          <a
            href='#'
            className='font-semibold inline-flex items-center gap-x-2 group-hover:text-primary-accent'
          >
            <Link size={12} /> website.com
          </a>
        </footer>
      </div>
    </article>
  );
};

export default ProjectCard;
