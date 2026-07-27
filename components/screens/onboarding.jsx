'use client';

// Onboarding + getting-to-know-you screens, transcribed from the dc template.
import React from 'react';
import { css } from '@/lib/css';

export function Welcome({ v }) {
  if (!v.sc.welcome) return null;
  const t = v.t;
  return (
    <div style={css('min-height:874px;padding:120px 30px 40px;display:flex;flex-direction:column;justify-content:space-between;background:radial-gradient(120% 70% at 50% 8%,var(--om-hero) 0%,var(--color-bg) 62%)')}>
      <div>
        <div style={css('width:60px;height:60px;border-radius:20px;border:1px solid var(--color-accent-600);display:flex;align-items:center;justify-content:center;position:relative')}>
          <div style={css('position:absolute;inset:-1px;border-radius:20px;border:1px solid var(--color-accent);animation:breathe 3.4s ease-in-out infinite')}></div>
          <div style={css('width:12px;height:12px;border-radius:50%;background:var(--color-accent);box-shadow:0 0 18px var(--color-accent)')}></div>
        </div>
        <div style={css('margin-top:34px;font-size:36px;line-height:1.12;font-weight:500;letter-spacing:-.01em;text-wrap:pretty')}>{t.wTitle}</div>
        <div style={css('margin-top:14px;font-size:15px;line-height:1.55;color:var(--color-neutral-400);max-width:290px;text-wrap:pretty')}>{t.wSub}</div>
        <div style={css('margin-top:26px;display:flex;flex-direction:column;gap:9px')}>
          {v.promises.map((p, i) => (
            <div key={i} style={css('display:flex;gap:9px;align-items:flex-start;font-size:13px;color:var(--color-neutral-300)')}><i className="ph ph-check" style={css('font-size:14px;color:var(--color-accent);margin-top:2px')}></i><span>{p}</span></div>
          ))}
        </div>
      </div>
      <div>
        <div onClick={v.goLanguage} className="hv-bg-a900" style={css('height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:500;color:var(--color-accent-200);cursor:pointer')}>{t.begin}</div>
        <div style={css('margin-top:14px;text-align:center;font-size:11px;color:var(--color-neutral-600);letter-spacing:.06em')}>{t.slogan}</div>
      </div>
    </div>
  );
}

