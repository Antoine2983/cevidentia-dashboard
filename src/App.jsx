import React, { useMemo, useState } from 'react';
import Dashboard from './Dashboard.jsx';
import data from './mockData.json';

const DEV_MODE = true;

function ProfileSwitcher({ current, onChange, labels, profiles }) {
  return (
    <div className="sticky top-0 z-40 w-full border-b border-ink-300/40 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center gap-3 px-6 py-2.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-500">
          <span className="h-1.5 w-1.5 rounded-full bg-warn" /> Dev preview
        </span>
        <span className="hidden sm:inline text-[12px] text-ink-500">
          Profil utilisateur :
        </span>
        <div className="flex flex-wrap items-center gap-1.5 ml-auto">
          {profiles.map(p => {
            const active = current === p;
            return (
              <button
                key={p}
                onClick={() => onChange(p)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  active
                    ? 'bg-brand-500 text-white shadow-soft'
                    : 'bg-white text-ink-700 hover:bg-brand-50 border border-ink-300/60'
                }`}
              >
                {labels[p]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [profile, setProfile] = useState(data.user.profile);

  const dataForProfile = useMemo(
    () => ({ ...data, user: { ...data.user, profile } }),
    [profile],
  );

  return (
    <div className="min-h-full">
      {DEV_MODE && (
        <ProfileSwitcher
          current={profile}
          onChange={setProfile}
          labels={data.profileLabels}
          profiles={data.profiles}
        />
      )}
      <Dashboard key={profile} profile={profile} data={dataForProfile} />
    </div>
  );
}
