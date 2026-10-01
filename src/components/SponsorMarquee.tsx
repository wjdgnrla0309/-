import { SPONSOR_LIST } from "../data/siteContent";
import { staticAsset } from "../utils/staticAsset";

export function SponsorMarquee() {
  return (
    <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 md:p-8">
      <div className="sponsor-marquee sponsor-marquee-right">
        <div className="sponsor-track">
          {[...SPONSOR_LIST, ...SPONSOR_LIST].map((sponsor, index) => (
            <span key={`${sponsor.name}-${index}`} className="sponsor-chip">
              {sponsor.logo && (
                <img
                  src={staticAsset(sponsor.logo)}
                  alt=""
                  className="mr-3 h-7 w-auto max-w-[100px] object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
              {sponsor.name}
            </span>
          ))}
        </div>
      </div>

      <div className="sponsor-marquee sponsor-marquee-left mt-4">
        <div className="sponsor-track">
          {[...SPONSOR_LIST.slice().reverse(), ...SPONSOR_LIST.slice().reverse()].map((sponsor, index) => (
            <span key={`${sponsor.name}-reverse-${index}`} className="sponsor-chip sponsor-chip-muted">
              {sponsor.logo && (
                <img
                  src={staticAsset(sponsor.logo)}
                  alt=""
                  className="mr-3 h-7 w-auto max-w-[100px] object-contain"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}
              {sponsor.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
