import { motion } from "framer-motion";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export const SectionHeader = ({ label, title, description, center = true }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-16`}
    >
      {label && (
        <span className="inline-block text-primary font-medium uppercase tracking-widest text-sm mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
