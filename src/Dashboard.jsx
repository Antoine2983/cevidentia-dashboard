import React from 'react';
import HeroBlock from './HeroBlock.jsx';
import ModuleCard from './ModuleCard.jsx';
import SaviezVous from './SaviezVous.jsx';

function Header({ firstName }) {
  return (
    <header className="flex items-center justify-between gap-4 px-2">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-brand-500 grid place-items-center text-white font-bold">
          C
        </div>
        <div className="leading-tight">
          <p className="font-semibold text-ink-900">C·Evidentia</p>
          <p className="text-[11px] uppercase tracking-wider text-ink-400">Mon espace</p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-1 text-sm text-ink-500">
        <a className="rounded-lg px-3 py-2 hover:bg-white/60">Accueil</a>
        <a className="rounded-lg px-3 py-2 hover:bg-white/60">Santé visuelle</a>
        <a className="rounded-lg px-3 py-2 hover:bg-white/60">Catalogue</a>
        <a className="rounded-lg px-3 py-2 hover:bg-white/60">Mes commandes</a>
      </nav>

      <div className="flex items-center gap-3">
        <button className="h-9 w-9 rounded-full bg-white grid place-items-center text-ink-500 shadow-sm hover:text-brand-500">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0a3 3 0 1 1-6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="flex items-center gap-2 rounded-full bg-white px-2 py-1.5 shadow-sm">
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 grid place-items-center text-white text-xs font-semibold">
            {firstName?.[0] || 'U'}
          </div>
          <span className="pr-2 text-sm font-medium text-ink-900">{firstName}</span>
        </div>
      </div>
    </header>
  );
}

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

function TipsList({ tips }) {
  return (
    <ol className="space-y-2.5">
      {tips.map((t, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-0.5 h-6 w-6 shrink-0 rounded-full bg-brand-50 text-brand-500 grid place-items-center text-[12px] font-semibold">
            {i + 1}
          </span>
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
          <button className="rounded-lg border border-ink-300/60 px-3 py-1.5 text-xs font-medium text-ink-700 transition hover:border-brand-500 hover:text-brand-500">
            Lancer
          </button>
        </li>
      ))}
    </ul>
  );
}

const SERVICE_CARDS = [
  {
    id: 'sante',
    eyebrow: 'Santé visuelle',
    title: 'Suivi & prévention',
    subtitle: 'Bilans, tests en autonomie, historique de vos consultations.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20.8 11.1A9 9 0 1 1 12 3a9 9 0 0 1 8.8 8.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" stroke="currentColor" strokeWidth="1.6"/></svg>
    ),
  },
  {
    id: 'catalogue',
    eyebrow: 'Catalogue',
    title: 'Lunettes & lentilles',
    subtitle: 'Plus de 300 montures prises en charge à 100% par votre mutuelle.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="7" cy="14" r="4" stroke="currentColor" strokeWidth="1.6"/><circle cx="17" cy="14" r="4" stroke="currentColor" strokeWidth="1.6"/><path d="M11 14h2M3 10l2-4h4M21 10l-2-4h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
    ),
  },
  {
    id: 'contact',
    eyebrow: 'Support',
    title: 'Nous contacter',
    subtitle: 'Un opticien ou conseiller répond sous 2h du lundi au samedi.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 1 .7l1 3a1 1 0 0 1-.3 1L8.7 9.3a12 12 0 0 0 6 6l1.6-1.3a1 1 0 0 1 1-.2l3 1a1 1 0 0 1 .7 1V18a2 2 0 0 1-2 2A16 16 0 0 1 4 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
    ),
  },
];

function ServicesRow() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {SERVICE_CARDS.map(s => (
        <button
          key={s.id}
          className="card group p-6 text-left transition hover:-translate-y-0.5 hover:shadow-soft"
        >
          <div className="flex items-start justify-between">
            <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-500 grid place-items-center">
              {s.icon}
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-ink-300 transition group-hover:text-brand-500">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="eyebrow mt-5">{s.eyebrow}</p>
          <h3 className="mt-1 text-[17px] font-semibold text-ink-900">{s.title}</h3>
          <p className="mt-1.5 text-sm text-ink-500 leading-relaxed">{s.subtitle}</p>
        </button>
      ))}
    </section>
  );
}

