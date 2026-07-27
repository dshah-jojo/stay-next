'use client';

// Home (session feed) and session detail with the WhatsApp share sheet.
import React from 'react';
import { css } from '@/lib/css';

export function Home({ v }) {
  if (!v.sc.home) return null;
  const t = v.t;
  return (
    <div style={css('padding:60px 16px 40px')}>

      <div style={css('padding:12px 14px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider);box-shadow:var(--shadow-sm)')}>
        <div style={css('display:flex;align-items:center;gap:10px')}>
          <div onClick={v.goDevices} style={css('display:flex;align-items:center;gap:9px;flex:1;cursor:pointer')}>
            <div style={css('width:26px;height:30px;flex:none;display:flex;flex-direction:column;align-items:center')}>
              <div style={css('width:9px;height:9px;border-radius:50%;border:2px solid #5a5e73;margin-bottom:-3px')}></div>
              <div style={css('width:24px;height:24px;border-radius:50%;background:radial-gradient(120% 120% at 30% 22%,#4c5069,#1c1e2a 72%);display:flex;align-items:center;justify-content:center')}><div style={css('width:5px;height:5px;border-radius:50%;background:' + v.homeLed + ';box-shadow:0 0 8px ' + v.homeLed)}></div></div>
            </div>
            <div>
              <div style={css('font-size:12.5px;font-weight:500')}>STAY One · Obsidian</div>
              <div style={css('margin-top:2px;font-size:10.5px;color:var(--color-neutral-500)')}>{v.homeDeviceState}</div>
            </div>
          </div>
          <div style={css('display:flex;align-items:center;gap:7px;flex:none')}>
            <div style={css('width:26px;height:13px;border-radius:4px;border:1px solid var(--color-neutral-700);padding:1.5px;display:flex')}><div style={css('width:86%;height:100%;border-radius:2px;background:var(--color-accent)')}></div></div>
            <div style={css('font-size:11px;font-family:ui-monospace,Menlo,monospace;color:var(--color-neutral-300)')}>86%</div>
            <i className="ph ph-bluetooth-connected" style={css('font-size:14px;color:var(--color-accent-400)')}></i>
          </div>
        </div>
        <div style={css('margin-top:11px;padding-top:11px;border-top:1px solid var(--color-divider);display:flex;align-items:center;gap:11px')}>
          <i className="ph ph-ear" style={css('font-size:17px;color:' + v.speakFg)}></i>
          <div style={css('flex:1')}>
            <div style={css('font-size:12.5px;font-weight:500;color:' + v.speakFg)}>{v.speakModeLabel}</div>
            <div style={css('margin-top:2px;font-size:10.5px;line-height:1.4;color:var(--color-neutral-500)')}>{v.speakModeNote}</div>
          </div>
          <div onClick={v.toggleSpeakMode} style={css('width:46px;height:27px;border-radius:14px;flex:none;background:' + v.speakSw.trackBg + ';border:1px solid ' + v.speakSw.trackBorder + ';padding:2px;display:flex;cursor:pointer;justify-content:' + v.speakSw.justify + ';transition:all .2s')}><div style={css('width:21px;height:21px;border-radius:50%;background:' + v.speakSw.knob)}></div></div>
        </div>
      </div>

      {v.listenActive && (
        <div style={css('margin-top:10px;padding:14px;border-radius:15px;background:linear-gradient(160deg,var(--om-card2),var(--color-surface));border:1px solid var(--color-accent-700);animation:fadeUp .3s ease both')}>
          <div style={css('display:flex;align-items:center;gap:9px')}>
            <div style={css('width:7px;height:7px;border-radius:50%;background:#e8a33d;box-shadow:0 0 10px #e8a33d')}></div>
            <div style={css('flex:1;font-size:12.5px;font-weight:500;color:var(--color-accent-100)')}>{v.miniListenTitle}</div>
            <div style={css('font-family:ui-monospace,Menlo,monospace;font-size:12px;color:var(--color-accent-300)')}>{v.elapsedLabel}</div>
          </div>
          <div style={css('margin-top:11px;height:34px;display:flex;align-items:center;gap:3px;opacity:' + v.waveOpacity)}>
            {v.miniBars.map((b, i) => (
              <div key={i} style={css('flex:1;border-radius:2px;background:var(--color-accent-400);height:' + b.h + 'px;animation:wv ' + b.dur + ' ease-in-out ' + b.delay + ' infinite')}></div>
            ))}
          </div>
          <div style={css('margin-top:10px;font-size:11.5px;line-height:1.45;color:var(--color-neutral-300);min-height:32px')}>{v.liveLine}</div>
          <div style={css('margin-top:10px;display:flex;gap:8px')}>
            <div onClick={v.toggleMute} style={css('width:44px;height:40px;border-radius:11px;border:1px solid ' + v.muteBorder + ';background:' + v.muteBg + ';display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className={'ph ' + v.muteIcon} style={css('font-size:16px;color:' + v.muteFg)}></i></div>
            <div onClick={v.endSession} style={css('flex:1;height:40px;border-radius:11px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:7px;font-size:13px;color:var(--color-accent-100);cursor:pointer')}><i className="ph ph-sparkle" style={css('font-size:15px')}></i>End &amp; make sense</div>
          </div>
        </div>
      )}

      {v.listenIdle && (
        <div onClick={v.startSession} className="hv-bd-accent" style={css('margin-top:10px;padding:13px 14px;border-radius:15px;border:1px dashed var(--color-neutral-700);display:flex;align-items:center;gap:12px;cursor:pointer')}>
          <div style={css('width:38px;height:38px;border-radius:50%;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;flex:none')}><i className="ph ph-waveform" style={css('font-size:18px;color:var(--color-accent-200)')}></i></div>
          <div style={css('flex:1')}>
            <div style={css('font-size:13px;font-weight:500')}>Nothing is being recorded</div>
            <div style={css('margin-top:3px;font-size:11px;color:var(--color-neutral-500)')}>Tap here, or press the pendant twice</div>
          </div>
          <i className="ph ph-caret-right" style={css('font-size:14px;color:var(--color-neutral-700)')}></i>
        </div>
      )}

      <div style={css('margin-top:22px;display:flex;align-items:flex-end;justify-content:space-between')}>
        <div>
          <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>{t.dateLine}</div>
          <div style={css('margin-top:5px;font-size:22px;font-weight:500;line-height:1.2')}>Your sessions</div>
        </div>
        <div onClick={v.goToday} className="hv-bd-a600" style={css('padding:6px 11px;border-radius:20px;border:1px solid var(--color-neutral-800);font-size:11px;color:var(--color-neutral-300);cursor:pointer;flex:none;margin-bottom:2px')}>Day view</div>
      </div>
      <div style={css('margin-top:7px;font-size:12px;color:var(--color-neutral-500)')}>{v.homeMeta}</div>

      <div style={css('margin-top:14px;display:flex;flex-direction:column;gap:10px')}>
        {v.sessionCards.map((s, i) => (
          <div key={i} onClick={s.go} className="hv-bd-a700" style={css('padding:15px;border-radius:16px;background:var(--color-surface);border:1px solid var(--color-divider);box-shadow:var(--shadow-sm);cursor:pointer')}>
            <div style={css('display:flex;align-items:center;gap:8px')}>
              <div style={css('font-family:ui-monospace,Menlo,monospace;font-size:11.5px;color:var(--color-accent-300)')}>{s.time}</div>
              <div style={css('width:3px;height:3px;border-radius:50%;background:var(--color-neutral-700)')}></div>
              <div style={css('font-size:11px;color:var(--color-neutral-500)')}>{s.dur}</div>
              <div style={css('flex:1')}></div>
              {s.langs.map((lg, li) => (
                <div key={li} style={css('padding:3px 7px;border-radius:5px;background:var(--color-neutral-900);border:1px solid var(--color-divider);font-size:9.5px;color:var(--color-neutral-400)')}>{lg}</div>
              ))}
            </div>
            <div style={css('margin-top:9px;font-size:16.5px;font-weight:500;line-height:1.3;text-wrap:pretty')}>{s.title}</div>
            <div style={css('margin-top:7px;font-size:12.5px;line-height:1.55;color:var(--color-neutral-400);text-wrap:pretty')}>{s.lead}</div>
            <div style={css('margin-top:12px;padding-top:11px;border-top:1px solid var(--color-divider);display:flex;align-items:center;gap:9px')}>
              <div style={css('display:flex;align-items:center;gap:5px;font-size:10.5px;color:' + s.taskFg)}><i className="ph ph-check-square" style={css('font-size:13px')}></i>{s.taskLabel}</div>
              <div style={css('display:flex;align-items:center;gap:5px;font-size:10.5px;color:var(--color-neutral-500)')}><i className="ph ph-users-three" style={css('font-size:13px')}></i>{s.voices}</div>
              <div style={css('flex:1')}></div>
              <div onClick={(e) => { e.stopPropagation(); s.share(); }} className="hv-bg-a900" style={css('width:30px;height:30px;border-radius:9px;border:1px solid var(--color-accent-700);display:flex;align-items:center;justify-content:center;flex:none')}><i className="ph ph-whatsapp-logo" style={css('font-size:15px;color:var(--color-accent-200)')}></i></div>
              <i className="ph ph-caret-right" style={css('font-size:14px;color:var(--color-neutral-700)')}></i>
            </div>
          </div>
        ))}
      </div>

      <div style={css('margin-top:14px;text-align:center;font-size:11px;color:var(--color-neutral-600)')}>Older sessions are in Ask — search them like you would search a conversation.</div>
    </div>
  );
}

export function SessionDetail({ v }) {
  if (!v.sc.sessionDetail) return null;
  return (
    <div style={css('padding:58px 16px 40px')}>
      <div style={css('display:flex;align-items:center;gap:10px')}>
        <div onClick={v.goHome} className="hv-bd-n600" style={css('width:34px;height:34px;border-radius:11px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-left" style={css('font-size:15px;color:var(--color-neutral-300)')}></i></div>
        <div style={css('flex:1;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>{v.dKind} · {v.dAgo}</div>
        <div onClick={v.openShare} className="hv-bg-a900" style={css('height:34px;padding:0 12px;border-radius:11px;border:1px solid var(--color-accent);display:flex;align-items:center;gap:7px;cursor:pointer;flex:none')}><i className="ph ph-share-network" style={css('font-size:15px;color:var(--color-accent-200)')}></i><span style={css('font-size:12px;color:var(--color-accent-200)')}>Share</span></div>
      </div>

      <div style={css('margin-top:16px;font-size:25px;font-weight:500;line-height:1.22;text-wrap:pretty')}>{v.dTitle}</div>
      <div style={css('margin-top:10px;display:flex;gap:7px;flex-wrap:wrap')}>
        <div style={css('padding:4px 9px;border-radius:6px;background:var(--color-neutral-900);border:1px solid var(--color-divider);font-size:10.5px;font-family:ui-monospace,Menlo,monospace;color:var(--color-neutral-300)')}>{v.dTime}</div>
        <div style={css('padding:4px 9px;border-radius:6px;background:var(--color-neutral-900);border:1px solid var(--color-divider);font-size:10.5px;color:var(--color-neutral-400)')}>{v.dDur}</div>
        {v.dLangs.map((lg, i) => (
          <div key={i} style={css('padding:4px 9px;border-radius:6px;background:var(--color-accent-900);border:1px solid var(--color-accent-800);font-size:10.5px;color:var(--color-accent-200)')}>{lg}</div>
        ))}
        <div style={css('padding:4px 9px;border-radius:6px;background:var(--color-neutral-900);border:1px solid var(--color-divider);font-size:10.5px;color:var(--color-neutral-400)')}>{v.dVoices}</div>
      </div>

      <div style={css('margin-top:16px;display:flex;gap:4px;padding:3px;border-radius:11px;background:var(--color-neutral-900);border:1px solid var(--color-divider)')}>
        {v.dTabs.map((tb, i) => (
          <div key={i} onClick={tb.go} style={css('flex:1;text-align:center;padding:8px 0;border-radius:9px;font-size:11.5px;cursor:pointer;background:' + tb.bg + ';color:' + tb.fg)}>{tb.label}</div>
        ))}
      </div>

      {v.dIsSummary && (
        <>
          <div style={css('margin-top:14px;padding:17px;border-radius:16px;background:linear-gradient(165deg,var(--om-card2),var(--color-surface));border:1px solid var(--color-accent-800)')}>
            <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>In one line</div>
            <div style={css('margin-top:10px;font-size:17px;line-height:1.5;color:var(--color-accent-100);text-wrap:pretty')}>{v.dLead}</div>
          </div>

          <div style={css('margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:9px')}>
            {v.dNumbers.map((n, i) => (
              <div key={i} style={css('padding:14px;border-radius:13px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
                <div style={css('font-size:21px;font-weight:500;letter-spacing:-.01em')}>{n.v}</div>
                <div style={css('margin-top:4px;font-size:10.5px;line-height:1.4;color:var(--color-neutral-500)')}>{n.l}</div>
              </div>
            ))}
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>What happened</div>
            <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:11px')}>
              {v.dSummary.map((s, i) => (
                <div key={i} style={css('display:flex;gap:10px;font-size:13.5px;line-height:1.55;color:var(--color-neutral-200);text-wrap:pretty')}><div style={css('width:2px;flex:none;border-radius:2px;background:var(--color-accent-600)')}></div><span>{s}</span></div>
              ))}
            </div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-neutral-600)')}>Decisions</div>
            <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:2px')}>
              {v.dDecisions.map((d, i) => (
                <div key={i} style={css('display:flex;gap:11px;align-items:flex-start;padding:10px 0;border-top:1px solid var(--color-divider)')}>
                  <i className="ph ph-gavel" style={css('font-size:16px;color:var(--color-accent-400);margin-top:2px')}></i>
                  <div style={css('flex:1')}>
                    <div style={css('font-size:13px;line-height:1.45')}>{d.text}</div>
                    <div style={css('margin-top:4px;font-size:10.5px;color:var(--color-neutral-600)')}>{d.by}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-accent-900);border:1px solid var(--color-accent-800)')}>
            <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent-300)')}>Worth watching</div>
            <div style={css('margin-top:9px;font-size:13.5px;line-height:1.6;color:var(--color-accent-100);text-wrap:pretty')}>{v.dRisk}</div>
          </div>
        </>
      )}

      {v.dIsAnalysis && (
        <>
          <div style={css('margin-top:14px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:12.5px;font-weight:500')}>What the time went on</div>
            <div style={css('margin-top:13px;display:flex;flex-direction:column;gap:10px')}>
              {v.dTopics.map((tp, i) => (
                <div key={i}>
                  <div style={css('display:flex;align-items:baseline;justify-content:space-between')}>
                    <div style={css('font-size:12px;color:var(--color-neutral-300)')}>{tp.name}</div>
                    <div style={css('font-size:10.5px;font-family:ui-monospace,monospace;color:var(--color-neutral-500)')}>{tp.n}</div>
                  </div>
                  <div style={css('margin-top:6px;height:6px;border-radius:3px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + tp.pct + ';background:var(--color-accent-500)')}></div></div>
                </div>
              ))}
            </div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:12.5px;font-weight:500')}>Who spoke</div>
            <div style={css('margin-top:13px;display:flex;flex-direction:column;gap:11px')}>
              {v.dTalk.map((tk, i) => (
                <div key={i} style={css('display:flex;align-items:center;gap:10px')}>
                  <div style={css('width:82px;flex:none')}>
                    <div style={css('font-size:12px;color:var(--color-neutral-200)')}>{tk.who}</div>
                    <div style={css('margin-top:2px;font-size:9.5px;color:var(--color-neutral-600)')}>{tk.tag}</div>
                  </div>
                  <div style={css('flex:1;height:6px;border-radius:3px;background:var(--color-neutral-900);overflow:hidden')}><div style={css('height:100%;width:' + tk.pct + ';background:' + tk.bg)}></div></div>
                  <div style={css('width:32px;text-align:right;font-size:10.5px;font-family:ui-monospace,monospace;color:var(--color-neutral-500)')}>{tk.pct}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={css('margin-top:10px;padding:16px;border-radius:15px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <div style={css('font-size:12.5px;font-weight:500')}>Key moments</div>
            <div style={css('margin-top:12px')}>
              {v.dMoments.map((m, i) => (
                <div key={i} style={css('display:flex;gap:12px')}>
                  <div style={css('width:38px;flex:none;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;color:var(--color-accent-300);padding-top:3px')}>{m.t}</div>
                  <div style={css('width:9px;flex:none;display:flex;flex-direction:column;align-items:center')}>
                    <div style={css('width:6px;height:6px;border-radius:50%;background:var(--color-accent-500);margin-top:5px;flex:none')}></div>
                    <div style={css('flex:1;width:1px;background:linear-gradient(to bottom,var(--color-neutral-800),transparent)')}></div>
                  </div>
                  <div style={css('flex:1;padding-bottom:15px')}>
                    <div style={css('font-size:12.5px;font-weight:500')}>{m.label}</div>
                    <div style={css('margin-top:4px;font-size:12px;line-height:1.5;color:var(--color-neutral-500);font-style:italic')}>“{m.quote}”</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {v.dIsTranscript && (
        <>
          <div style={css('margin-top:14px;display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:12px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
            <i className="ph ph-cpu" style={css('font-size:15px;color:var(--color-accent-400)')}></i>
            <div style={css('flex:1;font-size:11px;line-height:1.45;color:var(--color-neutral-400)')}>Transcribed on this phone. Raw audio was discarded — this text is all that remains.</div>
          </div>
          <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:1px')}>
            {v.dTranscript.map((ln, i) => (
              <div key={i} style={css('padding:12px 0;border-top:1px solid var(--color-divider);display:flex;gap:12px')}>
                <div style={css('width:38px;flex:none;font-family:ui-monospace,Menlo,monospace;font-size:10.5px;color:var(--color-neutral-600);padding-top:2px')}>{ln.t}</div>
                <div style={css('flex:1')}>
                  <div style={css('display:flex;align-items:center;gap:7px')}>
                    <div style={css('font-size:11.5px;font-weight:500;color:' + ln.whoFg)}>{ln.who}</div>
                    <div style={css('padding:2px 6px;border-radius:4px;background:var(--color-neutral-900);font-size:9px;color:var(--color-neutral-500)')}>{ln.lang}</div>
                  </div>
                  <div style={css('margin-top:5px;font-size:13.5px;line-height:1.6;color:var(--color-neutral-200);text-wrap:pretty')}>{ln.text}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {v.dIsActions && (
        <>
          <div style={css('margin-top:14px;display:flex;flex-direction:column;gap:9px')}>
            {v.dTasks.map((k, i) => (
              <div key={i} style={css('padding:14px;border-radius:14px;background:var(--color-surface);border:1px solid var(--color-divider)')}>
                <div style={css('display:flex;gap:11px;align-items:flex-start')}>
                  <div onClick={k.toggle} style={css('cursor:pointer;flex:none;padding-top:1px')}><i className={'ph ' + k.icon} style={css('font-size:18px;color:' + k.iconFg)}></i></div>
                  <div style={css('flex:1')}>
                    <div style={css('font-size:13.5px;line-height:1.4;color:' + k.fg + ';text-decoration:' + k.deco)}>{k.text}</div>
                    <div style={css('margin-top:6px;display:flex;gap:7px;flex-wrap:wrap')}>
                      <div style={css('padding:3px 8px;border-radius:6px;background:var(--color-neutral-900);font-size:10px;color:var(--color-neutral-400)')}>{k.owner}</div>
                      <div style={css('padding:3px 8px;border-radius:6px;background:' + k.dueBg + ';font-size:10px;color:' + k.dueFg)}>{k.due}</div>
                    </div>
                  </div>
                </div>
                <div onClick={v.goCalDraft} className="hv-bg-a900" style={css('margin-top:11px;padding:9px 0;border-radius:9px;border:1px solid var(--color-accent-700);text-align:center;font-size:11.5px;color:var(--color-accent-200);cursor:pointer')}><i className="ph ph-calendar-plus" style={css('margin-right:6px')}></i>Put it in the calendar</div>
              </div>
            ))}
          </div>
          <div onClick={v.goPlanner} className="hv-bd-n600" style={css('margin-top:12px;height:46px;border-radius:13px;border:1px solid var(--color-neutral-800);display:flex;align-items:center;justify-content:center;font-size:13px;color:var(--color-neutral-300);cursor:pointer')}>See all open tasks in Plan</div>
        </>
      )}

      {v.shareOpen && (
        <>
          <div onClick={v.closeShare} style={css('position:absolute;inset:0;background:rgba(10,11,20,.72);backdrop-filter:blur(3px);z-index:70')}></div>
          <div style={css('position:absolute;left:0;right:0;bottom:0;z-index:71;padding:18px 16px 42px;border-radius:24px 24px 0 0;background:var(--color-surface);border-top:1px solid var(--color-accent-800);box-shadow:var(--shadow-lg);animation:fadeUp .28s ease both')}>
            <div style={css('width:38px;height:4px;border-radius:2px;background:var(--color-neutral-700);margin:0 auto 16px')}></div>
            <div style={css('font-size:17px;font-weight:500')}>Share this session</div>
            <div style={css('margin-top:6px;font-size:11.5px;line-height:1.5;color:var(--color-neutral-500)')}>The summary and actions travel as text. The transcript and audio stay with you unless you tick them.</div>

            <div style={css('margin-top:14px;padding:13px;border-radius:12px;background:var(--color-bg);border:1px solid var(--color-divider);font-size:11.5px;line-height:1.65;color:var(--color-neutral-300);white-space:pre-line;font-family:ui-monospace,Menlo,monospace')}>{v.waPreview}</div>

            <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:2px')}>
              {v.shareIncludes.map((inc, i) => (
                <div key={i} onClick={inc.toggle} style={css('display:flex;align-items:center;gap:10px;padding:9px 0;border-top:1px solid var(--color-divider);cursor:pointer')}>
                  <i className={'ph ' + inc.icon} style={css('font-size:16px;color:' + inc.iconFg)}></i>
                  <div style={css('flex:1;font-size:12.5px;color:' + inc.fg)}>{inc.label}</div>
                </div>
              ))}
            </div>

            <div onClick={v.closeShare} className="hv-bg-a900" style={css('margin-top:14px;height:52px;border-radius:14px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;gap:9px;font-size:15px;color:var(--color-accent-100);cursor:pointer')}><i className="ph ph-whatsapp-logo" style={css('font-size:19px')}></i>Send on WhatsApp</div>
            <div style={css('margin-top:9px;display:flex;gap:8px')}>
              {v.shareAlts.map((a, i) => (
                <div key={i} onClick={v.closeShare} className="hv-bd-n600" style={css('flex:1;height:46px;border-radius:12px;border:1px solid var(--color-neutral-800);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;cursor:pointer')}>
                  <i className={'ph ' + a.icon} style={css('font-size:16px;color:var(--color-neutral-300)')}></i>
                  <div style={css('font-size:10px;color:var(--color-neutral-400)')}>{a.label}</div>
                </div>
              ))}
            </div>
            <div style={css('margin-top:12px;font-size:10.5px;line-height:1.5;color:var(--color-neutral-600)')}>Anyone not enrolled stays “another voice” in the shared copy — names are never invented.</div>
          </div>
        </>
      )}
    </div>
  );
}
