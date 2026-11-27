export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "palm" | "bed" | "utensils" | "lotus" | "bell";
}

export interface RoomServiceItem {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  image: string;
  badge?: string;
  features: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: "waves" | "dining" | "spa" | "compass";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  pricePerNight: number;
  featured?: boolean;
  occupancy: string;
  size: string;
  perks: string[];
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}
