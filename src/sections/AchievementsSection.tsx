import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { ACHIEVEMENTS, type Achievement } from "../data/siteContent";
import { staticAsset } from "../utils/staticAsset";

export function AchievementsSection({
  setSelectedAchievement,
}: {
  setSelectedAchievement: (achievement: Achievement | null) => void;
}) {
  return (
    <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <SectionHeader label="Latest Achievements" title="Awards & Records" className="!mt-0" />
        <span className="text-sm text-zinc-500">KUMA의 시즌별 성과와 차량 데이터를 확인하세요.</span>
      </div>

      <div className="space-y-5">
        {ACHIEVEMENTS.map((achievement) => (
          <button
            key={achievement.title}
            type="button"
            onClick={() => setSelectedAchievement(achievement)}
            className="group flex w-full overflow-hidden rounded-2xl border border-zinc-800 bg-racing-card text-left transition-colors hover:border-racing-green/60"
          >
            <div className="h-40 w-[220px] shrink-0 overflow-hidden bg-zinc-900 md:h-44 md:w-[260px]">
              <img
                src={staticAsset(achievement.image)}
                alt={achievement.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 items-center justify-between gap-6 p-5 md:p-6">
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-racing-green uppercase">{achievement.season}</span>
                  <span className="text-[10px] font-mono tracking-[0.18em] text-zinc-500 uppercase">{achievement.category}</span>
                </div>

                <h3 className="text-xl font-black tracking-[-0.04em] text-white md:text-2xl">{achievement.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">{achievement.short}</p>
              </div>

              <div className="flex shrink-0 items-end gap-5 md:gap-8">
                <div className="text-left">
                  <span className="block text-[10px] font-mono tracking-[0.18em] text-zinc-500 uppercase">Ranking</span>
                  <span className="mt-1 block text-sm font-semibold text-white md:text-base">{achievement.rank}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-racing-green md:text-sm">
                  View <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
