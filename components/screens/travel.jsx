'use client';

// Traveller mode: home, speak-and-be-heard, and split-screen table talk.
import React from 'react';
import { css } from '@/lib/css';

export function TravelHome({ v }) {
  if (!v.sc.travelHome) return null;
  return (
    <div style={css('min-height:874px;padding:66px 20px 40px;background:radial-gradient(120% 42% at 76% 4%,var(--om-hero) 0%,var(--color-bg) 58%)')}>
      <div style={css('display:flex;align-items:flex-end;justify-content:space-between')}>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-accent-400)')}>Traveller mode</div>
          <div style={css('margin-top:6px;font-size:26px;font-weight:500')}>Speak, and be understood</div>
        </div>
        <i className="ph ph-airplane-tilt" style={css('font-size:22px;color:var(--color-neutral-600);margin-bottom:4px')}></i>
      </div>
      <div style={css('margin-top:10px;font-size:13px;line-height:1.5;color:var(--color-neutral-400)')}>Your language goes in. Theirs comes out — out loud. Put the pendant on the table and it works both ways.</div>
      <div style={css('margin-top:18px;padding:16px;border-radius:16px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('display:flex;align-items:center;gap:11px')}>
          <div onClick={v.pickFrom} style={css('flex:1;padding:13px 12px;border-radius:12px;background:var(--color-neutral-900);border:1px solid var(--color-divider);cursor:pointer')}>
            <div style={css('font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-neutral-600)')}>You speak</div>
            <div style={css('margin-top:5px;font-size:16px;font-weight:500')}>{v.fromLang}</div>
          </div>
          <div onClick={v.swapLangs} className="hv-bg-a900" style={css('width:38px;height:38px;border-radius:50%;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-arrows-left-right" style={css('font-size:16px;color:var(--color-accent-200)')}></i></div>
          <div onClick={v.pickTo} style={css('flex:1;padding:13px 12px;border-radius:12px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);cursor:pointer')}>
            <div style={css('font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--color-accent-400)')}>They hear</div>
            <div style={css('margin-top:5px;font-size:16px;font-weight:500;color:var(--color-accent-100)')}>{v.toLang}</div>
          </div>
        </div>
        <div style={css('margin-top:12px;display:flex;gap:6px;flex-wrap:wrap')}>
          {v.langPills.map((l, i) => (
            <div key={i} onClick={l.go} style={css('padding:6px 10px;border-radius:8px;border:1px solid ' + l.border + ';background:' + l.bg + ';font-size:11.5px;color:' + l.fg + ';cursor:pointer')}>{l.label}</div>
          ))}
        </div>
      </div>
      <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:9px')}>
        {v.travelModes.map((m, i) => (
          <div key={i} onClick={m.go} className="hv-bd-a600" style={css('padding:16px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider);display:flex;gap:13px;align-items:center;cursor:pointer')}>
            <div style={css('width:40px;height:40px;border-radius:12px;border:1px solid var(--color-accent-800);display:flex;align-items:center;justify-content:center;flex:none')}><i className={'ph ' + m.icon} style={css('font-size:19px;color:var(--color-accent-300)')}></i></div>
            <div style={css('flex:1')}>
              <div style={css('font-size:14.5px;font-weight:500')}>{m.title}</div>
              <div style={css('margin-top:4px;font-size:12px;line-height:1.45;color:var(--color-neutral-500)')}>{m.body}</div>
            </div>
            <i className="ph ph-caret-right" style={css('font-size:14px;color:var(--color-neutral-700)')}></i>
          </div>
        ))}
      </div>
      <div style={css('margin-top:11px;padding:15px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
        <div style={css('font-size:12.5px;font-weight:500')}>Your own phrasebook</div>
        <div style={css('margin-top:5px;font-size:11.5px;color:var(--color-neutral-500)')}>Built from things you actually say — not a tourist list.</div>
        <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:7px')}>
          {v.phrasebook.map((p, i) => (
            <div key={i} style={css('padding:10px 11px;border-radius:10px;background:var(--color-neutral-900);display:flex;align-items:center;gap:10px')}>
              <i className="ph ph-speaker-high" style={css('font-size:14px;color:var(--color-accent-400)')}></i>
              <div style={css('flex:1;font-size:12px;line-height:1.4;color:var(--color-neutral-300)')}>{p}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={css('margin-top:12px;display:flex;align-items:center;gap:8px;font-size:11px;color:var(--color-neutral-600)')}><i className="ph ph-cloud-slash" style={css('font-size:14px')}></i>Works with no signal — translation runs on this phone.</div>
    </div>
  );
}

export function TravelSpeak({ v }) {
  if (!v.sc.travelSpeak) return null;
  return (
    <div style={css('min-height:874px;padding:66px 20px 40px;display:flex;flex-direction:column;background:radial-gradient(110% 50% at 50% 40%,var(--om-hero) 0%,var(--color-bg) 70%)')}>
      <div style={css('display:flex;align-items:center;gap:9px')}>
        <div onClick={v.goTravelHome} style={css('width:32px;height:32px;border-radius:10px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-left" style={css('font-size:14px;color:var(--color-neutral-300)')}></i></div>
        <div style={css('flex:1;display:flex;align-items:center;gap:8px;padding:7px 12px;border-radius:20px;background:var(--color-surface);border:1px solid var(--color-divider);justify-content:center')}>
          <span style={css('font-size:12px;color:' + v.speakFromFg)}>{v.speakFrom}</span>
          <i className="ph ph-arrow-right" style={css('font-size:12px;color:var(--color-neutral-600)')}></i>
          <span style={css('font-size:12px;color:' + v.speakToFg)}>{v.speakTo}</span>
        </div>
        <div onClick={v.swapLangs} style={css('width:32px;height:32px;border-radius:10px;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-arrows-left-right" style={css('font-size:14px;color:var(--color-accent-200)')}></i></div>
      </div>
      <div style={css('flex:1;display:flex;flex-direction:column;justify-content:center;gap:14px;padding:20px 0')}>
        {v.speakIdle && (
          <div style={css('text-align:center;padding:20px')}>
            <div style={css('font-size:22px;font-weight:500;line-height:1.35;text-wrap:pretty')}>{v.speakPrompt}</div>
            <div style={css('margin-top:12px;font-size:13px;line-height:1.55;color:var(--color-neutral-400)')}>Nothing to hold, nothing to learn. Tap once, speak normally, and the phone says it for you.</div>
          </div>
        )}
        {v.speakHasResult && (
          <>
            <div style={css('padding:16px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider);animation:fadeUp .35s ease both')}>
              <div style={css('font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-neutral-600)')}>{v.speakHeardLabel}</div>
              <div style={css('margin-top:9px;font-size:16px;line-height:1.5;color:var(--color-neutral-300)')}>{v.speakHeard}</div>
            </div>
            <div style={css('padding:20px;border-radius:16px;background:linear-gradient(160deg,var(--om-card2),var(--color-surface));border:1px solid var(--color-accent-700);animation:fadeUp .45s ease both')}>
              <div style={css('display:flex;align-items:center;justify-content:space-between')}>
                <div style={css('font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-accent-300)')}>{v.speakSaidLabel}</div>
                <div style={css('display:flex;align-items:center;gap:4px')}>
                  {v.speakerWaves.map((w, i) => (
                    <div key={i} style={css('width:3px;border-radius:2px;background:var(--color-accent-300);height:' + w.h + 'px;animation:wv ' + w.dur + ' ease-in-out ' + w.delay + ' infinite')}></div>
                  ))}
                </div>
              </div>
              <div style={css('margin-top:12px;font-size:26px;line-height:1.35;font-weight:500;color:var(--color-accent-100);text-wrap:pretty')}>{v.speakOut}</div>
              <div style={css('margin-top:10px;font-size:12.5px;color:var(--color-accent-300);font-style:italic')}>{v.speakRoman}</div>
              <div style={css('margin-top:14px;display:flex;gap:8px')}>
                <div onClick={v.speakAgain} style={css('padding:9px 13px;border-radius:10px;border:1px solid var(--color-accent);font-size:12px;color:var(--color-accent-100);cursor:pointer')}><i className="ph ph-speaker-high" style={css('margin-right:6px')}></i>Say it again</div>
                <div onClick={v.speakSlower} style={css('padding:9px 13px;border-radius:10px;border:1px solid var(--color-accent-700);font-size:12px;color:var(--color-accent-300);cursor:pointer')}>Slower</div>
                <div style={css('padding:9px 13px;border-radius:10px;border:1px solid var(--color-neutral-800);font-size:12px;color:var(--color-neutral-400);cursor:pointer')}>Save</div>
              </div>
            </div>
            <div onClick={v.theirTurn} className="hv-bd-accent" style={css('padding:14px 15px;border-radius:14px;border:1px dashed var(--color-neutral-700);display:flex;align-items:center;gap:11px;cursor:pointer')}>
              <i className="ph ph-arrow-u-down-left" style={css('font-size:17px;color:var(--color-accent-300)')}></i>
              <div style={css('flex:1;font-size:12.5px;line-height:1.45;color:var(--color-neutral-300)')}>{v.theirTurnLabel}</div>
            </div>
          </>
        )}
      </div>
      <div style={css('display:flex;flex-direction:column;align-items:center;gap:16px')}>
        <div style={css('height:40px;display:flex;align-items:center;gap:4px;opacity:' + v.speakWaveOpacity)}>
          {v.sampleBars.map((b, i) => (
            <div key={i} style={css('width:3px;border-radius:2px;background:var(--color-accent-400);height:' + b.h + 'px;animation:wv ' + b.dur + ' ease-in-out ' + b.delay + ' infinite')}></div>
          ))}
        </div>
        <div onClick={v.speakTap} className="hv-bd-accent" style={css('width:104px;height:104px;border-radius:50%;border:1px solid ' + v.speakRing + ';display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative')}>
          <div style={css('position:absolute;inset:-8px;border-radius:50%;border:1px solid var(--color-accent-800);animation:' + v.speakAnim)}></div>
          <i className={'ph ' + v.speakIcon} style={css('font-size:30px;color:var(--color-accent-200)')}></i>
        </div>
        <div style={css('font-size:12.5px;color:var(--color-neutral-500)')}>{v.speakStatus}</div>
      </div>
    </div>
  );
}

export function TravelTable({ v }) {
  if (!v.sc.travelTable) return null;
  return (
    <div style={css('min-height:874px;display:flex;flex-direction:column')}>
      <div style={css('flex:1;padding:70px 20px 20px;background:linear-gradient(180deg,var(--om-hero2),var(--color-bg));display:flex;flex-direction:column;justify-content:flex-end;transform:rotate(180deg)')}>
        <div style={css('font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-neutral-600)')}>{v.tableThemLabel}</div>
        <div style={css('margin-top:10px;font-size:22px;line-height:1.4;font-weight:500;text-wrap:pretty')}>{v.tableThemBig}</div>
        <div style={css('margin-top:10px;font-size:13px;line-height:1.5;color:var(--color-neutral-500)')}>{v.tableThemSmall}</div>
        <div style={css('margin-top:14px;display:flex;gap:7px')}>
          <div style={css('padding:6px 11px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11px;color:var(--color-neutral-400)')}>{v.toLang}</div>
          <div style={css('padding:6px 11px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11px;color:var(--color-neutral-400)')}>Tap to reply</div>
        </div>
      </div>
      <div style={css('padding:14px 20px;background:var(--color-bg);border-top:1px solid var(--color-divider);border-bottom:1px solid var(--color-divider);display:flex;align-items:center;gap:12px')}>
        <div style={css('display:flex;flex-direction:column;align-items:center;flex:none')}>
          <div style={css('width:11px;height:11px;border-radius:50%;border:2px solid #5a5e73;margin-bottom:-4px')}></div>
          <div style={css('width:34px;height:34px;border-radius:50%;background:radial-gradient(120% 120% at 30% 22%,#4c5069,#1c1e2a 72%);display:flex;align-items:center;justify-content:center')}><div style={css('width:7px;height:7px;border-radius:50%;background:#e8a33d;box-shadow:0 0 10px #e8a33d')}></div></div>
        </div>
        <div style={css('flex:1')}>
          <div style={css('font-size:12.5px;font-weight:500')}>Pendant on the table</div>
          <div style={css('margin-top:3px;font-size:11px;color:var(--color-neutral-500)')}>Hearing both sides · 2 voices · translating both ways</div>
        </div>
        <div style={css('display:flex;gap:3px;align-items:flex-end;height:22px')}>
          {v.tableWaves.map((w, i) => (
            <div key={i} style={css('width:3px;border-radius:2px;background:var(--color-accent-400);height:' + w.h + 'px;animation:wv ' + w.dur + ' ease-in-out ' + w.delay + ' infinite')}></div>
          ))}
        </div>
      </div>
      <div style={css('flex:1;padding:20px 20px 40px;display:flex;flex-direction:column;justify-content:flex-start')}>
        <div style={css('font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--color-neutral-600)')}>{v.tableYouLabel}</div>
        <div style={css('margin-top:10px;font-size:22px;line-height:1.4;font-weight:500;text-wrap:pretty')}>{v.tableYouBig}</div>
        <div style={css('margin-top:10px;font-size:13px;line-height:1.5;color:var(--color-neutral-500)')}>{v.tableYouSmall}</div>
        <div style={css('margin-top:16px;display:flex;gap:9px')}>
          <div onClick={v.nextTurn} className="hv-bg-a900" style={css('flex:1;height:48px;border-radius:13px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:8px;font-size:14px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-microphone" style={css('font-size:16px')}></i>{v.tableCta}</div>
          <div onClick={v.goTravelHome} style={css('width:48px;height:48px;border-radius:13px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-x" style={css('font-size:16px;color:var(--color-neutral-400)')}></i></div>
        </div>
        <div style={css('margin-top:12px;font-size:11px;line-height:1.5;color:var(--color-neutral-600)')}>Both halves stay on screen so neither of you has to lean over. Nothing from this conversation is saved unless you tap save.</div>
      </div>
    </div>
  );
}
