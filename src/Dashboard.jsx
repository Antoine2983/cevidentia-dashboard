import React, { useEffect, useRef, useState } from 'react';
import HeroBlock from './HeroBlock.jsx';
import ModuleCard from './ModuleCard.jsx';
import SaviezVous from './SaviezVous.jsx';

/* ---------- icons ---------- */
const Icon = {
  bell: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0a3 3 0 1 1-6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  heart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 21s-7-4.5-9.3-9A5.3 5.3 0 0 1 12 6.5 5.3 5.3 0 0 1 21.3 12c-2.3 4.5-9.3 9-9.3 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
  ),
  cart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 4h2.5l2.6 11.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="20" r="1.4" fill="currentColor"/><circle cx="18" cy="20" r="1.4" fill="currentColor"/></svg>
  ),
  chevron: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 1 .7l1 3a1 1 0 0 1-.3 1L8.7 9.3a12 12 0 0 0 6 6l1.6-1.3a1 1 0 0 1 1-.2l3 1a1 1 0 0 1 .7 1V18a2 2 0 0 1-2 2A16 16 0 0 1 4 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
  ),
  chat: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 12a8 8 0 0 1-12 7l-5 1 1.5-4.5A8 8 0 1 1 21 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
  ),
  eye: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.6"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/></svg>
  ),
  glasses: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="14" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="18" cy="14" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M10 14h4M2 11l2-4h2M22 11l-2-4h-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
  ),
};

/* ---------- header ---------- */
function HeaderIconButton({ children, badge, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-ink-500 shadow-sm transition hover:text-brand-500 hover:shadow-soft"
    >
      {children}
      {badge > 0 && (
        <span className="absolute -right-0.5 -top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand-500 px-1 text-[10px] font-semibold text-white ring-2 ring-white">
          {badge}
        </span>
      )}
    </button>
  );
}

