import { motion } from "framer-motion";

const cities = ["Kitchener", "Waterloo", "Cambridge", "Guelph", "Milton"];

export function ServiceAreas() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-32 md:py-40">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-stone/80">
              <span className="h-px w-8 bg-stone/60" /> Service Areas
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1] tracking-tight text-bone">
              Designing across
              <br />
              <span className="italic text-stone">Southwestern Ontario.</span>
            </h2>
            <p className="mt-6 max-w-sm text-bone/55">
              Working with discerning homeowners and architects from Kitchener
              to Milton.
            </p>
          </div>

          <ul className="md:col-span-8">
            {cities.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex items-center justify-between border-b border-bone/10 py-7"
              >
                <span className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-none text-bone transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-moss">
                  {c}
                </span>
                <span className="flex items-center gap-4 text-[11px] uppercase tracking-[0.24em] text-bone/40">
                  <span className="hidden md:inline">
                    0{i + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