function modulesFor(profile, data) {
  switch (profile) {
    case 'bilan_recommande':
      return [
        {
          key: 'avantages',
          eyebrow: 'Votre mutuelle',
          title: 'Bilan pris en charge à 100%',
          subtitle: 'Aucun reste à charge — en visio ou chez un opticien partenaire.',
          icon: '💳',
          tone: 'brand',
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
          key: 'tests',
          eyebrow: 'En attendant',
          title: 'Testez votre vue en 3 minutes',
          subtitle: 'Un aperçu avant votre bilan — sans engagement.',
          icon: '👁',
          tone: 'neutral',
          body: <HealthTestsList tests={data.healthTests} />,
        },
      ];

    case 'rdv_confirme':
      return [
        {
          key: 'prepare',
          eyebrow: 'À faire avant le RDV',
          title: 'Bien préparer votre bilan',
          icon: '📋',
          tone: 'brand',
          body: <TipsList tips={data.preparationTips} />,
        },
        {
          key: 'optician',
          eyebrow: 'Votre interlocutrice',
          title: data.nextAppointment.optician,
          subtitle: 'Opticienne diplômée — 12 ans d\'expérience, spécialisée fatigue visuelle.',
          icon: '👓',
          tone: 'neutral',
          body: (
            <div className="flex items-center gap-3 text-sm text-ink-500">
              <span className="text-accent">★★★★★</span>
              <span>4.9 · 1&nbsp;240 avis</span>
            </div>
          ),
          cta: { label: 'Voir son profil', onClick: () => {} },
        },
      ];

    case 'post_bilan':
      return [
        {
          key: 'catalog',
          eyebrow: 'Sélection pour vous',
          title: 'Vos montures compatibles',
          subtitle: 'Basées sur votre ordonnance, prises en charge à 100% par IPECA.',
          icon: '🕶',
          tone: 'brand',
          body: <GlassesStrip glasses={data.glasses} />,
          cta: { label: 'Voir tout le catalogue', onClick: () => {} },
        },
        {
          key: 'timeline',
          eyebrow: 'Livraison',
          title: 'En 5 à 7 jours ouvrés',
          subtitle: 'Livraison gratuite en point relais ou à domicile.',
          icon: '📦',
          tone: 'neutral',
          body: (
            <div className="space-y-3">
              {[
                { label: 'Commande', done: true },
                { label: 'Atelier optique', done: false },
                { label: 'Livraison', done: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`h-6 w-6 rounded-full grid place-items-center text-[11px] font-semibold ${s.done ? 'bg-success text-white' : 'bg-brand-50 text-brand-500'}`}>
                    {s.done ? '✓' : i + 1}
                  </div>
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
          key: 'renouvellement',
          eyebrow: 'Catalogue',
          title: 'Vos lunettes ont 2 ans',
          subtitle: 'Découvrez les nouveautés et votre prochain renouvellement pris en charge.',
          icon: '✨',
          tone: 'brand',
          body: <GlassesStrip glasses={data.glasses} />,
          cta: { label: 'Parcourir le catalogue', onClick: () => {} },
        },
        {
          key: 'tests',
          eyebrow: 'En autonomie',
          title: 'Tests de santé visuelle',
          subtitle: 'Gardez un œil sur votre vue entre deux bilans.',
          icon: '👁',
          tone: 'neutral',
          body: <HealthTestsList tests={data.healthTests} />,
        },
      ];
  }
}

export default function Dashboard({ profile, data }) {
  const user = data.user;
  const copy = data.heroCopy[profile];
  const modules = modulesFor(profile, data);
  const saviezVousText = data.saviezVous[profile];

  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 py-8 flex flex-col gap-8">
      <Header firstName={user.firstName} />

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

      <section className="grid gap-5 md:grid-cols-2">
        {modules.map(m => (
          <ModuleCard
            key={m.key}
            eyebrow={m.eyebrow}
            title={m.title}
            subtitle={m.subtitle}
            icon={m.icon}
            tone={m.tone}
            cta={m.cta}
          >
            {m.body}
          </ModuleCard>
        ))}
      </section>

      <ServicesRow />

      <SaviezVous text={saviezVousText} />

      <footer className="pt-4 text-center text-xs text-ink-400">
        © {new Date().getFullYear()} C·Evidentia — Votre santé visuelle, simplement.
      </footer>
    </div>
  );
}