function UserMenu({ user, ordersCount }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const items = [
    { id: 'profile', label: 'Mon profil', sub: 'Informations & préférences' },
    { id: 'orders', label: 'Mes commandes', sub: `${ordersCount} commande${ordersCount > 1 ? 's' : ''}`, badge: ordersCount },
    { id: 'prescriptions', label: 'Mes ordonnances', sub: 'Historique & téléchargement' },
    { id: 'mutuelle', label: 'Ma mutuelle', sub: user.partner },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-2 rounded-full bg-white pl-1 pr-2.5 py-1 shadow-sm transition hover:shadow-soft ${open ? 'ring-2 ring-brand-500/30' : ''}`}
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 grid place-items-center text-white text-xs font-semibold">
          {user.firstName?.[0] || 'U'}
        </div>
        <span className="text-sm font-medium text-ink-900">{user.firstName}</span>
        <span className={`text-ink-400 transition ${open ? 'rotate-180' : ''}`}>{Icon.chevron}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-72 overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] ring-1 ring-ink-300/40 animate-fadeIn">
          <div className="flex items-center gap-3 border-b border-ink-300/30 bg-gradient-to-br from-brand-50/70 to-white p-4">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 grid place-items-center text-white font-semibold">
              {user.firstName?.[0]}
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-ink-900 truncate">{user.firstName} {user.lastName}</p>
              <p className="text-xs text-ink-500 truncate">Pris en charge par {user.partner}</p>
            </div>
          </div>
          <ul className="py-1.5">
            {items.map(it => (
              <li key={it.id}>
                <button className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left transition hover:bg-brand-50/60">
                  <span>
                    <span className="block text-sm font-medium text-ink-900">{it.label}</span>
                    <span className="block text-[12px] text-ink-500">{it.sub}</span>
                  </span>
                  {it.badge > 0 && (
                    <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[11px] font-semibold text-white">{it.badge}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div className="border-t border-ink-300/30 p-1.5">
            <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-700 transition hover:bg-ink-900/5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ user, cart, favorites, ordersCount }) {
  return (
    <header className="flex items-center justify-between gap-4 px-2">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-brand-500 grid place-items-center text-white font-bold">C</div>
        <div className="leading-tight">
          <p className="font-semibold text-ink-900">C·Evidentia</p>
          <p className="text-[11px] uppercase tracking-wider text-ink-400">Mon espace</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-1 text-sm text-ink-500">
        <a className="rounded-lg px-3 py-2 font-medium text-ink-900 hover:bg-white/60">Accueil</a>
        <a className="rounded-lg px-3 py-2 hover:bg-white/60">Santé visuelle</a>
        <a className="rounded-lg px-3 py-2 hover:bg-white/60">Catalogue</a>
      </nav>

      <div className="flex items-center gap-2">
        <HeaderIconButton label="Notifications" badge={1}>{Icon.bell}</HeaderIconButton>
        <HeaderIconButton label="Mes favoris" badge={favorites.count}>{Icon.heart}</HeaderIconButton>
        <HeaderIconButton label="Panier" badge={cart.count}>{Icon.cart}</HeaderIconButton>
        <span className="mx-1 h-6 w-px bg-ink-300/50" />
        <UserMenu user={user} ordersCount={ordersCount} />
      </div>
    </header>
  );
}

/* ---------- glasses preview & lists ---------- */
function GlassesStrip({ glasses }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {glasses.map(g => {
        const initials = g.brand.split(' ').map(s => s[0]).slice(0, 2).join('');
        return (
          <button key={g.id} className="group flex flex-col overflow-hidden rounded-xl bg-surface text-left transition hover:shadow-soft">
            <div className="relative aspect-[4/3] grid place-items-center bg-gradient-to-br from-ink-300/60 to-ink-300/30">
              <span className="text-2xl font-bold text-white/80 tracking-wide">{initials}</span>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[inherit]" />
            </div>
            <div className="p-3">
              <p className="text-[11px] uppercase tracking-wider text-ink-400">{g.brand}</p>
              <p className="text-sm font-semibold text-ink-900">{g.model}</p>
              <p className="text-sm font-semibold text-brand-500">{g.price}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function GlassesThumbs({ glasses }) {
  return (
    <div className="flex -space-x-2">
      {glasses.slice(0, 4).map(g => {
        const initials = g.brand.split(' ').map(s => s[0]).slice(0, 2).join('');
        return (
          <div key={g.id} className="h-12 w-12 shrink-0 rounded-xl ring-2 ring-white bg-gradient-to-br from-ink-300/70 to-ink-300/40 grid place-items-center text-xs font-bold text-white/80">
            {initials}
          </div>
        );
      })}
      <div className="h-12 w-12 shrink-0 rounded-xl ring-2 ring-white bg-brand-500 grid place-items-center text-xs font-semibold text-white">
        +12
      </div>
    </div>
  );
}

function TipsList({ tips }) {
  return (
    <ol className="space-y-2.5">
      {tips.map((t, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-brand-50 text-brand-500 grid place-items-center text-[12px] font-semibold">{i + 1}</span>
          <span className="text-sm text-ink-700 leading-relaxed">{t}</span>
        </li>
      ))}
    </ol>
  );
}

function HealthTestsList({ tests }) {
  return (
    <ul className="divide-y divide-ink-300/40">
      {tests.map(t => (
        <li key={t.id} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-9 w-9 rounded-lg bg-brand-50 text-brand-500 grid place-items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-ink-900 truncate">{t.title}</p>
              <p className="text-xs text-ink-400">{t.duration}</p>
            </div>
          </div>
          <button className="rounded-lg border border-ink-300/60 px-3 py-1.5 text-xs font-medium text-ink-700 transition hover:border-brand-500 hover:text-brand-500">Lancer</button>
        </li>
      ))}
    </ul>
  );
}

/* ---------- highlight services (Santé + Catalogue) ---------- */
function HighlightCard({ tone, eyebrow, headline, metricLabel, metricValue, ctaLabel, tag, icon, preview }) {
  const isBrand = tone === 'brand';
  return (
    <article
      className={`group relative overflow-hidden rounded-card p-7 md:p-8 transition hover:-translate-y-0.5 ${
        isBrand
          ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-soft'
          : 'bg-white text-ink-900 shadow-card hover:shadow-soft'
      }`}
    >
      {isBrand && <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />}
      <div className="relative flex items-start justify-between gap-3">
        <div className={`grid h-12 w-12 place-items-center rounded-xl ${isBrand ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-500'}`}>
          {icon}
        </div>
        {tag && (
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${isBrand ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-500'}`}>
            {tag}
          </span>
        )}
      </div>

      <p className={`relative mt-5 text-[12px] font-semibold uppercase tracking-[0.08em] ${isBrand ? 'text-brand-100' : 'text-brand-500'}`}>
        {eyebrow}
      </p>
      <h3 className={`relative mt-1.5 text-[22px] font-bold leading-snug tracking-[-0.01em] ${isBrand ? 'text-white' : 'text-ink-900'}`}>
        {headline}
      </h3>

      {preview && <div className="relative mt-5">{preview}</div>}

      <div className={`relative mt-6 flex items-end justify-between gap-4 border-t pt-5 ${isBrand ? 'border-white/15' : 'border-ink-300/40'}`}>
        <div className="min-w-0">
          <p className={`text-[11px] uppercase tracking-wider ${isBrand ? 'text-white/70' : 'text-ink-400'}`}>{metricLabel}</p>
          <p className={`mt-0.5 text-base font-semibold ${isBrand ? 'text-white' : 'text-ink-900'}`}>{metricValue}</p>
        </div>
        <button
          className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
            isBrand ? 'bg-white text-brand-500 hover:bg-brand-50' : 'bg-brand-500 text-white shadow-btn hover:shadow-soft'
          }`}
        >
          {ctaLabel}
          {Icon.arrow}
        </button>
      </div>
    </article>
  );
}

function HighlightServices({ services, profile, glasses, healthTests }) {
  // Tone: santé porte le CTA primaire pour bilan_recommande / rdv_confirme,
  // catalogue porte le CTA primaire pour post_bilan / aucune_action.
  const santeIsBrand = profile === 'bilan_recommande' || profile === 'rdv_confirme';

  // Preview content per profile
  const santePreview = profile === 'rdv_confirme'
    ? (
      <ul className="space-y-1.5 text-sm text-white/90">
        <li className="flex items-center gap-2">✓ Vos lunettes actuelles</li>
        <li className="flex items-center gap-2">✓ Notez les gênes ressenties</li>
        <li className="flex items-center gap-2">✓ Prévoir 20 min au calme</li>
      </ul>
    )
    : profile === 'aucune_action'
      ? (
        <div className="flex flex-wrap gap-1.5">
          {healthTests.map(t => (
            <span key={t.id} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-500">{t.title}</span>
          ))}
        </div>
      )
      : profile === 'post_bilan'
        ? (
          <div className="flex items-center gap-3 text-white/90">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/15">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
            </div>
            <div>
              <p className="text-sm font-medium">Ordonnance C·Evidentia</p>
              <p className="text-xs text-white/70">PDF · 2 pages · validité 5 ans</p>
            </div>
          </div>
        )
        : null;

  const cataloguePreview = (profile === 'post_bilan' || profile === 'aucune_action' || profile === 'bilan_recommande')
    ? <GlassesThumbs glasses={glasses} />
    : (
      <div className="flex items-center gap-3">
        <span className="text-2xl">🕶</span>
        <p className="text-sm text-ink-500">Inspirez-vous avant le bilan — repérez vos favoris.</p>
      </div>
    );

  return (
    <section>
      <div className="mb-3 flex items-end justify-between px-1">
        <div>
          <p className="eyebrow">Vos espaces</p>
          <h2 className="mt-1 text-xl font-bold text-ink-900">Pour avancer maintenant</h2>
        </div>
        <button className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:text-brand-600">
          Tout voir {Icon.arrow}
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <HighlightCard
          tone={santeIsBrand ? 'brand' : 'neutral'}
          eyebrow={services.sante.eyebrow}
          headline={services.sante.headline}
          metricLabel={services.sante.metricLabel}
          metricValue={services.sante.metricValue}
          ctaLabel={services.sante.ctaLabel}
          tag={services.sante.tag}
          icon={Icon.eye}
          preview={santePreview}
        />
        <HighlightCard
          tone={!santeIsBrand ? 'brand' : 'neutral'}
          eyebrow={services.catalogue.eyebrow}
          headline={services.catalogue.headline}
          metricLabel={services.catalogue.metricLabel}
          metricValue={services.catalogue.metricValue}
          ctaLabel={services.catalogue.ctaLabel}
          tag={services.catalogue.tag}
          icon={Icon.glasses}
          preview={cataloguePreview}
        />
      </div>
    </section>
  );
}

/* ---------- support strip (utilitaire, hiérarchie inférieure) ---------- */
function SupportStrip() {
  return (
    <section className="rounded-card border border-ink-300/40 bg-white/60 p-4 md:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink-900/5 text-ink-700">
            {Icon.chat}
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">Une question ? Notre équipe répond en moins de 2h.</p>
            <p className="text-xs text-ink-500">Du lundi au samedi, 9h–19h.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-ink-300/60 bg-white px-3 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-500 hover:text-brand-500">
            {Icon.chat} Chat
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-ink-300/60 bg-white px-3 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-500 hover:text-brand-500">
            {Icon.phone} Appeler
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-ink-300/60 bg-white px-3 py-2 text-sm font-medium text-ink-700 transition hover:border-brand-500 hover:text-brand-500">
            {Icon.mail} E-mail
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------- secondary modules (contextuels, sous le hero) ---------- */
function modulesFor(profile, data) {
  switch (profile) {
    case 'bilan_recommande':
      return [
        {
          key: 'avantages', eyebrow: 'Votre mutuelle', title: 'Bilan pris en charge à 100%',
          subtitle: 'Aucun reste à charge — en visio ou chez un opticien partenaire.',
          icon: '💳', tone: 'brand',
          body: (
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><span className="text-success">✓</span> Bilan visuel complet (20 min)</li>
              <li className="flex items-start gap-2"><span className="text-success">✓</span> Ordonnance délivrée immédiatement</li>
              <li className="flex items-start gap-2"><span className="text-success">✓</span> Accès aux montures remboursées</li>
            </ul>
          ),
          cta: { label: 'Voir les conditions', onClick: () => {} },
        },
        {
          key: 'tests', eyebrow: 'En attendant', title: 'Testez votre vue en 3 minutes',
          subtitle: 'Un aperçu avant votre bilan — sans engagement.',
          icon: '👁', tone: 'neutral',
          body: <HealthTestsList tests={data.healthTests} />,
        },
      ];
    case 'rdv_confirme':
      return [
        {
          key: 'prepare', eyebrow: 'À faire avant le RDV', title: 'Bien préparer votre bilan',
          icon: '📋', tone: 'brand',
          body: <TipsList tips={data.preparationTips} />,
        },
        {
          key: 'optician', eyebrow: 'Votre interlocutrice', title: data.nextAppointment.optician,
          subtitle: "Opticienne diplômée — 12 ans d'expérience, spécialisée fatigue visuelle.",
          icon: '👓', tone: 'neutral',
          body: (
            <div className="flex items-center gap-3 text-sm text-ink-500">
              <span className="text-accent">★★★★★</span><span>4.9 · 1 240 avis</span>
            </div>
          ),
          cta: { label: 'Voir son profil', onClick: () => {} },
        },
      ];
    case 'post_bilan':
      return [
        {
          key: 'catalog', eyebrow: 'Sélection pour vous', title: 'Vos montures compatibles',
          subtitle: 'Basées sur votre ordonnance, prises en charge à 100% par IPECA.',
          icon: '🕶', tone: 'brand',
          body: <GlassesStrip glasses={data.glasses} />,
          cta: { label: 'Voir tout le catalogue', onClick: () => {} },
        },
        {
          key: 'timeline', eyebrow: 'Livraison', title: 'En 5 à 7 jours ouvrés',
          subtitle: 'Livraison gratuite en point relais ou à domicile.',
          icon: '📦', tone: 'neutral',
          body: (
            <div className="space-y-3">
              {[{ label: 'Commande', done: true }, { label: 'Atelier optique', done: false }, { label: 'Livraison', done: false }].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`h-6 w-6 rounded-full grid place-items-center text-[11px] font-semibold ${s.done ? 'bg-success text-white' : 'bg-brand-50 text-brand-500'}`}>{s.done ? '✓' : i + 1}</div>
                  <span className={`text-sm ${s.done ? 'text-ink-900 font-medium' : 'text-ink-500'}`}>{s.label}</span>
                </div>
              ))}
            </div>
          ),
        },
      ];
    case 'aucune_action':
    default:
      return [
        {
          key: 'renouvellement', eyebrow: 'Catalogue', title: 'Vos lunettes ont 2 ans',
          subtitle: 'Découvrez les nouveautés et votre prochain renouvellement pris en charge.',
          icon: '✨', tone: 'brand',
          body: <GlassesStrip glasses={data.glasses} />,
          cta: { label: 'Parcourir le catalogue', onClick: () => {} },
        },
        {
          key: 'tests', eyebrow: 'En autonomie', title: 'Tests de santé visuelle',
          subtitle: 'Gardez un œil sur votre vue entre deux bilans.',
          icon: '👁', tone: 'neutral',
          body: <HealthTestsList tests={data.healthTests} />,
        },
      ];
  }
}

/* ---------- root ---------- */
export default function Dashboard({ profile, data }) {
  const user = data.user;
  const copy = data.heroCopy[profile];
  const modules = modulesFor(profile, data);
  const saviezVousText = data.saviezVous[profile];
  const services = data.highlightServices[profile];

  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 py-8 flex flex-col gap-8">
      <Header
        user={user}
        cart={data.cart}
        favorites={data.favorites}
        ordersCount={data.orders.length}
      />

      <HeroBlock
        profile={profile}
        user={user}
        copy={copy}
        appointment={data.nextAppointment}
        nextCheckupDate={data.equipment.nextCheckupDate}
        onPrimary={() => {}}
        onSecondary={() => {}}
        onVisio={() => {}}
      />

      <HighlightServices
        services={services}
        profile={profile}
        glasses={data.glasses}
        healthTests={data.healthTests}
      />

      <section className="grid gap-5 md:grid-cols-2">
        {modules.map(m => (
          <ModuleCard
            key={m.key}
            eyebrow={m.eyebrow} title={m.title} subtitle={m.subtitle}
            icon={m.icon} tone={m.tone} cta={m.cta}
          >
            {m.body}
          </ModuleCard>
        ))}
      </section>

      <SaviezVous text={saviezVousText} />

      <SupportStrip />

      <footer className="pt-2 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} C·Evidentia — Votre santé visuelle, simplement.
      </footer>
    </div>
  );
}
