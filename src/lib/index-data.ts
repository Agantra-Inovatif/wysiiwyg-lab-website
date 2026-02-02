import { Plane, Video, Users, Cog } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

export const services = [
  {
    icon: Plane,
    title: "Aerial Imaging",
    description: "Stunning drone footage and photography that captures perspectives impossible from the ground.",
    features: ["4K/8K Video", "Thermal Imaging", "360° Panoramas"],
  },
  {
    icon: Video,
    title: "Digital Media",
    description: "Full-service content creation from concept to final cut, telling your story with cinematic excellence.",
    features: ["Documentary Films", "Brand Videos", "Social Content"],
  },
  {
    icon: Users,
    title: "Digital Agency",
    description: "White-label solutions or full creative team rental for agencies and enterprises.",
    features: ["White-Label", "Team Rental", "Full Production"],
  },
  {
    icon: Cog,
    title: "Tech Solutions",
    description: "Advanced technology integration for logistics, surveying, and industrial applications.",
    features: ["LiDAR Mapping", "Asset Inspection", "Data Analytics"],
  },
];

export const featuredWork = [
  { image: portfolio1, title: "Urban Horizons", category: "Aerial", isVideo: true },
  { image: portfolio2, title: "Behind the Lens", category: "Documentary", isVideo: true },
  { image: portfolio3, title: "Paradise Found", category: "Aerial", isVideo: false },
];

export const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Industry Awards" },
];
