import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: p1,
    title: "The Ridgeline Residence",
    place: "Waterloo, ON",
    tag: "Outdoor Living",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-[4/5]",
  },
  {
    img: p2,
    title: "Estate at Beverly Hill",
    place: "Cambridge, ON",
    tag: "Master Plan",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
  {
    img: p3,
    title: "Cascade Garden",
    place: "Guelph, ON",
    tag: "Water Feature",
    span: "md:col-span-5",
    aspect: "aspect-[5/4]",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden ${project.span}`}
    >
      <div className={`relative w-full overflow-hidden ${project.aspect}`}>
        <motion.img
          src={project.img}
          alt={project.title}
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 h-[120%] w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />

        {/* Top meta */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-[11px] uppercase tracking-[0.24em] text-bone/80">
          <span className="rounded-full glass px-3 py-1">{project.tag}</span>
          <span className="opacity-70">0{index + 1} / 03</span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-end p-6 md:p-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-moss">
              {project.place}
            </div>
            <h3 className="mt-2 max-w-md font-display text-3xl font-light leading-tight text-bone md:text-4xl">
              {project.title}
            </h3>
            <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-bone/70 transition-all duration-500 group-hover:gap-4 group-hover:text-bone">
              View Project <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-forest-deep py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-stone/80">
              <span className="h-px w-8 bg-stone/60" /> Selected Work
            </div>
            <h2 className="font-display text-balance text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.98] tracking-tight text-bone">
              Estates, gardens,
              <br />
              <span className="italic text-stone">a quiet kind of luxury.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="self-start text-[12px] uppercase tracking-[0.22em] text-bone/70 transition-colors hover:text-bone md:self-end"
          >
            Full Portfolio →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
