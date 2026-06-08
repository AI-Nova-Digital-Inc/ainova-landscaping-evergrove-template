import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Landscape Design",
    desc: "Site-specific master plans rooted in architectural rigor and seasonal beauty.",
  },
  {
    n: "02",
    title: "Outdoor Living Spaces",
    desc: "Lounges, kitchens, and fire features composed as extensions of the home.",
  },
  {
    n: "03",
    title: "Interlocking & Hardscaping",
    desc: "Natural stone terraces, walkways, and retaining walls built to last decades.",
  },
  {
    n: "04",
    title: "Outdoor Lighting",
    desc: "Layered, low-voltage lighting that sculpts the garden after sundown.",
  },
  {
    n: "05",
    title: "Water Features",
    desc: "Reflective pools, cascades, and basins for movement, sound, and stillness.",
  },
  {
    n: "06",
    title: "Seasonal Maintenance",
    desc: "Stewardship programs that keep every detail at its intended state of grace.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-charcoal py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-moss">
              <span className="h-px w-8 bg-moss" /> Services
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1] tracking-tight text-bone">
              An atelier of <span className="italic text-moss/90">outdoor</span>
              <br />
              craftsmanship.
            </h2>
            <p className="mt-8 max-w-md text-bone/60">
              Each project begins with the land, the light, and the way you live
              — then unfolds across six interconnected disciplines.
            </p>
          </motion.div>

          <div className="md:col-span-7">
            <ul className="border-t border-bone/10">
              {services.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative border-b border-bone/10"
                >
                  <a
                    href="#contact"
                    className="grid grid-cols-12 items-center gap-4 py-8 transition-colors"
                  >
                    <span className="col-span-2 font-display text-sm text-bone/40 md:col-span-1">
                      {s.n}
                    </span>
                    <span className="col-span-10 font-display text-2xl font-light text-bone transition-transform duration-500 group-hover:translate-x-3 md:col-span-5 md:text-3xl">
                      {s.title}
                    </span>
                    <span className="col-span-12 text-sm text-bone/55 md:col-span-5 md:text-[15px]">
                      {s.desc}
                    </span>
                    <span className="col-span-12 hidden text-right text-bone/30 transition-all duration-500 group-hover:text-moss md:col-span-1 md:block">
                      →
                    </span>
                  </a>
                  <motion.div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-moss via-moss/40 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
