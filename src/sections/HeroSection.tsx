import { Clock, Layers, Lock, Timer, Zap } from "lucide-react";
import { ScrambleSpecCard } from "../components/ScrambleSpecCard";
import { staticAsset } from "../utils/staticAsset";

export type CountdownTime = { days: number; hours: number; minutes: number; seconds: number };
type HeroSectionProps = { timeLeft: CountdownTime; onOpenDecrypt: () => void };

export function HeroSection({ timeLeft, onOpenDecrypt }: HeroSectionProps) {
  return (
<section className="relative overflow-hidden pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <a
          href="https://docs.google.com/forms/d/1UW6AyJlinVzvljpt24KemfcFjsjP62C-QlaEJsmy0qY/viewform"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="신입부원 모집 지원서 열기"
          className="relative z-10 mb-6 flex w-24 shrink-0 flex-col items-center gap-2 self-start rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-racing-green xl:absolute xl:left-6 xl:top-24 xl:mb-0"
        >
          <img src={staticAsset("recruit-qr.svg")} alt="신입부원 모집 지원 QR 코드" width={96} height={96} className="h-24 w-24 rounded bg-white" />
          <span className="text-xs font-semibold text-zinc-200">신입부원 모집</span>
        </a>
        <div className="pointer-events-none absolute -right-8 top-16 select-none text-[18rem] font-black leading-none text-white/[0.025] md:right-16 md:top-8 md:text-[28rem]">
          ?
        </div>
        <div className="pointer-events-none absolute -left-8 top-[42%] rotate-[10deg] select-none text-[14rem] font-black leading-none text-white/[0.01] md:left-8 md:text-[22rem]">
          ?
        </div>

        <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-racing-green/40 text-xs font-mono text-zinc-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-racing-green animate-pulse"></span>
          <span>
            <span className="text-racing-green font-semibold">KUMA 2027 DEVELOPMENT PROGRAM</span>
            <span> · IN PROGRESS</span>
          </span>
        </div>

        <h1 className="relative z-10 text-4xl md:text-6xl font-black tracking-[-0.05em] text-white max-w-4xl leading-[0.98]">
          <span className="text-racing-green">K</span>NOWLEDGE <span className="text-racing-blue">U</span>NITES. <br />
          <span className="bg-gradient-to-r from-racing-green to-racing-blue bg-clip-text text-transparent">
            MOTION <span>A</span>CCELERATES.
          </span>
        </h1>

        <p className="relative z-10 mt-6 w-full max-w-3xl text-zinc-400 text-base md:text-lg leading-7 break-keep">
          <span className="block">2026 시즌의 기록은 끝났고, 새로운 차량의 설계는 이미 시작됐습니다.</span>
          <span className="block">KUMA가 트랙에 꺼내 놓을 2027 머신의 모습을 가장 먼저 만나보세요.</span>
        </p>

        <div className="relative z-10 mt-8 flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 md:gap-6 md:px-6">
          <div className="flex items-center gap-2 border-r border-zinc-800 pr-4 text-xs font-mono uppercase tracking-widest text-racing-green">
            <Clock className="h-4 w-4" /> UNVEILING IN
          </div>
          <div className="flex gap-3 font-mono md:gap-5">
            {[
              [timeLeft.days, "DAYS"],
              [timeLeft.hours, "HOURS"],
              [timeLeft.minutes, "MIN"],
              [timeLeft.seconds, "SEC"],
            ].map(([value, label], index) => (
              <div key={label} className="text-center">
                <span className={`text-xl font-black md:text-2xl ${index === 3 ? "text-racing-green" : "text-white"}`}>
                  {String(value).padStart(index === 0 ? 1 : 2, "0")}
                </span>
                <span className="block text-[9px] text-zinc-500">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-4 md:gap-8">
          <ScrambleSpecCard
            icon={Layers}
            label="CAR WEIGHT"
            targetValue="≤ 1XX kg"
            subText="TARGET // CLASSIFIED"
            accentColor="from-racing-green to-transparent"
          />
          <ScrambleSpecCard
            icon={Zap}
            label="MAX HP"
            targetValue="≥ 1XX PS"
            subText="OUTPUT // CLASSIFIED"
            accentColor="from-racing-blue to-transparent"
          />
          <ScrambleSpecCard
            icon={Timer}
            label="TOP SPEED"
            targetValue="≥ 1XX km/h"
            subText="LIMIT // CLASSIFIED"
            accentColor="from-racing-green to-transparent"
          />
        </div>

          <div className="relative mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <img
            src={staticAsset("cars/KUMA_testdriveing_filmcam.jpg")}
            alt="KUMA 2027 개발 차량을 암시하는 테스트 주행 모습"
            className="h-[400px] w-full object-cover brightness-[0.22] contrast-125 grayscale transition-transform duration-500 hover:scale-105 hover:brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />
          <div className="scanline-overlay pointer-events-none absolute inset-0 opacity-35" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-racing-green/30 bg-black/45 px-8 py-6 text-center backdrop-blur-[2px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-racing-green/60 bg-zinc-950/80 text-racing-green shadow-[0_0_25px_rgba(36,198,126,0.2)]">
                <Lock className="h-7 w-7" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold tracking-[0.28em] text-racing-green">RESTRICTED VEHICLE</p>
                <p className="mt-2 text-sm font-semibold text-white">차량 이미지 기밀 유지 중</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-left md:p-7">
            <div>
              <span className="text-[10px] font-mono tracking-[0.24em] text-racing-green">NEXT VEHICLE / 2027</span>
              <p className="mt-2 text-xl font-black tracking-[-0.04em] text-white md:text-3xl">KUN-F27은 곧 공개됩니다.</p>
            </div>
            <span className="text-6xl font-black leading-none text-white/90 md:text-8xl"></span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onOpenDecrypt()}
          className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-lg bg-racing-green px-5 py-2.5 text-xs font-mono font-bold text-black shadow-[0_0_20px_rgba(36,198,126,0.3)] transition hover:bg-lime-400 active:scale-95"
        >
          <Lock className="h-3.5 w-3.5" /> [+] DECRYPT CHASSIS SPEC
        </button>
      </section>

  );
}
