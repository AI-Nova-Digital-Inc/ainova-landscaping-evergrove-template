import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#materials" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 120],
    ["rgba(13,13,13,0)", "rgba(13,13,13,0.72)"],
  );
  const blur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(14px)"]);
  const border = useTransform(
    scrollY,
    [0, 120],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"],
  );

  return (
    <motion.header
      style={{
        backgroundColor: bg,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        borderBottomColor: border,
      }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-bone/30">
            <span className="block h-1.5 w-1.5 rounded-full bg-moss" />
          </span>
          <span className="font-display text-base font-medium tracking-tight text-bone">
            Evergrove<span className="text-moss">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 text-[13px] tracking-wide text-bone/70 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative transition-colors hover:text-bone"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 rounded-full border border-bone/25 px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-bone hover:text-charcoal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-moss transition-colors group-hover:bg-charcoal" />
          Book a Consult
        </a>
      </nav>
    </motion.header>
  );
}
