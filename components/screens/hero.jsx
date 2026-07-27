'use client';

// The hero moment: idle → listening → synthesizing → session made sense of.
import React from 'react';
import { css } from '@/lib/css';

export function Idle({ v }) {
  if (!v.sc.idle) return null;
  const t = v.t;
  return (
    <div style={css('min-height:874px;padding:80px 26px 40px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center')}>
      <div style={css('font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.ready}</div>
      <div style={css('margin-top:16px;font-size:29px;font-weight:500;line-height:1.22;max-width:280px;text-wrap:pretty')}>{t.idleTitle}</div>
      <div onClick={v.startSession} className="hv-bd-accent" style={css('margin:44px 0;position:relative;width:150px;height:150px;border-radius:50%;border:1px solid var(--color-accent-600);display:flex;align-items:center;justify-content:center;cursor:pointer')}>
        <div style={css('position:absolute;inset:-10px;border-radius:50%;border:1px solid var(--color-accent-800);animation:breathe 3.6s ease-in-out infinite')}></div>
        <i className="ph ph-waveform" style={css('font-size:40px;color:var(--color-accent)')}></i>
      </div>
      <div style={css('font-size:13.5px;color:var(--color-neutral-400);max-width:250px;line-height:1.5')}>{t.idleSub}</div>
      <div style={css('margin-top:30px;display:flex;gap:7px;flex-wrap:wrap;justify-content:center')}>
        {v.idleChips.map((ch, i) => (
          <div key={i} style={css('padding:6px 11px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11.5px;color:var(--color-neutral-400)')}>{ch}</div>
        ))}
      </div>
    </div>
  );
}

export function Listening({ v }) {
  if (!v.sc.listening) return null;
  const t = v.t;
  return (
    <div style={css('min-height:874px;padding:74px 24px 40px;display:flex;flex-direction:column;background:radial-gradient(110% 55% at 50% 42%,var(--om-hero) 0%,var(--color-bg) 70%)')}>
      <div style={css('display:flex;align-items:center;justify-content:space-between')}>
        <div style={css('display:flex;align-items:center;gap:8px;padding:6px 11px;border-radius:20px;background:rgba(145,132,217,.12);border:1px solid var(--color-accent-700)')}>
          <div style={css('width:7px;height:7px;border-radius:50%;background:#e8a33d;box-shadow:0 0 10px #e8a33d')}></div>
          <span style={css('font-size:11px;color:var(--color-accent-200)')}>{t.recLight}</span>
        </div>
        <div style={css('font-size:11.5px;color:var(--color-neutral-500)')}>{t.onDevice}</div>
      </div>
      <div style={css('flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center')}>
        <div style={css('font-size:31px;font-weight:500;letter-spacing:-.01em')}>{t.listening}</div>
        <div style={css('margin-top:10px;font-family:ui-monospace,Menlo,monospace;font-size:13px;color:var(--color-accent-300);letter-spacing:.1em')}>{v.elapsedLabel}</div>
        <div style={css('margin-top:34px;height:96px;display:flex;align-items:center;gap:4px;opacity:' + v.waveOpacity)}>
          {v.bars.map((b, i) => (
            <div key={i} style={css('width:3px;border-radius:2px;background:var(--color-accent-400);height:' + b.h + 'px;animation:wv ' + b.dur + ' ease-in-out ' + b.delay + ' infinite')}></div>
          ))}
        </div>
        <div style={css('margin-top:30px;min-height:52px;max-width:300px;font-size:14px;line-height:1.55;color:var(--color-neutral-300);text-wrap:pretty')}>{v.liveLine}</div>
        <div style={css('margin-top:6px;font-size:11px;color:var(--color-neutral-600)')}>{v.liveMeta}</div>
      </div>
      <div style={css('display:flex;gap:10px')}>
        <div onClick={v.toggleMute} style={css('width:52px;height:52px;border-radius:14px;border:1px solid ' + v.muteBorder + ';display:flex;align-items:center;justify-content:center;cursor:pointer;background:' + v.muteBg)}>
          <i className={'ph ' + v.muteIcon} style={css('font-size:20px;color:' + v.muteFg)}></i>
        </div>
        <div onClick={v.endSession} className="hv-bg-a900" style={css('flex:1;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:8px;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>
          <i className="ph ph-sparkle" style={css('font-size:17px')}></i><span>{t.endSession}</span>
        </div>
      </div>
      <div style={css('margin-top:11px;text-align:center;font-size:10.5px;color:var(--color-neutral-600)')}>{t.muteHint}</div>
    </div>
  );
}

export function Synth({ v }) {
  if (!v.sc.synth) return null;
  const t = v.t;
  return (
    <div style={css('min-height:874px;padding:74px 26px 40px;display:flex;flex-direction:column;justify-content:center;background:radial-gradient(100% 50% at 50% 45%,var(--om-hero) 0%,var(--color-bg) 68%)')}>
      <div style={css('font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.synKicker}</div>
      <div style={css('margin-top:12px;font-size:29px;font-weight:500;line-height:1.2;max-width:290px;text-wrap:pretty')}>{t.synTitle}</div>
      <div style={css('margin-top:34px;display:flex;flex-direction:column;gap:2px')}>
        {v.synSteps.map((s, i) => (
          <div key={i} style={css('display:flex;align-items:center;gap:12px;padding:12px 0;border-top:1px solid var(--color-divider)')}>
            <i className={'ph ' + s.icon} style={css('font-size:17px;color:' + s.fg + ';animation:' + s.anim)}></i>
            <div style={css('flex:1;font-size:14px;color:' + s.fg)}>{s.label}</div>
            <div style={css('font-size:10.5px;font-family:ui-monospace,monospace;color:var(--color-neutral-600)')}>{s.meta}</div>
          </div>
        ))}
      </div>
      <div style={css('margin-top:34px;height:3px;border-radius:2px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;background:var(--color-accent);width:' + v.synPct + ';box-shadow:0 0 12px var(--color-accent);transition:width .5s ease')}></div></div>
      <div style={css('margin-top:12px;font-size:11.5px;color:var(--color-neutral-500)')}>{t.synNote}</div>
    </div>
  );
}

export function Session({ v }) {
  if (!v.sc.session) return null;
  const t = v.t;
  return (
    <div style={css('padding:70px 20px 40px;animation:fadeUp .5s ease both')}>
      <div style={css('display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--color-accent-300)')}><i className="ph ph-sparkle" style={css('font-size:14px')}></i><span>{t.sessionKicker}</span></div>
      <div style={css('margin-top:10px;font-size:28px;font-weight:500;line-height:1.18;text-wrap:pretty')}>{t.sessionTitle}</div>
      <div style={css('margin-top:8px;font-size:12.5px;color:var(--color-neutral-500)')}>Vendor call · 14 min 22 s · Hinglish + Gujarati · raw audio discarded</div>

      <div style={css('margin-top:20px;padding:16px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider);box-shadow:var(--shadow-sm)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.whatHappened}</div>
        <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:11px')}>
          {v.sessionSummary.map((s, i) => (
            <div key={i} style={css('display:flex;gap:10px;font-size:13.5px;line-height:1.5;color:var(--color-neutral-200)')}><div style={css('width:2px;flex:none;border-radius:2px;background:var(--color-accent-600)')}></div><span>{s}</span></div>
          ))}
        </div>
      </div>

      <div style={css('margin-top:11px;display:grid;grid-template-columns:1fr 1fr;gap:9px')}>
        <div style={css('padding:14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
          <div style={css('font-size:26px;font-weight:500')}>3</div>
          <div style={css('margin-top:2px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.tasksFound}</div>
        </div>
        <div style={css('padding:14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
          <div style={css('font-size:26px;font-weight:500')}>1</div>
          <div style={css('margin-top:2px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.decision}</div>
        </div>
      </div>

      <div style={css('margin-top:11px;padding:16px;border-radius:14px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
        <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>{t.heardRight}</div>
        <div style={css('margin-top:10px;font-size:14px;line-height:1.6;color:var(--color-accent-100)')}>“<span style={css('color:var(--color-accent-200);border-bottom:1px solid var(--color-accent-600)')}>Chirag bhai</span> ne kaha — <span style={css('color:var(--color-accent-200);border-bottom:1px solid var(--color-accent-600)')}>₹2,365</span> per unit at 5,000 pieces, decision by <span style={css('color:var(--color-accent-200);border-bottom:1px solid var(--color-accent-600)')}>Thursday</span>.”</div>
        <div style={css('margin-top:10px;font-size:11px;color:var(--color-accent-400)')}>Proper nouns, numbers and dates verified against your memory — 4 names, 2 amounts.</div>
      </div>

      <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:8px')}>
        {v.sessionTasks.map((k, i) => (
          <div key={i} onClick={k.toggle} style={css('padding:13px 14px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;gap:11px;align-items:flex-start;cursor:pointer')}>
            <i className={'ph ' + k.icon} style={css('font-size:18px;color:' + k.iconFg + ';margin-top:1px')}></i>
            <div style={css('flex:1')}>
              <div style={css('font-size:13.5px;line-height:1.4;color:' + k.fg + ';text-decoration:' + k.deco)}>{k.text}</div>
              <div style={css('margin-top:5px;font-size:10.5px;color:var(--color-neutral-600)')}><i className="ph ph-quotes" style={css('font-size:11px;margin-right:4px')}></i>{k.src}</div>
            </div>
          </div>
        ))}
      </div>

      <div onClick={v.goToday} className="hv-bg-a900" style={css('margin-top:18px;height:50px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:15px;color:var(--color-accent-200);cursor:pointer')}>{t.seeDay}</div>
    </div>
  );
}
