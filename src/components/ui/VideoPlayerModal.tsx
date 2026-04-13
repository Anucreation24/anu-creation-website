"use client";

import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

export default function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoPlayerModalProps) {
  
  const getEmbedUrl = (url: string) => {
    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1`;

    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/);
    if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;

    return url; // Fallback to direct URL
  };

  const embedUrl = getEmbedUrl(videoUrl);
  const isEmbed = embedUrl.includes('youtube.com') || embedUrl.includes('vimeo.com');

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#050505]/95 backdrop-blur-sm z-[100]"
              />
            </Dialog.Overlay>
            
            <Dialog.Content asChild>
              <div className="fixed inset-0 flex items-center justify-center p-4 md:p-10 z-[101]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(201,166,75,0.15)] ring-1 ring-white/10"
                >
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-all z-[110]"
                  >
                    <X size={20} />
                  </button>

                  {/* Header / Title */}
                  <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent z-[105] pointer-events-none">
                    <Dialog.Title className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-[#F5F2EA] font-medium tracking-wide">
                      {title}
                    </Dialog.Title>
                    {/* Radix also recommends Dialog.Description for full compliance */}
                    <Dialog.Description className="sr-only">
                      Video playback for {title}
                    </Dialog.Description>
                  </div>

                  {/* Video Container */}
                  <div className="w-full h-full flex items-center justify-center">
                    {isEmbed ? (
                      <iframe
                        src={embedUrl}
                        className="w-full h-full border-0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title={title}
                      />
                    ) : (
                      <video
                        src={videoUrl}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
