import React from 'react';

export default function SaviezVous({ text }) {
  return (
    <section
      className="relative overflow-hidden rounded-hero animate-fadeIn"
      style={{
        backgroundImage: `linear-gradient(rgba(11,27,46,0.65), rgba(11,27,46,0.78)), url("/assets/hero-optician.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative grid gap-6 p-7 md:p-10 md:grid-cols-[auto_1fr] md:items-center">
        <div className="glass-card rounded-hero p-6 md:p-7 max-w-md text-white">
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-white/10 grid place-items-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 3a7 7 0 0 0-4 12.74V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26A7 7 0 0 0 12 3Z"
                  stroke="#BEDBFF"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M10 22h4" stroke="#BEDBFF" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-100">
                Saviez-vous&nbsp;?
              </p>
              <p className="mt-2 text-[16px] leading-relaxed text-white/95">{text}</p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-end gap-3 text-right text-white/80">
          <p className="text-[13px] uppercase tracking-[0.12em] text-brand-100">
            Conseils opticien
          </p>
          <p className="max-w-xs text-sm leading-relaxed">
            Notre réseau d'opticiens partenaires partage chaque semaine un conseil
            adapté à votre situation visuelle.
          </p>
        </div>
      </div>
    </section>
  );
}
