import { SectionHeader } from "../components/SectionHeader";
import { staticAsset } from "../utils/staticAsset";


export function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto border-t border-zinc-800">
      <div className="mb-10">
        <SectionHeader label="Race & Workshop" title="KUMA GALLERY" className="!mt-0" />
        <p className="text-sm text-zinc-400 mt-4">대회장, 작업실, 차량 제작 과정을 기록하는 공간입니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <figure className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <img
            src={staticAsset("cars/KUMA_testdriveing_filmcam.jpg")}
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
            src={staticAsset("cars/KakaoTalk_20260829_190154401.jpg")}
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
