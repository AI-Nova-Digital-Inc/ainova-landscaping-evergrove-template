import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import materials from "@/assets/materials.jpg";

const items = [
  { label: "Natural Stone", note: "Algonquin limestone · basalt · granite" },
  { label: "Wood", note: "Western red cedar · ipe · charred shou sugi" },
  { label: "Architectural Lighting", note: "Low-voltage · path · uplight · accent" },
  { label: "Water", note: "Reflecting pools · cascades · spillways" },
  { label: "Planting", note: "Native perennials · ornamental grasses · trees" },
];

export function Materials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="materials"
      ref={ref}
      className="relative overflow-hidden bg-forest-deep py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-[1500px] gap-16 px-6 md:grid-cols-12 md:gap-12 md:px-12">
        <div className="relative md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              src={materials}
              alt="Premium landscaping materials"
              loading="lazy"
              style={{ y: imgY }}
              className="absolute inset-0 h-[120%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep/60 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-6 left-6 right-6 md:left-12 md:-right-12 glass rounded-sm p-6"
          >
            <div className="text-[11px] uppercase tracking-[0.28em] text-stone">
              Material Library
            </div>
            <div className="mt-2 font-display text-2xl font-light text-bone">
              Sourced. Sampled. Specified.
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-6 md:pt-6">
          <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-stone/80">
            <span className="h-px w-8 bg-stone/60" /> Craft
          </div>
          <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1] tracking-tight text-bone">
            Built from materials
            <br />
            <span className="italic text-stone">that age beautifully.</span>
          </h2>

          <ul className="mt-12 divide-y divide-bone/10 border-y border-bone/10">
            {items.map((m, i) => (
              <motion.li
                key={m.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-12 items-center gap-4 py-5"
              >
                <span className="col-span-12 font-display text-xl font-light text-bone md:col-span-4">
                  {m.label}
                </span>
                <span className="col-span-12 text-sm text-bone/55 md:col-span-8">
                  {m.note}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
