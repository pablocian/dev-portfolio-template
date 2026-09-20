import { useEffect, useMemo, useState } from 'react';
import personalInfo from '../data/profile.json';

const USERNAME = personalInfo.githubUsername;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const LEVEL_COLORS = [
  'rgba(34, 211, 238, 0.08)',
  'rgba(34, 211, 238, 0.28)',
  'rgba(34, 211, 238, 0.5)',
  'rgba(34, 211, 238, 0.75)',
  'rgba(34, 211, 238, 1)',
];

function longestStreak(days) {
  let max = 0;
  let current = 0;
  for (const day of days) {
    if ((day.count ?? 0) > 0) {
      current += 1;
      if (current > max) max = current;
    } else {
      current = 0;
    }
  }
  return max;
}

function formatNumber(value) {
  if (value == null || Number.isNaN(value)) return '—';
  if (value >= 10000) return `${Math.round(value / 1000)}k`;
  if (value >= 1000) return `${(value / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return String(value);
}

function buildWeeks(contributions) {
  if (!contributions?.length) return [];
  const first = new Date(`${contributions[0].date}T00:00:00`);
  const pad = first.getDay();
  const padded = Array.from({ length: pad }, () => null).concat(contributions);
  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7);
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }
  return weeks;
}

function ContributionCalendar({ username, contributions, total, error, loading }) {
  const weeks = useMemo(() => buildWeeks(contributions), [contributions]);

  const monthLabels = useMemo(() => {
    return weeks.map((week, index) => {
      const day = week.find(Boolean);
      if (!day) return '';
      const date = new Date(`${day.date}T00:00:00`);
      const prev = weeks[index - 1]?.find(Boolean);
      if (!prev) return MONTHS[date.getMonth()];
      const prevDate = new Date(`${prev.date}T00:00:00`);
      return date.getMonth() !== prevDate.getMonth() ? MONTHS[date.getMonth()] : '';
    });
  }, [weeks]);

  return (
    <div className="glow-cyan overflow-hidden rounded-2xl border border-cyan/20 bg-panel/70 p-5 backdrop-blur-md sm:p-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-cyan uppercase">
            GitHub contributions
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            {loading ? 'Loading activity…' : `${formatNumber(total)} contributions in the last year`}
          </h3>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-white/50 transition hover:text-cyan"
        >
          @{username}
        </a>
      </div>

      {error ? (
        <p className="text-sm text-white/50">{error}</p>
      ) : (
        <div className="overflow-x-auto pb-1">
          <div className="inline-block min-w-full">
            <div
              className="mb-1 grid gap-[3px] pl-7 text-[10px] text-white/40"
              style={{ gridTemplateColumns: `repeat(${Math.max(weeks.length, 1)}, 11px)` }}
            >
              {monthLabels.map((label, i) => (
                <span key={`m-${i}`} className="h-4 overflow-visible whitespace-nowrap">
                  {label}
                </span>
              ))}
            </div>
            <div className="flex gap-1.5">
              <div className="grid grid-rows-7 gap-[3px] text-[10px] leading-[11px] text-white/40">
                <span className="h-[11px]" />
                <span className="h-[11px]">Mon</span>
                <span className="h-[11px]" />
                <span className="h-[11px]">Wed</span>
                <span className="h-[11px]" />
                <span className="h-[11px]">Fri</span>
                <span className="h-[11px]" />
              </div>
              <div
                className="grid gap-[3px]"
                style={{ gridTemplateColumns: `repeat(${Math.max(weeks.length, 1)}, 11px)` }}
              >
                {weeks.map((week, wi) => (
                  <div key={wi} className="grid grid-rows-7 gap-[3px]">
                    {week.map((day, di) => (
                      <span
                        key={`${wi}-${di}`}
                        title={
                          day
                            ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`
                            : undefined
                        }
                        className="block h-[11px] w-[11px] rounded-[2px]"
                        style={{
                          backgroundColor: day
                            ? LEVEL_COLORS[day.level ?? 0]
                            : 'transparent',
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-white/40">
              <span>Less</span>
              {LEVEL_COLORS.map((color) => (
                <span
                  key={color}
                  className="h-2.5 w-2.5 rounded-[2px]"
                  style={{ backgroundColor: color }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function KpiStats({ cards, error }) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="glow-cyan rounded-2xl border border-cyan/20 bg-panel/70 px-4 py-5 text-center backdrop-blur-md sm:px-5 sm:py-6"
        >
          <p className="text-3xl font-semibold tracking-tight text-cyan sm:text-4xl">
            {card.value}
          </p>
          <p className="mt-2 font-mono text-[10px] tracking-[0.16em] text-white/50 uppercase sm:text-[11px]">
            {card.label}
          </p>
          {card.hint ? (
            <p className="mt-1 text-xs text-white/40">{card.hint}</p>
          ) : null}
        </div>
      ))}
      {error ? (
        <p className="col-span-full text-center text-sm text-white/45">{error}</p>
      ) : null}
    </div>
  );
}

function Stats() {
  const [contributions, setContributions] = useState([]);
  const [total, setTotal] = useState(null);
  const [streak, setStreak] = useState(null);
  const [repos, setRepos] = useState(null);
  const [fourth, setFourth] = useState({ label: 'Followers', value: null });
  const [loading, setLoading] = useState(Boolean(USERNAME));
  const [error, setError] = useState(
    USERNAME ? '' : 'Set githubUsername in src/data/profile.json to load GitHub stats.',
  );
  const [kpiError, setKpiError] = useState('');

  useEffect(() => {
    let cancelled = false;

    if (!USERNAME) {
      return undefined;
    }

    const contributionsUrl = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
    const userUrl = `https://api.github.com/users/${USERNAME}`;
    const reposUrl = `https://api.github.com/users/${USERNAME}/repos?per_page=100&type=owner`;

    async function load() {
      try {
        const contribRes = await fetch(contributionsUrl);
        if (!contribRes.ok) throw new Error('Could not load contribution data.');
        const contribData = await contribRes.json();
        const days = contribData.contributions ?? [];
        const yearTotal =
          contribData.total?.lastYear ??
          days.reduce((sum, day) => sum + (day.count ?? 0), 0);

        if (cancelled) return;
        setContributions(days);
        setTotal(yearTotal);
        setStreak(longestStreak(days));

        let publicRepos = null;
        let followers = null;
        let stars = null;

        try {
          const [userRes, reposRes] = await Promise.all([
            fetch(userUrl, { headers: { Accept: 'application/vnd.github+json' } }),
            fetch(reposUrl, { headers: { Accept: 'application/vnd.github+json' } }),
          ]);
          if (userRes.ok) {
            const user = await userRes.json();
            publicRepos = user.public_repos ?? null;
            followers = user.followers ?? null;
          }
          if (reposRes.ok) {
            const repoList = await reposRes.json();
            if (Array.isArray(repoList)) {
              stars = repoList.reduce((sum, repo) => sum + (repo.stargazers_count ?? 0), 0);
            }
          }
          if (!userRes.ok && !reposRes.ok) {
            setKpiError('GitHub profile stats are temporarily unavailable.');
          }
        } catch {
          setKpiError('GitHub profile stats are temporarily unavailable.');
        }

        if (cancelled) return;
        setRepos(publicRepos);
        setFourth(
          stars != null
            ? { label: 'GitHub stars', value: stars, hint: 'Across public repos' }
            : { label: 'Followers', value: followers },
        );
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Could not load GitHub stats.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const cards = [
    {
      label: 'Contributions',
      value: loading ? '…' : formatNumber(total),
      hint: 'Last 12 months',
    },
    {
      label: 'Longest streak',
      value: loading ? '…' : formatNumber(streak),
      hint: streak ? 'consecutive days' : undefined,
    },
    {
      label: 'Public repos',
      value: loading ? '…' : formatNumber(repos),
    },
    {
      label: fourth.label,
      value: loading ? '…' : formatNumber(fourth.value),
      hint: fourth.hint,
    },
  ];

  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="section-wrap space-y-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          GitHub Stats
        </h2>
        <ContributionCalendar
          username={USERNAME}
          contributions={contributions}
          total={total}
          error={error}
          loading={loading}
        />
        <KpiStats cards={cards} error={kpiError} />
      </div>
    </section>
  );
}

export default Stats;
