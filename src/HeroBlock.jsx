import React, { useEffect, useState } from 'react';

function useCountdown(targetIso) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!targetIso) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  if (!targetIso) return null;
  const diff = new Date(targetIso).getTime() - now;
  const clamped = Math.max(0, diff);
  const totalSec = Math.floor(clamped / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { days, hours, minutes, seconds, isImminent: diff < 48 * 3600 * 1000 };
}

function TimeBlock({ value, label }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[58px] rounded-xl bg-white/10 px-3 py-2 text-center font-semibold text-2xl leading-none text-white tabular-nums">
        {padded}
      </div>
      <span className="mt-1.5 text-[11px] uppercase tracking-wider text-white/70">
        {label}
      </span>
    </div>
  );
}

function IpecaBadge({ light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[13px] font-medium ${
        light ? 'bg-white/10 text-white' : 'bg-brand-50 text-navy-900'
      }`}
    >
      <span className={`inline-flex h-5 items-center rounded bg-navy-700 px-1.5 text-[10px] font-semibold text-white`}>
        IPECA
      </span>
      100% pris en charge
    </div>
  );
}

function BilanRecommande({ copy, user, onPrimary }) {
  return (
    <div className="relative overflow-hidden rounded-hero p-8 md:p-10 text-white animate-fadeIn"
         style={{ background: 'linear-gradient(135deg, #026DFF 0%, #0279FF 50%, #1191FF 100%)' }}>
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 -bottom-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-100">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl md:text-[40px] font-bold leading-tight tracking-[-0.02em]">
            {copy.title}
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/85">
            {copy.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button className="btn-primary !bg-white !text-brand-500 !shadow-none hover:!shadow-[0_12px_22px_rgba(0,0,0,0.18)]"
                    onClick={onPrimary}
                    style={{ background: '#fff' }}>
              {copy.ctaLabel}
            </button>
            <button className="inline-flex items-center gap-1.5 rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:text-white">
              {copy.ctaSecondary}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="mt-6">
            <IpecaBadge light />
          </div>
        </div>

        <div className="relative hidden md:flex justify-end">
          <div className="relative rounded-3xl bg-white/10 p-5 backdrop-blur border border-white/15 max-w-xs w-full">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.6"/><path d="M12 7v5l3 2" stroke="white" strokeWidth="1.6" strokeLinecap="round"/></svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wider text-white/70">Durée</p>
                <p className="text-sm font-semibold">20 minutes</p>
              </div>
            </div>
            <div className="mt-4 h-px bg-white/15" />
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" stroke="white" strokeWidth="1.6"/><circle cx="12" cy="10" r="2.5" stroke="white" strokeWidth="1.6"/></svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wider text-white/70">Format</p>
                <p className="text-sm font-semibold">Visio ou en magasin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RdvConfirme({ appointment, onVisio }) {
  const cd = useCountdown(appointment?.date);
  const dateLabel = appointment?.date
    ? new Date(appointment.date).toLocaleDateString('fr-FR', {
        weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit',
      })
    : '';

  return (
    <div className="relative overflow-hidden rounded-hero p-8 md:p-10 text-white animate-fadeIn"
         style={{ background: 'linear-gradient(135deg, #13263D 0%, #103E72 55%, #026DFF 130%)' }}>
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />

      <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-brand-100">
            Votre rendez-vous approche
          </p>
          <h1 className="mt-3 text-3xl md:text-[36px] font-bold leading-tight tracking-[-0.02em]">
            {appointment?.type} avec {appointment?.optician}
          </h1>
          <p className="mt-2 text-white/80 first-letter:uppercase">{dateLabel}</p>

          <div className="mt-7 flex items-center gap-3">
            <TimeBlock value={cd?.days ?? 0} label="jours" />
            <span className="text-white/40 text-xl pb-4">:</span>
            <TimeBlock value={cd?.hours ?? 0} label="heures" />
            <span className="text-white/40 text-xl pb-4">:</span>
            <TimeBlock value={cd?.minutes ?? 0} label="min" />
            <span className="text-white/40 text-xl pb-4">:</span>
            <TimeBlock value={cd?.seconds ?? 0} label="sec" />
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={appointment?.visioLink || '#'}
              onClick={(e) => { if (onVisio) { e.preventDefault(); onVisio(); } }}
              className="btn-primary !bg-white !text-brand-500 !shadow-none"
              style={{ background: '#fff' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                <path d="m16 10 5-3v10l-5-3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
              </svg>
              Rejoindre la visio
            </a>
            <button className="inline-flex items-center gap-1.5 rounded-lg px-4 py-3 text-sm font-medium text-white/90 hover:text-white">
              Modifier mon rendez-vous
            </button>
          </div>
          <div className="mt-6"><IpecaBadge light /></div>
        </div>

        <div className="relative hidden md:block">
          <div className="w-48 rounded-3xl bg-white/10 border border-white/15 p-5 backdrop-blur">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 grid place-items-center text-2xl font-semibold">
              {appointment?.optician?.split(' ').map(w => w[0]).slice(0,2).join('') || 'LG'}
            </div>
            <p className="mt-4 text-sm font-semibold">{appointment?.optician}</p>
            <p className="text-xs text-white/70">Opticienne diplômée</p>
            <div className="mt-3 flex items-center gap-1 text-[12px] text-white/80">
              <span className="text-accent">★★★★★</span>
              <span>4.9</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostBilan({ copy, user, onPrimary, onSecondary }) {
  return (
    <div className="relative overflow-hidden rounded-hero p-8 md:p-10 animate-fadeIn"
         style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #E5F1FF 50%, #FFFFFF 100%)' }}>
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-success/20 blur-3xl" />

      <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" /> {copy.eyebrow}
          </div>
          <h1 className="mt-4 text-3xl md:text-[40px] font-bold leading-tight tracking-[-0.02em] text-ink-900">
            {copy.title}
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-500">
            {copy.subtitle}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <button className="btn-primary" onClick={onPrimary}>
              {copy.ctaLabel}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-ghost !py-3.5" onClick={onSecondary}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {copy.ctaSecondary}
            </button>
          </div>
          <div className="mt-6"><IpecaBadge /></div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-ink-300/50 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wider text-ink-500">Ordonnance</p>
              <span className="rounded-full bg-success/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">Valide</span>
            </div>
            <p className="mt-2 font-semibold text-ink-900">{user?.firstName} {user?.lastName}</p>
            <p className="text-sm text-ink-500">Délivrée le {new Date().toLocaleDateString('fr-FR')}</p>
            <div className="mt-4 rounded-xl bg-surface p-3 text-xs text-ink-500 leading-relaxed">
              OD −0.75 (−0.25 × 180°)<br/>
              OG −1.00 (−0.50 × 175°)<br/>
              Add. +0.50
            </div>
            <p className="mt-3 text-[11px] text-ink-400">Validité : 5 ans — renouvellement automatique possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AucuneAction({ copy, nextCheckupDate, onPrimary }) {
  const dateLabel = nextCheckupDate
    ? new Date(nextCheckupDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';
  return (
    <div className="relative overflow-hidden rounded-hero p-8 md:p-10 animate-fadeIn"
         style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F8FD 60%, #E5F1FF 120%)' }}>
      <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-brand-500 shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="m5 12 5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {copy.eyebrow}
          </div>
          <h1 className="mt-4 text-3xl md:text-[36px] font-bold leading-tight tracking-[-0.02em] text-ink-900">
            {copy.title}
          </h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-500">
            {copy.subtitle}
          </p>
          {dateLabel && (
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-ink-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
              Prochain point prévu le <span className="font-semibold">{dateLabel}</span>
            </p>
          )}
          {copy.ctaLabel && (
            <div className="mt-6">
              <button className="btn-ghost" onClick={onPrimary}>{copy.ctaLabel}</button>
            </div>
          )}
        </div>

        <div className="relative">
          <div className="rounded-3xl bg-white p-6 shadow-card">
            <p className="text-xs uppercase tracking-wider text-ink-500">Votre équipement</p>
            <p className="mt-1 font-semibold text-ink-900">Lunettes — 2 ans d'usage</p>
            <div className="mt-4 h-2 w-full rounded-full bg-brand-50 overflow-hidden">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-400 to-brand-600" />
            </div>
            <p className="mt-2 text-xs text-ink-400">Renouvellement possible dans 1 an</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroBlock({ profile, user, copy, appointment, nextCheckupDate, onPrimary, onSecondary, onVisio }) {
  if (profile === 'rdv_confirme') {
    return <RdvConfirme appointment={appointment} onVisio={onVisio} />;
  }
  if (profile === 'post_bilan') {
    return <PostBilan copy={copy} user={user} onPrimary={onPrimary} onSecondary={onSecondary} />;
  }
  if (profile === 'aucune_action') {
    return <AucuneAction copy={copy} nextCheckupDate={nextCheckupDate} onPrimary={onPrimary} />;
  }
  return <BilanRecommande copy={copy} user={user} onPrimary={onPrimary} />;
}
