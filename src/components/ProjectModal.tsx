import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PrismicNextImage } from "@prismicio/next";
import { X, Github, Globe, Play, ExternalLink } from "lucide-react";
import { ImageField, LinkField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    thumbnail: ImageField;
    title: string;
    description: string;
    live_link?: LinkField;
    github_link?: LinkField;
    demo_video?: LinkField;
    long_description?: RichTextField;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setIsPlaying(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.5, bounce: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-6xl bg-[#14141e]/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#252535] shadow-[0_0_50px_rgba(79,143,255,0.1)]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors duration-200 backdrop-blur-sm border border-white/10"
            >
              <X className="w-5 h-5 text-white/80" />
            </button>

            <div className="flex flex-col max-h-[85vh] overflow-y-auto">
              {/* Hero Section */}
              <div className="relative w-full h-[400px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#14141e] z-10" />
                <PrismicNextImage
                  field={project.thumbnail}
                  fill
                  className="object-cover"
                  alt={project.title}
                />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                  <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                    {project.title}
                  </h2>
                  <div className="flex gap-4">
                    {project.live_link?.url && (
                      <a
                        href={project.live_link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4f8fff] hover:bg-[#4f8fff]/90 transition-all duration-300 group"
                      >
                        <Globe className="w-5 h-5" />
                        <span className="font-medium">Visit Website</span>
                        <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    )}
                    {project.github_link?.url && (
                      <a
                        href={project.github_link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#252535] hover:bg-[#252535]/90 transition-all duration-300 group border border-[#4f8fff]/20"
                      >
                        <Github className="w-5 h-5" />
                        <span className="font-medium">View Code</span>
                        <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 py-12">
                <div className="space-y-8">
                  {/* Description */}
                  <div className="prose prose-invert prose-lg max-w-none">
                    <div className="text-xl text-white/80 leading-relaxed">
                      {project.description}
                    </div>
                    {project.long_description && (
                      <div className="mt-6">
                        <PrismicRichText field={project.long_description} />
                      </div>
                    )}
                  </div>

                  {/* Demo Video */}
                  {project.demo_video?.url && (
                    <div className="mt-12">
                      <h3 className="text-2xl font-semibold text-white mb-6">Project Demo</h3>
                      <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 border border-[#252535] shadow-lg">
                        {!isPlaying ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <button
                              onClick={() => setIsPlaying(true)}
                              className="group flex items-center gap-4 px-8 py-4 rounded-full bg-[#4f8fff]/20 hover:bg-[#4f8fff]/30 backdrop-blur-sm border border-[#4f8fff]/30 transition-all duration-300 hover:scale-105"
                            >
                              <Play className="w-8 h-8 text-[#4f8fff]" />
                              <span className="text-white text-lg font-medium">Watch Demo</span>
                            </button>
                          </div>
                        ) : (
                          <video
                            src={project.demo_video.url}
                            controls
                            className="w-full h-full"
                            autoPlay
                          >
                            Your browser does not support the video tag.
                          </video>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;


