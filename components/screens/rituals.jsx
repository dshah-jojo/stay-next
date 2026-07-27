'use client';

// Rituals: quests, daily review, journal (the book), sankalpa, bucket list,
// reminders and the Google Calendar flow.
import React from 'react';
import { css } from '@/lib/css';

export function QuestNew({ v }) {
  if (!v.sc.questNew) return null;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>New quest</div>
      <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>Something you want to become true</div>
      <div style={css('margin-top:9px;font-size:13px;line-height:1.5;color:var(--color-neutral-400)')}>A quest is bigger than a task. STAY watches your conversations for it and checks in — you do not have to remember to update it.</div>
      <div style={css('margin-top:18px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>The quest</div>
        <input value={v.questTitle} onChange={v.setQuestTitle} placeholder="Ship the pricing page myself" style={css('margin-top:9px;width:100%;background:transparent;border:none;outline:none;color:var(--color-text);font-size:16.5px;font-family:inherit')} />
        <div style={css('margin-top:12px;padding-top:12px;border-top:1px solid var(--color-divider);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>Why it matters</div>
        <input value={v.questWhy} onChange={v.setQuestWhy} placeholder="So the launch stops waiting on me" style={css('margin-top:8px;width:100%;background:transparent;border:none;outline:none;color:var(--color-neutral-300);font-size:13.5px;font-family:inherit')} />
      </div>
      <div style={css('margin-top:12px;font-size:11.5px;color:var(--color-neutral-500)')}>How often should I check in?</div>
      <div style={css('margin-top:8px;display:flex;gap:5px;padding:3px;border-radius:10px;background:var(--color-neutral-900);border:1px solid var(--color-divider)')}>
        {v.cadenceOpts.map((c, i) => (
          <div key={i} onClick={c.go} style={css('flex:1;text-align:center;padding:8px 0;border-radius:8px;font-size:12px;cursor:pointer;background:' + c.bg + ';color:' + c.fg)}>{c.label}</div>
        ))}
      </div>
      <div style={css('margin-top:14px;font-size:11.5px;color:var(--color-neutral-500)')}>Horizon</div>
      <div style={css('margin-top:8px;display:flex;gap:7px;flex-wrap:wrap')}>
        {v.horizonOpts.map((h, i) => (
          <div key={i} onClick={h.go} style={css('padding:7px 12px;border-radius:20px;border:1px solid ' + h.border + ';background:' + h.bg + ';font-size:12px;color:' + h.fg + ';cursor:pointer')}>{h.label}</div>
        ))}
      </div>
      <div style={css('margin-top:16px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500')}>How STAY helps</div>
        <div style={css('margin-top:10px;display:flex;flex-direction:column;gap:2px')}>
          {v.questHelp.map((h, i) => (
            <div key={i} onClick={h.toggle} style={css('display:flex;align-items:flex-start;gap:10px;padding:9px 0;border-top:1px solid var(--color-divider);cursor:pointer')}>
              <i className={'ph ' + h.icon} style={css('font-size:17px;color:' + h.iconFg + ';margin-top:1px')}></i>
              <div style={css('flex:1;font-size:12.5px;line-height:1.45;color:' + h.fg)}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div onClick={v.createQuest} className="hv-bg-a900" style={css('margin-top:18px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:8px;font-size:15px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-flag-banner" style={css('font-size:17px')}></i>Create quest</div>
      <div style={css('margin-top:11px;text-align:center;font-size:11px;color:var(--color-neutral-600)')}>{v.questFooter}</div>
    </div>
  );
}

export function Review({ v }) {
  if (!v.sc.review) return null;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('display:flex;align-items:baseline;justify-content:space-between')}>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Tonight · 21:04</div>
          <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>Daily review</div>
        </div>
        <div style={css('font-size:11.5px;color:var(--color-accent-300)')}>2 min</div>
      </div>
      <div style={css('margin-top:9px;font-size:13px;line-height:1.5;color:var(--color-neutral-400)')}>Already filled in from what you said today. Correct anything that is wrong — that is the whole job.</div>
      <div style={css('margin-top:18px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500')}>What moved</div>
        <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:8px')}>
          {v.reviewMoved.map((r, i) => (
            <div key={i} onClick={r.toggle} style={css('display:flex;gap:10px;align-items:flex-start;padding:10px 11px;border-radius:10px;background:' + r.bg + ';cursor:pointer')}>
              <i className={'ph ' + r.icon} style={css('font-size:16px;color:' + r.iconFg + ';margin-top:1px')}></i>
              <div style={css('flex:1')}>
                <div style={css('font-size:12.5px;line-height:1.45;color:' + r.fg)}>{r.text}</div>
                <div style={css('margin-top:4px;font-size:10.5px;color:var(--color-neutral-600)')}>{r.src}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={css('margin-top:11px;padding:15px;border-radius:14px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
        <div style={css('font-size:12.5px;font-weight:500;color:var(--color-accent-100)')}>What slipped</div>
        <div style={css('margin-top:9px;font-size:13px;line-height:1.55;color:var(--color-accent-200)')}>The vendor decision moved for the third day. It is the only thing blocking the 50-unit batch.</div>
        <div style={css('margin-top:11px;display:flex;gap:8px')}>
          <div onClick={v.goCalDraft} style={css('padding:8px 12px;border-radius:9px;border:1px solid var(--color-accent);font-size:12px;color:var(--color-accent-100);cursor:pointer')}>Book it for tomorrow</div>
          <div style={css('padding:8px 12px;border-radius:9px;border:1px solid var(--color-accent-700);font-size:12px;color:var(--color-accent-300);cursor:pointer')}>It is fine, let it go</div>
        </div>
      </div>
      <div style={css('margin-top:11px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500')}>One thing for tomorrow</div>
        <input value={v.reviewTomorrow} onChange={v.setReviewTomorrow} placeholder="Say it in your own words…" style={css('margin-top:10px;width:100%;background:transparent;border:none;outline:none;color:var(--color-text);font-size:15px;font-family:inherit')} />
      </div>
      <div style={css('margin-top:20px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Quest check-ins</div>
      <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:9px')}>
        {v.questCheckins.map((q, i) => (
          <div key={i} style={css('padding:13px 14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('display:flex;align-items:center;gap:10px')}>
              <div style={css('flex:1;font-size:13px;font-weight:500')}>{q.title}</div>
              <div onClick={q.plus} style={css('padding:5px 10px;border-radius:8px;border:1px solid var(--color-accent-700);font-size:11.5px;color:var(--color-accent-200);cursor:pointer')}>Moved</div>
              <div onClick={q.skip} style={css('padding:5px 10px;border-radius:8px;border:1px solid var(--color-neutral-800);font-size:11.5px;color:var(--color-neutral-500);cursor:pointer')}>Not today</div>
            </div>
            <div style={css('margin-top:10px;height:4px;border-radius:2px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + q.pct + ';background:var(--color-accent);transition:width .4s ease')}></div></div>
            <div style={css('margin-top:7px;font-size:11px;color:var(--color-neutral-500)')}>{q.note}</div>
          </div>
        ))}
      </div>
      <div onClick={v.saveReview} className="hv-bg-a900" style={css('margin-top:18px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{v.reviewCta}</div>
    </div>
  );
}

export function Bucket({ v }) {
  if (!v.sc.bucket) return null;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>The long game</div>
      <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>Bucket list</div>
      <div style={css('margin-top:16px;padding:16px;border-radius:14px;background:linear-gradient(160deg,var(--om-hero),var(--color-surface));border:1px solid var(--color-accent-800)')}>
        <div style={css('display:flex;align-items:center;gap:10px')}>
          <i className="ph ph-calendar-heart" style={css('font-size:18px;color:var(--color-accent)')}></i>
          <div style={css('flex:1;font-size:13.5px;font-weight:500')}>Sunday 20:00 · weekly walk-through</div>
        </div>
        <div style={css('margin-top:9px;font-size:12.5px;line-height:1.55;color:var(--color-neutral-300)')}>Four items to touch. STAY will ask about each one out loud — you answer in a sentence, it does the rest.</div>
      </div>
      <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:9px')}>
        {v.bucketItems.map((b, i) => (
          <div key={i} style={css('padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('display:flex;align-items:flex-start;gap:11px')}>
              <i className={'ph ' + b.icon} style={css('font-size:18px;color:var(--color-accent-400);margin-top:1px')}></i>
              <div style={css('flex:1')}>
                <div style={css('font-size:14.5px;font-weight:500;line-height:1.35')}>{b.title}</div>
                <div style={css('margin-top:4px;font-size:11.5px;color:var(--color-neutral-500)')}>{b.horizon} · last spoken about {b.last}</div>
              </div>
              <div onClick={b.toggle} style={css('width:42px;height:25px;border-radius:13px;flex:none;background:' + b.trackBg + ';border:1px solid ' + b.trackBorder + ';padding:2px;display:flex;cursor:pointer;justify-content:' + b.justify + ';transition:all .2s')}><div style={css('width:19px;height:19px;border-radius:50%;background:' + b.knob)}></div></div>
            </div>
            <div style={css('margin-top:11px;padding:10px 11px;border-radius:10px;background:var(--color-neutral-900);font-size:11.5px;line-height:1.5;color:var(--color-neutral-400)')}><i className="ph ph-waveform" style={css('margin-right:6px;color:var(--color-accent-500)')}></i>{b.evidence}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Reminders({ v }) {
  if (!v.sc.reminders) return null;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('display:flex;align-items:flex-end;justify-content:space-between')}>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Dates and promises</div>
          <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>Reminders</div>
        </div>
        <div onClick={v.goCalConsent} style={css('padding:6px 11px;border-radius:20px;border:1px solid ' + v.calChipBorder + ';font-size:11px;color:' + v.calChipFg + ';cursor:pointer;flex:none')}><i className="ph ph-google-logo" style={css('margin-right:5px')}></i>{v.calChip}</div>
      </div>
      <div style={css('margin-top:16px;display:flex;flex-direction:column;gap:9px')}>
        {v.reminderList.map((r, i) => (
          <div key={i} style={css('padding:14px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('display:flex;align-items:flex-start;gap:11px')}>
              <div style={css('width:44px;flex:none;text-align:center;padding:6px 0;border-radius:9px;background:var(--color-neutral-900)')}>
                <div style={css('font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-neutral-500)')}>{r.mon}</div>
                <div style={css('font-size:16px;font-weight:500;line-height:1.1')}>{r.day}</div>
              </div>
              <div style={css('flex:1')}>
                <div style={css('font-size:13.5px;font-weight:500;line-height:1.35')}>{r.title}</div>
                <div style={css('margin-top:4px;font-size:11px;color:var(--color-neutral-600)')}><i className="ph ph-quotes" style={css('margin-right:4px')}></i>{r.src}</div>
              </div>
              <div style={css('font-size:11px;font-family:ui-monospace,monospace;color:var(--color-neutral-400);flex:none')}>{r.time}</div>
            </div>
            <div onClick={r.go} style={css('margin-top:11px;padding:9px 0;border-radius:9px;border:1px solid ' + r.btnBorder + ';text-align:center;font-size:11.5px;color:' + r.btnFg + ';cursor:pointer')}>{r.btn}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CalConsent({ v }) {
  if (!v.sc.calConsent) return null;
  return (
    <div style={css('padding:70px 22px 40px')}>
      <div style={css('width:44px;height:44px;border-radius:13px;border:1px solid var(--color-divider);display:flex;align-items:center;justify-content:center')}><i className="ph ph-calendar-dots" style={css('font-size:22px;color:var(--color-accent)')}></i></div>
      <div style={css('margin-top:16px;font-size:26px;font-weight:500;line-height:1.2')}>Let STAY put things in your calendar</div>
      <div style={css('margin-top:10px;font-size:13.5px;line-height:1.55;color:var(--color-neutral-400)')}>You will confirm every single entry before it is written. Nothing appears in your calendar without a tap from you.</div>
      <div style={css('margin-top:20px;padding:6px 15px 10px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        {v.calScopes.map((s, i) => (
          <div key={i} style={css('display:flex;align-items:flex-start;gap:11px;padding:12px 0;border-top:1px solid var(--color-divider)')}>
            <i className={'ph ' + s.icon} style={css('font-size:17px;color:' + s.fg + ';margin-top:1px')}></i>
            <div style={css('flex:1')}>
              <div style={css('font-size:13px;font-weight:500;color:' + s.titleFg)}>{s.title}</div>
              <div style={css('margin-top:3px;font-size:11.5px;line-height:1.45;color:var(--color-neutral-500)')}>{s.body}</div>
            </div>
          </div>
        ))}
      </div>
      {v.calConnected && (
        <div style={css('margin-top:14px;padding:14px;border-radius:13px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);display:flex;align-items:center;gap:11px')}>
          <i className="ph ph-check-circle" style={css('font-size:19px;color:var(--color-accent)')}></i>
          <div style={css('flex:1')}>
            <div style={css('font-size:13px;font-weight:500;color:var(--color-accent-100)')}>Connected · you@studio.in</div>
            <div style={css('margin-top:3px;font-size:11px;color:var(--color-accent-300)')}>Write-only access · revoke any time from here</div>
          </div>
        </div>
      )}
      <div onClick={v.toggleCal} style={css('margin-top:16px;height:52px;border-radius:14px;border:1px solid ' + v.calBtnBorder + ';display:flex;align-items:center;justify-content:center;gap:9px;font-size:15px;color:' + v.calBtnFg + ';cursor:pointer')}>{v.calBtn}</div>
      <div onClick={v.goCalDraft} className="hv-bd-n600" style={css('margin-top:10px;height:46px;border-radius:14px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;font-size:13.5px;color:var(--color-neutral-300);cursor:pointer')}>See what an entry looks like</div>
      <div style={css('margin-top:14px;font-size:11px;line-height:1.55;color:var(--color-neutral-600)')}>STAY never reads the contents of your existing events, never invites anyone on your behalf, and never shares your calendar with a model provider.</div>
    </div>
  );
}

export function CalDraft({ v }) {
  if (!v.sc.calDraft) return null;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>From your Ask result</div>
      <div style={css('margin-top:6px;font-size:25px;font-weight:500;line-height:1.22')}>Confirm before it goes in</div>
      <div style={css('margin-top:16px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>Title</div>
        <div style={css('margin-top:8px;font-size:17px;font-weight:500;line-height:1.35')}>Enclosure decision call — Chirag bhai</div>
        <div style={css('margin-top:10px;padding-top:10px;border-top:1px solid var(--color-divider);font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}><i className="ph ph-quotes" style={css('margin-right:5px')}></i>“Thursday tak bata dena” · Vendor call, Tue 12:15</div>
      </div>
      <div style={css('margin-top:11px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500')}>Who is in it</div>
        <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:2px')}>
          {v.attendees.map((a, i) => (
            <div key={i} onClick={a.toggle} style={css('display:flex;align-items:center;gap:11px;padding:10px 0;border-top:1px solid var(--color-divider);cursor:pointer')}>
              <i className={'ph ' + a.icon} style={css('font-size:17px;color:' + a.iconFg)}></i>
              <div style={css('flex:1')}>
                <div style={css('font-size:13px;color:' + a.fg)}>{a.name}</div>
                <div style={css('margin-top:2px;font-size:10.5px;color:var(--color-neutral-600)')}>{a.role}</div>
              </div>
              {a.isOwner && (
                <div style={css('padding:3px 8px;border-radius:6px;background:var(--color-accent-800);font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:var(--color-accent-100)')}>Task owner</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={css('margin-top:11px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500')}>When</div>
        <div style={css('margin-top:11px;display:flex;gap:7px;flex-wrap:wrap')}>
          {v.evDates.map((d, i) => (
            <div key={i} onClick={d.go} style={css('padding:8px 12px;border-radius:10px;border:1px solid ' + d.border + ';background:' + d.bg + ';font-size:12px;color:' + d.fg + ';cursor:pointer')}>{d.label}</div>
          ))}
        </div>
        <div style={css('margin-top:9px;display:flex;gap:7px;flex-wrap:wrap')}>
          {v.evTimes.map((tm, i) => (
            <div key={i} onClick={tm.go} style={css('padding:8px 12px;border-radius:10px;border:1px solid ' + tm.border + ';background:' + tm.bg + ';font-size:12px;font-family:ui-monospace,monospace;color:' + tm.fg + ';cursor:pointer')}>{tm.label}</div>
          ))}
        </div>
        <div style={css('margin-top:11px;padding-top:11px;border-top:1px solid var(--color-divider);display:flex;gap:7px;flex-wrap:wrap')}>
          {v.evDurs.map((du, i) => (
            <div key={i} onClick={du.go} style={css('padding:6px 11px;border-radius:20px;border:1px solid ' + du.border + ';background:' + du.bg + ';font-size:11.5px;color:' + du.fg + ';cursor:pointer')}>{du.label}</div>
          ))}
        </div>
      </div>
      <div style={css('margin-top:11px;padding:14px 15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;align-items:center;gap:11px')}>
        <i className="ph ph-bell-ringing" style={css('font-size:17px;color:var(--color-accent-400)')}></i>
        <div style={css('flex:1;font-size:12.5px')}>Remind me 10 minutes before, on the pendant</div>
        <div onClick={v.toggleEvReminder} style={css('width:46px;height:27px;border-radius:14px;flex:none;background:' + v.evRem.trackBg + ';border:1px solid ' + v.evRem.trackBorder + ';padding:2px;display:flex;cursor:pointer;justify-content:' + v.evRem.justify + ';transition:all .2s')}><div style={css('width:21px;height:21px;border-radius:50%;background:' + v.evRem.knob)}></div></div>
      </div>
      {v.calCreated && (
        <div style={css('margin-top:12px;padding:16px;border-radius:14px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);animation:fadeUp .4s ease both')}>
          <div style={css('display:flex;align-items:center;gap:10px')}>
            <i className="ph ph-check-circle" style={css('font-size:20px;color:var(--color-accent)')}></i>
            <div style={css('flex:1;font-size:14px;font-weight:500;color:var(--color-accent-100)')}>{v.calCreatedLine}</div>
          </div>
          <div style={css('margin-top:10px;font-size:11.5px;line-height:1.5;color:var(--color-accent-300)')}>In your Google Calendar. The task in Plan now points at this event, and the pendant will nudge you 10 minutes before.</div>
        </div>
      )}
      <div onClick={v.createEvent} className="hv-bg-a900" style={css('margin-top:14px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:9px;font-size:15px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-calendar-plus" style={css('font-size:17px')}></i>{v.createEventLabel}</div>
    </div>
  );
}

export function Journal({ v }) {
  if (!v.sc.journal) return null;
  return (
    <div style={css('min-height:874px;padding:60px 14px 40px;background:radial-gradient(120% 34% at 50% 2%,var(--om-hero) 0%,var(--color-bg) 52%)')}>
      <div style={css('display:flex;align-items:flex-end;justify-content:space-between;padding:0 4px')}>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{v.journalDate}</div>
          <div style={css('margin-top:5px;font-size:25px;font-weight:500')}>Journal</div>
        </div>
        <div style={css('display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:20px;border:1px solid var(--color-accent-800);background:var(--color-accent-900);flex:none')}>
          <i className="ph ph-flame" style={css('font-size:12px;color:var(--color-accent-300)')}></i>
          <span style={css('font-size:10.5px;color:var(--color-accent-200)')}>{v.journalStreak}</span>
        </div>
      </div>

      <div style={css('margin-top:16px;perspective:1600px')}>
        <div style={css('position:relative')}>
          <div style={css('position:absolute;left:6px;right:-5px;top:7px;bottom:-6px;border-radius:8px 16px 16px 8px;background:var(--color-neutral-900);border:1px solid var(--color-divider)')}></div>
          <div style={css('position:absolute;left:3px;right:-2px;top:3px;bottom:-3px;border-radius:8px 16px 16px 8px;background:var(--color-surface);border:1px solid var(--color-divider);opacity:.7')}></div>
          <div style={css('position:relative;border-radius:8px 16px 16px 8px;background:linear-gradient(100deg,var(--om-card2) 0%,var(--color-surface) 9%,var(--color-surface) 100%);border:1px solid var(--color-divider);box-shadow:var(--shadow-md);padding:22px 20px 18px 26px;transform:' + v.bookTransform + ';transform-origin:left center;transition:transform .42s cubic-bezier(.4,0,.2,1),opacity .3s ease;opacity:' + v.bookOpacity)}>
            <div style={css('position:absolute;left:9px;top:16px;bottom:16px;width:1px;background:var(--color-divider)')}></div>
            <div style={css('display:flex;align-items:center;justify-content:space-between')}>
              <div style={css('font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>{v.pageKicker}</div>
              <div style={css('font-size:9.5px;font-family:ui-monospace,Menlo,monospace;color:var(--color-neutral-700)')}>{v.pageNumber}</div>
            </div>

            <div style={css('margin-top:16px;font-size:23px;line-height:1.42;font-weight:500;letter-spacing:-.005em;text-wrap:pretty')}>{v.pageQuestion}</div>
            <div style={css('margin-top:12px;font-size:12.5px;line-height:1.6;color:var(--color-neutral-500);text-wrap:pretty')}>{v.pageProse}</div>

            {v.pageIsToday && (
              <>
                <div style={css('margin-top:20px;display:flex;flex-direction:column;align-items:center;gap:12px')}>
                  <div onClick={v.journalSpeak} style={css('position:relative;width:88px;height:88px;border-radius:50%;border:1px solid ' + v.jsRing + ';display:flex;align-items:center;justify-content:center;cursor:pointer')}>
                    <div style={css('position:absolute;inset:-9px;border-radius:50%;border:1px solid var(--color-accent-800);animation:' + v.jsAnim1)}></div>
                    <div style={css('position:absolute;inset:-9px;border-radius:50%;border:1px solid var(--color-accent-700);animation:' + v.jsAnim2)}></div>
                    <i className={'ph ' + v.jsIcon} style={css('font-size:27px;color:var(--color-accent-300)')}></i>
                  </div>
                  <div style={css('height:26px;display:flex;align-items:center;gap:3px;opacity:' + v.jsWaveOpacity)}>
                    {v.journalWaves.map((w, i) => (
                      <div key={i} style={css('width:2.5px;border-radius:2px;background:var(--color-accent-400);height:' + w.h + 'px;animation:wv ' + w.dur + ' ease-in-out ' + w.delay + ' infinite')}></div>
                    ))}
                  </div>
                  <div style={css('font-size:11.5px;color:var(--color-neutral-500)')}>{v.jsStatus}</div>
                </div>

                <div style={css('margin-top:16px;padding-top:16px;border-top:1px solid var(--color-divider)')}>
                  <input value={v.journalInput} onChange={v.setJournalInput} onKeyDown={v.onJournalKey} placeholder={v.journalPlaceholder} style={css('width:100%;background:transparent;border:none;outline:none;color:var(--color-text);font-size:16px;line-height:1.6;font-family:inherit;font-style:italic')} />
                  <div style={css('margin-top:14px;display:flex;gap:8px')}>
                    <div onClick={v.addJournal} className="hv-bg-a900" style={css('flex:1;height:44px;border-radius:12px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:8px;font-size:13.5px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-feather" style={css('font-size:16px')}></i>Write it down</div>
                    <div onClick={v.shuffleQuestion} className="hv-bd-a600" style={css('width:44px;height:44px;border-radius:12px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-shuffle" style={css('font-size:15px;color:var(--color-neutral-400)')}></i></div>
                  </div>
                </div>
              </>
            )}

            {v.pageHasEntry && (
              <div style={css('margin-top:18px;padding-top:16px;border-top:1px solid var(--color-divider)')}>
                <div style={css('font-size:16px;line-height:1.7;font-style:italic;color:var(--color-neutral-200);text-wrap:pretty')}>{v.pageEntry}</div>
                <div style={css('margin-top:14px;display:flex;align-items:center;gap:8px')}>
                  <div style={css('font-size:10.5px;font-family:ui-monospace,Menlo,monospace;color:var(--color-neutral-600)')}>{v.pageEntryTime}</div>
                  <div style={css('width:3px;height:3px;border-radius:50%;background:var(--color-neutral-700)')}></div>
                  <div style={css('font-size:10.5px;color:var(--color-accent-300)')}>{v.pageEntryQuest}</div>
                </div>
                {v.pageHasNote && (
                  <div style={css('margin-top:12px;padding:11px 12px;border-radius:10px;background:var(--color-neutral-900);font-size:11.5px;line-height:1.55;color:var(--color-neutral-400)')}><i className="ph ph-sparkle" style={css('margin-right:6px;color:var(--color-accent-500)')}></i>{v.pageNote}</div>
                )}
              </div>
            )}

            <div style={css('margin-top:18px;padding-top:14px;border-top:1px solid var(--color-divider);display:flex;align-items:center;gap:10px')}>
              <div onClick={v.pagePrev} className="hv-bd-a600" style={css('width:34px;height:34px;border-radius:10px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-left" style={css('font-size:14px;color:var(--color-neutral-400)')}></i></div>
              <div style={css('flex:1;display:flex;justify-content:center;gap:5px')}>
                {v.pageDots.map((d, i) => (
                  <div key={i} style={css('width:' + d.w + ';height:4px;border-radius:2px;background:' + d.bg + ';transition:all .3s')}></div>
                ))}
              </div>
              <div onClick={v.pageNext} className="hv-bd-a600" style={css('width:34px;height:34px;border-radius:10px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-right" style={css('font-size:14px;color:var(--color-neutral-400)')}></i></div>
            </div>
          </div>
        </div>
      </div>

      <div style={css('margin-top:16px;padding:14px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-accent-800)')}>
        <div style={css('display:flex;align-items:center;gap:10px')}>
          <i className="ph ph-hands-praying" style={css('font-size:17px;color:var(--color-accent-400)')}></i>
          <div style={css('flex:1')}>
            <div style={css('font-size:12.5px;font-weight:500')}>Turn tonight&apos;s answer into a sankalpa</div>
            <div style={css('margin-top:3px;font-size:11px;line-height:1.45;color:var(--color-neutral-500)')}>{v.affirmHint}</div>
          </div>
          <div onClick={v.addAffirmation} className="hv-bg-a900" style={css('width:32px;height:32px;border-radius:10px;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-plus" style={css('font-size:15px;color:var(--color-accent-200)')}></i></div>
        </div>
        <div onClick={v.goAffirm} className="hv-bd-a600" style={css('margin-top:11px;padding:10px 0;border-radius:10px;border:1px solid var(--color-neutral-800);text-align:center;font-size:11.5px;color:var(--color-neutral-300);cursor:pointer')}>{v.affirmTabLabel}</div>
      </div>

      <div style={css('margin-top:26px;padding:0 4px;display:flex;align-items:flex-end;justify-content:space-between')}>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Mind web</div>
          <div style={css('margin-top:5px;font-size:19px;font-weight:500')}>What is actually on your mind</div>
        </div>
        <div style={css('font-size:10.5px;color:var(--color-neutral-600);flex:none;margin-bottom:3px')}>61 days</div>
      </div>
      <div style={css('margin-top:6px;padding:0 4px;font-size:12px;line-height:1.55;color:var(--color-neutral-500)')}>Every sentence you have spoken or written, sorted by what it was really about. Tap a strand.</div>

      <div style={css('margin-top:14px;padding:16px 12px;border-radius:16px;background:var(--color-surface);border:1px solid var(--color-divider);box-shadow:var(--shadow-sm)')}>
        <div style={css('position:relative;height:262px')}>
          {v.webNodes.map((n, i) => (
            <div key={i} style={css('position:absolute;left:50%;top:50%;height:1px;width:' + n.lineW + ';background:linear-gradient(to right,' + n.lineFrom + ',' + n.lineTo + ');transform:rotate(' + n.rot + ');transform-origin:0 0')}></div>
          ))}
          <div style={css('position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:76px;height:76px;border-radius:50%;background:var(--color-accent-900);border:1px solid var(--color-accent-700);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center')}>
            <div style={css('font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-accent-400)')}>This week</div>
            <div style={css('margin-top:3px;font-size:19px;font-weight:500;color:var(--color-accent-100)')}>{v.webTotal}</div>
            <div style={css('font-size:8.5px;color:var(--color-accent-400)')}>thoughts</div>
          </div>
          {v.webNodes.map((n, i) => (
            <div key={i} onClick={n.go} style={css('position:absolute;left:' + n.left + ';top:' + n.top + ';transform:translate(-50%,-50%);padding:7px 10px;border-radius:11px;background:' + n.bg + ';border:1px solid ' + n.border + ';cursor:pointer;text-align:center;min-width:66px')}>
              <div style={css('font-size:11px;font-weight:500;color:' + n.fg + ';line-height:1.25')}>{n.label}</div>
              <div style={css('margin-top:3px;font-size:9px;color:' + n.subFg)}>{n.count}</div>
            </div>
          ))}
        </div>
        <div style={css('margin-top:8px;padding:14px;border-radius:13px;background:var(--color-neutral-900);animation:fadeUp .3s ease both')}>
          <div style={css('display:flex;align-items:center;gap:8px')}>
            <i className={'ph ' + v.webSelIcon} style={css('font-size:16px;color:var(--color-accent-400)')}></i>
            <div style={css('flex:1;font-size:13.5px;font-weight:500')}>{v.webSelLabel}</div>
            <div style={css('font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-neutral-600)')}>{v.webSelMethod}</div>
          </div>
          <div style={css('margin-top:10px;font-size:12.5px;line-height:1.6;color:var(--color-neutral-300);text-wrap:pretty')}>{v.webSelBody}</div>
          <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:7px')}>
            {v.webSelQuotes.map((q, i) => (
              <div key={i} style={css('display:flex;gap:8px;font-size:11.5px;line-height:1.5;color:var(--color-neutral-500);font-style:italic')}><i className="ph ph-quotes" style={css('font-size:11px;color:var(--color-accent-500);margin-top:3px;font-style:normal')}></i><span>{q}</span></div>
            ))}
          </div>
          <div style={css('margin-top:12px;padding-top:11px;border-top:1px solid var(--color-divider);font-size:12.5px;line-height:1.55;color:var(--color-accent-200)')}><i className="ph ph-question" style={css('margin-right:6px')}></i>{v.webSelQuestion}</div>
        </div>
      </div>

      <div style={css('margin-top:12px;padding:16px;border-radius:16px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('display:flex;align-items:baseline;justify-content:space-between')}>
          <div style={css('font-size:13px;font-weight:500')}>What is yours to carry</div>
          <div style={css('font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-neutral-600)')}>Stoic split</div>
        </div>
        <div style={css('margin-top:5px;font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}>Epictetus&apos; dichotomy of control, applied to your own week.</div>
        <div style={css('margin-top:14px;display:flex;gap:11px')}>
          <div style={css('flex:1')}>
            <div style={css('font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-accent-300)')}>In your hands</div>
            <div style={css('margin-top:9px;display:flex;flex-direction:column;gap:7px')}>
              {v.stoicMine.map((s, i) => (
                <div key={i} style={css('padding:9px 10px;border-radius:9px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);font-size:11.5px;line-height:1.4;color:var(--color-accent-100)')}>{s}</div>
              ))}
            </div>
          </div>
          <div style={css('flex:1')}>
            <div style={css('font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-neutral-600)')}>Not yours</div>
            <div style={css('margin-top:9px;display:flex;flex-direction:column;gap:7px')}>
              {v.stoicNot.map((s, i) => (
                <div key={i} style={css('padding:9px 10px;border-radius:9px;background:var(--color-neutral-900);border:1px solid var(--color-divider);font-size:11.5px;line-height:1.4;color:var(--color-neutral-400)')}>{s}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={css('margin-top:13px;padding-top:12px;border-top:1px solid var(--color-divider);font-size:12.5px;line-height:1.6;color:var(--color-neutral-300);text-wrap:pretty')}>{v.stoicNote}</div>
      </div>

      <div style={css('margin-top:12px;padding:16px;border-radius:16px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('display:flex;align-items:baseline;justify-content:space-between')}>
          <div style={css('font-size:13px;font-weight:500')}>The feeling underneath</div>
          <div style={css('font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-neutral-600)')}>Plutchik</div>
        </div>
        <div style={css('margin-top:5px;font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}>Eight primary emotions, read from your words and your voice — not your face, and never your health.</div>
        <div style={css('margin-top:14px;display:flex;flex-direction:column;gap:9px')}>
          {v.emotions.map((e, i) => (
            <div key={i} style={css('display:flex;align-items:center;gap:10px')}>
              <div style={css('width:70px;flex:none')}>
                <div style={css('font-size:11.5px;color:var(--color-neutral-200)')}>{e.name}</div>
                <div style={css('margin-top:1px;font-size:9px;color:var(--color-neutral-600)')}>{e.shade}</div>
              </div>
              <div style={css('flex:1;height:6px;border-radius:3px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + e.pct + ';background:' + e.bg)}></div></div>
              <div style={css('width:26px;text-align:right;font-size:10px;font-family:ui-monospace,monospace;color:var(--color-neutral-600)')}>{e.pct}</div>
            </div>
          ))}
        </div>
        <div style={css('margin-top:14px;padding:13px;border-radius:12px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);font-size:13px;line-height:1.6;color:var(--color-accent-100);text-wrap:pretty')}>{v.emotionRead}</div>
      </div>

      <div style={css('margin-top:12px;padding:0 4px')}>
        <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Earlier pages</div>
      </div>
      <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:9px')}>
        {v.journalEntries.map((j, i) => (
          <div key={i} onClick={j.go} className="hv-bd-a700" style={css('padding:14px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider);cursor:pointer')}>
            <div style={css('display:flex;align-items:center;justify-content:space-between')}>
              <div style={css('font-size:10.5px;font-family:ui-monospace,Menlo,monospace;color:var(--color-neutral-600)')}>{j.time}</div>
              <div style={css('padding:3px 8px;border-radius:6px;background:var(--color-neutral-900);font-size:10px;color:var(--color-accent-300)')}>{j.quest}</div>
            </div>
            <div style={css('margin-top:9px;font-size:13.5px;line-height:1.6;color:var(--color-neutral-300);font-style:italic;text-wrap:pretty')}>{j.text}</div>
          </div>
        ))}
      </div>
      <div style={css('margin-top:14px;text-align:center;font-size:10.5px;line-height:1.55;color:var(--color-neutral-600)')}>This book is yours alone. Nothing here is shared, summarised to anyone, or read by a model in the cloud.</div>
    </div>
  );
}

export function Affirm({ v }) {
  if (!v.sc.affirm) return null;
  return (
    <div style={css('min-height:874px;padding:58px 16px 40px;background:radial-gradient(120% 40% at 50% 2%,var(--om-hero) 0%,var(--color-bg) 56%)')}>
      <div style={css('display:flex;align-items:center;gap:10px')}>
        <div onClick={v.goJournal} style={css('width:34px;height:34px;border-radius:11px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-left" style={css('font-size:15px;color:var(--color-neutral-300)')}></i></div>
        <div style={css('flex:1')}>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Affirmations</div>
          <div style={css('margin-top:3px;font-size:11px;color:var(--color-neutral-500)')}>{v.affirmCount}</div>
        </div>
        <div onClick={v.addAffirmation} className="hv-bg-a900" style={css('height:34px;padding:0 12px;border-radius:11px;border:1px solid var(--color-accent-700);display:flex;align-items:center;gap:7px;cursor:pointer;flex:none')}><i className="ph ph-plus" style={css('font-size:14px;color:var(--color-accent-200)')}></i><span style={css('font-size:11.5px;color:var(--color-accent-200)')}>From journal</span></div>
      </div>

      <div style={css('margin-top:18px;position:relative;border-radius:20px;overflow:hidden;border:1px solid var(--color-accent-800);background:linear-gradient(170deg,var(--om-card2) 0%,var(--color-surface) 62%)')}>
        <div style={css('position:absolute;inset:0;overflow:hidden;opacity:' + v.ambientOpacity + ';transition:opacity .6s ease')}>
          {v.streaks.map((s, i) => (
            <div key={i} style={css('position:absolute;top:-40%;left:' + s.left + ';width:' + s.w + ';height:' + s.h + ';border-radius:2px;background:linear-gradient(to bottom,transparent,var(--color-accent-500),transparent);opacity:' + s.op + ';animation:fall ' + s.dur + ' linear ' + s.delay + ' infinite')}></div>
          ))}
          <div style={css('position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);width:210px;height:210px;border-radius:50%;border:1px solid var(--color-accent-700);animation:' + v.bellAnim1)}></div>
          <div style={css('position:absolute;left:50%;top:52%;transform:translate(-50%,-50%);width:210px;height:210px;border-radius:50%;border:1px solid var(--color-accent-800);animation:' + v.bellAnim2)}></div>
        </div>

        <div style={css('position:relative;padding:22px 20px 20px')}>
          <div style={css('display:flex;align-items:center;gap:8px')}>
            <div style={css('font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent-300)')}>Your sankalpa</div>
            <div style={css('flex:1;height:1px;background:var(--color-divider)')}></div>
            <div style={css('font-size:9.5px;color:var(--color-neutral-600)')}>{v.sankalpaMeta}</div>
          </div>

          <div style={css('margin-top:18px;min-height:196px;display:flex;flex-direction:column;justify-content:center;gap:13px')}>
            {v.lyricLines.map((l, i) => (
              <div key={i} style={css('transition:all .5s ease;opacity:' + l.op + ';transform:translateX(' + l.shift + ')')}>
                <div style={css('font-size:' + l.size + ';line-height:1.4;font-weight:500;color:' + l.fg + ';text-wrap:pretty')}>{l.text}</div>
                {l.active && (
                  <div style={css('margin-top:6px;display:flex;align-items:center;gap:7px')}>
                    <div style={css('display:flex;align-items:flex-end;gap:2px;height:10px')}>
                      {v.chantWaves.map((w, wi) => (
                        <div key={wi} style={css('width:2px;border-radius:1px;background:var(--color-accent-400);height:' + w.h + 'px;animation:wv ' + w.dur + ' ease-in-out ' + w.delay + ' infinite')}></div>
                      ))}
                    </div>
                    <div style={css('font-size:10px;color:var(--color-accent-400)')}>{l.source}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={css('margin-top:18px;height:3px;border-radius:2px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + v.playPct + ';background:var(--color-accent);box-shadow:0 0 10px var(--color-accent);transition:width .5s linear')}></div></div>
          <div style={css('margin-top:9px;display:flex;align-items:center;justify-content:space-between;font-size:10px;font-family:ui-monospace,Menlo,monospace;color:var(--color-neutral-600)')}>
            <span>{v.playElapsed}</span><span>{v.playTotal}</span>
          </div>

          <div style={css('margin-top:16px;display:flex;align-items:center;gap:11px')}>
            <div onClick={v.affirmRestart} className="hv-bd-n600" style={css('width:44px;height:44px;border-radius:13px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-arrow-counter-clockwise" style={css('font-size:16px;color:var(--color-neutral-400)')}></i></div>
            <div onClick={v.togglePlay} className="hv-bg-a900" style={css('flex:1;height:52px;border-radius:14px;border:1px solid var(--color-accent);background:' + v.playBg + ';display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer')}>
              <i className={'ph ' + v.playIcon} style={css('font-size:19px;color:var(--color-accent-100)')}></i>
              <span style={css('font-size:14.5px;color:var(--color-accent-100)')}>{v.playLabel}</span>
            </div>
            <div onClick={v.toggleAmbient} style={css('width:44px;height:44px;border-radius:13px;border:1px solid ' + v.ambientBorder + ';display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className={'ph ' + v.ambientIcon} style={css('font-size:16px;color:' + v.ambientFg)}></i></div>
          </div>
        </div>
      </div>

      <div style={css('margin-top:12px;display:flex;gap:7px;flex-wrap:wrap')}>
        {v.soundOpts.map((s, i) => (
          <div key={i} onClick={s.go} style={css('padding:8px 12px;border-radius:20px;border:1px solid ' + s.border + ';background:' + s.bg + ';font-size:11.5px;color:' + s.fg + ';cursor:pointer;display:flex;align-items:center;gap:6px')}><i className={'ph ' + s.icon} style={css('font-size:13px')}></i>{s.label}</div>
        ))}
      </div>

      <div style={css('margin-top:11px;padding:15px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('display:flex;align-items:center;gap:10px')}>
          <div style={css('flex:1;font-size:12.5px;font-weight:500')}>Voice</div>
          <div style={css('font-size:10.5px;color:var(--color-neutral-600)')}>{v.voiceNote}</div>
        </div>
        <div style={css('margin-top:11px;display:flex;gap:4px;padding:3px;border-radius:10px;background:var(--color-neutral-900)')}>
          {v.voiceOpts.map((o, i) => (
            <div key={i} onClick={o.go} style={css('flex:1;text-align:center;padding:8px 2px;border-radius:8px;font-size:11px;cursor:pointer;background:' + o.bg + ';color:' + o.fg)}>{o.label}</div>
          ))}
        </div>
        <div style={css('margin-top:11px;display:flex;gap:4px;padding:3px;border-radius:10px;background:var(--color-neutral-900)')}>
          {v.paceOpts.map((p, i) => (
            <div key={i} onClick={p.go} style={css('flex:1;text-align:center;padding:8px 2px;border-radius:8px;font-size:11px;cursor:pointer;background:' + p.bg + ';color:' + p.fg)}>{p.label}</div>
          ))}
        </div>
      </div>

      <div style={css('margin-top:11px;padding:16px;border-radius:15px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>How this sankalpa was made</div>
        <div style={css('margin-top:10px;font-size:13px;line-height:1.6;color:var(--color-accent-100);text-wrap:pretty')}>{v.sankalpaWhy}</div>
        <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:7px')}>
          {v.sankalpaSources.map((s, i) => (
            <div key={i} style={css('display:flex;gap:9px;font-size:11.5px;line-height:1.5;color:var(--color-accent-300)')}><i className="ph ph-notebook" style={css('font-size:12px;margin-top:2px')}></i><span>{s}</span></div>
          ))}
        </div>
      </div>

      <div style={css('margin-top:20px;padding:0 4px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Your affirmations</div>
      <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:9px')}>
        {v.affList.map((a, i) => (
          <div key={i} style={css('padding:14px;border-radius:14px;background:var(--color-surface);border:1px solid ' + a.border)}>
            <div style={css('display:flex;gap:11px;align-items:flex-start')}>
              <div onClick={a.play} className="hv-bg-a900" style={css('width:34px;height:34px;border-radius:11px;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className={'ph ' + a.icon} style={css('font-size:14px;color:var(--color-accent-200)')}></i></div>
              <div style={css('flex:1')}>
                <div style={css('font-size:14px;line-height:1.45;text-wrap:pretty')}>{a.text}</div>
                <div style={css('margin-top:6px;display:flex;align-items:center;gap:8px;font-size:10.5px;color:var(--color-neutral-600)')}><i className="ph ph-quotes" style={css('font-size:11px')}></i>{a.source}</div>
              </div>
              <div onClick={a.pin} style={css('flex:none;padding-top:3px;cursor:pointer')}><i className={'ph ' + a.pinIcon} style={css('font-size:15px;color:' + a.pinFg)}></i></div>
            </div>
          </div>
        ))}
      </div>
      <div style={css('margin-top:14px;text-align:center;font-size:10.5px;line-height:1.55;color:var(--color-neutral-600)')}>A sankalpa is a resolve, not a wish — said in the present tense, as something already true. Yours is rebuilt each Sunday from what you actually wrote.</div>
    </div>
  );
}
