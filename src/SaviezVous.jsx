import React from 'react';

export default function SaviezVous({ text }) {
  return (
    <section className="relative overflow-hidden rounded-card bg-navy-900 p-7 md:p-9 text-white animate-fadeIn">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side,#0279FF,transparent)' }}
      />
      <div className="relative flex items-start gap-5">
        <div className="h-11 w-11 shrink-0 rounded-xl bg-white/10 grid place-items-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 3a7 7 0 0 0-4 12.74V18a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26A7 7 0 0 0 12 3Z" stroke="#BEDBFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 22h4" stroke="#BEDBFF" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-100">
            Saviez-vous&nbsp;?
          </p>
          <p className="mt-2 text-[17px] leading-relaxed text-white/95 max-w-xl">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
