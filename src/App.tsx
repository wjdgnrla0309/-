import { useState } from "react";
import { Zap, ShieldCheck, Mail, Phone, MapPin, ChevronRight, FileText, Gauge, Menu, X, Trophy, ArrowUpRight } from "lucide-react";

import { VEHICLE_DATABASE } from "./data/specs";
import kumaLogo from "../KUMA LOGO.webp";

export default function App() {
  const [selectedYear, setSelectedYear] = useState<"2026" | "2025" | "2024" | "2023">("2026");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const selectedVehicle = VEHICLE_DATABASE[selectedYear] ?? VEHICLE_DATABASE["2026"];

  return (
    <div id="top" className="min-h-screen bg-racing-dark text-zinc-100 selection:bg-racing-blue selection:text-white font-sans">
      {/* --- 네비게이션 바 --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">
          <a href="#top" className="flex shrink-0 items-center" aria-label="KUMA Racing 최상단으로 이동">
            <img
              src={kumaLogo}
              alt="KUMA Racing"
              className="h-12 w-12 object-contain"
              onError={(event) => {
                event.currentTarget.src = "/kuma-logo.svg";
              }}
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">ABOUT US</a>
            <a href="#competition" className="hover:text-white transition-colors">COMPETITION</a>
            <a href="#news" className="hover:text-white transition-colors">NEWS</a>
            <a href="#gallery" className="hover:text-white transition-colors">GALLERY</a>
            <a href="#sponsors" className="hover:text-white transition-colors">SPONSORS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT US</a>
          </nav>
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
        <div className="h-10 flex items-center justify-center border-t border-zinc-800/70">
          <a
            href="#competition"
            className="flex items-center gap-2 px-4 py-1 text-xs font-semibold text-racing-green hover:text-racing-blue transition-colors"
          >
            Digital Garage <ChevronRight className="w-3.5 h-3.5" />
          </a>
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

      {/* --- 메인 히어로 섹션 --- */}
      <section className="relative pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-racing-green animate-pulse"></span>
          KUMA ICE FORMULA RACING TEAM
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-4xl leading-tight">
          PRECISION ENGINEERING, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-green to-racing-blue">
            UNCOMPROMISING SPEED
          </span>
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl text-base md:text-lg">
          가상 해석(CAE/CFD)부터 정밀 가공, 엔진 맵핑과 내연기관 파워트레인 튜닝까지.
          트랙 위에서 가장 완벽한 랩타임을 증명하는 엔지니어링 집약체입니다.
        </p>

        {/* 텔레메트리 HUD 배지 */}
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
        {/* 메인 히어로 차량 대표 이미지 */}
        <div className="mt-12 w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <img
            src="/cars/KUMA_testdriveing_filmcam.jpg"
            alt="KUMA 내연기관 포뮬러 차량 주행 모습"
            className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* --- 대회 및 차량 제원 섹션 (#competition) --- */}
      <section id="competition" className="py-20 px-6 max-w-5xl mx-auto border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Vehicle Specs</span>
            <h2 className="text-3xl font-black text-white mt-1">{selectedVehicle.modelName}</h2>
            <p className="text-sm text-zinc-400 mt-1">{selectedVehicle.tagline}</p>
          </div>
          <div className="flex gap-2 bg-zinc-900 p-1.5 rounded-lg border border-zinc-800">
            {(["2026", "2025", "2024", "2023"] as const).map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${selectedYear === year ? "bg-zinc-800 text-racing-green shadow-sm" : "text-zinc-400 hover:text-white"}`}
              >
                {year} Season
              </button>
            ))}
          </div>
        </div>

        <div className="bg-racing-card rounded-2xl border border-zinc-800 p-6 md:p-8 shadow-xl">
          <div className="divide-y divide-zinc-800/80">
            {selectedVehicle.specs.map((item) => (
              <div key={item.label} className="flex justify-between items-center gap-6 py-3.5 text-sm">
                <span className="text-zinc-400 font-medium">{item.label}</span>
                <span className="font-mono text-white font-semibold text-right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- KUMA 소개 섹션 (#about) --- */}
      <section id="about" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="max-w-3xl">
          <span className="text-xs font-mono text-racing-green tracking-widest uppercase">About KUMA</span>
          <h2 className="text-3xl font-black text-white mt-1">Engineering With Combustion</h2>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            KUMA는 내연기관 포뮬러 차량을 직접 설계하고 제작하며, 데이터 기반 주행으로 차량의 완성도를 높이는 레이싱 동아리입니다.
          </p>
        </div>
      </section>

      {/* --- 수상 및 기록 섹션 (#achievements) --- */}
      <section id="achievements" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Latest Achievements</span>
            <h2 className="text-3xl font-black text-white mt-1">Awards &amp; Records</h2>
          </div>
          <span className="text-sm text-zinc-500">KUMA의 시즌별 성과와 차량 데이터를 확인하세요.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((achievement) => (
            <article key={achievement.title} className="group bg-racing-card rounded-2xl border border-zinc-800 p-6 hover:border-racing-green/60 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-racing-green/10 text-racing-green">
                  <Trophy className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-zinc-500">{achievement.season} SEASON</span>
              </div>
              <p className="text-xs font-mono text-racing-green mt-8">{achievement.category}</p>
              <h3 className="text-xl font-bold text-white mt-2">{achievement.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">{achievement.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-800 pt-4">
                <div>
                  <span className="block text-xs text-zinc-500">VEHICLE</span>
                  <span className="text-sm font-semibold text-white">{achievement.vehicle}</span>
                </div>
                <div>
                  <span className="block text-xs text-zinc-500">KEY RECORD</span>
                  <span className="text-sm font-semibold text-white">{achievement.record}</span>
                </div>
              </div>
              <a
                href="#competition"
                onClick={() => setSelectedYear(achievement.season)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-racing-green hover:text-racing-blue transition-colors"
              >
                View vehicle specs <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* --- 뉴스 섹션 (#news) --- */}
      <section id="news" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="mb-10">
          <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Latest News</span>
          <h2 className="text-3xl font-black text-white mt-1">KUMA NEWS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ["2026.03", "KNU-F26 설계 및 제작 진행", "내연기관 파워트레인과 경량 차체 패키지를 중심으로 새 시즌 차량을 준비하고 있습니다."],
            ["2025.11", "시즌 데이터 분석 완료", "주행 로그와 차량 데이터를 바탕으로 다음 시즌의 개선 항목을 정리했습니다."],
            ["2025.09", "팀 신규 부원 모집", "설계, 제작, 주행 테스트까지 함께할 새로운 팀원을 기다립니다."],
          ].map(([date, title, description]) => (
            <article key={title} className="bg-racing-card p-6 rounded-xl border border-zinc-800">
              <span className="text-xs font-mono text-racing-green">{date}</span>
              <h3 className="text-lg font-bold text-white mt-4">{title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mt-3">{description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* --- 대회장 및 작업 이미지 섹션 (#gallery) --- */}
      <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="mb-10">
          <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Race & Workshop</span>
          <h2 className="text-3xl font-black text-white mt-1">KUMA GALLERY</h2>
          <p className="text-sm text-zinc-400 mt-2">대회장, 작업실, 차량 제작 과정을 기록하는 공간입니다.</p>
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
              <h3 className="text-lg font-bold text-white mt-1">차량 테스트 주행</h3>
            </figcaption>
          </figure>
          <div className="min-h-96 rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/60 flex flex-col items-center justify-center text-center px-6">
            <span className="text-4xl text-zinc-600">+</span>
            <h3 className="text-lg font-bold text-zinc-300 mt-3">대회장 또는 작업 이미지 추가</h3>
            <p className="text-sm text-zinc-500 mt-2">public/cars 폴더에 이미지를 넣고 이 영역에 연결하세요.</p>
          </div>
        </div>
      </section>

      <section id="sponsors" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Partnership</span>
          <h2 className="text-3xl font-black text-white mt-1">Sponsorship & Cooperation</h2>
          <p className="text-sm text-zinc-400 mt-2">
            열정적인 모터스포츠 엔지니어들과 함께 내연기관 레이싱 기술의 한계를 넓혀갈 파트너 기업을 모십니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-racing-card p-6 rounded-xl border border-zinc-800">
            <Gauge className="w-8 h-8 text-racing-green mb-4" />
            <h4 className="font-bold text-white mb-2">강력한 브랜드 노출</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              차량 카울 리버리, 피트 패독 부스, 레이싱 슈트 및 공식 SNS 채널을 통한 산학 홍보 극대화.
            </p>
          </div>

          <div className="bg-racing-card p-6 rounded-xl border border-zinc-800">
            <ShieldCheck className="w-8 h-8 text-racing-green mb-4" />
            <h4 className="font-bold text-white mb-2">우수 공학 인재 연계</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              CAD 설계, 유한요소해석(FEA), 차량 동역학 실무 경험을 갖춘 즉시 전력감 인재 네트워킹.
            </p>
          </div>

          <div className="bg-racing-card p-6 rounded-xl border border-zinc-800">
            <Zap className="w-8 h-8 text-racing-green mb-4" />
            <h4 className="font-bold text-white mb-2">실차 가혹 주행 피드백</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              후원 부품 및 계측 장비가 서킷 환경에서 기록하는 실시간 텔레메트리 데이터 피드백 제공.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Our Partners</span>
              <h3 className="text-2xl font-black text-white mt-1">Diamond Sponsors</h3>
            </div>
            <span className="text-xs text-zinc-500 font-mono">{SPONSORS.length} PARTNERS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {SPONSORS.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`${sponsor.name} 공식 사이트 열기`}
                className="group min-h-52 p-6 flex flex-col items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/80 hover:border-racing-green/60 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex w-full items-center justify-end">
                  <span className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-racing-green transition-colors"></span>
                </div>
                <div className="relative flex h-24 w-full items-center justify-center">
                  <span className="text-center text-3xl sm:text-4xl font-black tracking-tight text-racing-green group-hover:text-racing-blue transition-colors">
                    {sponsor.name}
                  </span>
                </div>
                <span className="text-xs leading-tight font-mono text-zinc-500">공식 사이트 방문</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-700 hover:border-racing-green text-sm font-semibold text-white transition-all">
            <FileText className="w-4 h-4 text-racing-green" /> 공식 스폰서십 제안서 다운로드 (PDF)
          </button>
        </div>
      </section>

      {/* --- 문의 및 컨택 섹션 (#contact) --- */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 연락처 및 연구실 정보 */}
          <div>
            <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Direct Contact</span>
            <h2 className="text-3xl font-black text-white mt-1">Contact Us</h2>
            <p className="text-sm text-zinc-400 mt-2">
              스폰서십 제휴, 기술 자문, 부품 테스트 관련 문의를 남겨주시면 24시간 내에 회신드립니다.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3 text-zinc-300">
                <MapPin className="w-5 h-5 text-racing-green shrink-0 mt-0.5" />
                <span>공학관 자작자동차 워크샵 / 연구실</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail className="w-5 h-5 text-racing-green shrink-0" />
                <span>team-formula@university.ac.kr</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <Phone className="w-5 h-5 text-racing-green shrink-0" />
                <span>팀장 / 기술 디렉터 연락처</span>
              </div>
            </div>
          </div>

          {/* 문의 폼 필드 */}
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

      {/* --- 인스타그램 피드 --- */}
      <section className="border-t border-zinc-800 bg-zinc-950 py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-racing-green tracking-widest uppercase">Follow KUMA</span>
            <h2 className="text-2xl font-black text-white mt-1">Instagram Feed</h2>
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
      {/* --- 푸터 --- */}
      <footer className="py-8 border-t border-zinc-900 text-center text-xs text-zinc-600 font-mono">
        © KUMA Racing Team. All engineering telemetry & CAD data reserved.
      </footer>
    </div>
  );
}
// 공식 스폰서사 리스트
const SPONSORS = [
  { name: "국립공주대학교", website: "https://www.kongju.ac.kr" },
  { name: "ANSYS", website: "https://www.ansys.com" },
  { name: "Upgrade-Motorsport", website: "https://upgrade-motorsport.com" },
  { name: "ECU Master", website: "https://www.ecumaster.com" },
  { name: "MISUMI", website: "https://kr.misumi-ec.com" },
  { name: "OZ Racing", website: "https://www.ozracing.com" },
  { name: "Hoosier Tire", website: "https://www.hoosiertire.com" },
  { name: "Aimsak", website: "https://www.aimsak.com" },
  { name: "대흥샤링", website: "https://www.daehung.co.kr" },
  { name: "충남 RISE 센터", website: "https://www.rise.or.kr" },
];

const ACHIEVEMENTS = [
  {
    season: "2026" as const,
    category: "SEASON RECORD",
    title: "KNU-F26 개발 성과",
    description: "고회전 자연흡기 파워트레인과 경량 패키지를 적용한 2026 시즌 차량 기록입니다.",
    vehicle: "KNU-F26",
    record: "50 ps · 131 km/h",
  },
  {
    season: "2025" as const,
    category: "COMPETITION RECORD",
    title: "KNU-F25 주행 기록",
    description: "내연기관 파워트레인과 공력 패키지를 바탕으로 완성한 2025 시즌 차량 기록입니다.",
    vehicle: "KNU-F25",
    record: "48 ps · 126 km/h",
  },
  {
    season: "2026" as const,
    category: "ENGINEERING RECORD",
    title: "Powertrain Development",
    description: "ECU 세팅과 엔진 데이터 분석을 통해 트랙 주행 성능을 지속적으로 개선하고 있습니다.",
    vehicle: "KNU-F26",
    record: "321 cc DOHC",
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