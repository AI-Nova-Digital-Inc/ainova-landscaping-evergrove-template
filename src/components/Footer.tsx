export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-charcoal py-12">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 px-6 text-[12px] text-bone/45 md:flex-row md:items-center md:px-12">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-bone/20">
            <span className="block h-1.5 w-1.5 rounded-full bg-moss" />
          </span>
          <span className="font-display text-sm text-bone/80">
            Evergrove Landscape Studio
          </span>
        </div>
        <div className="uppercase tracking-[0.22em]">
          © {new Date().getFullYear()} · Crafted in Waterloo, Ontario
        </div>
      </div>
    </footer>
  );
}
