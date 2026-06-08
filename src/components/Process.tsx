import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { n: "I", title: "Consult", desc: "We listen — to you, the site, the way light falls at five." },
  { n: "II", title: "Concept", desc: "A composed visual narrative, drawn before a single stone is set." },
  { n: "III", title: "Design", desc: "Detailed plans, material samples, and full 3D walk-throughs." },
  { n: "IV", title: "Build", desc: "Master craftsmen execute every joint, plant, and lumen on site." },
  { n: "V", title: "Maintain", desc: "Stewardship programs that protect your investment for decades." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section
      id="process"
      ref={ref}
      className="relative overflow-hidden bg-charcoal py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-moss">
            <span className="h-px w-8 bg-moss" /> The Process
          </div>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-bone">
            Five movements,
            <br />
            <span className="italic text-moss/90">one quiet outcome.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[1.5rem] hidden h-px bg-bone/10 md:block">
            <motion.div
              style={{ scaleX: lineScale, originX: 0 }}
              className="h-full bg-gradient-to-r from-moss via-moss/60 to-stone"
            />
          </div>

          <ol className="grid gap-12 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-bone/20 bg-charcoal font-display text-sm text-moss">
                  {s.n}
                </div>
                <div className="font-display text-2xl font-light text-bone">
                  {s.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-bone/55">
                  {s.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
