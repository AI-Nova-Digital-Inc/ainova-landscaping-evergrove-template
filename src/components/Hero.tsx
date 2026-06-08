import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero.jpg";
import { Particles } from "./Particles";

const badges = [
  "Award-Winning Designs",
  "Licensed & Insured",
  "Luxury Residential",
  "5-Star Experience",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const fogY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[110vh] w-full overflow-hidden bg-charcoal"
    >
      {/* Background image with parallax + zoom */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -top-[5%] h-[115%] will-change-transform"
      >
        <img
          src={hero}
          alt="Cinematic luxury landscape at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      {/* Fog layer */}
      <motion.div
        style={{ y: fogY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-forest-deep/80 via-forest-deep/20 to-transparent"
      />

      {/* Particles */}
      <Particles count={28} />

      {/* Hairline grid */}
      <div className="pointer-events-none absolute inset-0 mx-auto grid max-w-[1500px] grid-cols-12 px-6 md:px-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-l border-bone/[0.04]" />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-bone/60"
        >
          <span className="h-px w-12 bg-bone/40" />
          Evergrove Landscape Studio — Est. 2009
        </motion.div>

        {/* Headline */}
        <h1 className="font-display text-balance text-[clamp(2.75rem,8.5vw,8.5rem)] font-light leading-[0.95] tracking-tight text-bone">
          {["Outdoor", "Spaces", "Designed", "To", "Inspire."].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.25em] inline-block"
            >
              {word === "Inspire." ? (
                <span className="italic text-moss">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <div className="mt-10 grid items-end gap-10 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="max-w-md text-pretty text-base leading-relaxed text-bone/70 md:col-span-5 md:col-start-7 md:text-lg"
          >
            Luxury landscaping and outdoor living environments crafted for
            modern homes — composed in stone, water, light, and living
            architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap items-center gap-3 md:col-span-5 md:col-start-7"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-bone px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-charcoal transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Request Free Consultation</span>
              <span className="relative z-10 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full border border-bone/30 px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-bone transition-colors hover:bg-bone/10"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-bone/10 pt-6"
        >
          {badges.map((b, i) => (
            <div
              key={b}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-bone/55"
            >
              <span
                className="h-1 w-1 rounded-full bg-moss animate-float-slow"
                style={{ animationDelay: `${i * 0.8}s` }}
              />
              {b}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-bone/40"
      >
        <span className="mr-3">Scroll</span>
        <span className="inline-block h-8 w-px translate-y-2 bg-bone/30" />
      </motion.div>
    </section>
  );
}
