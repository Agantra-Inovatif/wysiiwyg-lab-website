import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  index: number;
}

export const ServiceCard = ({ icon: Icon, title, description, features, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-card-gradient border border-border rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>

        {/* Content */}
        <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>

        {/* Features list */}
        {features && (
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};
