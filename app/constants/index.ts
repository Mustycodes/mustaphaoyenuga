import { Github, Linkedin, Globe, Instagram, Twitter } from "lucide-react";

interface NavigationLink {
  name: string;
  href: string;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    name: "About Me",
    href: "#about",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Musings",
    href: "#musings",
  },
];

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Github",
    href: "#",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "Website",
    href: "#",
    icon: Globe,
  },
  {
    name: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
];

export const PROJECTS = [
  {
    title: "Agency Landing Page",
    liveUrl: "https://themesberg.com",
    githubUrl: "https://themesberg.com",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
    image: "/images/project1.PNG",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Mail management system",
    liveUrl: "https://ui.glass",
    githubUrl: "https://themesberg.com",
    description:
      "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
    image: "/images/project1.PNG",
    technologies: ["TypeScript", "Tailwind", "React", "Node.js", "HTML", "CSS"],
    isReverse: true,
  },
];
