import { ShieldAlert, X } from "lucide-react";
type DecryptModalProps = { isOpen: boolean; onClose: () => void };
export function DecryptModal({ isOpen, onClose }: DecryptModalProps) {
  return (
    <>{isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-2xl border-2 border-red-600/80 bg-zinc-950 p-6 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
            <button
              type="button"
              aria-label="기밀 모달 닫기"
              onClick={() => onClose()}
              className="absolute right-4 top-4 text-zinc-500 transition hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex items-center gap-3 text-red-500">
              <ShieldAlert className="h-8 w-8" />
              <div>
                <h3 className="font-mono text-lg font-black tracking-wider">ERROR 403: ACCESS DENIED</h3>
                <span className="text-[11px] font-mono text-zinc-500">CLEARANCE LEVEL 3 REQUIRED</span>
              </div>
            </div>

            <div className="space-y-2 rounded-lg border border-zinc-800 bg-zinc-900/90 p-4 font-mono text-xs text-zinc-300">
              <p className="font-semibold text-red-400">[CRITICAL] 기밀 섀시 데이터 암호화 활성화됨</p>
              <p>· 대상: 2027 KUMA Next-Gen Monocoque &amp; Powertrain</p>
              <p>· 상태: 보안 프로토콜에 의해 차단되었습니다.</p>
              <p className="pt-2 text-[10px] text-zinc-500">* 2027 시즌 차량 제원은 2027 FSK에서 공개됩니다.</p>
            </div>

            <button
              type="button"
              onClick={() => onClose()}
              className="mt-6 w-full rounded-lg bg-red-600 py-2.5 font-mono text-xs font-bold tracking-widest text-white transition-colors hover:bg-red-500"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </> 

  );
}
