import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  techs: string[];
}

export interface Stat {
  name: string;
  value: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
}