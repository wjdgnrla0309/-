import { SectionHeader } from "../components/SectionHeader";
import { NEWS_ITEMS } from "../data/siteContent";

export function NewsSection() {
  return (
    <section id="news" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-10">
        <SectionHeader label="Latest News" title="KUMA NEWS" className="!mt-0" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {NEWS_ITEMS.map(([date, title, description]) => (
          <article key={title} className="bg-racing-card p-6 rounded-xl border border-zinc-800">
            <span className="text-xs font-mono text-racing-green">{date}</span>
            <h3 className="text-lg font-black tracking-[-0.03em] text-white mt-4">{title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed mt-3">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
