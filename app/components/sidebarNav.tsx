import Link from "next/link";
import { NAVIGATION_LINKS } from "../constants";

interface NavItemProps {
  name: string;
  href: string;
}

const NavItem = ({ name, href }: NavItemProps) => {
  return (
    <li>
      <Link href={href} className='group flex items-center py-2'>
        <span className={`h-px w-8 mr-4 bg-muted transition-all group-hover:w-16 group-hover:bg-white group-focus-visible:w-16 motion-reduce:transition-none`} />
        <span className='text-xs uppercase font-bold tracking-widest text-muted group-hover:text-white group-focus-visible:text-white'>
          {name}
        </span>
      </Link>
    </li>
  );
};

const SidebarNav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='mt-12 lg:mt-8 w-max'>
        {NAVIGATION_LINKS.map((link) => (
          <NavItem key={link.name} name={link.name} href={link.href} />
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;
