'use client';

// Walkthrough (goals → outcome) and devices & control screens.
import React from 'react';
import { css } from '@/lib/css';

export function Goals({ v }) {
  if (!v.sc.goals) return null;
  return (
    <div style={css('padding:74px 22px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Setup · 1 of 6</div>
      <div style={css('margin-top:8px;font-size:27px;font-weight:500;line-height:1.2')}>What should STAY help you do?</div>
      <div style={css('margin-top:9px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-400)')}>Pick as many as you like. It only changes what you see first — nothing is switched off.</div>
      <div style={css('margin-top:18px;display:flex;flex-direction:column;gap:8px')}>
        {v.goalCards.map((g, i) => (
          <div key={i} onClick={g.toggle} className="hv-bd-a600" style={css('padding:13px 14px;border-radius:12px;background:var(--color-surface);border:1px solid ' + g.border + ';display:flex;gap:12px;align-items:flex-start;cursor:pointer')}>
            <i className={'ph ' + g.icon} style={css('font-size:18px;color:' + g.iconFg + ';margin-top:1px')}></i>
            <div style={css('flex:1')}>
              <div style={css('font-size:14px;font-weight:500')}>{g.label}</div>
              <div style={css('margin-top:3px;font-size:11.5px;line-height:1.45;color:var(--color-neutral-500)')}>{g.note}</div>
            </div>
            <i className={'ph ' + g.check} style={css('font-size:17px;color:' + g.iconFg)}></i>
          </div>
        ))}
      </div>
      <div style={css('margin-top:14px;padding:12px 14px;border-radius:11px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);font-size:11.5px;line-height:1.5;color:var(--color-accent-200)')}>{v.goalSummary}</div>
      <div onClick={v.goPersona} className="hv-bg-a900" style={css('margin-top:18px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>Continue</div>
    </div>
  );
}

export function Persona({ v }) {
  if (!v.sc.persona) return null;
  return (
    <div style={css('padding:74px 22px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Setup · 2 of 6</div>
      <div style={css('margin-top:8px;font-size:27px;font-weight:500;line-height:1.2')}>Who is wearing it?</div>
      <div style={css('margin-top:9px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-400)')}>Same device, different day. This sets your defaults — you can change it any time.</div>
      <div style={css('margin-top:18px;display:flex;flex-direction:column;gap:8px')}>
        {v.personaCards.map((p, i) => (
          <div key={i} onClick={p.go} className="hv-bd-a600" style={css('padding:14px;border-radius:12px;background:' + p.bg + ';border:1px solid ' + p.border + ';cursor:pointer')}>
            <div style={css('display:flex;align-items:center;gap:10px')}>
              <i className={'ph ' + p.icon} style={css('font-size:18px;color:' + p.iconFg)}></i>
              <div style={css('flex:1;font-size:14.5px;font-weight:500')}>{p.label}</div>
              <i className={'ph ' + p.check} style={css('font-size:17px;color:' + p.iconFg)}></i>
            </div>
            <div style={css('margin-top:7px;font-size:12px;line-height:1.5;color:var(--color-neutral-400)')}>{p.outcome}</div>
          </div>
        ))}
      </div>
      <div onClick={v.goVoice1} className="hv-bg-a900" style={css('margin-top:18px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>Continue</div>
    </div>
  );
}

export function Voice1({ v }) {
  if (!v.sc.voice1) return null;
  return (
    <div style={css('min-height:874px;padding:74px 22px 40px;display:flex;flex-direction:column')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Setup · 3 of 6</div>
      <div style={css('margin-top:8px;font-size:27px;font-weight:500;line-height:1.2')}>Teach STAY your voice</div>
      <div style={css('margin-top:9px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-400)')}>Three short lines, read normally. This is how it tells you apart from everyone else in the room.</div>
      <div style={css('margin-top:20px;padding:18px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>Read this out loud</div>
        <div style={css('margin-top:11px;font-size:19px;line-height:1.45;font-weight:500;text-wrap:pretty')}>{v.samplePhrase}</div>
        <div style={css('margin-top:10px;font-size:11.5px;color:var(--color-neutral-500)')}>{v.samplePhraseNote}</div>
      </div>
      <div style={css('flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;padding:26px 0')}>
        <div onClick={v.takeSample} style={css('position:relative;width:132px;height:132px;border-radius:50%;border:1px solid ' + v.sampleRing + ';display:flex;align-items:center;justify-content:center;cursor:pointer')}>
          <div style={css('position:absolute;inset:-9px;border-radius:50%;border:1px solid var(--color-accent-800);animation:' + v.sampleAnim)}></div>
          <i className={'ph ' + v.sampleIcon} style={css('font-size:34px;color:var(--color-accent-200)')}></i>
        </div>
        <div style={css('height:44px;display:flex;align-items:center;gap:4px')}>
          {v.sampleBars.map((b, i) => (
            <div key={i} style={css('width:3px;border-radius:2px;background:' + b.bg + ';height:' + b.h + 'px;animation:wv ' + b.dur + ' ease-in-out ' + b.delay + ' infinite')}></div>
          ))}
        </div>
        <div style={css('font-size:13px;color:var(--color-neutral-400)')}>{v.sampleStatus}</div>
        <div style={css('display:flex;gap:8px')}>
          {v.sampleDots.map((d, i) => (
            <div key={i} style={css('width:34px;height:4px;border-radius:2px;background:' + d.bg)}></div>
          ))}
        </div>
      </div>
      <div style={css('padding:15px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('display:flex;align-items:baseline;justify-content:space-between')}>
          <div style={css('font-size:12.5px;font-weight:500')}>Recognition accuracy</div>
          <div style={css('font-size:16px;color:var(--color-accent-200)')}>{v.samplePct}</div>
        </div>
        <div style={css('margin-top:10px;height:5px;border-radius:3px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + v.samplePct + ';background:var(--color-accent);box-shadow:0 0 12px var(--color-accent);transition:width .6s ease')}></div></div>
        <div style={css('margin-top:9px;font-size:11px;line-height:1.5;color:var(--color-neutral-500)')}>Your voiceprint is encrypted and stays on this phone. It is never uploaded, and never used to identify anyone else.</div>
      </div>
      <div onClick={v.goVoice2} style={css('margin-top:14px;height:50px;border-radius:14px;border:1px solid ' + v.sampleCtaBorder + ';display:flex;align-items:center;justify-content:center;font-size:15px;color:' + v.sampleCtaFg + ';cursor:pointer')}>{v.sampleCta}</div>
    </div>
  );
}

export function Voice2({ v }) {
  if (!v.sc.voice2) return null;
  return (
    <div style={css('padding:74px 22px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Setup · 4 of 6</div>
      <div style={css('margin-top:8px;font-size:27px;font-weight:500;line-height:1.2')}>Names it should never get wrong</div>
      <div style={css('margin-top:9px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-400)')}>The one thing every other recorder fumbles. Say them once and STAY spells them your way, every time.</div>
      <div style={css('margin-top:16px;display:flex;gap:8px;align-items:center;padding:11px 13px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-neutral-800)')}>
        <i className="ph ph-user-circle-plus" style={css('font-size:17px;color:var(--color-neutral-500)')}></i>
        <input value={v.nameInput} onChange={v.setNameInput} onKeyDown={v.onNameKey} placeholder="Add a name, place or company" style={css('flex:1;background:transparent;border:none;outline:none;color:var(--color-text);font-size:13.5px;font-family:inherit')} />
        <div onClick={v.addName} className="hv-bg-a900" style={css('width:30px;height:30px;border-radius:9px;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-plus" style={css('font-size:14px;color:var(--color-accent-200)')}></i></div>
      </div>
      <div style={css('margin-top:12px;display:flex;flex-wrap:wrap;gap:7px')}>
        {v.nameChips.map((n, i) => (
          <div key={i} style={css('padding:7px 11px;border-radius:9px;background:var(--color-neutral-900);border:1px solid var(--color-divider);display:flex;align-items:center;gap:8px')}>
            <span style={css('font-size:12.5px')}>{n.label}</span>
            <span style={css('font-size:10px;font-family:ui-monospace,monospace;color:var(--color-accent-300)')}>{n.conf}</span>
          </div>
        ))}
      </div>
      <div style={css('margin-top:20px;padding:16px;border-radius:14px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>Before and after</div>
        <div style={css('margin-top:11px;font-size:13px;line-height:1.6;color:var(--color-neutral-400)')}>Generic recorder: “<span style={css('color:var(--color-neutral-500);text-decoration:line-through')}>Chirag by</span> said two thousand three sixty five”</div>
        <div style={css('margin-top:7px;font-size:13.5px;line-height:1.6;color:var(--color-accent-100)')}>STAY: “<span style={css('border-bottom:1px solid var(--color-accent-600)')}>Chirag bhai</span> said <span style={css('border-bottom:1px solid var(--color-accent-600)')}>₹2,365</span>”</div>
      </div>
      <div onClick={v.goEnroll} className="hv-bg-a900" style={css('margin-top:18px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>Continue</div>
    </div>
  );
}

export function Enroll({ v }) {
  if (!v.sc.enroll) return null;
  return (
    <div style={css('padding:74px 22px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Setup · 5 of 6</div>
      <div style={css('margin-top:8px;font-size:27px;font-weight:500;line-height:1.2')}>Other voices in your life</div>
      <div style={css('margin-top:9px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-400)')}>Only people who say yes get a name. Everyone else is simply “another voice” — counted, never identified.</div>
      <div style={css('margin-top:18px;display:flex;flex-direction:column;gap:8px')}>
        {v.enrollRows.map((e, i) => (
          <div key={i} style={css('padding:14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;align-items:center;gap:12px')}>
            <div style={css('width:34px;height:34px;border-radius:50%;background:var(--color-neutral-900);border:1px solid var(--color-divider);display:flex;align-items:center;justify-content:center;flex:none')}><i className={'ph ' + e.icon} style={css('font-size:16px;color:' + e.iconFg)}></i></div>
            <div style={css('flex:1')}>
              <div style={css('font-size:14px;font-weight:500')}>{e.name}</div>
              <div style={css('margin-top:3px;font-size:11.5px;color:var(--color-neutral-500)')}>{e.status}</div>
            </div>
            <div onClick={e.action} style={css('padding:7px 11px;border-radius:9px;border:1px solid ' + e.btnBorder + ';font-size:11.5px;color:' + e.btnFg + ';cursor:pointer;flex:none')}>{e.btn}</div>
          </div>
        ))}
      </div>
      <div style={css('margin-top:14px;padding:13px 14px;border-radius:11px;border:1px dashed var(--color-neutral-800);font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}><i className="ph ph-users-three" style={css('margin-right:6px')}></i>Strangers in a room are separated as voice 2, voice 3 — so summaries stay readable — but no voiceprint of them is ever created.</div>
      <div onClick={v.goOutcome} className="hv-bg-a900" style={css('margin-top:18px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>Continue</div>
    </div>
  );
}

export function Outcome({ v }) {
  if (!v.sc.outcome) return null;
  return (
    <div style={css('min-height:874px;padding:74px 22px 40px;background:radial-gradient(110% 44% at 50% 6%,var(--om-hero) 0%,var(--color-bg) 60%)')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Setup · 6 of 6</div>
      <div style={css('margin-top:8px;font-size:28px;font-weight:500;line-height:1.18')}>Your first week</div>
      <div style={css('margin-top:10px;font-size:13.5px;line-height:1.55;color:var(--color-neutral-400)')}>{v.personaPromise}</div>
      <div style={css('margin-top:22px;padding:20px;border-radius:16px;border:1px solid var(--color-accent-800);background:var(--color-accent-900)')}>
        <div style={css('font-size:38px;font-weight:500;letter-spacing:-.02em')}>{v.personaStat}</div>
        <div style={css('margin-top:6px;font-size:12.5px;line-height:1.5;color:var(--color-accent-200)')}>{v.personaStatNote}</div>
      </div>
      <div style={css('margin-top:16px')}>
        {v.firstWeek.map((w, i) => (
          <div key={i} style={css('display:flex;gap:13px')}>
            <div style={css('width:40px;flex:none;font-size:11px;font-family:ui-monospace,monospace;color:var(--color-neutral-500);padding-top:3px')}>{w.day}</div>
            <div style={css('width:11px;flex:none;display:flex;flex-direction:column;align-items:center')}>
              <div style={css('width:7px;height:7px;border-radius:50%;background:var(--color-accent-500);margin-top:6px;flex:none')}></div>
              <div style={css('flex:1;width:1px;background:linear-gradient(to bottom,var(--color-neutral-800),transparent)')}></div>
            </div>
            <div style={css('flex:1;padding-bottom:18px')}>
              <div style={css('font-size:14px;font-weight:500')}>{w.title}</div>
              <div style={css('margin-top:4px;font-size:12.5px;line-height:1.5;color:var(--color-neutral-400)')}>{w.body}</div>
            </div>
          </div>
        ))}
      </div>
      <div onClick={v.goPair} className="hv-bg-a900" style={css('margin-top:8px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>Pair the pendant</div>
      <div style={css('margin-top:12px;text-align:center;font-size:11px;color:var(--color-neutral-600)')}>Nothing is recording yet. It only listens when you tap.</div>
    </div>
  );
}

export function Pair({ v }) {
  if (!v.sc.pair) return null;
  const t = v.t;
  return (
    <div style={css('min-height:874px;padding:74px 22px 40px;display:flex;flex-direction:column')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Step 3 of 3</div>
      <div style={css('margin-top:8px;font-size:27px;font-weight:500;line-height:1.2')}>{t.pairTitle}</div>
      <div style={css('margin-top:9px;font-size:13.5px;color:var(--color-neutral-400)')}>{t.pairSub}</div>
      <div style={css('flex:1;display:flex;align-items:center;justify-content:center;padding:26px 0')}>
        <div style={css('position:relative;width:210px;height:210px;display:flex;align-items:center;justify-content:center')}>
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-accent-700);animation:ring 2.8s ease-out infinite')}></div>
          <div style={css('position:absolute;inset:24px;border-radius:50%;border:1px solid var(--color-accent-700);animation:ring 2.8s ease-out .9s infinite')}></div>
          <div style={css('width:112px;height:112px;border-radius:50%;background:linear-gradient(150deg,#3a3d52,#20222f);box-shadow:var(--shadow-md);display:flex;align-items:center;justify-content:center')}>
            <div style={css('width:16px;height:16px;border-radius:50%;background:var(--color-accent);box-shadow:0 0 22px var(--color-accent)')}></div>
          </div>
        </div>
      </div>
      <div style={css('padding:14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;align-items:center;gap:12px')}>
        <i className="ph ph-bluetooth" style={css('font-size:20px;color:var(--color-accent)')}></i>
        <div style={css('flex:1')}>
          <div style={css('font-size:14px;font-weight:500')}>STAY Pendant · Obsidian</div>
          <div style={css('margin-top:3px;font-size:11.5px;color:var(--color-neutral-500)')}>BLE 5.3 · 2-mic array · nearby</div>
        </div>
        <div style={css('font-size:11px;color:var(--color-accent-300)')}>−48 dBm</div>
      </div>
      <div onClick={v.goDevice} className="hv-bg-a900" style={css('margin-top:14px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{t.connect}</div>
    </div>
  );
}

export function Device({ v }) {
  if (!v.sc.device) return null;
  const t = v.t;
  return (
    <div style={css('padding:74px 22px 40px')}>
      <div style={css('display:flex;align-items:center;gap:8px;color:var(--color-accent-300);font-size:12px')}><i className="ph ph-check-circle" style={css('font-size:16px')}></i><span>{t.connected}</span></div>
      <div style={css('margin-top:10px;font-size:27px;font-weight:500')}>STAY Pendant</div>
      <div style={css('margin-top:20px;padding:18px;border-radius:14px;background:linear-gradient(160deg,var(--om-hero),var(--color-surface));border:1px solid var(--color-divider)')}>
        <div style={css('display:flex;align-items:flex-end;gap:10px')}>
          <div style={css('font-size:44px;font-weight:500;line-height:1;letter-spacing:-.02em')}>31</div>
          <div style={css('font-size:15px;color:var(--color-neutral-400);padding-bottom:5px')}>h left</div>
        </div>
        <div style={css('margin-top:14px;height:5px;border-radius:3px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('width:86%;height:100%;background:var(--color-accent);box-shadow:0 0 12px var(--color-accent)')}></div></div>
        <div style={css('margin-top:9px;display:flex;justify-content:space-between;font-size:11px;color:var(--color-neutral-500)')}><span>86% · capturing</span><span>~36 h continuous target</span></div>
      </div>
      <div style={css('margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:9px')}>
        {v.deviceStats.map((d, i) => (
          <div key={i} style={css('padding:13px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <i className={'ph ' + d.icon} style={css('font-size:16px;color:var(--color-accent-400)')}></i>
            <div style={css('margin-top:8px;font-size:15px;font-weight:500')}>{d.value}</div>
            <div style={css('margin-top:2px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-neutral-600)')}>{d.label}</div>
          </div>
        ))}
      </div>
      <div style={css('margin-top:12px;padding:14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500;margin-bottom:10px')}>Hardware controls</div>
        {v.hwRows.map((h, i) => (
          <div key={i} style={css('display:flex;align-items:center;gap:10px;padding:7px 0;border-top:1px solid var(--color-divider)')}>
            <i className={'ph ' + h.icon} style={css('font-size:15px;color:var(--color-neutral-400)')}></i>
            <div style={css('flex:1;font-size:12.5px')}>{h.label}</div>
            <div style={css('font-size:11px;color:var(--color-accent-300)')}>{h.state}</div>
          </div>
        ))}
      </div>
      <div onClick={v.goIdle} className="hv-bg-a900" style={css('margin-top:18px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{t.startUsing}</div>
    </div>
  );
}

export function Devices({ v }) {
  if (!v.sc.devices) return null;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('display:flex;align-items:flex-end;justify-content:space-between')}>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Your things</div>
          <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>Devices</div>
        </div>
        <div onClick={v.goControl} className="hv-bd-a600" style={css('padding:6px 11px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11.5px;color:var(--color-neutral-300);cursor:pointer')}><i className="ph ph-sliders-horizontal" style={css('margin-right:5px')}></i>Controls</div>
      </div>
      <div style={css('margin-top:16px;display:flex;flex-direction:column;gap:9px')}>
        {v.deviceList.map((d, i) => (
          <div key={i} onClick={d.go} className="hv-bd-a600" style={css('padding:14px;border-radius:14px;background:var(--color-surface);border:1px solid ' + d.border + ';display:flex;gap:13px;align-items:center;cursor:pointer')}>
            <div style={css('width:52px;height:62px;flex:none;display:flex;flex-direction:column;align-items:center')}>
              <div style={css('width:15px;height:15px;border-radius:50%;border:2px solid ' + d.bail + ';margin-bottom:-5px')}></div>
              <div style={css('width:46px;height:46px;border-radius:50%;background:' + d.body + ';box-shadow:inset 0 1px 0 rgba(255,255,255,.12),0 5px 12px rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center')}>
                <div style={css('width:18px;height:18px;border-radius:50%;border:1px solid rgba(233,233,237,.16);display:flex;align-items:center;justify-content:center')}><div style={css('width:5px;height:5px;border-radius:50%;background:' + d.dot + ';box-shadow:0 0 8px ' + d.dot)}></div></div>
              </div>
            </div>
            <div style={css('flex:1')}>
              <div style={css('display:flex;align-items:center;gap:7px')}>
                <div style={css('font-size:14.5px;font-weight:500')}>{d.name}</div>
                <div style={css('padding:2px 7px;border-radius:5px;background:' + d.badgeBg + ';font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:' + d.badgeFg)}>{d.badge}</div>
              </div>
              <div style={css('margin-top:4px;font-size:11.5px;color:var(--color-neutral-500)')}>{d.model} · {d.finish}</div>
              <div style={css('margin-top:8px;display:flex;align-items:center;gap:8px')}>
                <div style={css('flex:1;height:4px;border-radius:2px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + d.batt + ';background:' + d.battBg)}></div></div>
                <div style={css('font-size:10.5px;font-family:ui-monospace,monospace;color:var(--color-neutral-500);flex:none')}>{d.batt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div onClick={v.goPairPin} className="hv-bd-accent" style={css('margin-top:11px;padding:14px;border-radius:14px;border:1px dashed var(--color-neutral-700);display:flex;align-items:center;justify-content:center;gap:9px;font-size:13.5px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-plus-circle" style={css('font-size:17px')}></i>Pair a new device</div>
      <div style={css('margin-top:20px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>The family</div>
      <div style={css('margin-top:11px;display:flex;gap:9px')}>
        {v.models.map((m, i) => (
          <div key={i} style={css('flex:1;padding:13px 11px;border-radius:12px;background:var(--color-surface);border:1px solid ' + m.border)}>
            <div style={css('font-size:12.5px;font-weight:500')}>{m.name}</div>
            <div style={css('margin-top:5px;font-size:10.5px;line-height:1.4;color:var(--color-neutral-500)')}>{m.note}</div>
            <div style={css('margin-top:8px;font-size:11px;color:var(--color-accent-300)')}>{m.price}</div>
          </div>
        ))}
      </div>
      <div style={css('margin-top:11px;padding:13px 14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;align-items:center;gap:10px')}>
        <i className="ph ph-download-simple" style={css('font-size:16px;color:var(--color-accent-400)')}></i>
        <div style={css('flex:1;font-size:12.5px')}>Firmware 1.4.2 · update ready</div>
        <div style={css('font-size:11.5px;color:var(--color-accent-300);cursor:pointer')}>Install tonight</div>
      </div>
    </div>
  );
}

export function PairPin({ v }) {
  if (!v.sc.pairPin) return null;
  return (
    <div style={css('min-height:874px;padding:74px 22px 40px;display:flex;flex-direction:column;background:radial-gradient(110% 40% at 50% 10%,var(--om-hero) 0%,var(--color-bg) 62%)')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Add a device</div>
      <div style={css('margin-top:8px;font-size:26px;font-weight:500;line-height:1.2')}>{v.pairTitleTxt}</div>
      <div style={css('margin-top:9px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-400)')}>{v.pairSubTxt}</div>
      <div style={css('margin-top:8px;display:flex;gap:7px')}>
        {v.modelPicker.map((m, i) => (
          <div key={i} onClick={m.go} style={css('flex:1;padding:9px 8px;border-radius:10px;text-align:center;border:1px solid ' + m.border + ';background:' + m.bg + ';cursor:pointer')}>
            <div style={css('font-size:11.5px;color:' + m.fg)}>{m.name}</div>
          </div>
        ))}
      </div>
      <div style={css('flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px')}>
        <div style={css('position:relative;width:200px;height:200px;display:flex;align-items:center;justify-content:center')}>
          <div style={css('position:absolute;inset:0;border-radius:50%;border:1px solid var(--color-accent-800);animation:ring 3s ease-out infinite')}></div>
          <div style={css('position:relative;display:flex;flex-direction:column;align-items:center')}>
            <div style={css('width:26px;height:26px;border-radius:50%;border:3px solid #5a5e73;margin-bottom:-8px')}></div>
            <div style={css('width:104px;height:104px;border-radius:50%;background:radial-gradient(120% 120% at 30% 22%,#4c5069,#1c1e2a 72%);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 14px 30px rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;position:relative')}>
              <div style={css('width:44px;height:44px;border-radius:50%;border:1px solid rgba(233,233,237,.14);display:flex;align-items:center;justify-content:center')}><div style={css('width:10px;height:10px;border-radius:50%;background:' + v.pairLed + ';box-shadow:0 0 16px ' + v.pairLed)}></div></div>
              <div style={css('position:absolute;bottom:15px;display:flex;gap:5px')}>
                <div style={css('width:3px;height:3px;border-radius:50%;background:rgba(233,233,237,.32)')}></div>
                <div style={css('width:3px;height:3px;border-radius:50%;background:rgba(233,233,237,.32)')}></div>
                <div style={css('width:3px;height:3px;border-radius:50%;background:rgba(233,233,237,.32)')}></div>
              </div>
            </div>
          </div>
        </div>
        <div style={css('display:flex;gap:9px')}>
          {v.pinDigits.map((p, i) => (
            <div key={i} style={css('width:38px;height:48px;border-radius:10px;border:1px solid ' + p.border + ';background:var(--color-surface);display:flex;align-items:center;justify-content:center;font-size:21px;font-family:ui-monospace,monospace;color:' + p.fg)}>{p.d}</div>
          ))}
        </div>
        <div style={css('text-align:center;font-size:12.5px;line-height:1.55;color:var(--color-neutral-400);max-width:270px')}>{v.pairStepTxt}</div>
      </div>
      <div style={css('display:flex;flex-direction:column;gap:9px')}>
        {v.pairSteps.map((s, i) => (
          <div key={i} style={css('display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:11px;background:' + s.bg + ';border:1px solid ' + s.border)}>
            <i className={'ph ' + s.icon} style={css('font-size:16px;color:' + s.fg)}></i>
            <div style={css('flex:1;font-size:12.5px;color:' + s.fg)}>{s.label}</div>
          </div>
        ))}
      </div>
      <div onClick={v.pairAdvance} className="hv-bg-a900" style={css('margin-top:14px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{v.pairCta}</div>
    </div>
  );
}

export function Control({ v }) {
  if (!v.sc.control) return null;
  return (
    <div style={css('padding:66px 20px 40px')}>
      <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Device controls</div>
      <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>How it starts</div>
      <div style={css('margin-top:9px;font-size:13px;line-height:1.5;color:var(--color-neutral-400)')}>Two ways to begin a session. Pick what suits your day — the amber light shows either way.</div>
      <div style={css('margin-top:16px;display:flex;flex-direction:column;gap:8px')}>
        {v.triggerOpts.map((o, i) => (
          <div key={i} onClick={o.go} className="hv-bd-a600" style={css('padding:14px;border-radius:12px;background:' + o.bg + ';border:1px solid ' + o.border + ';cursor:pointer')}>
            <div style={css('display:flex;align-items:center;gap:11px')}>
              <i className={'ph ' + o.icon} style={css('font-size:18px;color:' + o.iconFg)}></i>
              <div style={css('flex:1;font-size:14px;font-weight:500')}>{o.label}</div>
              <i className={'ph ' + o.check} style={css('font-size:17px;color:' + o.iconFg)}></i>
            </div>
            <div style={css('margin-top:7px;font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}>{o.note}</div>
          </div>
        ))}
      </div>
      <div style={css('margin-top:22px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>On the pendant</div>
      <div style={css('margin-top:11px;padding:6px 14px 8px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        {v.gestures.map((g, i) => (
          <div key={i} style={css('display:flex;align-items:center;gap:11px;padding:11px 0;border-top:1px solid var(--color-divider)')}>
            <div style={css('width:56px;flex:none;font-size:11px;font-family:ui-monospace,monospace;color:var(--color-accent-300)')}>{g.input}</div>
            <div style={css('flex:1;font-size:12.5px')}>{g.action}</div>
            <i className="ph ph-caret-right" style={css('font-size:12px;color:var(--color-neutral-700)')}></i>
          </div>
        ))}
      </div>
      <div style={css('margin-top:14px;display:flex;flex-direction:column;gap:9px')}>
        {v.ctrlToggles.map((c, i) => (
          <div key={i} style={css('padding:13px 14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;gap:12px;align-items:center')}>
            <div style={css('flex:1')}>
              <div style={css('font-size:13px;font-weight:500')}>{c.title}</div>
              <div style={css('margin-top:3px;font-size:11px;line-height:1.45;color:var(--color-neutral-500)')}>{c.body}</div>
            </div>
            <div onClick={c.toggle} style={css('width:46px;height:27px;border-radius:14px;flex:none;background:' + c.trackBg + ';border:1px solid ' + c.trackBorder + ';padding:2px;display:flex;cursor:pointer;justify-content:' + c.justify + ';transition:all .2s')}><div style={css('width:21px;height:21px;border-radius:50%;background:' + c.knob)}></div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
