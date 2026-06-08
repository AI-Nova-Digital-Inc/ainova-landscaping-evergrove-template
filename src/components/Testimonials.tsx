import { motion } from "framer-motion";

const quotes = [
  {
    q: "Evergrove turned a forgotten backyard into the most-used room of our house. The detail in every joint and plant choice is extraordinary.",
    name: "Hannah & Marc Lévesque",
    role: "Private Residence · Kitchener",
  },
  {
    q: "A studio that draws like architects, builds like masons, and listens like the best designers we've ever hired. Worth every conversation.",
    name: "D. Patel",
    role: "Hilltop Estate · Cambridge",
  },
  {
    q: "Three seasons in and the garden looks better than the day they finished. Their maintenance team treats it like their own.",
    name: "Sara Whitford",
    role: "Lakeside Property · Guelph",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-32 md:py-48">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-moss">
              <span className="h-px w-8 bg-moss" /> Voices
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4.5rem)] font-light leading-[1.02] tracking-tight text-bone">
              From the
              <br />
              <span className="italic text-moss/90">people who live in them.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group glass relative flex flex-col justify-between rounded-sm p-8 transition-transform duration-700 hover:-translate-y-2 md:p-10"
              style={{ minHeight: 360 }}
            >
              <div className="font-display text-5xl text-moss/40 leading-none">
                "
              </div>
              <blockquote className="font-display text-lg font-light leading-relaxed text-bone/90 md:text-xl">
                {q.q}
              </blockquote>
              <figcaption className="mt-8 border-t border-bone/10 pt-5">
                <div className="text-sm text-bone">{q.name}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-bone/45">
                  {q.role}
                </div>
              </figcaption>

              <div className="pointer-events-none absolute inset-0 rounded-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-sm ring-1 ring-moss/40" />
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
