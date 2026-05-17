import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919390819729";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 md:size-16 bg-[#25D366] rounded-full shadow-lg transition-all whatsapp-glow group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-7 md:size-8 text-white fill-white" />
      
      <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-xs font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl border border-gray-100 hidden md:block">
        Chat with me!
      </span>
    </motion.a>
  );
}
