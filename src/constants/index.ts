import type {
  ExperienceItem,
  FeatureItem,
  MilestoneItem,
  NavLink,
  PricingTier,
  RoomServiceItem,
  TeamMember,
  TestimonialItem,
} from "@/types";

export const SITE_CONFIG = {
  name: "Ocean Haven",
  subtitle: "Resort & Spa",
  location: "Key West, Florida",
  liner: "Oceanfront Sanctuary · Key West, Florida",
  tagline: "Escape. Relax. Recharge.",
  description:
    "Oceanfront luxury, world-class comfort, and unforgettable experiences in the heart of paradise.",
  address: "500 Ocean Haven Drive, Key West, FL 33040",
  phone: "(305) 555-0123",
  email: "info@oceanhavenresort.com",
  copyrightYear: 2026,
} as const;

export const RESORT_IMAGES = {
  heroSunset: "/images/Golden Sunset at a Tropical Infinity Resort.png",
  ctaSunset: "/images/Golden Sunset at a Tropical Infinity Resort (1).png",
  oceanViewRoom: "/images/Luxury Beachfront Bedroom Retreat.png",
  poolsideSuite: "/images/Sunlit Coastal Living Room Retreat.png",
  oceanfrontVilla: "/images/Luxury Coastal Living Room at Sunset.png",
  waterActivities: "/images/Luxury Tropical Beach Retreat.png",
  romanticDining: "/images/Sunset Beachside Toast with Friends.png",
  spaWellness: "/images/Serene Warm-Toned Spa Massage.png",
  exploreKeyWest: "/images/Luxury Yacht at Sunset.png",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Stay", href: "/services" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Dining", href: "/services#dining" },
  { label: "Wellness", href: "/services#wellness" },
  { label: "Gallery", href: "/about" },
  { label: "Offers", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Stay", href: "/services" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Dining", href: "/services#dining" },
  { label: "Wellness", href: "/services#wellness" },
  { label: "Offers", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const RESORT_HOURS = [
  { label: "Front Desk", hours: "24/7" },
  { label: "Spa & Wellness", hours: "9:00 AM – 8:00 PM" },
  { label: "Dining", hours: "7:00 AM – 10:00 PM" },
];

export const RESORT_FEATURES: FeatureItem[] = [
  {
    id: "oceanfront",
    title: "Oceanfront Location",
    description: "Stunning views & direct beach access",
    icon: "palm",
  },
  {
    id: "accommodations",
    title: "Luxury Accommodations",
    description: "Spacious rooms & villas with modern comfort",
    icon: "bed",
  },
  {
    id: "dining",
    title: "Exceptional Dining",
    description: "Fresh flavors, local ingredients",
    icon: "utensils",
  },
  {
    id: "wellness",
    title: "Wellness & Spa",
    description: "Relax, rejuvenate & restore your soul",
    icon: "lotus",
  },
  {
    id: "service",
    title: "World-Class Service",
    description: "Personalized service at every moment",
    icon: "bell",
  },
];

export const ACCOMMODATIONS: RoomServiceItem[] = [
  {
    id: "ocean-view-room",
    title: "Ocean View Room",
    description: "Wake up to breathtaking views of the Atlantic Ocean.",
    pricePerNight: 18999,
    image: RESORT_IMAGES.oceanViewRoom,
    badge: "Oceanfront",
    features: [
      "Private furnished balcony",
      "King coastal pillow-top bed",
      "Rain shower & soaking tub",
    ],
  },
  {
    id: "poolside-suite",
    title: "Poolside Suite",
    description: "Steps from the pool with private terrace and tropical vibes.",
    pricePerNight: 35999,
    image: RESORT_IMAGES.poolsideSuite,
    badge: "Most Popular",
    features: [
      "Direct infinity pool terrace",
      "Separate lounge & dining parlor",
      "Complimentary cabana service",
    ],
  },
  {
    id: "oceanfront-villa",
    title: "Oceanfront Villa",
    description: "Exclusive villa with spacious living, kitchen & oceanfront balcony.",
    pricePerNight: 66999,
    image: RESORT_IMAGES.oceanfrontVilla,
    badge: "Private Villa",
    features: [
      "Panoramic oceanfront wraparound deck",
      "Dedicated island butler",
      "Private plunge pool & chef kitchen",
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "water-activities",
    title: "Water Activities",
    description: "Snorkeling, kayaking, paddleboarding & more.",
    image: RESORT_IMAGES.waterActivities,
    icon: "waves",
  },
  {
    id: "romantic-dining",
    title: "Romantic Dining",
    description: "Private dinners & unforgettable sunset experiences.",
    image: RESORT_IMAGES.romanticDining,
    icon: "dining",
  },
  {
    id: "spa-wellness",
    title: "Spa & Wellness",
    description: "Signature treatments for mind, body & complete relaxation.",
    image: RESORT_IMAGES.spaWellness,
    icon: "spa",
  },
  {
    id: "explore-key-west",
    title: "Explore Key West",
    description: "Discover the island's charm, history & hidden gems.",
    image: RESORT_IMAGES.exploreKeyWest,
    icon: "compass",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "jessica",
    quote:
      "The most beautiful resort we've ever stayed at! The views, service, and attention to detail were absolutely perfect.",
    author: "Jessica M.",
    location: "Miami, FL",
    rating: 5,
    avatar: "/avatars/indian_person_1.webp",
  },
  {
    id: "michael",
    quote:
      "From the oceanfront room to the amazing food, everything was beyond our expectations. Can't wait to come back!",
    author: "Michael T.",
    location: "Austin, TX",
    rating: 5,
    avatar: "/avatars/indian_person_2.webp",
  },
  {
    id: "sarah",
    quote:
      "A true paradise! The staff made our anniversary unforgettable.",
    author: "Sarah L.",
    location: "Chicago, IL",
    rating: 5,
    avatar: "/avatars/indian_person_8.webp",
  },
  {
    id: "rajesh",
    quote:
      "Waking up to the turquoise Atlantic from our Oceanfront Villa felt surreal. Unmatched hospitality and serene sunset evenings.",
    author: "Rajesh K.",
    location: "New York, NY",
    rating: 5,
    avatar: "/avatars/indian_person_5.webp",
  },
  {
    id: "ananya",
    quote:
      "The botanical spa rituals and candlelit beachfront dining made our wellness retreat truly restorative.",
    author: "Ananya R.",
    location: "Boston, MA",
    rating: 5,
    avatar: "/avatars/indian_person_6.webp",
  },
];

export const STORY_MILESTONES: MilestoneItem[] = [
  {
    year: "1998",
    title: "Founded on Southernmost Shores",
    description:
      "Ocean Haven opened as a 24-suite coastal sanctuary built around preserved Key West palms and coral stone walkways.",
  },
  {
    year: "2012",
    title: "Oceanfront Spa & Culinary Wing",
    description:
      "Added our botanical wellness pavilion and farm-to-reef restaurant overlooking the Atlantic horizon.",
  },
  {
    year: "2024",
    title: "Sustainable Luxury Restoration",
    description:
      "Completed solar-assisted climate design, reef-safe grounds stewardship, and newly reimagined private villas.",
  },
];

export const MISSION_VALUES = [
  {
    id: "stewardship",
    title: "Coastal Stewardship",
    description:
      "Every stay supports local coral restoration and zero-single-use plastic hospitality across our Key West shoreline.",
  },
  {
    id: "craft",
    title: "Intentional Craft",
    description:
      "Natural limestone, sunlit linens, and warm tropical hardwoods create spaces that feel calm, grounded, and timeless.",
  },
  {
    id: "warmth",
    title: "Unscripted Warmth",
    description:
      "Hospitality guided by intuition—remembering how you take morning espresso and arranging quiet sunset sails effortlessly.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "elena-vance",
    name: "Elena Vance",
    role: "Managing Director",
    bio: "Two decades leading boutique coastal resorts across the Florida Keys and Caribbean.",
    avatar: "/avatars/indian_person_1.webp",
  },
  {
    id: "marcus-cole",
    name: "Marcus Cole",
    role: "Executive Culinary Director",
    bio: "Celebrated for line-caught Florida Keys seafood and wood-fired coastal tasting menus.",
    avatar: "/avatars/indian_person_4.webp",
  },
  {
    id: "claire-bennett",
    name: "Claire Bennett",
    role: "Director of Wellness & Spa",
    bio: "Integrates marine botanicals and restorative breathwork into bespoke sanctuary rituals.",
    avatar: "/avatars/indian_person_8.webp",
  },
  {
    id: "julian-reyes",
    name: "Julian Reyes",
    role: "Head Concierge & Island Guide",
    bio: "Key West native curating private yacht charters, gallery walks, and secluded reef excursions.",
    avatar: "/avatars/indian_person_7.webp",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "coastal-escape",
    name: "Ocean View Room",
    tagline: "Serene island mornings overlooking the Atlantic",
    pricePerNight: 18999,
    occupancy: "Up to 2 Guests",
    size: "480 sq ft",
    perks: [
      "King bed with Belgian linen",
      "Private ocean-view balcony",
      "Daily sunrise artisan breakfast",
      "Complimentary paddleboard & kayak rental",
      "Access to infinity pool & beach loungers",
    ],
  },
  {
    id: "poolside-sanctuary",
    name: "Poolside Suite",
    tagline: "Effortless indoor-outdoor living steps from the water",
    pricePerNight: 35999,
    featured: true,
    occupancy: "Up to 4 Guests",
    size: "820 sq ft",
    perks: [
      "Private terrace with direct pool access",
      "Separate living lounge & wet bar",
      "Two 60-minute signature spa credits",
      "Reserved sunset beachfront cabana",
      "Evening turndown & champagne welcome",
    ],
  },
  {
    id: "haven-villa",
    name: "Oceanfront Villa",
    tagline: "Our pinnacle private residence on the water's edge",
    pricePerNight: 66999,
    occupancy: "Up to 6 Guests",
    size: "1,650 sq ft",
    perks: [
      "Two bedrooms & panoramic ocean deck",
      "Private heated plunge pool",
      "Dedicated 24/7 island butler service",
      "Private sunset catamaran excursion",
      "In-villa chef tasting dinner for four",
    ],
  },
];
