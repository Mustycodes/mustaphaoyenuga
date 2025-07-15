import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className='py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-12 space-y-12 lg:space-y-0'>
        <div className='lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-sm'>
            <Image
              src='/images/portrait.png'
              className='aspect-square rounded-2xl rotate-3 object-cover'
              alt=''
              width={800}
              height={800}
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 '>
            I&apos;m Mustapha Oyenuga. I live in Lagos, Nigeria, where I design
            the future.
          </h1>
          <div className='mt-6 text-zinc-300 space-y-7'>
            <p>
              I’ve loved making things for as long as I can remember, and wrote
              my first program when I was 6 years old, just two weeks after my
              mom brought home the brand new Macintosh LC 550 that I taught
              myself to type on.
            </p>
            <p>
              The only thing I loved more than computers as a kid was space.
              When I was 8, I climbed the 40-foot oak tree at the back of our
              yard while wearing my older sister’s motorcycle helmet, counted
              down from three, and jumped — hoping the tree was tall enough that
              with just a bit of momentum I’d be able to get to orbit.
            </p>
            <p>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really can make it to
              orbit — from the comfort of their own backyards.
            </p>
          </div>
        </div>
        <div className='lg:pl-20'>
          <ul role='list' className='text-sm text-zinc-300'>
            <li>
              <a href='#' className='group flex items-center font-medium'>
                <svg
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-accent'
                >
                  <path d='M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z'></path>
                </svg>
                <span className='ml-4 group-hover:text-accent'>
                  Follow on X
                </span>
              </a>
            </li>
            <li className='mt-4'>
              <a href='#' className='group flex items-center font-medium'>
                <Instagram
                  size={24}
                  className='text-zinc-500 group-hover:text-accent'
                />
                <span className='ml-4 group-hover:text-accent'>
                  Follow on Instagram
                </span>
              </a>
            </li>
            <li className='mt-4'>
              <a href='#' className='group flex items-center font-medium'>
                <Github
                  size={24}
                  className='text-zinc-500 group-hover:text-accent'
                />
                <span className='ml-4 group-hover:text-accent'>
                  Follow on Github
                </span>
              </a>
            </li>
            <li className='mt-4'>
              <a href='#' className='group flex items-center font-medium'>
                <Linkedin
                  size={24}
                  className='text-zinc-500 group-hover:text-accent'
                />
                <span className='ml-4 group-hover:text-accent'>
                  Follow on LinkedIn
                </span>
              </a>
            </li>
            <li className='mt-8 pt-8 border-t border-zinc-700/60'>
              <a href='#' className='group flex items-center font-medium'>
                <Mail
                  size={24}
                  className='text-zinc-500 group-hover:text-accent'
                />
                <span className='ml-4 group-hover:text-accent'>
                  mustaphaoyenuga@gmail.com
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
