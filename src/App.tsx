import { useState } from "react";
import { Zap, ShieldCheck, Mail, Phone, MapPin, FileText, Gauge, Menu, X, ArrowUpRight } from "lucide-react";

import { VEHICLE_DATABASE } from "./data/specs";
import kumaLogo from "../KUMA LOGO.webp";

type VehicleYear = "2026" | "2025" | "2024" | "2023";

type SectionHeaderProps = {
  label: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

function SectionHeader({ label, title, align = "left", className = "" }: SectionHeaderProps) {
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

function VehicleDetailPanel({
  selectedYear,
  selectedVehicle,
  image,
}: {
  selectedYear: VehicleYear;
  selectedVehicle: (typeof VEHICLE_DATABASE)[keyof typeof VEHICLE_DATABASE];
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

function VehicleSpecsSection({
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
              <>
                <button
                key={year}
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
                  src={vehicleCardImages[year]}
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
                    isSelected && isDetailOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <VehicleDetailPanel selectedYear={selectedYear} selectedVehicle={selectedVehicle} image={vehicleCardImages[selectedYear]} />
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <VehicleDetailPanel selectedYear={selectedYear} selectedVehicle={selectedVehicle} image={vehicleCardImages[selectedYear]} />
        </div>
      </div>
    </section>
  );
}

function AboutKumaSection() {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="w-full">
        <SectionHeader label="About KUMA" title="Engineering With Combustion" className="!mt-0" />
        <div className="mt-6 space-y-4 text-base leading-7 text-zinc-400 md:text-lg">
          <p>
            KUMA는 내연기관 포뮬러 차량을 직접 설계하고 제작하며, 데이터 기반 주행으로 차량의 완성도를 높이는 레이싱 동아리입니다.
          </p>
          <p>
            저희 동아리는 전공지식을 활용하여 레이스 차량을 설계 및 제작하고, 공학도로서의 역량을 기르기 위한 소양을 쌓는 것을 목표로 하고 있습니다.
          </p>
          <p>
            주요 활동으로는 KSAE에서 주최하는 대학생 자작자동차 대회 Formula 부문에 직접 제작한 레이스차량으로 참가하여 타 대학교 팀들과 경쟁하고, 지식을 나누는 활동을 이어가고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection({
  setSelectedAchievement,
}: {
  setSelectedAchievement: (achievement: (typeof ACHIEVEMENTS)[number] | null) => void;
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
                src={achievement.image}
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

function NewsSection() {
  return (
    <section id="news" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-10">
        <SectionHeader label="Latest News" title="KUMA NEWS" className="!mt-0" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          ["2026.03", "KNU-F26 설계 및 제작 진행", "내연기관 파워트레인과 경량 차체 패키지를 중심으로 새 시즌 차량을 준비하고 있습니다. 2026년 대회당시 사용하지 못했던 터보시스템을 구축중에 있습니다."],
          ["2025.11", "시즌 데이터 분석 완료", "주행 로그와 차량 데이터를 바탕으로 다음 시즌의 개선 항목을 정리했습니다."],
          ["2025.09", "팀 신규 부원 모집", "설계, 제작, 주행 테스트까지 함께할 새로운 팀원을 기다립니다."],
        ].map(([date, title, description]) => (
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

function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-10">
        <SectionHeader label="Race & Workshop" title="KUMA GALLERY" className="!mt-0" />
        <p className="text-sm text-zinc-400 mt-4">대회장, 작업실, 차량 제작 과정을 기록하는 공간입니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <figure className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <img
            src="/cars/KUMA_testdriveing_filmcam.jpg"
            alt="KUMA 차량 테스트 주행"
            className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="p-5">
            <span className="text-xs font-mono text-racing-green">TEST DAY</span>
            <h3 className="text-lg font-black tracking-[-0.03em] text-white mt-1">차량 테스트 주행</h3>
          </figcaption>
        </figure>
        <figure className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <img
            src="/cars/KakaoTalk_20260829_190154401.jpg"
            alt="KUMA 차량 대회 주행 모습"
            className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="p-5">
            <span className="text-xs font-mono text-racing-green">COMPETITION DAY</span>
            <h3 className="text-lg font-black tracking-[-0.03em] text-white mt-1">대회 주행 기록</h3>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function SponsorshipSection() {
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

      <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 md:p-8">
        <div className="sponsor-marquee sponsor-marquee-right">
          <div className="sponsor-track">
            {[...SPONSORS, ...SPONSORS].map((sponsor, index) => (
              <span key={`${sponsor.name}-${index}`} className="sponsor-chip">
                {sponsor.name}
              </span>
            ))}
          </div>
        </div>

        <div className="sponsor-marquee sponsor-marquee-left mt-4">
          <div className="sponsor-track">
            {[...SPONSORS.slice().reverse(), ...SPONSORS.slice().reverse()].map((sponsor, index) => (
              <span key={`${sponsor.name}-reverse-${index}`} className="sponsor-chip sponsor-chip-muted">
                {sponsor.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row">
        <button className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-racing-green hover:text-racing-green">
          스폰서 목록 보기
        </button>
        <button className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-racing-green hover:text-black">
          <FileText className="mr-2 h-4 w-4" />
          제안서 다운로드 (PDF)
        </button>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <SectionHeader label="Direct Contact" title="Contact Us" className="!mt-0" />
          <p className="text-sm text-zinc-400 mt-4">
            스폰서십 제휴, 기술 자문, 부품 테스트 관련 문의를 남겨주시면 24시간 내에 회신드립니다.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3 text-zinc-300">
              <MapPin className="w-5 h-5 text-racing-green shrink-0 mt-0.5" />
              <span> 충청남도 천안시 서북구 천안대로 1223-24 / 국립공주대학교 천안공과대학 학생회관 318호</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Mail className="w-5 h-5 text-racing-green shrink-0" />
              <span>team-formula@university.ac.kr</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Phone className="w-5 h-5 text-racing-green shrink-0" />
              <span> 팀장 : 노경민 / 연락처 : 010-1234-5678 / 메일 : team-formula@university.ac.kr</span>
            </div>
          </div>
        </div>

        <form className="bg-racing-card p-6 rounded-xl border border-zinc-800 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">성함 / 담당자명</label>
            <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green" placeholder="홍길동" />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">소속 기업 / 기관</label>
            <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green" placeholder="기업명 또는 부서명" />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">회신받을 이메일</label>
            <input type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green" placeholder="partner@company.com" />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">문의 내용</label>
            <textarea rows={3} className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green" placeholder="스폰서십 제안 또는 문의 사항을 적어주세요."></textarea>
          </div>
          <button type="submit" className="w-full py-2.5 bg-racing-green text-black font-bold text-sm rounded hover:bg-racing-blue hover:text-white transition-colors">
            문의 메시지 전송하기
          </button>
        </form>
      </div>
    </section>
  );
}

export default function App() {
  const [selectedYear, setSelectedYear] = useState<VehicleYear>("2026");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<(typeof ACHIEVEMENTS)[number] | null>(null);
  const selectedVehicle = VEHICLE_DATABASE[selectedYear] ?? VEHICLE_DATABASE["2026"];

  return (
    <div id="top" className="min-h-screen bg-racing-dark text-zinc-100 selection:bg-racing-blue selection:text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <a href="#top" className="flex shrink-0 items-center gap-4" aria-label="KUMA Racing 최상단으로 이동">
            <img
              src={kumaLogo}
              alt="KUMA Racing"
              className="h-10 w-10 object-contain"
              onError={(event) => {
                event.currentTarget.src = "/kuma-logo.svg";
              }}
            />
            <span className="text-lg font-black tracking-[-0.08em] text-white leading-none">KUMA</span>
          </a>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-8 text-sm font-semibold tracking-[0.08em] text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">ABOUT US</a>
            <a href="#competition" className="hover:text-white transition-colors">COMPETITION</a>
            <a href="#news" className="hover:text-white transition-colors">NEWS</a>
            <a href="#gallery" className="hover:text-white transition-colors">GALLERY</a>
            <a href="#sponsors" className="hover:text-white transition-colors">SPONSORS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT US</a>
          </nav>

          <div className="hidden md:block w-[120px]" aria-hidden="true" />
          <div className="ml-auto md:hidden">
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="p-2 text-zinc-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 py-4">
            <div className="flex flex-col gap-4 text-sm font-medium text-zinc-300">
              {[
                ["ABOUT US", "#about"],
                ["COMPETITION", "#competition"],
                ["NEWS", "#news"],
                ["GALLERY", "#gallery"],
                ["SPONSORS", "#sponsors"],
                ["CONTACT US", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-zinc-800/70 pb-3 hover:text-racing-green transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-racing-green animate-pulse"></span>
          <span>
            <span className="text-white font-semibold">KUMA</span>
            <span> Kongju University Motorsport Association</span>
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-[-0.05em] text-white max-w-4xl leading-[0.98]">
          PRECISION ENGINEERING, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-green to-racing-blue">
            UNCOMPROMISING SPEED
          </span>
        </h1>

        <p className="mt-6 w-full max-w-3xl text-zinc-400 text-base md:text-lg leading-7 break-keep">
          <span className="block">가상 해석(CAE/CFD)부터 정밀 가공, 엔진 맵핑과 내연기관 파워트레인 튜닝까지.</span>
          <span className="block">트랙 위에서 가장 완벽한 랩타임을 증명하는 엔지니어링 집약체입니다.</span>
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8 w-full max-w-2xl">
          <div className="bg-racing-card/60 p-4 rounded-xl border border-zinc-800/80">
            <div className="text-xs text-zinc-500 font-mono">CURB WEIGHT</div>
            <div className="text-2xl md:text-3xl font-bold font-mono text-white mt-1">{selectedVehicle.telemetry.curbWeight}</div>
          </div>
          <div className="bg-racing-card/60 p-4 rounded-xl border border-zinc-800/80">
            <div className="text-xs text-zinc-500 font-mono">MAX POWER</div>
            <div className="text-2xl md:text-3xl font-bold font-mono text-racing-green mt-1">{selectedVehicle.telemetry.maxPower}</div>
          </div>
          <div className="bg-racing-card/60 p-4 rounded-xl border border-zinc-800/80">
            <div className="text-xs text-zinc-500 font-mono">TOP SPEED</div>
            <div className="text-2xl md:text-3xl font-bold font-mono text-white mt-1">{selectedVehicle.telemetry.topSpeed}</div>
          </div>
        </div>

        <div className="mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <img
            src="/cars/KUMA_testdriveing_filmcam.jpg"
            alt="KUMA 내연기관 포뮬러 차량 주행 모습"
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      <VehicleSpecsSection selectedYear={selectedYear} setSelectedYear={setSelectedYear} selectedVehicle={selectedVehicle} />
      <AboutKumaSection />
      <AchievementsSection setSelectedAchievement={setSelectedAchievement} />
      <NewsSection />
      <GallerySection />
      <SponsorshipSection />
      <ContactSection />

      <section className="border-t border-zinc-800 bg-zinc-950 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Follow KUMA</span>
            <h2 className="text-3xl font-black tracking-[-0.06em] text-white mt-1">Instagram Feed</h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-racing-green hover:text-racing-blue transition-colors"
          >
            <span aria-hidden="true">◎</span> @fs_team_kuma
          </a>
        </div>
        <div className="instagram-marquee" aria-label="KUMA Instagram 피드">
          <div className="instagram-track">
            {[...INSTAGRAM_FEED, ...INSTAGRAM_FEED].map((post, index) => (
              <a
                key={`${post.id}-${index}`}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                className="instagram-tile group"
                aria-label={`${post.label} 인스타그램 게시물 보기`}
              >
                <img src={post.image} alt={post.label} loading="lazy" />
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {post.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
        © KUMA Racing Team. All engineering telemetry & CAD data reserved.
      </footer>

      {selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] text-racing-green uppercase">{selectedAchievement.season}</p>
                <h3 className="mt-1 text-xl font-bold text-white">{selectedAchievement.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAchievement(null)}
                className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300 transition hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="h-full min-h-[260px] bg-zinc-900">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-zinc-400">{selectedAchievement.short}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {selectedAchievement.specs.map((spec) => (
                    <div key={spec.label} className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                      <span className="block text-[10px] font-mono tracking-[0.18em] text-zinc-500 uppercase">{spec.label}</span>
                      <span className="mt-2 block text-base font-semibold text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedYear(selectedAchievement.season);
                    setSelectedAchievement(null);
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
    </div>
  );
}
// 공식 스폰서사 리스트
const SPONSORS = [
  { name: "KONGJU UNIVERSITY" },
  { name: "ANSYS" },
  { name: "MISUMI" },
  { name: "HOOSIER" },
  { name: "OZ RACING" },
  { name: "ECU MASTER" },
  { name: "AIMSAK" },
  { name: "KUMA RACING" },
  { name: "RACE LAB" },
  { name: "KOREA RACE" },
];

const ACHIEVEMENTS = [
  {
    season: "2026" as const,
    category: "Season",
    title: "KNU-F26",
    short: "고회전 엔진과 경량 패키지로 성능을 극대화했습니다.",
    rank: "1st / 12 teams",
    image: "/cars/KUMA_testdriveing_filmcam.jpg",
    specs: [
      { label: "Engine", value: "321cc DOHC" },
      { label: "Power", value: "50 PS" },
      { label: "Top Speed", value: "131 km/h" },
      { label: "Class", value: "Formula" },
    ],
  },
  {
    season: "2025" as const,
    category: "Competition",
    title: "KNU-F25",
    short: "주행 성능 데이터 기반으로 공력과 안정성을 개선했습니다.",
    rank: "2nd / 10 teams",
    image: "/cars/KakaoTalk_20260829_190154401.jpg",
    specs: [
      { label: "Engine", value: "321cc DOHC" },
      { label: "Power", value: "48 PS" },
      { label: "Top Speed", value: "126 km/h" },
      { label: "Class", value: "Formula" },
    ],
  },
  {
    season: "2024" as const,
    category: "Engineering",
    title: "Powertrain",
    short: "엔진 세팅과 제어 최적화를 통해 트랙 대응력을 높였습니다.",
    rank: "3rd / 8 teams",
    image: "/cars/KUMA_testdriveing_filmcam.jpg",
    specs: [
      { label: "Engine", value: "321cc DOHC" },
      { label: "Power", value: "45 PS" },
      { label: "Top Speed", value: "121 km/h" },
      { label: "Class", value: "Formula" },
    ],
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/fs_team_kuma?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

const INSTAGRAM_FEED = [
  { id: "DYejgSRkl2H", label: "KUMA 2026 vehicle development", url: "https://www.instagram.com/p/DYejgSRkl2H/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDYejgSRkl2H%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DTg0iYAEqiw", label: "KUMA 2026 season story", url: "https://www.instagram.com/p/DTg0iYAEqiw/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDTg0iYAEqiw%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DQs4zM_kkpY", label: "KUMA sponsor story", url: "https://www.instagram.com/p/DQs4zM_kkpY/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDQs4zM_kkpY%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DIk6cFVSNGL", label: "KUMA engineering support", url: "https://www.instagram.com/p/DIk6cFVSNGL/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDIk6cFVSNGL%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DGPmxrsywBW", label: "KUMA Ansys partnership", url: "https://www.instagram.com/p/DGPmxrsywBW/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDGPmxrsywBW%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DBEU6BiyBPn", label: "KUMA team story", url: "https://www.instagram.com/p/DBEU6BiyBPn/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBEU6BiyBPn%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DBEPeumyn6S", label: "KUMA FSK 2024", url: "https://www.instagram.com/p/DBEPeumyn6S/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBEPeumyn6S%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DBBxq94SSRE", label: "KUMA endurance race", url: "https://www.instagram.com/p/DBBxq94SSRE/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBBxq94SSRE%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DBBpp_rS1E1", label: "KUMA race preparation", url: "https://www.instagram.com/p/DBBpp_rS1E1/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBBpp_rS1E1%2Fmedia%2F%3Fsize%3Dm" },
  { id: "DBBe7OwyiR4", label: "KUMA FSK 2024 inspection", url: "https://www.instagram.com/p/DBBe7OwyiR4/", image: "https://images.weserv.nl/?url=www.instagram.com%2Fp%2FDBBe7OwyiR4%2Fmedia%2F%3Fsize%3Dm" },
];