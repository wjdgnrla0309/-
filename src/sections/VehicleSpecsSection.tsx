import { SectionHeader } from "../components/SectionHeader";
import { VEHICLE_DATABASE, type VehicleData, type VehicleYear } from "../data/specs";
import { useState } from "react";
import { staticAsset } from "../utils/staticAsset";

// ===== COMPETITION: 차량 상세 패널 =====
function VehicleDetailPanel({
  selectedYear,
  selectedVehicle,
  image,
}: {
  selectedYear: VehicleYear;
  selectedVehicle: VehicleData;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-racing-card shadow-xl">
      <div className="grid md:grid-cols-[1.2fr_minmax(0,1fr)]">
        <div className="relative min-h-[360px] bg-zinc-900">
          <img
            src={image}
            alt={`${selectedVehicle.modelName} vehicle preview`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-racing-green">{selectedVehicle.carNumber}</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">{selectedVehicle.modelName}</h3>
              </div>
              <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-100">
                {selectedYear}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-racing-card p-6 md:p-7">
          <div className="mb-5 flex items-center justify-between gap-2 border-b border-zinc-800 pb-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.22em] uppercase text-racing-green">Spec Sheet</span>
            <span className="text-sm font-semibold text-zinc-300">{selectedVehicle.telemetry.maxPower}</span>
          </div>

          <div className="space-y-3">
            {selectedVehicle.specs.map((item) => (
              <div key={item.label} className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-3">
                <div className="text-[11px] font-mono font-semibold tracking-[0.16em] uppercase text-zinc-500">{item.label}</div>
                <div className="mt-2 text-base font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== COMPETITION: 차량 제원 =====
export function VehicleSpecsSection({
  selectedYear,
  setSelectedYear,
  selectedVehicle,
}: {
  selectedYear: VehicleYear;
  setSelectedYear: (year: VehicleYear) => void;
  selectedVehicle: (typeof VEHICLE_DATABASE)[keyof typeof VEHICLE_DATABASE];
}) {
  const [isDetailOpen, setIsDetailOpen] = useState(true);
  const years: VehicleYear[] = ["2026", "2025", "2024", "2023"];
  const vehicleCardImages: Record<VehicleYear, string> = {
    "2026": "/cars/KUMA_testdriveing_filmcam.jpg",
    "2025": "/cars/KakaoTalk_20260829_190154401.jpg",
    "2024": "/cars/KUMA_testdriveing_filmcam.jpg",
    "2023": "/cars/KakaoTalk_20260829_190154401.jpg",
  };

  return (
    <section id="competition" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-8">
        <SectionHeader label="Vehicle Specs" title={selectedVehicle.modelName} className="!mt-0" />
        <p className="text-sm text-zinc-400 mt-3">{selectedVehicle.tagline}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="space-y-4">
          {years.map((year) => {
            const yearVehicle = VEHICLE_DATABASE[year];
            const isSelected = year === selectedYear;

            return (
              <div key={year} className="space-y-4">
                <button
                  type="button"
                  onClick={() => {
                    if (year === selectedYear) {
                      setIsDetailOpen((open) => !open);
                      return;
                    }

                    setSelectedYear(year);
                    setIsDetailOpen(true);
                  }}
                  aria-expanded={isSelected && isDetailOpen}
                  className={`group relative block h-28 w-full overflow-hidden rounded-2xl border text-left transition-all ${
                    isSelected
                      ? "border-racing-green/70 shadow-[0_0_0_1px_rgba(36,198,126,0.35)]"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <img
                    src={staticAsset(vehicleCardImages[year])}
                    alt={`${year} KUMA vehicle`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black tracking-[-0.08em] text-white/90">{year}</span>
                    <span className="mt-1 text-[9px] font-mono font-semibold tracking-[0.08em] text-zinc-100/80">
                      {yearVehicle.telemetry.maxPower} · {yearVehicle.telemetry.curbWeight} · {yearVehicle.telemetry.topSpeed}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-zinc-100/90">
                    <span>{yearVehicle.modelName}</span>
                    <span>{yearVehicle.carNumber}</span>
                  </div>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ease-out lg:hidden ${
                    isSelected && isDetailOpen ? "mt-0 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <VehicleDetailPanel selectedYear={year} selectedVehicle={yearVehicle} image={staticAsset(vehicleCardImages[year])} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <VehicleDetailPanel selectedYear={selectedYear} selectedVehicle={selectedVehicle} image={staticAsset(vehicleCardImages[selectedYear])} />
        </div>
      </div>
    </section>
  );
}
