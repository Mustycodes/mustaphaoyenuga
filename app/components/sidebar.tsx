import Image from "next/image";
import SocialLinks from "./socialLinks";
import SidebarNav from "./sidebarNav";

const Sidebar = () => {
  return (
    <header
      className={`lg:sticky lg:flex lg:top-0 lg:max-h-screen lg:flex-col lg:justify-between lg:w-[45%] lg:py-20 lg:pl-16 transition-all duration-300 `}
    >
      <div>
        <div className='hidden lg:block relative mb-4 w-20 h-20 lg:w-40 lg:h-40'>
          <Image
            src='/images/profile-image.jpeg'
            alt='Mustapha Oyenuga'
            className='object-cover object-center rounded-[10px] shadow-lg shadow-primary-accent/20 transition-all hover:shadow-primary-accent/40 duration-300'
            fill
          />
        </div>
        <div>
          <h1 className='text-4xl font-bold tracking-tight text-slate-200'>
            Mustapha Oyenuga
          </h1>

          <h2 className='text-lg md:text-xl font-medium tracking-tight text-muted mt-2'>
            Front End Engineer
          </h2>
          <p className='text-muted mt-4 max-w-xs leading-normal'>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        <SidebarNav />
      </div>

      {/* Social Icons */}
      <SocialLinks />
    </header>
  );
};

export default Sidebar;
