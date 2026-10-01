import { useState } from "react";
import { Lock, Menu, X } from "lucide-react";
import kumaLogo from "../assets/branding/kuma-logo.webp";
import { staticAsset } from "../utils/staticAsset";

type SiteHeaderProps = { onOpenDecrypt: () => void };

export function SiteHeader({ onOpenDecrypt }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
<header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <a href="#top" className="flex shrink-0 items-center gap-4" aria-label="KUMA Racing 최상단으로 이동">
            <img
              src={kumaLogo}
              alt="KUMA Racing"
              className="h-10 w-10 object-contain"
              onError={(event) => {
                event.currentTarget.src = staticAsset("kuma-logo.svg");
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

          <button
            type="button"
            onClick={() => onOpenDecrypt()}
            className="ml-auto hidden items-center gap-2 rounded-full border border-racing-green/50 bg-zinc-900 px-4 py-1.5 text-xs font-mono font-semibold text-racing-green transition-all hover:bg-racing-green hover:text-black md:flex"
          >
            <Lock className="h-3.5 w-3.5" /> DECRYPT SPEC
          </button>
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

  );
}
