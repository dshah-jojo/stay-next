'use client';

// The prototype canvas: navigation rail · iOS device frame · live switches.
// Markup transcribed from the design source (STAY App.dc.html template).
import React from 'react';
import { css } from '@/lib/css';
import { IOSDevice } from '@/components/ios-frame';
import {
  Welcome, Language, Consent, Profile, About, Care, Tour, Ready,
} from '@/components/screens/onboarding';
import { Idle, Listening, Synth, Session } from '@/components/screens/hero';
import { Home, SessionDetail } from '@/components/screens/home';
import { Today, Ask, Planner, Reflect, Guide, LifePath, Privacy } from '@/components/screens/core';
import { CosmosBirth, Cosmos, Tarot } from '@/components/screens/cosmos';
import {
  Goals, Persona, Voice1, Voice2, Enroll, Outcome, Pair, PairPin, Devices, Control, Device,
} from '@/components/screens/setup';
import {
  QuestNew, Review, Journal, Affirm, Bucket, Reminders, CalConsent, CalDraft,
} from '@/components/screens/rituals';
import { TravelHome, TravelSpeak, TravelTable } from '@/components/screens/travel';

function Rail({ v }) {
  return (
    <div style={css('width:250px;flex:none;display:flex;flex-direction:column;gap:22px;position:sticky;top:40px')}>
      <div>
        <div style={css('display:flex;align-items:center;gap:9px')}>
          <div style={css('width:26px;height:26px;border-radius:9px;border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center')}><div style={css('width:8px;height:8px;border-radius:50%;background:var(--color-accent);box-shadow:0 0 10px var(--color-accent)')}></div></div>
          <div style={css('font-size:19px;font-weight:600;letter-spacing:.22em')}>STAY</div>
        </div>
        <div style={css('margin-top:8px;font-size:12.5px;line-height:1.5;color:var(--color-neutral-400)')}>Apni Dhun Mein Raho — vernacular AI life companion. Core prototype, 16 screens.</div>
      </div>

      <div style={css('display:flex;flex-direction:column;gap:14px')}>
        {v.railGroups.map((g, gi) => (
          <div key={gi}>
            <div style={css('font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600);margin-bottom:6px')}>{g.name}</div>
            <div style={css('display:flex;flex-direction:column;gap:2px')}>
              {g.items.map((it, ii) => (
                <div key={ii} onClick={it.go} className="hv-bg-n900" style={css('display:flex;align-items:center;gap:8px;padding:6px 9px;border-radius:8px;cursor:pointer;font-size:12.5px;color:' + it.fg + ';background:' + it.bg + ';border-left:2px solid ' + it.mark)}>
                  <i className={'ph ' + it.icon} style={css('font-size:14px;opacity:.8')}></i><span>{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RightPanel({ v }) {
  return (
    <div style={css('width:290px;flex:none;display:flex;flex-direction:column;gap:16px;position:sticky;top:40px')}>
      <div style={css('padding:16px;border-radius:12px;background:#181a2a;border:1px solid var(--color-divider)')}>
        <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Live switches</div>
        <div style={css('margin-top:13px;display:flex;flex-direction:column;gap:13px')}>
          {v.switchers.map((s, si) => (
            <div key={si}>
              <div style={css('font-size:11px;color:var(--color-neutral-400);margin-bottom:6px')}>{s.name}</div>
              <div style={css('display:flex;gap:4px;padding:3px;border-radius:9px;background:var(--color-neutral-900);border:1px solid var(--color-divider)')}>
                {s.opts.map((o, oi) => (
                  <div key={oi} onClick={o.go} style={css('flex:1;text-align:center;padding:6px 2px;border-radius:7px;font-size:11px;cursor:pointer;background:' + o.bg + ';color:' + o.fg)}>{o.label}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={css('padding:16px;border-radius:12px;background:#181a2a;border:1px solid var(--color-divider)')}>
        <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Try this</div>
        <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:9px;font-size:12px;line-height:1.5;color:var(--color-neutral-400)')}>
          <div>1 · Home is the session feed: device battery, Speak-mode toggle, a live mini-listening window, then every session. Open one → Summary / Analysis / Transcript / Actions, and Share → WhatsApp with a real message preview.</div>
          <div>2 · Tap the waveform button — watch the <span style={css('color:var(--color-accent-300)')}>listen → synthesize → sense</span> hero moment end to end.</div>
          <div>2 · In Ask, type “vendor”, “Ba”, “investor” or “promise” — answers come back cited to the moment they came from.</div>
          <div>3 · Start at Welcome and go straight through: language → consent → your name → your days → one lighter thing → the five-step tutorial → “ready when you are”. Type a name and it follows you through.</div>
          <div>4 · Walkthrough: pick goals, choose who&apos;s wearing it, then <span style={css('color:var(--color-accent-300)')}>record three voice samples</span> and watch accuracy climb.</div>
          <div>4 · PIN pairing advances step by step; My devices switches the active pendant.</div>
          <div>5 · Create a quest → it lands in Plan. Daily review → journal follow-up → bucket list.</div>
          <div>6 · Connect Google Calendar, then confirm an event: attendees, owner, time, and it writes.</div>
          <div>7 · Traveller: pick a target language, tap the mic, then <span style={css('color:var(--color-accent-300)')}>“they answered”</span> to hear it come back. Table talk splits the screen both ways.</div>
        </div>
      </div>

      <div style={css('padding:16px;border-radius:12px;background:#181a2a;border:1px solid var(--color-divider)')}>
        <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--color-neutral-600)')}>Design notes</div>
        <div style={css('margin-top:11px;display:flex;flex-direction:column;gap:9px;font-size:12px;line-height:1.5;color:var(--color-neutral-400)')}>
          <div><span style={css('color:var(--color-neutral-200)')}>Screen-free device, quiet app.</span> Nocturne&apos;s dark ground with the accent used only as a line, a dot and a glow — the record light is the one warm colour in the system, so “on air” never reads as decoration.</div>
          <div><span style={css('color:var(--color-neutral-200)')}>Every claim is sourced.</span> Answers, tasks and even the Cosmos read carry the moment they came from — the credibility difference between knowing your life and guessing.</div>
          <div><span style={css('color:var(--color-neutral-200)')}>Vernacular stays visible.</span> UI localises; transcripts stay code-mixed as spoken (Hinglish, Gujarati), because that is the product truth.</div>
          <div><span style={css('color:var(--color-neutral-200)')}>Open questions.</span> Content copy is placeholder-grade; real transcript samples, a device photograph for pairing, and pricing/consent wording from counsel would land the next pass.</div>
        </div>
      </div>
    </div>
  );
}

function ListenFab({ v }) {
  if (!v.showListenFab) return null;
  return (
    <div onClick={v.startSession} style={css('position:absolute;right:20px;bottom:112px;width:58px;height:58px;border-radius:50%;background:linear-gradient(160deg,var(--om-fab1),var(--om-fab2));border:1px solid var(--color-accent);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:45;box-shadow:0 10px 30px rgba(0,0,0,.55),0 0 22px rgba(145,132,217,.25)')}>
      <i className="ph ph-waveform" style={css('font-size:25px;color:var(--color-accent-200)')}></i>
    </div>
  );
}

function TabBar({ v }) {
  if (!v.showTabs) return null;
  return (
    <div style={css('position:absolute;left:12px;right:12px;bottom:38px;height:60px;border-radius:20px;background:rgba(35,37,50,.9);backdrop-filter:blur(16px);border:1px solid var(--color-divider);display:flex;align-items:center;justify-content:space-around;z-index:40;box-shadow:0 -2px 24px rgba(0,0,0,.4)')}>
      {v.tabs.map((tb, i) => (
        <div key={i} onClick={tb.go} style={css('width:60px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;color:' + tb.fg)}>
          <i className={'ph ' + tb.icon} style={css('font-size:20px')}></i>
          <div style={css('font-size:9.5px;letter-spacing:.02em')}>{tb.label}</div>
        </div>
      ))}
    </div>
  );
}

function PhoneContent({ v }) {
  const th = v.th;
  const themeVars = {
    position: 'absolute', inset: 0, overflow: 'hidden',
    background: 'var(--color-bg)', color: 'var(--color-text)',
    '--color-bg': th.bg, '--color-surface': th.surface, '--color-text': th.text,
    '--color-divider': th.divider, '--color-accent': th.accent,
    '--color-accent-100': th.a100, '--color-accent-200': th.a200, '--color-accent-300': th.a300,
    '--color-accent-400': th.a400, '--color-accent-500': th.a500, '--color-accent-600': th.a600,
    '--color-accent-700': th.a700, '--color-accent-800': th.a800, '--color-accent-900': th.a900,
    '--color-neutral-200': th.n200, '--color-neutral-300': th.n300, '--color-neutral-400': th.n400,
    '--color-neutral-500': th.n500, '--color-neutral-600': th.n600, '--color-neutral-700': th.n700,
    '--color-neutral-800': th.n800, '--color-neutral-900': th.n900,
    '--shadow-sm': th.shSm, '--shadow-md': th.shMd, '--shadow-lg': th.shLg,
    '--om-hero': th.hero, '--om-hero2': th.hero2, '--om-card2': th.card2,
    '--om-fab1': th.fab1, '--om-fab2': th.fab2,
  };
  return (
    <div style={themeVars}>
      <div style={css('position:absolute;inset:0;overflow-y:auto;overflow-x:hidden;padding-bottom:120px')}>
        <Welcome v={v} />
        <Language v={v} />
        <Consent v={v} />
        <Pair v={v} />
        <Device v={v} />
        <Idle v={v} />
        <Listening v={v} />
        <Synth v={v} />
        <Session v={v} />
        <Home v={v} />
        <SessionDetail v={v} />
        <Today v={v} />
        <Ask v={v} />
        <Planner v={v} />
        <Reflect v={v} />
        <Guide v={v} />
        <LifePath v={v} />
        <Privacy v={v} />
        <CosmosBirth v={v} />
        <Cosmos v={v} />
        <Tarot v={v} />
        <Profile v={v} />
        <About v={v} />
        <Care v={v} />
        <Tour v={v} />
        <Ready v={v} />
        <Goals v={v} />
        <Persona v={v} />
        <Voice1 v={v} />
        <Voice2 v={v} />
        <Enroll v={v} />
        <Outcome v={v} />
        <Devices v={v} />
        <PairPin v={v} />
        <Control v={v} />
        <QuestNew v={v} />
        <Review v={v} />
        <Bucket v={v} />
        <Reminders v={v} />
        <CalConsent v={v} />
        <CalDraft v={v} />
        <TravelHome v={v} />
        <TravelSpeak v={v} />
        <TravelTable v={v} />
        <Journal v={v} />
        <Affirm v={v} />
      </div>
      <ListenFab v={v} />
      <TabBar v={v} />
    </div>
  );
}

export function StayCanvas({ v }) {
  return (
    <div style={css('min-height:100vh;padding:40px 44px 64px;display:flex;gap:34px;align-items:flex-start;justify-content:center')}>
      <Rail v={v} />
      <div style={css('flex:none')}>
        <IOSDevice dark={v.isDark}>
          <PhoneContent v={v} />
        </IOSDevice>
      </div>
      <RightPanel v={v} />
    </div>
  );
}
