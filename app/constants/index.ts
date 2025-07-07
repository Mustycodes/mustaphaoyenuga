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
    name: "Works",
    href: "#works",
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
