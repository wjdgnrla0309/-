import type { LucideIcon } from "lucide-react";
type ScrambleSpecCardProps = { icon: LucideIcon; label: string; targetValue: string; subText: string; accentColor: string; };

export function ScrambleSpecCard({
  icon: Icon,
  label,
  targetValue,
  subText,
  accentColor,
}: ScrambleSpecCardProps) {
  return (
    <div
      className="group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0c0d12] p-5 shadow-lg transition-all duration-300 hover:border-zinc-700"
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${accentColor} opacity-0 transition-opacity duration-500 group-hover:opacity-5`} />
      <div className="mb-1 flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
        <Icon className="h-3.5 w-3.5 text-zinc-400 transition-colors group-hover:text-racing-green" />
        {label}
      </div>
      <div className="mt-1 text-2xl font-black tracking-wider text-zinc-500/70 transition-transform duration-200 group-hover:scale-105 md:text-3xl">
        {targetValue}
      </div>
      <div className="mt-2 inline-flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-mono text-zinc-400">
        <span className="h-1 w-1 animate-ping rounded-full bg-racing-green" />
        {subText}
      </div>
    </div>
  );
}
