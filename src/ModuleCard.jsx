import React from 'react';

/**
 * ModuleCard — carte de module secondaire réutilisable.
 *
 * Props :
 *  - eyebrow  : petite étiquette au-dessus du titre
 *  - title    : titre du module
 *  - subtitle : sous-titre (optionnel)
 *  - icon     : emoji ou élément React (optionnel)
 *  - tone     : "neutral" | "brand" | "success" | "warm"
 *  - cta      : { label, onClick } (optionnel)
 *  - children : contenu principal
 */
export default function ModuleCard({
  eyebrow,
  title,
  subtitle,
  icon,
  tone = 'neutral',
  cta,
  children,
  className = '',
}) {
  const tones = {
    neutral: 'bg-white',
    brand: 'bg-gradient-to-br from-brand-50 to-white',
    success: 'bg-gradient-to-br from-emerald-50 to-white',
    warm: 'bg-gradient-to-br from-amber-50 to-white',
  };

  return (
    <section
      className={`card p-6 md:p-7 flex flex-col gap-4 animate-fadeIn ${tones[tone]} ${className}`}
    >
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="h-10 w-10 shrink-0 rounded-xl bg-brand-50 text-brand-500 grid place-items-center text-xl">
              {icon}
            </div>
          )}
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h3 className="mt-1 text-[17px] font-semibold leading-snug text-ink-900">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </header>

      {children && <div className="text-sm text-ink-700">{children}</div>}

      {cta && (
        <button
          type="button"
          onClick={cta.onClick}
          className="mt-auto inline-flex items-center gap-2 self-start text-sm font-medium text-brand-500 transition hover:text-brand-600"
        >
          {cta.label}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </section>
  );
}
