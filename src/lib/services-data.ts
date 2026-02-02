import { 
  Plane, Video, Users, Cog, Camera, Mic, Monitor, 
  Palette, Globe, Shield, Truck, BarChart3 
} from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

export const mainServices = [
  {
    icon: Plane,
    title: "Aerial Imaging & Cinematic Documentation",
    description: "Our fleet of professional-grade drones and certified pilots capture breathtaking aerial footage and photography. From sweeping landscape shots to precise industrial inspections, we deliver perspectives that transform how stories are told.",
    features: [
      { icon: Camera, text: "4K/8K RAW Video Capture" },
      { icon: Globe, text: "360° Panoramic Photography" },
      { icon: Shield, text: "Thermal & Multispectral Imaging" },
      { icon: Monitor, text: "Real-time Live Streaming" },
    ],
    gradient: "from-primary/20 to-primary/5",
    image: portfolio1,
  },
  {
    icon: Video,
    title: "Digital Media & Content Creation",
    description: "Full-service video production from concept development to final delivery. Our creative team crafts compelling visual narratives for documentaries, brand films, commercials, and social media content that resonates with your audience.",
    features: [
      { icon: Mic, text: "Documentary Filmmaking" },
      { icon: Palette, text: "Brand Video Production" },
      { icon: Camera, text: "Commercial Photography" },
      { icon: Monitor, text: "Social Media Content" },
    ],
    gradient: "from-primary/20 to-primary/5",
    image: portfolio2,
  },
  {
    icon: Users,
    title: "Digital Agency as a Service",
    description: "Scale your capabilities with our white-label solutions or full creative team rental. We integrate seamlessly with your brand, providing the expertise and manpower you need without the overhead of building an in-house team.",
    features: [
      { icon: Globe, text: "White-Label Production" },
      { icon: Users, text: "Full Team Rental" },
      { icon: Palette, text: "Creative Direction" },
      { icon: Shield, text: "Enterprise Solutions" },
    ],
    gradient: "from-primary/20 to-primary/5",
    image: portfolio3,
  },
  {
    icon: Cog,
    title: "Technology & Logistics Solutions",
    description: "Advanced aerial technology for industrial applications. We provide precision mapping, asset inspection, logistics optimization, and data analytics services that help businesses make informed decisions and optimize operations.",
    features: [
      { icon: Globe, text: "LiDAR & Photogrammetry" },
      { icon: Truck, text: "Logistics Optimization" },
      { icon: Shield, text: "Infrastructure Inspection" },
      { icon: BarChart3, text: "Data Analytics & Reporting" },
    ],
    gradient: "from-primary/20 to-primary/5",
    image: portfolio4,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your vision, objectives, and requirements to craft a tailored approach.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Detailed pre-production including scouting, storyboarding, and logistics coordination.",
  },
  {
    number: "03",
    title: "Production",
    description: "Expert execution with state-of-the-art equipment and our experienced creative team.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Professional post-production and final delivery optimized for your platforms.",
  },
];
