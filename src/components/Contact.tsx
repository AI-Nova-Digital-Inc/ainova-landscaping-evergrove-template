import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import cta from "@/assets/cta-bg.jpg";
import { Particles } from "./Particles";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate overflow-hidden bg-charcoal"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 -z-10 h-full w-full"
      >
        <img
          src={cta}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/60 to-charcoal" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      <Particles count={20} />

      <div className="relative mx-auto grid max-w-[1500px] gap-16 px-6 py-32 md:grid-cols-12 md:gap-12 md:px-12 md:py-48">
        <div className="md:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-moss"
          >
            <span className="h-px w-8 bg-moss" /> Begin
          </motion.div>

          <h2 className="font-display text-balance text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.95] tracking-tight text-bone">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Let's build
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="block italic text-moss/95"
            >
              something extraordinary.
            </motion.span>
          </h2>

          <p className="mt-8 max-w-md text-bone/65">
            Request a complimentary on-site consultation. We accept a limited
            number of projects each season to ensure every detail receives the
            attention it deserves.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 text-sm text-bone/70">
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-bone/40">
                Studio
              </div>
              <div className="mt-2">Waterloo, Ontario</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-bone/40">
                Reach
              </div>
              <div className="mt-2">hello@evergrove.studio</div>
              <div>+1 (519) 555 0140</div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="glass relative rounded-sm p-8 md:col-span-6 md:p-10"
        >
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="grid h-14 w-14 place-items-center rounded-full border border-moss/40 text-moss">
                ✓
              </div>
              <div className="mt-6 font-display text-2xl font-light text-bone">
                Thank you.
              </div>
              <p className="mt-3 max-w-xs text-sm text-bone/60">
                A member of our design team will be in touch within one business
                day to schedule your consultation.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Phone" name="phone" />
                <Field label="Location" name="location" placeholder="Kitchener, ON" />
              </div>
              <Field label="Project Scope" name="scope" placeholder="Full master plan, patio, lighting…" />
              <div>
                <label className="block text-[10px] uppercase tracking-[0.28em] text-bone/45">
                  Vision
                </label>
                <textarea
                  name="vision"
                  rows={4}
                  placeholder="Tell us about the space and how you'd like to live in it…"
                  className="mt-3 w-full resize-none border-b border-bone/20 bg-transparent pb-3 text-bone placeholder:text-bone/30 focus:border-moss focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="group relative mt-4 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-bone px-8 py-4 text-[12px] uppercase tracking-[0.22em] text-charcoal transition-transform hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-moss/0 via-moss/30 to-moss/0 transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Request Consultation</span>
                <span className="relative transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.28em] text-bone/45">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-bone/20 bg-transparent pb-3 text-bone placeholder:text-bone/30 focus:border-moss focus:outline-none"
      />
    </div>
  );
}
