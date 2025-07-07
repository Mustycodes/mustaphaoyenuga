import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./socialLinks";


const Sidebar = () => {
  return (
    <header
      className={`lg:sticky lg:flex lg:top-0 lg:max-h-screen lg:flex-col lg:justify-between lg:w-[45%] lg:pt-24 lg:pb-12 lg:pl-16 transition-all duration-300 `}
    >
      {/* lg:pt-24 lg:pb-12 lg:px-16 */}
      <div>
        <div className='hidden lg:block relative mb-4 w-20 h-20 lg:w-40 lg:h-40'>
          <Image
            src='/images/profile-image.jpeg'
            alt='Mustapha Oyenuga'
            className='object-cover object-center rounded-[10px] shadow-lg shadow-primary-accent/20 hover:shadow-primary-accent/40 transition-shadow duration-300'
            fill
          />
        </div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200'>
          Mustapha Oyenuga
        </h1>
        {/* <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Front End Engineer</h2> */}
        <h2 className='text-lg font-medium tracking-tight text-muted mt-2'>
          Front End Engineer
        </h2>
        <p className='text-muted mt-4 max-w-xs leading-normal'>
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <nav className='hidden lg:block space-y-4'>
          <NavItem name='About' href='/about' />
          <NavItem name='Musings' href='/musings' />
          <NavItem name='Works' href='/works' />
        </nav>
      </div>

      {/* Social Icons */}
      <SocialLinks />
    </header>
  );
};

interface NavItemProps {
  name: string;
  href: string;
}
const NavItem = ({ name, href }: NavItemProps) => (
  <Link href={href} className='group cursor-pointer block'>
    <div className='flex items-center space-x-4'>
      <div className='w-8 h-px bg-muted group-hover:bg-white group-hover:w-16 transition-all duration-150' />
      <span className='text-xs uppercase font-bold tracking-widest text-muted group-hover:text-white transition-colors duration-300'>
        {name}
      </span>
    </div>
  </Link>
);

export default Sidebar;
