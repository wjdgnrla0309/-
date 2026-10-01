import { ArrowUpRight } from "lucide-react";
import type { Achievement } from "../data/siteContent";
import type { VehicleYear } from "../data/specs";
import { staticAsset } from "../utils/staticAsset";
type AchievementModalProps = { achievement: Achievement | null; onClose: () => void; onSelectVehicle: (year: VehicleYear) => void };
export function AchievementModal({ achievement, onClose, onSelectVehicle }: AchievementModalProps) {
  return (
    <>{achievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] text-racing-green uppercase">{achievement.season}</p>
                <h3 className="mt-1 text-xl font-bold text-white">{achievement.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => onClose()}
                className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300 transition hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="h-full min-h-[260px] bg-zinc-900">
                <img
                  src={staticAsset(achievement.image)}
                  alt={achievement.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-zinc-400">{achievement.short}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {achievement.specs.map((spec) => (
                    <div key={spec.label} className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                      <span className="block text-[10px] font-mono tracking-[0.18em] text-zinc-500 uppercase">{spec.label}</span>
                      <span className="mt-2 block text-base font-semibold text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onSelectVehicle(achievement.season);
                    onClose();
                  }}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-racing-green"
                >
                  Vehicle specs <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  );
}
