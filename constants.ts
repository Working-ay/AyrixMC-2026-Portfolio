import { Project, ProjectCategory, ProjectStatus, Skill } from './types';
import { 
  Terminal, 
  Server, 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Shield, 
  Layout,
  Gamepad2,
  Cloud
} from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/AyrixMC",
  discord: "https://discord.gg/jd6JgG6awG",
  email: "mailto:ayrixmc@gmail.com"
};

export const PROJECTS: Project[] = [
  {
    name: "Synclastics Cloud Technologies",
    role: "Director & COO",
    description: "Leading operations and strategic direction for cloud infrastructure services.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.HOSTING
  },
  {
    name: "Sterro Cloud Hosting",
    role: "Developer",
    description: "Backend development and infrastructure management for hosting solutions.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.HOSTING
  },
  {
    name: "Play Games Interactive",
    role: "Team Member",
    description: "Collaborative development on interactive gaming experiences.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.DEVELOPMENT
  },
  {
    name: "JollySMP",
    role: "Owner / Lead Developer",
    description: "A custom Minecraft survival multiplayer experience with unique mechanics.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Vanta Network",
    role: "Administrator",
    description: "Managing community and server infrastructure for a gaming network.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Riva Network",
    role: "Developer",
    description: "Plugin development and system configuration.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Crit PVP",
    role: "SysAdmin",
    description: "Optimizing PvP combat mechanics and server latency.",
    status: ProjectStatus.CURRENT,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Boiga SMP",
    role: "Founder",
    description: "Previous survival community project.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  },
  {
    name: "Tide SMP",
    role: "Developer",
    description: "Custom plugin development for ocean-themed survival.",
    status: ProjectStatus.PAST,
    category: ProjectCategory.MINECRAFT
  }
];

// Alias for icon since Lucide doesn't have a specific Docker icon
const ContainerIcon = Database;

export const SKILLS: Skill[] = [
  // Languages
  { name: "Java", category: "Language", icon: Code2 },
  { name: "Python", category: "Language", icon: Terminal },
  { name: "TypeScript / JS", category: "Language", icon: Globe },
  { name: "Bash / Shell", category: "Language", icon: Terminal },
  
  // Systems & Hosting
  { name: "Linux (Ubuntu/Debian)", category: "System", icon: Server },
  { name: "Docker", category: "System", icon: ContainerIcon }, 
  { name: "Pterodactyl Panel", category: "System", icon: Layout },
  { name: "Nginx / Apache", category: "System", icon: Globe },
  
  // Platforms
  { name: "Discord API", category: "Platform", icon: Gamepad2 },
  { name: "Minecraft API (Spigot/Paper)", category: "Platform", icon: Gamepad2 },
  { name: "Cloud Infrastructure", category: "Platform", icon: Cloud },
  
  // Software/Tools
  { name: "Git", category: "Software", icon: Code2 },
  { name: "IntelliJ IDEA", category: "Software", icon: Layout },
  { name: "System Administration", category: "Software", icon: Shield },
];