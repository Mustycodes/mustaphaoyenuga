import { DEFAULT_SOCIAL_LINKS } from "../constants";

const SocialLinks = () => {
  return (
    <ul className='flex items-center mt-8 space-x-6'>
      {DEFAULT_SOCIAL_LINKS.map((link) => (
        <li>
          <a
            href={link.href}
            target='_blank'
            rel='noreferrer noopener'
            title={link.name}
            className='block'
          >
            <link.icon className='w-6 h-6 text-slate-400 hover:text-accent cursor-pointer transition-colors duration-300' />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
