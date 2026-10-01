type SectionHeaderProps = {
 label: string; title: string; align?: "left" | "center"; className?: string;
};

export function SectionHeader({ label, title, align = "left", className = "" }: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`${alignment} ${className}`}>
      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[11px] font-bold tracking-[0.28em] text-zinc-300 uppercase">
        {label}
      </span>
      <h2 className="mt-6 text-2xl font-black leading-[1] tracking-[-0.07em] text-white whitespace-pre-line md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
