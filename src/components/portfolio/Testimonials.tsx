import { motion, AnimatePresence } from "motion/react";
import { Plus, MessageSquare, X, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

/**
 * TESTIMONIALS — Fresh Start.
 * 
 * Clean, honest review section for a beginner portfolio.
 * Shows placeholders for future client feedback and supports dynamic client additions.
 */

interface Review {
  n: string; // name
  r: string; // role/company
  q: string; // quote
  rating?: number;
}

const placeholders: Review[] = [
  {
    n: "Client Name",
    r: "Founder / Business Owner",
    q: "Client review will appear here. This space is reserved for the kind words of my first collaboration.",
    rating: 5,
  },
  {
    n: "Future Partner",
    r: "Creative Director",
    q: "Awaiting feedback. I'm excited to showcase the results of our upcoming projects here.",
    rating: 5,
  },
];

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [quote, setQuote] = useState("");
  const [rating, setRating] = useState(5);

  // Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("client_reviews");
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved reviews", e);
      }
    }
  }, []);

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !role.trim() || !quote.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const newReview: Review = {
      n: name,
      r: role,
      q: quote,
      rating,
    };

    const updated = [...reviews, newReview];
    setReviews(updated);
    localStorage.setItem("client_reviews", JSON.stringify(updated));

    // Reset fields & close
    setName("");
    setRole("");
    setQuote("");
    setRating(5);
    setIsModalOpen(false);

    toast.success("Thank you! Your review has been added to the Wall.", {
      description: `Review from ${name}`,
    });
  };

  const allReviews = [...placeholders, ...reviews];

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-accent font-semibold">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" /> Feedback
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-7xl tracking-[-0.03em] leading-[0.9] text-white">
              Client <span className="font-serif italic text-gradient-warm">Wall.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
              I am currently building my portfolio and looking for my first opportunities. 
              This section is ready to capture honest feedback from my future clients.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
          >
            <Plus className="size-5 transition-transform group-hover:rotate-90" />
            Add Your Review
          </motion.button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {allReviews.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-strong rounded-[2rem] p-8 md:p-10 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageSquare className="size-12" />
              </div>
              
              {/* Star Rating display */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                  <Star key={idx} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="font-display text-xl md:text-2xl leading-relaxed text-white/90 italic">
                "{t.q}"
              </p>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/40">
                  {t.n ? t.n.split(' ').map(namePart => namePart[0]).join('') : 'C'}
                </div>
                <div>
                  <div className="text-base font-semibold text-white">{t.n}</div>
                  <div className="text-sm text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground">
            <span className="size-1 rounded-full bg-emerald-500" />
            Open for new collaborations
          </div>
        </div>
      </div>

      {/* Modern, Luxury Glass Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950/90 p-8 shadow-2xl backdrop-blur-xl md:p-10"
            >
              {/* Luxury gold glow effect inside modal */}
              <div className="absolute -top-24 -right-24 size-48 rounded-full bg-accent/10 blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl md:text-3xl text-white font-semibold">
                    Add your <span className="font-serif italic text-gradient-warm">review.</span>
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="size-8 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors grid place-items-center cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                
                <p className="mt-2 text-xs text-muted-foreground">
                  Your feedback helps me improve and showcases my dedication to quality.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block font-semibold">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block font-semibold">
                      Role / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Founder @ TechCorp"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block font-semibold">
                      Rating
                    </label>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className="focus:outline-none transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                        >
                          <Star
                            className={`size-6 transition-colors ${
                              star <= rating ? "fill-amber-400 text-amber-400" : "text-white/20"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block font-semibold">
                      Your Feedback
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      placeholder="What was it like collaborating together?"
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black font-semibold py-3.5 rounded-xl hover:bg-neutral-200 transition-colors shadow-lg mt-2 cursor-pointer"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
