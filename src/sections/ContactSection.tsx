import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { useState } from "react";

export function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("idle");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      organization: String(form.get("organization") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Contact request failed");

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

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
              <span>wjdgnrla009@gmail.com</span>
            </div>
            <div className="flex items-start gap-3 text-zinc-300">
              <Phone className="w-5 h-5 text-racing-green shrink-0" />
              <div className="space-y-2">
                <p>팀장 : 홍길동 / 연락처 : 010-1234-5678 / 메일 : </p>
                <p>회장 : 홍길동 / 연락처 : 010-1234-5678 / 메일 : </p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-racing-card p-6 rounded-xl border border-zinc-800 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">성함 / 담당자명</label>
            <input name="name" required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green" placeholder="홍길동" />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">소속 기업 / 기관</label>
            <input name="organization" required type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green" placeholder="기업명 또는 부서명" />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">회신받을 이메일</label>
            <input name="email" required type="email" className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green" placeholder="partner@company.com" />
          </div>
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1">문의 내용</label>
            <textarea name="message" required rows={3} className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-racing-green" placeholder="스폰서십 제안 또는 문의 사항을 적어주세요."></textarea>
          </div>
          <button type="submit" disabled={isSending} className="w-full py-2.5 bg-racing-green text-black font-bold text-sm rounded hover:bg-racing-blue hover:text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60">
            {isSending ? "전송 중..." : "문의 메시지 전송하기"}
          </button>
          {status === "success" && <p className="text-sm text-racing-green">문의가 전송되었습니다. 확인 후 회신드리겠습니다.</p>}
          {status === "error" && <p className="text-sm text-red-400">전송에 실패했습니다. 잠시 후 다시 시도해 주세요.</p>}
        </form>
      </div>
    </section>
  );
}
