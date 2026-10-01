import { SectionHeader } from "../components/SectionHeader";

export function AboutKumaSection() {
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
