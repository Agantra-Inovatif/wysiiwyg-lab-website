import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

export const categories = ["All", "Aerial", "Documentary", "Commercial", "Tech"];

export const portfolioItems = [
  {
    image: portfolio1,
    title: "Urban Horizons",
    category: "Aerial",
    isVideo: true,
    description: "Drone cinematography capturing the pulse of metropolitan life, showcasing the vibrant energy of the city from dusk till dawn.",
    youtubeId: "dQw4w9WgXcQ",
    location: "Los Angeles, USA",
  },
  {
    image: portfolio2,
    title: "Behind the Lens",
    category: "Documentary",
    isVideo: true,
    description: "An intimate look at the art of filmmaking, following a director's journey in creating their magnum opus.",
    youtubeId: "3tmd-ClpJxA",
    location: "New York, USA",
  },
  {
    image: portfolio3,
    title: "Paradise Found",
    category: "Aerial",
    isVideo: false,
    description: "Pristine beaches and turquoise waters from a bird's eye view, capturing the untouched beauty of a remote island.",
    location: "Maldives",
  },
  {
    image: portfolio4,
    title: "Industrial Future",
    category: "Tech",
    isVideo: true,
    description: "Drone inspection and monitoring for large-scale logistics facilities, highlighting the efficiency of modern technology.",
    youtubeId: "s_fkpZSnz2I",
    location: "Rotterdam, Netherlands",
  },
  {
    image: portfolio5,
    title: "Studio Sessions",
    category: "Commercial",
    isVideo: true,
    description: "A behind-the-scenes look at a high-fashion brand production, from makeup to the final shot.",
    youtubeId: "v2a_v_a-6P4",
    location: "Paris, France",
  },
  {
    image: portfolio6,
    title: "Autumn Passages",
    category: "Aerial",
    isVideo: false,
    description: "Capturing the breathtaking beauty of seasonal transformation in a vast, ancient forest.",
    location: "Kyoto, Japan",
  },
];
