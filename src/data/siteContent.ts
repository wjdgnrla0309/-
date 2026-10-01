export type InstagramPost = { id: string; label: string; url: string; image: string; };

export const NEWS_ITEMS = [
  ["2026.03", "KNU-F26 설계 및 제작 진행", "내연기관 파워트레인과 경량 차체 패키지를 중심으로 새 시즌 차량을 준비하고 있습니다. 2026년 대회당시 사용하지 못했던 터보시스템을 구축중에 있습니다."],
  ["2025.11", "시즌 데이터 분석 완료", "주행 로그와 차량 데이터를 바탕으로 다음 시즌의 개선 항목을 정리했습니다."],
  ["2025.09", "팀 신규 부원 모집", "설계, 제작, 주행 테스트까지 함께할 새로운 팀원을 기다립니다."],
] as const;

export const SPONSOR_LIST = [
  { name: "KONGJU NAT'L UNIV", logo: "/sponsors/kongju.png", url: "https://www.kongju.ac.kr" },
  { name: "ANSYS", logo: "/sponsors/ansys.svg", url: "https://www.ansys.com" },
  { name: "UPGRADE MOTORSPORT", logo: "/sponsors/upgrade.png", url: "https://www.upgrademotorsport.co.uk/" },
  { name: "ECU MASTER", logo: "/sponsors/ecumaster.png", url: "https://www.ecumaster.com" },
  { name: "MISUMI", logo: "/sponsors/misumi.png", url: "https://kr.misumi-ec.com" },
  { name: "OZ RACING", logo: "/sponsors/oz.svg", url: "https://www.ozracing.com" },
  { name: "HOOSIER", logo: "/sponsors/hoosier.png", url: "https://www.hoosiertire.com" },
  { name: "AIMSAK", logo: "/sponsors/aimsak.png", url: "https://www.aimsak.com" },
  { name: "대흥샤링", logo: "/sponsors/daeheung.png", url: "" },
  { name: "CHUNGNAM RISE", logo: "/sponsors/rise.png", url: "https://www.cnrise.or.kr/" },
  { name: "MSC SOFTWARE", logo: "", url: "https://mscsoftware.co.kr/" },
  { name: "CALSPAN", logo: "", url: "https://www.calspan.com" },
  { name: "BANGERS", logo: "", url: "https://www.instagram.com/bangers966?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" },
  { name: "CANE CREEK", logo: "", url: "https://canecreek.com" },
  { name: "OPTIMUMG", logo: "", url: "https://optimumg.com" },
  { name: "NORD-LOCK GROUP", logo: "", url: "https://www.nord-lock.com" },
  { name: "TURBOSMART", logo: "", url: "https://turbosmart.com" },
  { name: "공학교육혁신센터", logo: "", url: "https://www.kongju.ac.kr/KNU/16622/subview.do" },
];

export const ACHIEVEMENTS = [
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

export const INSTAGRAM_URL = "https://www.instagram.com/fs_team_kuma?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

export const INSTAGRAM_FEED: InstagramPost[] = [
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
export type Achievement = (typeof ACHIEVEMENTS)[number];
