import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    image: string;
    title: string;
    description?: string;
    location?: string;
    isVideo?: boolean;
    youtubeId?: string;
  } | null;
}

export const Lightbox = ({ isOpen, onClose, item }: LightboxProps) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 overflow-y-auto"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>

          <div 
            className="relative w-full max-w-5xl flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              {item.isVideo && item.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                  title={item.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-white max-w-3xl"
            >
              <h2 className="font-display font-bold text-3xl mb-2">{item.title}</h2>
              
              {item.location && (
                <div className="flex items-center gap-2 text-white/60 mb-4">
                  <MapPin size={16} />
                  <span className="text-sm uppercase tracking-wider">{item.location}</span>
                </div>
              )}
              
              {item.description && (
                <p className="text-white/80 text-lg leading-relaxed">
                  {item.description}
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