export function Language({ v }) {
  if (!v.sc.language) return null;
  const t = v.t;
  return (
    <div style={css('padding:74px 22px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Step 1 of 3</div>
      <div style={css('margin-top:8px;font-size:27px;font-weight:500;line-height:1.2')}>{t.langTitle}</div>
      <div style={css('margin-top:9px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-400)')}>{t.langSub}</div>
      <div style={css('margin-top:22px;display:flex;flex-direction:column;gap:8px')}>
        {v.langCards.map((l, i) => (
          <div key={i} onClick={l.go} className="hv-bd-a600" style={css('padding:14px 15px;border-radius:12px;background:var(--color-surface);border:1px solid ' + l.border + ';display:flex;align-items:center;justify-content:space-between;cursor:pointer')}>
            <div>
              <div style={css('font-size:15px;font-weight:500')}>{l.native}</div>
              <div style={css('margin-top:3px;font-size:11.5px;color:var(--color-neutral-500)')}>{l.note}</div>
            </div>
            <i className={'ph ' + l.icon} style={css('font-size:18px;color:' + l.iconFg)}></i>
          </div>
        ))}
      </div>
      <div style={css('margin-top:16px;padding:12px 14px;border-radius:10px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);font-size:11.5px;line-height:1.5;color:var(--color-accent-200)')}><i className="ph ph-microphone" style={css('margin-right:6px')}></i>{t.mixNote}</div>
      <div onClick={v.goConsent} className="hv-bg-a900" style={css('margin-top:22px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{t.cont}</div>
    </div>
  );
}

export function Consent({ v }) {
  if (!v.sc.consent) return null;
  const t = v.t;
  return (
    <div style={css('padding:74px 22px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Step 2 of 3</div>
      <div style={css('margin-top:8px;font-size:27px;font-weight:500;line-height:1.2')}>{t.consentTitle}</div>
      <div style={css('margin-top:9px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-400)')}>{t.consentSub}</div>
      <div style={css('margin-top:20px;display:flex;flex-direction:column;gap:9px')}>
        {v.consents.map((c, i) => (
          <div key={i} style={css('padding:14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;gap:12px;align-items:flex-start')}>
            <div style={css('flex:1')}>
              <div style={css('font-size:14px;font-weight:500')}>{c.title}</div>
              <div style={css('margin-top:4px;font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}>{c.body}</div>
              <div style={css('margin-top:7px;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:' + c.tagFg)}>{c.tag}</div>
            </div>
            <div onClick={c.toggle} style={css('width:46px;height:27px;border-radius:14px;flex:none;background:' + c.trackBg + ';border:1px solid ' + c.trackBorder + ';padding:2px;display:flex;cursor:pointer;justify-content:' + c.justify + ';transition:all .2s')}>
              <div style={css('width:21px;height:21px;border-radius:50%;background:' + c.knob)}></div>
            </div>
          </div>
        ))}
      </div>
      <div onClick={v.goProfile} className="hv-bg-a900" style={css('margin-top:20px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{t.cont}</div>
      <div style={css('margin-top:12px;text-align:center;font-size:10.5px;line-height:1.5;color:var(--color-neutral-600)')}>{t.dpdp}</div>
    </div>
  );
}

export function Profile({ v }) {
  if (!v.sc.profile) return null;
  return (
    <div style={css('min-height:874px;padding:70px 22px 40px;background:radial-gradient(115% 42% at 50% 4%,var(--om-hero) 0%,var(--color-bg) 58%)')}>
      <div style={css('display:flex;align-items:center;gap:14px')}>
        <div style={css('position:relative;width:52px;height:52px;display:flex;align-items:center;justify-content:center;flex:none')}>
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-accent-800);animation:ring 3s ease-out infinite')}></div>
          <div style={css('position:absolute;inset:10px;border-radius:50%;border:1px solid var(--color-accent-700);animation:ring 3s ease-out .9s infinite')}></div>
          <div style={css('width:9px;height:9px;border-radius:50%;background:var(--color-accent);box-shadow:0 0 14px var(--color-accent)')}></div>
        </div>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>First, you</div>
          <div style={css('margin-top:4px;font-size:13px;color:var(--color-neutral-400)')}>Three answers. Nothing more, ever.</div>
        </div>
      </div>
      <div style={css('margin-top:24px;font-size:28px;font-weight:500;line-height:1.2;text-wrap:pretty')}>Let us start with your name — not your account.</div>
      <div style={css('margin-top:11px;font-size:13.5px;line-height:1.6;color:var(--color-neutral-400);text-wrap:pretty')}>There is no profile to fill in for anyone else&apos;s benefit. This is only so I can speak to you the way a person would.</div>
      <div style={css('margin-top:22px;display:flex;flex-direction:column;gap:10px')}>
        <div style={css('padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
          <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>What should I call you?</div>
          <input value={v.profileName} onChange={v.setProfileName} placeholder="Aarav" style={css('margin-top:9px;width:100%;background:transparent;border:none;outline:none;color:var(--color-text);font-size:20px;font-family:inherit')} />
          <div style={css('margin-top:8px;font-size:11px;color:var(--color-neutral-600)')}>A first name, a nickname, whatever your people use.</div>
        </div>
        <div style={css('padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
          <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>Where are your days spent?</div>
          <input value={v.profileCity} onChange={v.setProfileCity} placeholder="Ahmedabad" style={css('margin-top:9px;width:100%;background:transparent;border:none;outline:none;color:var(--color-text);font-size:18px;font-family:inherit')} />
          <div style={css('margin-top:8px;font-size:11px;color:var(--color-neutral-600)')}>Sets your day boundary, and later the morning nudge.</div>
        </div>
        <div style={css('padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
          <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>Your birth date · optional</div>
          <input value={v.profileDob} onChange={v.setProfileDob} placeholder="14 · 03 · 1994" style={css('margin-top:9px;width:100%;background:transparent;border:none;outline:none;color:var(--color-text);font-size:18px;font-family:ui-monospace,Menlo,monospace')} />
          <div style={css('margin-top:8px;font-size:11px;line-height:1.5;color:var(--color-neutral-600)')}>Only used if you ever turn on Cosmos. Leave it empty and nothing is lost.</div>
        </div>
      </div>
      <div onClick={v.goAbout} className="hv-bg-a900" style={css('margin-top:20px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{v.profileCta}</div>
      <div style={css('margin-top:12px;text-align:center;font-size:11px;line-height:1.5;color:var(--color-neutral-600)')}>Stored on this phone, in your vault. Not on a server, not on a spreadsheet.</div>
    </div>
  );
}

export function About({ v }) {
  if (!v.sc.about) return null;
  return (
    <div style={css('padding:70px 22px 40px')}>
      <div style={css('display:flex;align-items:center;gap:14px')}>
        <div style={css('position:relative;width:44px;height:44px;display:flex;align-items:center;justify-content:center;flex:none')}>
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-accent-800);animation:ring 3s ease-out infinite')}></div>
          <div style={css('width:8px;height:8px;border-radius:50%;background:var(--color-accent);box-shadow:0 0 12px var(--color-accent)')}></div>
        </div>
        <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>A little about your days</div>
      </div>
      <div style={css('margin-top:20px;font-size:26px;font-weight:500;line-height:1.22;text-wrap:pretty')}>{v.aboutTitle}</div>
      <div style={css('margin-top:11px;font-size:13.5px;line-height:1.6;color:var(--color-neutral-400)')}>Answer roughly. I will learn the rest by being there.</div>
      <div style={css('margin-top:22px;font-size:12px;color:var(--color-neutral-300)')}>What is on your plate right now?</div>
      <div style={css('margin-top:9px;display:flex;gap:7px;flex-wrap:wrap')}>
        {v.plateChips.map((c, i) => (
          <div key={i} onClick={c.toggle} style={css('padding:8px 12px;border-radius:20px;border:1px solid ' + c.border + ';background:' + c.bg + ';font-size:12px;color:' + c.fg + ';cursor:pointer')}>{c.label}</div>
        ))}
      </div>
      <div style={css('margin-top:22px;font-size:12px;color:var(--color-neutral-300)')}>And what quietly drains you?</div>
      <div style={css('margin-top:9px;display:flex;gap:7px;flex-wrap:wrap')}>
        {v.drainChips.map((c, i) => (
          <div key={i} onClick={c.toggle} style={css('padding:8px 12px;border-radius:20px;border:1px solid ' + c.border + ';background:' + c.bg + ';font-size:12px;color:' + c.fg + ';cursor:pointer')}>{c.label}</div>
        ))}
      </div>
      <div style={css('margin-top:22px;font-size:12px;color:var(--color-neutral-300)')}>When are you actually at your best?</div>
      <div style={css('margin-top:9px;display:flex;gap:4px;padding:3px;border-radius:10px;background:var(--color-neutral-900);border:1px solid var(--color-divider)')}>
        {v.bestTimeOpts.map((o, i) => (
          <div key={i} onClick={o.go} style={css('flex:1;text-align:center;padding:8px 2px;border-radius:8px;font-size:11px;cursor:pointer;background:' + o.bg + ';color:' + o.fg)}>{o.label}</div>
        ))}
      </div>
      <div style={css('margin-top:9px;font-size:11px;line-height:1.5;color:var(--color-neutral-600)')}>I will keep hard decisions inside that window, and stop asking anything of you outside it.</div>
      <div style={css('margin-top:22px;font-size:12px;color:var(--color-neutral-300)')}>Who should I never forget?</div>
      <div style={css('margin-top:9px;display:flex;gap:8px;align-items:center;padding:11px 13px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-neutral-800)')}>
        <i className="ph ph-heart" style={css('font-size:16px;color:var(--color-accent-400)')}></i>
        <input value={v.personInput} onChange={v.setPersonInput} onKeyDown={v.onPersonKey} placeholder="Ba, Didi, Meera…" style={css('flex:1;background:transparent;border:none;outline:none;color:var(--color-text);font-size:13.5px;font-family:inherit')} />
        <div onClick={v.addPerson} className="hv-bg-a900" style={css('width:30px;height:30px;border-radius:9px;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-plus" style={css('font-size:14px;color:var(--color-accent-200)')}></i></div>
      </div>
      <div style={css('margin-top:10px;display:flex;gap:7px;flex-wrap:wrap')}>
        {v.peopleChips.map((p, i) => (
          <div key={i} style={css('padding:7px 11px;border-radius:9px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);font-size:12px;color:var(--color-accent-100)')}>{p}</div>
        ))}
      </div>
      <div onClick={v.goCare} className="hv-bg-a900" style={css('margin-top:22px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>Continue</div>
    </div>
  );
}

export function Care({ v }) {
  if (!v.sc.care) return null;
  return (
    <div style={css('min-height:874px;padding:70px 22px 40px;display:flex;flex-direction:column;background:radial-gradient(115% 40% at 50% 6%,var(--om-hero) 0%,var(--color-bg) 58%)')}>
      <div style={css('position:relative;width:60px;height:60px;display:flex;align-items:center;justify-content:center')}>
        <div style={css('position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-accent-800);animation:ring 3.2s ease-out infinite')}></div>
        <div style={css('position:absolute;inset:12px;border-radius:50%;border:1px solid var(--color-accent-700);animation:ring 3.2s ease-out 1s infinite')}></div>
        <div style={css('width:10px;height:10px;border-radius:50%;background:var(--color-accent);box-shadow:0 0 16px var(--color-accent)')}></div>
      </div>
      <div style={css('margin-top:22px;font-size:28px;font-weight:500;line-height:1.22;text-wrap:pretty')}>{v.careTitle}</div>
      <div style={css('margin-top:12px;font-size:13.5px;line-height:1.65;color:var(--color-neutral-400);text-wrap:pretty')}>There is no right answer, and you can change it any day. I am not scoring you — I am just paying attention.</div>
      <div style={css('margin-top:20px;padding:16px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-neutral-800)')}>
        <input value={v.careText} onChange={v.setCareText} placeholder="Stop carrying every promise in my head." style={css('width:100%;background:transparent;border:none;outline:none;color:var(--color-text);font-size:17px;line-height:1.5;font-family:inherit')} />
      </div>
      <div style={css('margin-top:11px;display:flex;gap:7px;flex-wrap:wrap')}>
        {v.careChips.map((c, i) => (
          <div key={i} onClick={c.go} className="hv-bd-a600-fg-a200" style={css('padding:8px 12px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:12px;color:var(--color-neutral-300);cursor:pointer')}>{c.label}</div>
        ))}
      </div>
      <div style={css('flex:1')}></div>
      <div style={css('padding:16px;border-radius:14px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>What I heard</div>
        <div style={css('margin-top:10px;font-size:14.5px;line-height:1.6;color:var(--color-accent-100);text-wrap:pretty')}>{v.careEcho}</div>
      </div>
      <div onClick={v.goTour} className="hv-bg-a900" style={css('margin-top:14px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>Show me how it works</div>
    </div>
  );
}

export function Tour({ v }) {
  if (!v.sc.tour) return null;
  return (
    <div style={css('min-height:874px;padding:70px 24px 40px;display:flex;flex-direction:column;background:radial-gradient(110% 46% at 50% 34%,' + v.tourGlow + ' 0%,var(--color-bg) 68%)')}>
      <div style={css('display:flex;align-items:center;justify-content:space-between')}>
        <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{v.tourCount}</div>
        <div onClick={v.goGoals} className="hv-fg-a200" style={css('font-size:11.5px;color:var(--color-neutral-500);cursor:pointer')}>Skip the tour</div>
      </div>
      <div style={css('flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:32px;text-align:center')}>
        <div style={css('position:relative;width:196px;height:196px;display:flex;align-items:center;justify-content:center')}>
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-accent-800);animation:ring 3s ease-out infinite')}></div>
          <div style={css('position:absolute;inset:26px;border-radius:50%;border:1px solid var(--color-accent-700);animation:ring 3s ease-out .9s infinite')}></div>
          <div style={css('width:112px;height:112px;border-radius:50%;background:radial-gradient(120% 120% at 30% 22%,#4c5069,#1c1e2a 72%);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 14px 30px rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center')}>
            <div style={css('width:46px;height:46px;border-radius:50%;border:1px solid rgba(233,233,237,.14);display:flex;align-items:center;justify-content:center')}>
              <div style={css('width:12px;height:12px;border-radius:50%;background:' + v.tourLed + ';box-shadow:0 0 18px ' + v.tourLed + ';animation:' + v.tourLedAnim)}></div>
            </div>
          </div>
          <div style={css('position:absolute;bottom:-6px;padding:5px 11px;border-radius:20px;background:var(--color-surface);border:1px solid var(--color-divider);font-size:10.5px;font-family:ui-monospace,Menlo,monospace;color:var(--color-accent-200)')}>{v.tourGesture}</div>
        </div>
        <div>
          <div style={css('font-size:29px;font-weight:500;line-height:1.2;letter-spacing:-.01em;text-wrap:pretty')}>{v.tourTitle}</div>
          <div style={css('margin-top:14px;font-size:14.5px;line-height:1.65;color:var(--color-neutral-400);max-width:300px;text-wrap:pretty')}>{v.tourBody}</div>
          <div style={css('margin-top:16px;display:inline-flex;align-items:center;gap:8px;padding:8px 13px;border-radius:20px;border:1px solid var(--color-accent-800);background:var(--color-accent-900)')}>
            <i className={'ph ' + v.tourHintIcon} style={css('font-size:14px;color:var(--color-accent-300)')}></i>
            <span style={css('font-size:11.5px;color:var(--color-accent-200)')}>{v.tourHint}</span>
          </div>
        </div>
      </div>
      <div style={css('display:flex;justify-content:center;gap:7px;margin-bottom:18px')}>
        {v.tourDots.map((d, i) => (
          <div key={i} style={css('width:' + d.w + ';height:5px;border-radius:3px;background:' + d.bg + ';transition:all .3s')}></div>
        ))}
      </div>
      <div style={css('display:flex;gap:10px')}>
        <div onClick={v.tourBack} className="hv-bd-n600" style={css('width:52px;height:52px;border-radius:14px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-left" style={css('font-size:16px;color:var(--color-neutral-400)')}></i></div>
        <div onClick={v.tourNext} className="hv-bg-a900" style={css('flex:1;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:8px;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{v.tourCta}</div>
      </div>
    </div>
  );
}

export function Ready({ v }) {
  if (!v.sc.ready) return null;
  return (
    <div style={css('min-height:874px;padding:70px 22px 40px;background:radial-gradient(120% 46% at 50% 4%,var(--om-hero) 0%,var(--color-bg) 60%)')}>
      <div style={css('position:relative;width:66px;height:66px;display:flex;align-items:center;justify-content:center')}>
        <div style={css('position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-accent-700);animation:ring 3s ease-out infinite')}></div>
        <div style={css('position:absolute;inset:14px;border-radius:50%;border:1px solid var(--color-accent-800);animation:ring 3s ease-out .9s infinite')}></div>
        <div style={css('width:11px;height:11px;border-radius:50%;background:var(--color-accent);box-shadow:0 0 18px var(--color-accent)')}></div>
      </div>
      <div style={css('margin-top:22px;font-size:30px;font-weight:500;line-height:1.18;text-wrap:pretty')}>{v.readyTitle}</div>
      <div style={css('margin-top:12px;font-size:14px;line-height:1.65;color:var(--color-neutral-400);text-wrap:pretty')}>{v.readyLead}</div>
      <div style={css('margin-top:22px;padding:18px;border-radius:16px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>What I understood</div>
        <div style={css('margin-top:14px;display:flex;flex-direction:column;gap:13px')}>
          {v.readyRecap.map((r, i) => (
            <div key={i} style={css('display:flex;gap:11px;align-items:flex-start')}>
              <i className={'ph ' + r.icon} style={css('font-size:16px;color:var(--color-accent-400);margin-top:2px')}></i>
              <div style={css('flex:1')}>
                <div style={css('font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-neutral-600)')}>{r.label}</div>
                <div style={css('margin-top:4px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-200);text-wrap:pretty')}>{r.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={css('margin-top:12px;padding:18px;border-radius:16px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
        <div style={css('font-size:15px;line-height:1.65;color:var(--color-accent-100);text-wrap:pretty')}>{v.readyPromise}</div>
        <div style={css('margin-top:12px;font-size:11.5px;color:var(--color-accent-400)')}>You can rewrite any of this later, in one screen, without losing a thing.</div>
      </div>
      <div onClick={v.goGoals} className="hv-bg-a900" style={css('margin-top:20px;height:54px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:9px;font-size:15.5px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-arrow-right" style={css('font-size:16px')}></i>Set up my STAY</div>
      <div style={css('margin-top:14px;text-align:center;font-size:11px;letter-spacing:.06em;color:var(--color-neutral-600)')}>APNI DHUN MEIN RAHO</div>
    </div>
  );
}
