import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
  isVideo?: boolean;
  onClick?: () => void;
}

export const PortfolioCard = ({ image, title, category, index, isVideo, onClick }: PortfolioCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Play button for videos */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="text-primary text-sm font-medium uppercase tracking-wider">{category}</span>
        <h3 className="font-display font-bold text-xl text-foreground mt-1">{title}</h3>
      </div>
    </motion.div>
  );
};
