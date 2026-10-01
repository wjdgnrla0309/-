import { ArrowUpRight, FileText, Gauge, ShieldCheck, Zap } from "lucide-react";
import { SPONSOR_LIST } from "../data/siteContent";
import { SectionHeader } from "../components/SectionHeader";
import { staticAsset } from "../utils/staticAsset";
import { useState } from "react";
import { SponsorMarquee } from "../components/SponsorMarquee";

export function SponsorshipSection() {
  const [isSponsorListOpen, setIsSponsorListOpen] = useState(false);

  return (
    <section id="sponsors" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="max-w-3xl">
        <SectionHeader
          label="SPONSORSHIP"
          title={"열정적인 엔지니어들과 함께\n모빌리티의 미래를 이끌어주세요."}
          className="!mt-0"
        />
      </div>

      <div className="mt-10 grid gap-8 border-t border-zinc-800 pt-8 md:grid-cols-3">
        <div>
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-racing-green">
            <Gauge className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-xl font-black tracking-[-0.04em] text-white">강력한 브랜드 노출</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            차량, 피트 스테이션, 작업복, 공식 SNS 채널을 통해 실제 레이싱 생태계에 브랜드를 확실히 노출합니다.
          </p>
        </div>

        <div>
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-racing-green">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-xl font-black tracking-[-0.04em] text-white">우수 공학 인재 연계</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            CAD, 해석, 제어, 실차 테스트를 경험한 학생 엔지니어들과의 인재 네트워킹과 기술 협업을 지원합니다.
          </p>
        </div>

        <div>
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-racing-green">
            <Zap className="h-5 w-5" />
          </div>
          <h3 className="mb-2 text-xl font-black tracking-[-0.04em] text-white">실차 검증과 피드백</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            후원 부품과 기술이 실제 주행 환경에서 검증되고, 데이터 기반 개선 피드백을 통해 함께 성장합니다.
          </p>
        </div>
      </div>

      <SponsorMarquee />

      <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row">
        <button
          type="button"
          aria-expanded={isSponsorListOpen}
          onClick={() => setIsSponsorListOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-racing-green hover:text-racing-green"
        >
          {isSponsorListOpen ? "스폰서 목록 닫기" : "스폰서 목록 보기"}
        </button>
        <button className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-racing-green hover:text-black">
          <FileText className="mr-2 h-4 w-4" />
          제안서 다운로드 (PDF)
        </button>
      </div>

      <div
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
          isSponsorListOpen ? "mt-8 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {SPONSOR_LIST.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${sponsor.name} 공식 사이트 열기`}
                className="group flex min-h-16 items-center rounded-xl border border-zinc-800 bg-racing-card px-5 text-sm font-bold tracking-[0.08em] text-zinc-200 transition-colors hover:border-racing-green/60 hover:text-racing-green"
              >
                {sponsor.logo && (
                  <img
                    src={sponsor.logo ? staticAsset(sponsor.logo) : undefined}
                    alt={`${sponsor.name} 로고`}
                    className="h-9 w-20 shrink-0 object-contain object-left"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                )}
                <span>{sponsor.name}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-racing-green" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== CONTACT US =====
