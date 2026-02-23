import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  videoTitle: string;
  onClose: () => void;
}

export const VideoModal = ({
  isOpen,
  videoUrl,
  videoTitle,
  onClose,
}: VideoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getEmbedUrl = (url: string) => {
    const videoId = url.split("/reel/")[1]?.split("/")[0];
    if (videoId) {
      return `https://www.instagram.com/reel/${videoId}/embed/`;
    }
    return url;
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal content — portrait ratio for Instagram Reels */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="mb-3 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors self-end max-w-sm w-full"
          aria-label="Close video"
          style={{ maxWidth: "360px" }}
        >
          <X size={20} className="text-white" />
        </button>

        {/* Instagram Reel — portrait 9:16 */}
        <div
          className="bg-black rounded-2xl overflow-hidden shadow-2xl"
          style={{ width: "min(360px, 90vw)", height: "min(640px, 80vh)" }}
        >
          <iframe
            src={getEmbedUrl(videoUrl)}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            style={{ display: "block" }}
          />
        </div>

        {/* Title */}
        <div className="mt-3 text-center" style={{ maxWidth: "360px" }}>
          <p className="text-white font-semibold text-sm">{videoTitle}</p>
          <p className="text-white/50 text-xs mt-1">Press ESC or tap outside to close</p>
        </div>
      </div>
    </div>
  );
};
