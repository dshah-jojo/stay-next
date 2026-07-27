'use client';

// Core screens: Today, Ask, Plan, Reflect, the Guide, Life Path, Privacy.
import React from 'react';
import { css } from '@/lib/css';

export function Today({ v }) {
  if (!v.sc.today) return null;
  const t = v.t;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('display:flex;align-items:flex-start;justify-content:space-between')}>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.dateLine}</div>
          <div style={css('margin-top:6px;font-size:26px;font-weight:500;line-height:1.2;max-width:250px;text-wrap:pretty')}>{t.greeting}</div>
        </div>
        <div onClick={v.goDevice} style={css('display:flex;align-items:center;gap:5px;padding:5px 9px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:10.5px;color:var(--color-neutral-400);cursor:pointer;flex:none;margin-top:16px')}>
          <i className="ph ph-broadcast" style={css('font-size:12px;color:var(--color-accent)')}></i>86%
        </div>
      </div>

      <div style={css('margin-top:18px;display:flex;gap:6px;padding:3px;border-radius:10px;background:var(--color-neutral-900);border:1px solid var(--color-divider)')}>
        {v.metaTabs.map((m, i) => (
          <div key={i} onClick={m.go} style={css('flex:1;text-align:center;padding:6px 0;border-radius:8px;font-size:11.5px;cursor:pointer;background:' + m.bg + ';color:' + m.fg)}>{m.label}</div>
        ))}
      </div>

      <div style={css('margin-top:12px;display:flex;gap:7px;overflow-x:auto')}>
        <div onClick={v.goReview} className="hv-bd-a600" style={css('flex:none;padding:8px 12px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11.5px;color:var(--color-neutral-300);cursor:pointer')}><i className="ph ph-moon-stars" style={css('margin-right:6px;color:var(--color-accent-400)')}></i>Review</div>
        <div onClick={v.goJournal} className="hv-bd-a600" style={css('flex:none;padding:8px 12px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11.5px;color:var(--color-neutral-300);cursor:pointer')}><i className="ph ph-notebook" style={css('margin-right:6px;color:var(--color-accent-400)')}></i>Journal</div>
        <div onClick={v.goQuestNew} className="hv-bd-a600" style={css('flex:none;padding:8px 12px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11.5px;color:var(--color-neutral-300);cursor:pointer')}><i className="ph ph-flag-banner" style={css('margin-right:6px;color:var(--color-accent-400)')}></i>New quest</div>
        <div onClick={v.goTravelHome} className="hv-bg-a900" style={css('flex:none;padding:8px 12px;border-radius:20px;border:1px solid var(--color-accent-700);font-size:11.5px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-airplane-tilt" style={css('margin-right:6px')}></i>Traveller</div>
        <div onClick={v.goReminders} className="hv-bd-a600" style={css('flex:none;padding:8px 12px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11.5px;color:var(--color-neutral-300);cursor:pointer')}><i className="ph ph-bell" style={css('margin-right:6px;color:var(--color-accent-400)')}></i>Reminders</div>
      </div>

      {v.isTimeline && (
        <div style={css('margin-top:20px')}>
          {v.timeline.map((e, i) => (
            <div key={i} style={css('display:flex;gap:13px')}>
              <div style={css('width:44px;flex:none;text-align:right;font-family:ui-monospace,Menlo,monospace;font-size:11px;color:var(--color-neutral-500);padding-top:2px')}>{e.time}</div>
              <div style={css('width:11px;flex:none;display:flex;flex-direction:column;align-items:center')}>
                <div style={css('width:7px;height:7px;border-radius:50%;background:' + e.dot + ';margin-top:5px;flex:none')}></div>
                <div style={css('flex:1;width:1px;background:linear-gradient(to bottom,var(--color-neutral-800),transparent)')}></div>
              </div>
              <div style={css('flex:1;padding-bottom:20px')}>
                <div style={css('font-size:14.5px;font-weight:500;line-height:1.35')}>{e.title}</div>
                <div style={css('margin-top:4px;font-size:12.5px;line-height:1.5;color:var(--color-neutral-400);text-wrap:pretty')}>{e.body}</div>
                <div style={css('margin-top:7px;display:flex;gap:6px;flex-wrap:wrap')}>
                  {e.tags.map((tg, ti) => (
                    <div key={ti} style={css('padding:3px 8px;border-radius:6px;background:var(--color-neutral-900);border:1px solid var(--color-divider);font-size:10px;color:var(--color-neutral-400)')}>{tg}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {v.isCards && (
        <div style={css('margin-top:18px;display:flex;flex-direction:column;gap:10px')}>
          {v.timeline.map((e, i) => (
            <div key={i} style={css('padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider);box-shadow:var(--shadow-sm)')}>
              <div style={css('display:flex;align-items:center;justify-content:space-between')}>
                <div style={css('display:flex;align-items:center;gap:8px')}><div style={css('width:6px;height:6px;border-radius:50%;background:' + e.dot)}></div><div style={css('font-size:14.5px;font-weight:500')}>{e.title}</div></div>
                <div style={css('font-family:ui-monospace,monospace;font-size:10.5px;color:var(--color-neutral-600)')}>{e.time}</div>
              </div>
              <div style={css('margin-top:8px;font-size:12.5px;line-height:1.5;color:var(--color-neutral-400)')}>{e.body}</div>
              <div style={css('margin-top:10px;display:flex;gap:6px;flex-wrap:wrap')}>
                {e.tags.map((tg, ti) => (
                  <div key={ti} style={css('padding:3px 8px;border-radius:6px;background:var(--color-neutral-900);font-size:10px;color:var(--color-neutral-400)')}>{tg}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {v.isOne && (
        <div style={css('margin-top:18px')}>
          <div style={css('padding:24px 20px;border-radius:18px;background:linear-gradient(165deg,var(--om-card2),var(--color-surface));border:1px solid var(--color-accent-800)')}>
            <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent-300)')}>{t.oneThing}</div>
            <div style={css('margin-top:14px;font-size:24px;font-weight:500;line-height:1.28;text-wrap:pretty')}>Give Chirag bhai the ₹2,365 decision — he waits till Thursday.</div>
            <div style={css('margin-top:14px;font-size:12.5px;line-height:1.55;color:var(--color-neutral-400)')}>It blocks the enclosure order, which blocks the 50-unit test batch. Everything else on today&apos;s list can move.</div>
            <div style={css('margin-top:16px;display:flex;gap:8px')}>
              <div className="hv-bg-a900" style={css('padding:8px 13px;border-radius:10px;border:1px solid var(--color-accent);font-size:12.5px;color:var(--color-accent-200);cursor:pointer')}>Draft the reply</div>
              <div onClick={v.goPlanner} className="hv-bd-n600" style={css('padding:8px 13px;border-radius:10px;border:1px solid var(--color-neutral-800);font-size:12.5px;color:var(--color-neutral-400);cursor:pointer')}>See the rest</div>
            </div>
          </div>
          <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:8px')}>
            {v.quietRest.map((r, i) => (
              <div key={i} style={css('padding:12px 14px;border-radius:11px;border:1px solid var(--color-divider);display:flex;align-items:center;gap:10px;font-size:12.5px;color:var(--color-neutral-400)')}><i className={'ph ' + r.icon} style={css('font-size:14px;color:var(--color-neutral-600)')}></i>{r.text}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Ask({ v }) {
  if (!v.sc.ask) return null;
  const t = v.t;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.askKicker}</div>
      <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>{t.ask}</div>
      <div style={css('margin-top:14px;display:flex;gap:8px;align-items:center;padding:11px 13px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-neutral-800)')}>
        <i className="ph ph-magnifying-glass" style={css('font-size:16px;color:var(--color-neutral-500)')}></i>
        <input value={v.q} onChange={v.setQ} onKeyDown={v.onKey} placeholder={t.askPh} style={css('flex:1;background:transparent;border:none;outline:none;color:var(--color-text);font-size:13.5px;font-family:inherit')} />
        <div onClick={v.submitQ} className="hv-bg-a900" style={css('width:30px;height:30px;border-radius:9px;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-arrow-up" style={css('font-size:14px;color:var(--color-accent-200)')}></i></div>
      </div>
      <div style={css('margin-top:10px;display:flex;gap:6px;flex-wrap:wrap')}>
        {v.askChips.map((c, i) => (
          <div key={i} onClick={c.go} className="hv-bd-a600-fg-a200" style={css('padding:6px 11px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11.5px;color:var(--color-neutral-300);cursor:pointer')}>{c.label}</div>
        ))}
      </div>

      {v.threadEmpty && (
        <div style={css('margin-top:34px;padding:20px;border-radius:14px;border:1px dashed var(--color-neutral-800);text-align:center')}>
          <i className="ph ph-brain" style={css('font-size:26px;color:var(--color-neutral-700)')}></i>
          <div style={css('margin-top:12px;font-size:13.5px;line-height:1.55;color:var(--color-neutral-400);text-wrap:pretty')}>{t.askEmpty}</div>
          <div style={css('margin-top:10px;font-size:11px;color:var(--color-neutral-600)')}>1,284 moments · 61 days · on this phone</div>
        </div>
      )}

      <div style={css('margin-top:18px;display:flex;flex-direction:column;gap:14px')}>
        {v.thread.map((m, i) => (
          <div key={i} style={css('animation:fadeUp .35s ease both')}>
            <div style={css('display:flex;justify-content:flex-end')}>
              <div style={css('max-width:80%;padding:10px 13px;border-radius:14px 14px 4px 14px;background:var(--color-accent-800);font-size:13.5px;line-height:1.45;color:var(--color-accent-100)')}>{m.q}</div>
            </div>
            <div style={css('margin-top:12px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
              <div style={css('font-size:14px;line-height:1.6;color:var(--color-neutral-200);text-wrap:pretty')}>{m.a}</div>
              {m.showCites && (
                <div style={css('margin-top:13px;padding-top:11px;border-top:1px solid var(--color-divider)')}>
                  <div style={css('font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.from}</div>
                  <div style={css('margin-top:9px;display:flex;flex-direction:column;gap:7px')}>
                    {m.cites.map((c, ci) => (
                      <div key={ci} className="hv-bg-a900" style={css('display:flex;gap:9px;align-items:flex-start;padding:8px 10px;border-radius:9px;background:var(--color-neutral-900);cursor:pointer')}>
                        <i className="ph ph-waveform" style={css('font-size:13px;color:var(--color-accent-400);margin-top:2px')}></i>
                        <div style={css('flex:1')}>
                          <div style={css('font-size:11.5px;color:var(--color-neutral-300)')}>{c.label}</div>
                          <div style={css('margin-top:3px;font-size:11px;line-height:1.45;color:var(--color-neutral-500);font-style:italic')}>“{c.quote}”</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {m.showConf && (
                <div style={css('margin-top:12px;display:flex;align-items:center;gap:7px;font-size:10.5px;color:var(--color-neutral-600)')}><i className="ph ph-shield-check" style={css('font-size:13px;color:var(--color-accent-400)')}></i>{m.conf}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Planner({ v }) {
  if (!v.sc.planner) return null;
  const t = v.t;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.planKicker}</div>
      <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>{t.plan}</div>
      <div style={css('margin-top:16px;display:flex;flex-direction:column;gap:8px')}>
        {v.tasks.map((k, i) => (
          <div key={i} onClick={k.toggle} className="hv-bd-n700" style={css('padding:13px 14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;gap:11px;align-items:flex-start;cursor:pointer')}>
            <i className={'ph ' + k.icon} style={css('font-size:18px;color:' + k.iconFg + ';margin-top:1px')}></i>
            <div style={css('flex:1')}>
              <div style={css('font-size:13.5px;line-height:1.4;color:' + k.fg + ';text-decoration:' + k.deco)}>{k.text}</div>
              <div style={css('margin-top:5px;display:flex;align-items:center;gap:8px;font-size:10.5px;color:var(--color-neutral-600)')}><i className="ph ph-quotes" style={css('font-size:11px')}></i>{k.src}</div>
            </div>
            <div style={css('font-size:10px;padding:3px 7px;border-radius:6px;background:' + k.dueBg + ';color:' + k.dueFg + ';flex:none')}>{k.due}</div>
          </div>
        ))}
      </div>
      <div style={css('margin-top:12px;font-size:11.5px;color:var(--color-neutral-500)')}>{v.doneLabel}</div>

      <div style={css('margin-top:26px;display:flex;align-items:center;justify-content:space-between')}>
        <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.quests}</div>
        <div onClick={v.goQuestNew} className="hv-bg-a900" style={css('padding:5px 10px;border-radius:20px;border:1px solid var(--color-accent-700);font-size:11px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-plus" style={css('margin-right:5px')}></i>New quest</div>
      </div>
      <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:10px')}>
        {v.quests.map((qs, i) => (
          <div key={i} style={css('padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('display:flex;align-items:center;justify-content:space-between')}>
              <div style={css('font-size:14px;font-weight:500')}>{qs.title}</div>
              <div style={css('font-size:11px;color:var(--color-accent-300)')}>{qs.stat}</div>
            </div>
            <div style={css('margin-top:11px;height:4px;border-radius:2px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + qs.pct + ';background:var(--color-accent);box-shadow:0 0 10px var(--color-accent)')}></div></div>
            <div style={css('margin-top:9px;font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}>{qs.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Reflect({ v }) {
  if (!v.sc.reflect) return null;
  const t = v.t;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.reflectKicker}</div>
      <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>{t.reflect}</div>

      <div style={css('margin-top:18px;padding:16px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('display:flex;align-items:baseline;justify-content:space-between')}>
          <div style={css('font-size:12.5px;font-weight:500')}>{t.energy}</div>
          <div style={css('font-size:10.5px;color:var(--color-neutral-600)')}>last 7 days</div>
        </div>
        <div style={css('margin-top:16px;height:104px;display:flex;align-items:flex-end;gap:9px')}>
          {v.week.map((d, i) => (
            <div key={i} style={css('flex:1;display:flex;flex-direction:column;align-items:center;gap:7px')}>
              <div style={css('width:100%;border-radius:5px 5px 2px 2px;height:' + d.h + 'px;background:' + d.bg)}></div>
              <div style={css('font-size:9.5px;color:var(--color-neutral-600)')}>{d.day}</div>
            </div>
          ))}
        </div>
        <div style={css('margin-top:12px;padding-top:11px;border-top:1px solid var(--color-divider);font-size:12px;line-height:1.55;color:var(--color-neutral-400);text-wrap:pretty')}>{t.energyNote}</div>
      </div>

      <div style={css('margin-top:11px;padding:16px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500')}>{t.themes}</div>
        <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:9px')}>
          {v.themes.map((th, i) => (
            <div key={i} style={css('display:flex;align-items:center;gap:10px')}>
              <div style={css('width:96px;flex:none;font-size:12px;color:var(--color-neutral-300)')}>{th.name}</div>
              <div style={css('flex:1;height:6px;border-radius:3px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + th.pct + ';background:' + th.bg)}></div></div>
              <div style={css('width:26px;text-align:right;font-size:10.5px;font-family:ui-monospace,monospace;color:var(--color-neutral-500)')}>{th.n}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={css('margin-top:11px;padding:18px;border-radius:14px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>{t.noticed}</div>
        <div style={css('margin-top:11px;font-size:15px;line-height:1.55;color:var(--color-accent-100);text-wrap:pretty')}>{t.insight}</div>
        <div style={css('margin-top:12px;font-size:11px;color:var(--color-accent-400)')}>Drawn from 14 sessions · 3 in Gujarati, 6 code-mixed</div>
      </div>
    </div>
  );
}

export function Guide({ v }) {
  if (!v.sc.guide) return null;
  return (
    <div style={css('min-height:874px;padding:58px 16px 40px;display:flex;flex-direction:column;background:radial-gradient(110% 38% at 50% 3%,var(--om-hero) 0%,var(--color-bg) 56%)')}>
      <div style={css('display:flex;align-items:center;gap:11px')}>
        <div style={css('position:relative;width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex:none')}>
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-accent-800);animation:ring 3.2s ease-out infinite')}></div>
          <div style={css('width:8px;height:8px;border-radius:50%;background:var(--color-accent);box-shadow:0 0 12px var(--color-accent)')}></div>
        </div>
        <div style={css('flex:1')}>
          <div style={css('font-size:15px;font-weight:500')}>The Guide</div>
          <div style={css('margin-top:2px;font-size:10.5px;color:var(--color-neutral-500)')}>{v.guideMeta}</div>
        </div>
        <div onClick={v.toggleGuideVoice} style={css('height:32px;padding:0 11px;border-radius:11px;border:1px solid ' + v.gv.border + ';background:' + v.gv.bg + ';display:flex;align-items:center;gap:7px;cursor:pointer;flex:none')}>
          <i className={'ph ' + v.gv.icon} style={css('font-size:15px;color:' + v.gv.fg)}></i>
          <span style={css('font-size:11px;color:' + v.gv.fg)}>{v.gv.label}</span>
        </div>
      </div>

      <div onClick={v.goLifePath} className="hv-bd-a600" style={css('margin-top:14px;padding:13px 14px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;align-items:center;gap:11px;cursor:pointer')}>
        <i className="ph ph-path" style={css('font-size:18px;color:var(--color-accent-400)')}></i>
        <div style={css('flex:1')}>
          <div style={css('font-size:13px;font-weight:500')}>Life Path mode</div>
          <div style={css('margin-top:3px;font-size:11px;color:var(--color-neutral-500)')}>Ten years against this week. Twenty minutes, once a quarter.</div>
        </div>
        <i className="ph ph-caret-right" style={css('font-size:13px;color:var(--color-neutral-700)')}></i>
      </div>

      <div style={css('margin-top:20px;display:flex;flex-direction:column;gap:18px')}>
        {v.guideThread.map((m, i) => (
          <React.Fragment key={i}>
            {m.isGuide && (
              <div style={css('display:flex;gap:12px;animation:fadeUp .35s ease both')}>
                <div style={css('width:2px;border-radius:2px;background:var(--color-accent-600);flex:none')}></div>
                <div style={css('flex:1')}>
                  <div style={css('font-size:17px;line-height:1.6;text-wrap:pretty')}>{m.text}</div>
                  {m.speaking && (
                    <div style={css('margin-top:9px;display:flex;align-items:center;gap:7px')}>
                      <div style={css('display:flex;align-items:flex-end;gap:2px;height:12px')}>
                        {v.guideWaves.map((w, wi) => (
                          <div key={wi} style={css('width:2px;border-radius:1px;background:var(--color-accent-400);height:' + w.h + 'px;animation:wv ' + w.dur + ' ease-in-out ' + w.delay + ' infinite')}></div>
                        ))}
                      </div>
                      <span style={css('font-size:10.5px;color:var(--color-accent-300)')}>{v.guideSpeakingLabel}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            {m.isYou && (
              <div style={css('display:flex;justify-content:flex-end;animation:fadeUp .3s ease both')}>
                <div style={css('max-width:82%;padding:11px 14px;border-radius:15px 15px 5px 15px;background:var(--color-accent-800);font-size:14px;line-height:1.5;color:var(--color-accent-100)')}>{m.text}</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {v.guideHasAction && (
        <div style={css('margin-top:18px;padding:15px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-accent-800);box-shadow:var(--shadow-sm);animation:fadeUp .4s ease both')}>
          <div style={css('display:flex;align-items:center;gap:8px')}>
            <i className={'ph ' + v.guideActionIcon} style={css('font-size:16px;color:var(--color-accent-400)')}></i>
            <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>{v.guideActionKicker}</div>
          </div>
          <div style={css('margin-top:10px;font-size:14px;line-height:1.55')}>{v.guideActionText}</div>
          <div style={css('margin-top:13px;display:flex;gap:8px')}>
            <div onClick={v.guideActionGo} className="hv-bg-a900" style={css('flex:1;height:42px;border-radius:11px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--color-accent-100);cursor:pointer')}>{v.guideActionCta}</div>
            <div onClick={v.guideDismiss} style={css('padding:0 15px;height:42px;border-radius:11px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--color-neutral-400);cursor:pointer')}>Not now</div>
          </div>
        </div>
      )}

      <div style={css('flex:1;min-height:24px')}></div>

      <div style={css('display:flex;gap:7px;flex-wrap:wrap;margin-bottom:11px')}>
        {v.guideReplies.map((r, i) => (
          <div key={i} onClick={r.go} className="hv-bd-a600-fg-a200" style={css('padding:9px 13px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:12.5px;color:var(--color-neutral-300);cursor:pointer')}>{r.label}</div>
        ))}
      </div>
      <div style={css('display:flex;gap:9px;align-items:center;padding:11px 13px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-neutral-800)')}>
        <input value={v.guideInput} onChange={v.setGuideInput} onKeyDown={v.onGuideKey} placeholder={v.guidePlaceholder} style={css('flex:1;background:transparent;border:none;outline:none;color:var(--color-text);font-size:14px;font-family:inherit')} />
        <div onClick={v.guideMic} style={css('width:34px;height:34px;border-radius:11px;border:1px solid ' + v.guideMicBorder + ';background:' + v.guideMicBg + ';display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className={'ph ' + v.guideMicIcon} style={css('font-size:16px;color:var(--color-accent-200)')}></i></div>
      </div>
      <div style={css('margin-top:11px;display:flex;gap:8px')}>
        <div onClick={v.guideEnd} className="hv-bg-a900" style={css('flex:1;height:46px;border-radius:12px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:8px;font-size:13.5px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-notebook" style={css('font-size:16px')}></i>{v.guideEndLabel}</div>
        <div onClick={v.guideRestart} style={css('width:46px;height:46px;border-radius:12px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-arrow-counter-clockwise" style={css('font-size:15px;color:var(--color-neutral-400)')}></i></div>
      </div>
      <div style={css('margin-top:10px;text-align:center;font-size:10.5px;line-height:1.5;color:var(--color-neutral-600)')}>{v.guideFooter}</div>
    </div>
  );
}

export function LifePath({ v }) {
  if (!v.sc.lifePath) return null;
  return (
    <div style={css('min-height:874px;padding:58px 16px 40px;background:radial-gradient(120% 40% at 50% 3%,var(--om-hero) 0%,var(--color-bg) 58%)')}>
      <div style={css('display:flex;align-items:center;gap:10px')}>
        <div onClick={v.goGuide} style={css('width:34px;height:34px;border-radius:11px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-left" style={css('font-size:15px;color:var(--color-neutral-300)')}></i></div>
        <div style={css('flex:1;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Life Path mode</div>
        <div style={css('font-size:10.5px;color:var(--color-neutral-600)')}>{v.lpQuarter}</div>
      </div>

      {v.lpForm && (
        <>
          <div style={css('margin-top:18px;font-size:27px;font-weight:500;line-height:1.2;text-wrap:pretty')}>{v.lpTitle}</div>
          <div style={css('margin-top:11px;font-size:13.5px;line-height:1.6;color:var(--color-neutral-400)')}>Five honest answers. I will hold them against what I already hear in your weeks — no scoring, no judgement, just the gap made visible.</div>

          <div style={css('margin-top:20px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:13px;font-weight:500;line-height:1.4')}>Of last week&apos;s working hours, how many went to work only you could have done?</div>
            <div style={css('margin-top:6px;font-size:11px;line-height:1.5;color:var(--color-neutral-500)')}>Not important work. Irreplaceable work.</div>
            <div style={css('margin-top:12px;display:flex;gap:6px')}>
              {v.lpTenOpts.map((o, i) => (
                <div key={i} onClick={o.go} style={css('flex:1;text-align:center;padding:9px 0;border-radius:9px;border:1px solid ' + o.border + ';background:' + o.bg + ';font-size:11px;color:' + o.fg + ';cursor:pointer')}>{o.label}</div>
              ))}
            </div>
            <div style={css('margin-top:10px;font-size:11px;line-height:1.5;color:var(--color-neutral-600)')}>{v.lpTenEcho}</div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:13px;font-weight:500;line-height:1.4')}>If your income stopped tomorrow, how long could you carry on as you are?</div>
            <div style={css('margin-top:6px;font-size:11px;line-height:1.5;color:var(--color-neutral-500)')}>Runway decides how bravely you can choose.</div>
            <div style={css('margin-top:12px;display:flex;gap:4px;padding:3px;border-radius:10px;background:var(--color-neutral-900)')}>
              {v.lpMoneyOpts.map((o, i) => (
                <div key={i} onClick={o.go} style={css('flex:1;text-align:center;padding:8px 2px;border-radius:8px;font-size:11px;cursor:pointer;background:' + o.bg + ';color:' + o.fg)}>{o.label}</div>
              ))}
            </div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:13px;font-weight:500;line-height:1.4')}>Who would notice within two days if you quietly broke a promise?</div>
            <div style={css('margin-top:6px;font-size:11px;line-height:1.5;color:var(--color-neutral-500)')}>Accountability is a person, not an intention.</div>
            <div style={css('margin-top:12px;display:flex;gap:4px;padding:3px;border-radius:10px;background:var(--color-neutral-900)')}>
              {v.lpAccOpts.map((o, i) => (
                <div key={i} onClick={o.go} style={css('flex:1;text-align:center;padding:8px 2px;border-radius:8px;font-size:11px;cursor:pointer;background:' + o.bg + ';color:' + o.fg)}>{o.label}</div>
              ))}
            </div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:13px;font-weight:500;line-height:1.4')}>What have you postponed three times or more?</div>
            <div style={css('margin-top:6px;font-size:11px;line-height:1.5;color:var(--color-neutral-500)')}>I already know one of them. Name the one I have not heard.</div>
            <input value={v.lpStuck} onChange={v.setLpStuck} placeholder="The conversation about equity" style={css('margin-top:12px;width:100%;background:transparent;border:none;outline:none;color:var(--color-text);font-size:15px;font-family:inherit;border-bottom:1px solid var(--color-neutral-800);padding-bottom:8px')} />
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:12.5px;font-weight:500')}>In ten years, what would make it worth it?</div>
            <div style={css('margin-top:11px;display:flex;gap:7px;flex-wrap:wrap')}>
              {v.lpIntentChips.map((c, i) => (
                <div key={i} onClick={c.toggle} style={css('padding:8px 12px;border-radius:20px;border:1px solid ' + c.border + ';background:' + c.bg + ';font-size:12px;color:' + c.fg + ';cursor:pointer')}>{c.label}</div>
              ))}
            </div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:12.5px;font-weight:500')}>Where are you in the lifespan?</div>
            <div style={css('margin-top:11px;display:flex;gap:6px')}>
              {v.lpAgeOpts.map((o, i) => (
                <div key={i} onClick={o.go} style={css('flex:1;text-align:center;padding:9px 0;border-radius:9px;border:1px solid ' + o.border + ';background:' + o.bg + ';font-size:11px;color:' + o.fg + ';cursor:pointer')}>{o.label}</div>
              ))}
            </div>
          </div>

          <div onClick={v.lpRun} className="hv-bg-a900" style={css('margin-top:18px;height:54px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:9px;font-size:15px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-path" style={css('font-size:17px')}></i>Show me the picture</div>
        </>
      )}

      {v.lpResults && (
        <>
          <div style={css('margin-top:18px;display:flex;gap:16px;align-items:center;animation:fadeUp .4s ease both')}>
            <div style={css('width:118px;height:118px;border-radius:50%;flex:none;background:' + v.lpRing + ';display:flex;align-items:center;justify-content:center')}>
              <div style={css('width:92px;height:92px;border-radius:50%;background:var(--color-bg);display:flex;flex-direction:column;align-items:center;justify-content:center')}>
                <div style={css('font-size:31px;font-weight:500;line-height:1;letter-spacing:-.02em')}>{v.lpScore}</div>
                <div style={css('margin-top:4px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-neutral-600)')}>Aligned</div>
              </div>
            </div>
            <div style={css('flex:1')}>
              <div style={css('font-size:19px;font-weight:500;line-height:1.3;text-wrap:pretty')}>{v.lpVerdict}</div>
              <div style={css('margin-top:8px;font-size:12px;line-height:1.5;color:var(--color-neutral-400)')}>{v.lpVerdictNote}</div>
            </div>
          </div>

          <div style={css('margin-top:14px;display:flex;flex-direction:column;gap:10px')}>
            {v.lpBoosters.map((b, i) => (
              <div key={i} style={css('padding:15px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
                <div style={css('display:flex;align-items:center;gap:10px')}>
                  <i className={'ph ' + b.icon} style={css('font-size:17px;color:var(--color-accent-400)')}></i>
                  <div style={css('flex:1;font-size:13.5px;font-weight:500')}>{b.name}</div>
                  <div style={css('font-size:13px;font-family:ui-monospace,Menlo,monospace;color:' + b.fg)}>{b.score}</div>
                </div>
                <div style={css('margin-top:11px;height:6px;border-radius:3px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + b.pct + ';background:' + b.bg)}></div></div>
                <div style={css('margin-top:10px;font-size:12px;line-height:1.55;color:var(--color-neutral-400);text-wrap:pretty')}>{b.note}</div>
              </div>
            ))}
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:12.5px;font-weight:500')}>This week against ten years</div>
            <div style={css('margin-top:14px;display:flex;gap:12px')}>
              {v.lpSplit.map((s, i) => (
                <div key={i} style={css('flex:1')}>
                  <div style={css('font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-neutral-600)')}>{s.label}</div>
                  <div style={css('margin-top:9px;display:flex;flex-direction:column;gap:6px')}>
                    {s.rows.map((r, ri) => (
                      <div key={ri} style={css('display:flex;align-items:center;gap:7px')}>
                        <div style={css('height:5px;border-radius:3px;width:' + r.pct + ';background:' + r.bg + ';flex:none;min-width:8px')}></div>
                        <div style={css('font-size:11px;color:var(--color-neutral-400)')}>{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={css('margin-top:13px;padding-top:12px;border-top:1px solid var(--color-divider);font-size:12.5px;line-height:1.6;color:var(--color-neutral-300);text-wrap:pretty')}>{v.lpGap}</div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:12.5px;font-weight:500')}>One life, in decades</div>
            <div style={css('margin-top:16px;display:flex;gap:3px;align-items:flex-end;height:76px')}>
              {v.lpDecades.map((d, i) => (
                <div key={i} style={css('flex:1;display:flex;flex-direction:column;align-items:center;gap:6px')}>
                  <div style={css('width:100%;border-radius:4px 4px 2px 2px;height:' + d.h + 'px;background:' + d.bg + ';border:1px solid ' + d.border)}></div>
                  <div style={css('font-size:9px;color:' + d.fg)}>{d.label}</div>
                </div>
              ))}
            </div>
            <div style={css('margin-top:14px;display:flex;flex-direction:column;gap:9px')}>
              {v.lpMilestones.map((m, i) => (
                <div key={i} style={css('display:flex;gap:10px;align-items:flex-start')}>
                  <div style={css('width:34px;flex:none;font-size:10.5px;font-family:ui-monospace,Menlo,monospace;color:var(--color-accent-300);padding-top:2px')}>{m.when}</div>
                  <div style={css('flex:1;font-size:12.5px;line-height:1.5;color:var(--color-neutral-300)')}>{m.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={css('margin-top:10px;padding:17px;border-radius:15px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
            <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>What I will do about it</div>
            <div style={css('margin-top:10px;font-size:14.5px;line-height:1.6;color:var(--color-accent-100);text-wrap:pretty')}>{v.lpPlan}</div>
            <div style={css('margin-top:13px;display:flex;gap:8px')}>
              <div onClick={v.goQuestNew} style={css('flex:1;height:42px;border-radius:11px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--color-accent-100);cursor:pointer')}>Make it a quest</div>
              <div onClick={v.lpEdit} style={css('padding:0 15px;height:42px;border-radius:11px;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--color-accent-300);cursor:pointer')}>Adjust</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function Privacy({ v }) {
  if (!v.sc.privacy) return null;
  const t = v.t;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.privacyKicker}</div>
      <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>{t.privacy}</div>

      <div style={css('margin-top:16px;padding:16px;border-radius:14px;background:linear-gradient(160deg,var(--om-hero),var(--color-surface));border:1px solid var(--color-accent-800)')}>
        <div style={css('display:flex;align-items:center;gap:9px')}>
          <i className="ph ph-lock-key" style={css('font-size:19px;color:var(--color-accent)')}></i>
          <div style={css('font-size:14px;font-weight:500')}>{t.vault}</div>
        </div>
        <div style={css('margin-top:11px;font-size:12.5px;line-height:1.55;color:var(--color-neutral-300);text-wrap:pretty')}>{t.vaultBody}</div>
        <div style={css('margin-top:13px;display:flex;gap:7px;flex-wrap:wrap')}>
          {v.privacyTags.map((pt, i) => (
            <div key={i} style={css('padding:4px 9px;border-radius:6px;border:1px solid var(--color-accent-700);font-size:10px;color:var(--color-accent-200)')}>{pt}</div>
          ))}
        </div>
      </div>

      <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:9px')}>
        {v.privacyToggles.map((p, i) => (
          <div key={i} style={css('padding:14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;gap:12px;align-items:flex-start')}>
            <div style={css('flex:1')}>
              <div style={css('font-size:13.5px;font-weight:500')}>{p.title}</div>
              <div style={css('margin-top:4px;font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}>{p.body}</div>
            </div>
            <div onClick={p.toggle} style={css('width:46px;height:27px;border-radius:14px;flex:none;background:' + p.trackBg + ';border:1px solid ' + p.trackBorder + ';padding:2px;display:flex;cursor:pointer;justify-content:' + p.justify + ';transition:all .2s')}>
              <div style={css('width:21px;height:21px;border-radius:50%;background:' + p.knob)}></div>
            </div>
          </div>
        ))}
      </div>

      <div style={css('margin-top:11px;padding:15px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500')}>{t.muteLog}</div>
        <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:1px')}>
          {v.muteLog.map((m, i) => (
            <div key={i} style={css('display:flex;align-items:center;gap:10px;padding:8px 0;border-top:1px solid var(--color-divider)')}>
              <i className={'ph ' + m.icon} style={css('font-size:14px;color:' + m.fg)}></i>
              <div style={css('flex:1;font-size:12px;color:var(--color-neutral-300)')}>{m.label}</div>
              <div style={css('font-family:ui-monospace,monospace;font-size:10.5px;color:var(--color-neutral-600)')}>{m.time}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={css('margin-top:11px;display:flex;gap:9px')}>
        <div className="hv-bg-a900" style={css('flex:1;height:46px;border-radius:12px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:7px;font-size:13px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-export" style={css('font-size:15px')}></i>{t.export}</div>
        <div className="hv-bd-n500" style={css('flex:1;height:46px;border-radius:12px;border:1px solid var(--color-neutral-700);display:flex;align-items:center;justify-content:center;gap:7px;font-size:13px;color:var(--color-neutral-300);cursor:pointer')}><i className="ph ph-trash" style={css('font-size:15px')}></i>{t.delete}</div>
      </div>
    </div>
  );
}
