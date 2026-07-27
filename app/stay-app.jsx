'use client';

// STAY prototype logic — ported verbatim from the design source's
// data-dc-script Component (DCLogic → React.Component; same setState API).
import React from 'react';
import {
  DICT, TONE, ANSWERS, LANGS, SOURCE, TRANSLATE, SESSIONS, GUIDE_SCRIPT,
  SANKALPA, JOURNAL_QS, WEB_STRANDS, THEMES, TAROT, PERSONAS,
} from '@/lib/data';
import { StayCanvas } from '@/components/canvas';

const SCREENS = ['welcome', 'language', 'consent', 'profile', 'about', 'care', 'tour', 'ready', 'goals', 'persona', 'voice1', 'voice2', 'enroll', 'outcome', 'pair', 'pairPin', 'devices', 'control', 'device', 'idle', 'listening', 'synth', 'session', 'home', 'sessionDetail', 'today', 'ask', 'planner', 'reflect', 'guide', 'lifePath', 'cosmosBirth', 'tarot', 'questNew', 'affirm', 'review', 'journal', 'bucket', 'reminders', 'calConsent', 'calDraft', 'travelHome', 'travelSpeak', 'travelTable', 'privacy', 'cosmos'];

export default class StayApp extends React.Component {
  state = {
    screen: SCREENS.includes(this.props.initialScreen) ? this.props.initialScreen : 'home',
    openSession: 's1', dTab: 'summary', shareOpen: false, speakMode: true,
    shareInc: { i1: true, i2: true, i3: false },
    langS: null, toneS: null, metaS: null, askS: null,
    done: { t2: true }, muted: false, elapsed: 0, syn: 0, thread: [], q: '',
    consent: { c1: true, c2: true, c3: false, c4: false },
    priv: { p1: true, p2: false, p3: true, p4: false },
    light: false,
    guideVoice: true, gStep: 0, gThread: [{ isGuide: true, text: GUIDE_SCRIPT[0].text }], gSpeaking: true, gDismissed: false, gEnded: false, guideInput: '',
    lpTen: 35, lpMoney: 'building', lpAcc: 'myself', lpIntent: { i1: true, i3: true }, lpAge: '30s', lpDone: false, lpStuck: '',
    birthDate: '14 · 03 · 1994', birthTime: '04:22', birthPlace: 'Ahmedabad, Gujarat', unknownTime: false,
    csTab: 'all', varga: 'd1', tarotMode: 'daily', tarotQ: '', tarotFlipped: {}, pick: null, revealed: false, shuffling: false,
    qIndex: 0, journalPage: 0, turning: false, jsRec: false, webSel: 'w1',
    playing: false, affLine: 0, ambient: true, sound: 'both', affVoice: 'guide', pace: 'calm',
    affirmations: [
      { text: 'I finish what I already understand.', source: 'Journal · Tuesday, after the vendor call', pinned: true },
      { text: 'Being wrong is information, not identity.', source: 'Guide session · Wednesday', pinned: true },
      { text: 'I am reachable for the people at home.', source: 'Journal · family strand', pinned: false }
    ],
    profileName: '', profileCity: '', profileDob: '',
    plate: { p2: true }, drains: { d1: true }, bestTime: 'early',
    people: ['Ba'], personInput: '', careText: '', tourStep: 0,
    goals: { g1: true, g2: true, g3: false, g4: false, g5: false, g6: false },
    persona: 'founder', samples: 0, sampling: false,
    names: ['Chirag bhai', 'Ba', 'Meera', 'JOJO', 'Sterling Hospital'], nameInput: '',
    enroll: { e1: 'consented', e2: 'invited', e3: 'none' },
    activeDevice: 'd1', pairStep: 0, model: 'one',
    trigger: 'either', ctrl: { k1: true, k2: true, k3: false, k4: true },
    questTitle: '', questWhy: '', cadence: 'weekly', horizon: '90',
    qhelp: { h1: true, h2: true, h3: false }, extraQuests: [],
    moved: { m1: true, m2: true, m3: false }, reviewTomorrow: '', reviewSaved: false, checkins: {},
    journalInput: '', journal: [
      { time: '21:12', quest: 'Ship Core to 50 testers', text: 'The quote came in under target and I still did not decide. That is the pattern, not the price.', note: 'Matched to the vendor decision you have moved three times.', hasNote: true },
      { time: 'Yesterday', quest: 'Be off the phone by 23:00', text: 'Wrote the pricing copy at 1 a.m. again. Good copy, wrong hour.', note: '', hasNote: false }
    ],
    bucketWeekly: { b1: true, b2: true, b3: false, b4: true },
    calConnected: false, calCreated: false,
    att: { a1: true, a2: false, a3: true }, evDate: 'thu', evTime: '11:30', evDur: '30', evReminder: true,
    travelFrom: 'gu', travelTo: 'ja', speakPhase: 'idle', turn: 0
  };

  toggleGuideVoice = () => this.setState(s => ({ guideVoice: !s.guideVoice }));
  guideSay = (userText) => {
    const step = this.state.gStep;
    const script = GUIDE_SCRIPT[step] || GUIDE_SCRIPT[GUIDE_SCRIPT.length - 1];
    const next = GUIDE_SCRIPT[step + 1];
    this.setState(s => ({
      gThread: s.gThread.concat([{ isYou: true, text: userText }]),
      guideInput: '', gSpeaking: false
    }));
    clearTimeout(this._gt);
    this._gt = setTimeout(() => {
      this.setState(s => ({
        gStep: Math.min(GUIDE_SCRIPT.length - 1, s.gStep + 1),
        gThread: s.gThread.concat([{ isGuide: true, text: (next || script).text }]),
        gSpeaking: true
      }));
      clearTimeout(this._gt2);
      this._gt2 = setTimeout(() => this.setState({ gSpeaking: false }), 2600);
    }, 700);
  };
  setGuideInput = (e) => this.setState({ guideInput: e.target.value });
  onGuideKey = (e) => { if (e.key === 'Enter' && this.state.guideInput.trim()) this.guideSay(this.state.guideInput.trim()); };
  guideMic = () => {
    const step = GUIDE_SCRIPT[this.state.gStep];
    const first = (step && step.replies && step.replies[0]) || 'I am not sure yet.';
    this.guideSay(first);
  };
  guideDismiss = () => this.setState({ gDismissed: true });
  guideRestart = () => this.setState({ gStep: 0, gThread: [{ isGuide: true, text: GUIDE_SCRIPT[0].text }], gDismissed: false, gSpeaking: true, gEnded: false });
  guideEnd = () => this.setState(s => ({
    gEnded: true,
    journal: [{ time: 'Just now', quest: 'The Guide', text: 'Talked it through. The fear is not the price, it is being the one who chose.', note: 'Saved from your Guide session, with the question you were asked.', hasNote: true }].concat(s.journal)
  }));
  setLp = (k, v) => () => this.setState({ [k]: v });
  toggleLpIntent = (id) => () => this.setState(s => ({ lpIntent: Object.assign({}, s.lpIntent, { [id]: !s.lpIntent[id] }) }));
  lpRun = () => this.setState({ lpDone: true });
  lpEdit = () => this.setState({ lpDone: false });
  setBirth = (k) => (e) => this.setState({ [k]: e.target.value });
  toggleUnknownTime = () => this.setState(s => ({ unknownTime: !s.unknownTime }));
  setCsTab = (v) => () => this.setState({ csTab: v });
  setTarotMode = (v) => () => this.setState({ tarotMode: v, tarotFlipped: {}, pick: null, revealed: false });
  shuffleDeck = () => {
    clearTimeout(this._tk);
    this.setState({ shuffling: true, pick: null, revealed: false });
    this._tk = setTimeout(() => this.setState({ shuffling: false }), 620);
  };
  pickCard = (i) => () => {
    if (this.state.shuffling) return;
    if (this.state.pick === i && !this.state.revealed) { this.revealCard(); return; }
    if (this.state.pick !== null) return;
    this.setState({ pick: i });
  };
  revealCard = () => {
    if (this.state.pick === null || this.state.revealed) return;
    this.setState({ revealed: true });
  };
  setTarotQ = (e) => this.setState({ tarotQ: e.target.value });
  onTarotKey = (e) => { if (e.key === 'Enter') this.setState({ tarotFlipped: {} }); };
  flipCard = (i) => () => this.setState(s => ({ tarotFlipped: Object.assign({}, s.tarotFlipped, { [i]: true }) }));
  tarotReset = () => {
    if (this.state.tarotMode === 'daily') { this.shuffleDeck(); return; }
    this.setState({ tarotFlipped: {} });
  };
  tarotSave = () => this.setState(s => ({
    journal: [{ time: 'Just now', quest: 'Cosmos', text: 'Drew Two of Swords reversed. I already know the answer; I am negotiating with the discomfort.', note: 'Saved from a tarot draw. Tied to the vendor decision.', hasNote: true }].concat(s.journal)
  }));
  toggleTheme = () => this.setState(s => ({ light: !s.light }));
  togglePlay = () => {
    if (this.state.playing) { clearInterval(this._af); this.setState({ playing: false }); return; }
    this.setState({ playing: true });
    clearInterval(this._af);
    this._af = setInterval(() => this.setState(s => {
      const n = s.affLine + 1;
      if (n >= SANKALPA.length) { clearInterval(this._af); return { playing: false, affLine: 0 }; }
      return { affLine: n };
    }), this.state.pace === 'slow' ? 4200 : (this.state.pace === 'quick' ? 2200 : 3200));
  };
  affirmRestart = () => { clearInterval(this._af); this.setState({ affLine: 0, playing: false }); };
  toggleAmbient = () => this.setState(s => ({ ambient: !s.ambient }));
  setSound = (v) => () => this.setState({ sound: v, ambient: v !== 'silence' });
  setVoice = (v) => () => this.setState({ affVoice: v });
  setPace = (v) => () => { clearInterval(this._af); this.setState({ pace: v, playing: false }); };
  addAffirmation = () => this.setState(s => {
    const src = (s.journalInput || '').trim() || JOURNAL_QS[s.qIndex].spoken;
    const line = src.split('.')[0].trim();
    return {
      affirmations: [{ text: line.charAt(0).toUpperCase() + line.slice(1) + '.', source: 'Tonight’s journal · ' + JOURNAL_QS[s.qIndex].q.slice(0, 34) + '…', pinned: true }].concat(s.affirmations),
      screen: 'affirm'
    };
  });
  togglePin = (i) => () => this.setState(s => ({
    affirmations: s.affirmations.map((a, j) => (j === i ? Object.assign({}, a, { pinned: !a.pinned }) : a))
  }));
  shuffleQuestion = () => this.setState(s => ({ qIndex: (s.qIndex + 1) % JOURNAL_QS.length }));
  journalSpeak = () => {
    if (this.state.jsRec) { this.setState({ jsRec: false }); return; }
    this.setState({ jsRec: true });
    clearTimeout(this._js);
    this._js = setTimeout(() => this.setState({ jsRec: false, journalInput: JOURNAL_QS[this.state.qIndex].spoken }), 2200);
  };
  turnPage = (d) => () => {
    const max = this.state.journal.length;
    const next = Math.max(0, Math.min(max, this.state.journalPage + d));
    if (next === this.state.journalPage) return;
    this.setState({ turning: true });
    clearTimeout(this._pt);
    this._pt = setTimeout(() => this.setState({ journalPage: next, turning: false }), 220);
  };
  openPage = (i) => () => this.setState({ journalPage: i + 1, turning: false });
  selectWeb = (id) => () => this.setState({ webSel: id });
  openSession = (id) => () => this.setState({ openSession: id, dTab: 'summary', screen: 'sessionDetail', shareOpen: false });
  setDTab = (v) => () => this.setState({ dTab: v });
  openShare = (id) => () => this.setState(id ? { openSession: id, shareOpen: true, screen: 'sessionDetail' } : { shareOpen: true });
  closeShare = () => this.setState({ shareOpen: false });
  toggleSpeakMode = () => this.setState(s => ({ speakMode: !s.speakMode }));
  toggleShareInc = (id) => () => this.setState(s => ({ shareInc: Object.assign({}, s.shareInc, { [id]: !s.shareInc[id] }) }));
  setProfileName = (e) => this.setState({ profileName: e.target.value });
  setProfileCity = (e) => this.setState({ profileCity: e.target.value });
  setProfileDob = (e) => this.setState({ profileDob: e.target.value });
  togglePlate = (id) => () => this.setState(s => ({ plate: Object.assign({}, s.plate, { [id]: !s.plate[id] }) }));
  toggleDrain = (id) => () => this.setState(s => ({ drains: Object.assign({}, s.drains, { [id]: !s.drains[id] }) }));
  setBestTime = (v) => () => this.setState({ bestTime: v });
  setPersonInput = (e) => this.setState({ personInput: e.target.value });
  addPerson = () => {
    const n = (this.state.personInput || '').trim();
    if (!n) return;
    this.setState(s => ({ people: (s.people || []).concat([n]), personInput: '' }));
  };
  onPersonKey = (e) => { if (e.key === 'Enter') this.addPerson(); };
  setCareText = (e) => this.setState({ careText: e.target.value });
  fillCare = (v) => () => this.setState({ careText: v });
  tourNext = () => this.setState(s => (s.tourStep >= 4 ? { screen: 'ready' } : { tourStep: s.tourStep + 1 }));
  tourBack = () => this.setState(s => (s.tourStep <= 0 ? { screen: 'care' } : { tourStep: s.tourStep - 1 }));

  toggleGoal = (id) => () => this.setState(s => ({ goals: Object.assign({}, s.goals, { [id]: !s.goals[id] }) }));
  setPersona = (id) => () => this.setState({ persona: id });
  takeSample = () => {
    if (this.state.sampling || this.state.samples >= 3) return;
    this.setState({ sampling: true });
    setTimeout(() => this.setState(s => ({ sampling: false, samples: Math.min(3, s.samples + 1) })), 1500);
  };
  setNameInput = (e) => this.setState({ nameInput: e.target.value });
  addName = () => {
    const n = this.state.nameInput.trim();
    if (!n) return;
    this.setState(s => ({ names: s.names.concat([n]), nameInput: '' }));
  };
  onNameKey = (e) => { if (e.key === 'Enter') this.addName(); };
  enrollAct = (id) => () => this.setState(s => ({ enroll: Object.assign({}, s.enroll, { [id]: s.enroll[id] === 'none' ? 'invited' : (s.enroll[id] === 'invited' ? 'consented' : 'none') }) }));
  setActiveDevice = (id) => () => this.setState({ activeDevice: id });
  setModel = (m) => () => this.setState({ model: m });
  pairAdvance = () => {
    const st = this.state.pairStep;
    if (st >= 2) this.setState({ pairStep: 0, screen: 'devices' });
    else this.setState({ pairStep: st + 1 });
  };
  setTrigger = (v) => () => this.setState({ trigger: v });
  toggleCtrl = (id) => () => this.setState(s => ({ ctrl: Object.assign({}, s.ctrl, { [id]: !s.ctrl[id] }) }));
  setQuestTitle = (e) => this.setState({ questTitle: e.target.value });
  setQuestWhy = (e) => this.setState({ questWhy: e.target.value });
  setCadence = (v) => () => this.setState({ cadence: v });
  setHorizon = (v) => () => this.setState({ horizon: v });
  toggleQhelp = (id) => () => this.setState(s => ({ qhelp: Object.assign({}, s.qhelp, { [id]: !s.qhelp[id] }) }));
  createQuest = () => {
    const title = this.state.questTitle.trim() || 'Ship the pricing page myself';
    const cad = this.state.cadence === 'daily' ? 'Daily check-in' : (this.state.cadence === 'date' ? 'By a date' : 'Weekly check-in');
    this.setState(s => ({
      extraQuests: s.extraQuests.concat([{ title: title, stat: 'New', pct: '6%', note: cad + ' · ' + s.horizon + '-day horizon · STAY will listen for it' }]),
      questTitle: '', questWhy: '', screen: 'planner'
    }));
  };
  toggleMoved = (id) => () => this.setState(s => ({ moved: Object.assign({}, s.moved, { [id]: !s.moved[id] }) }));
  setReviewTomorrow = (e) => this.setState({ reviewTomorrow: e.target.value });
  saveReview = () => this.setState({ reviewSaved: true, screen: 'journal' });
  checkin = (i, d) => () => this.setState(s => ({ checkins: Object.assign({}, s.checkins, { [i]: (s.checkins[i] || 0) + d }) }));
  setJournalInput = (e) => this.setState({ journalInput: e.target.value });
  onJournalKey = (e) => { if (e.key === 'Enter') this.addJournal(); };
  addJournal = () => {
    const txt = this.state.journalInput.trim();
    if (!txt) return;
    this.setState(s => ({
      journalInput: '',
      journal: [{ time: 'Just now', quest: 'Ship Core to 50 testers', text: txt, note: 'Filed against your open quest — it will come up in Sunday’s walk-through.', hasNote: true }].concat(s.journal)
    }));
  };
  journalYes = () => this.setState(s => ({ journal: [{ time: 'Just now', quest: 'Ship Core to 50 testers', text: 'Pricing copy: done, before midnight.', note: 'Quest moved forward. Streak intact.', hasNote: true }].concat(s.journal) }));
  journalNo = () => this.setState(s => ({ journal: [{ time: 'Just now', quest: 'Ship Core to 50 testers', text: 'Pricing copy: not done. Moved to tomorrow morning.', note: 'Third time this task has moved — want me to book an hour for it?', hasNote: true }].concat(s.journal) }));
  toggleBucket = (id) => () => this.setState(s => ({ bucketWeekly: Object.assign({}, s.bucketWeekly, { [id]: !s.bucketWeekly[id] }) }));
  toggleCal = () => this.setState(s => ({ calConnected: !s.calConnected }));
  toggleAtt = (id) => () => this.setState(s => ({ att: Object.assign({}, s.att, { [id]: !s.att[id] }) }));
  setEv = (k, v) => () => this.setState({ [k]: v });
  toggleEvReminder = () => this.setState(s => ({ evReminder: !s.evReminder }));
  createEvent = () => {
    if (!this.state.calConnected) { this.setState({ screen: 'calConsent' }); return; }
    this.setState({ calCreated: true });
  };
  swapLangs = () => this.setState(s => ({ reverse: !s.reverse, speakPhase: 'idle' }));
  setTravel = (side, v) => () => this.setState({ [side]: v, speakPhase: 'idle' });
  cycleFrom = () => this.setState(s => {
    const ks = Object.keys(SOURCE); return { travelFrom: ks[(ks.indexOf(s.travelFrom) + 1) % ks.length], speakPhase: 'idle' };
  });
  cycleTo = () => this.setState(s => {
    const ks = Object.keys(TRANSLATE); return { travelTo: ks[(ks.indexOf(s.travelTo) + 1) % ks.length], speakPhase: 'idle' };
  });
  speakTap = () => {
    if (this.state.speakPhase === 'listening') return;
    this.setState({ speakPhase: 'listening' });
    clearTimeout(this._sp);
    this._sp = setTimeout(() => this.setState({ speakPhase: 'out' }), 1300);
  };
  theirTurn = () => this.setState({ speakPhase: 'in' });
  speakAgain = () => this.setState({ speakPhase: 'out' });
  speakSlower = () => this.setState({ speakPhase: 'out' });
  nextTurn = () => this.setState(s => ({ turn: (s.turn + 1) % 3 }));

  componentWillUnmount() {
    clearInterval(this._tick); clearInterval(this._syn); clearInterval(this._af);
    clearTimeout(this._gt); clearTimeout(this._gt2); clearTimeout(this._tk);
    clearTimeout(this._js); clearTimeout(this._pt); clearTimeout(this._sp);
  }

  get lang() { return this.state.langS || this.props.language || 'en'; }
  get tone() { return this.state.toneS || this.props.tone || 'warm'; }
  get meta() { return this.state.metaS || this.props.todayLayout || 'timeline'; }
  get askMode() { return this.state.askS || this.props.askStyle || 'cited'; }

  go = (id) => () => {
    clearInterval(this._tick); clearInterval(this._syn);
    this.setState({ screen: id, capturing: false });
  };

  startSession = () => {
    clearInterval(this._tick);
    this.setState(s => ({ screen: s.screen === 'home' ? 'home' : 'listening', elapsed: 0, muted: false, capturing: true }));
    this._tick = setInterval(() => this.setState(s => ({ elapsed: s.elapsed + 1 })), 1000);
  };

  endSession = () => {
    clearInterval(this._tick); clearInterval(this._syn);
    this.setState({ screen: 'synth', syn: 0, capturing: false });
    this._syn = setInterval(() => {
      this.setState(s => {
        if (s.syn >= 5) { clearInterval(this._syn); return { screen: 'session' }; }
        return { syn: s.syn + 1 };
      });
    }, 620);
  };

  toggleMute = () => this.setState(s => ({ muted: !s.muted }));
  toggleTask = (id) => () => this.setState(s => ({ done: Object.assign({}, s.done, { [id]: !s.done[id] }) }));
  toggleConsent = (id) => () => this.setState(s => ({ consent: Object.assign({}, s.consent, { [id]: !s.consent[id] }) }));
  togglePriv = (id) => () => this.setState(s => ({ priv: Object.assign({}, s.priv, { [id]: !s.priv[id] }) }));
  setQ = (e) => this.setState({ q: e.target.value });
  onKey = (e) => { if (e.key === 'Enter') this.ask(this.state.q); };
  submitQ = () => this.ask(this.state.q);

  ask = (raw) => {
    const q = (raw || '').trim();
    if (!q) return;
    const low = q.toLowerCase();
    const hit = ANSWERS.find(a => a.keys.some(k => low.includes(k)));
    const entry = hit
      ? { q, a: hit.a, cites: hit.cites, conf: hit.conf }
      : { q, a: 'I found three moments that brush against that, but nothing you actually said outright. Want me to read them back?', cites: [{ label: 'Standup · Wed 09:40', quote: 'Baaki sab kal dekhenge.' }], conf: 'Low confidence · nothing stated directly' };
    this.setState(s => ({ thread: s.thread.concat([entry]), q: '' }));
  };

  sw = (on) => ({
    trackBg: on ? 'var(--color-accent-800)' : 'var(--color-neutral-900)',
    trackBorder: on ? 'var(--color-accent-600)' : 'var(--color-neutral-800)',
    justify: on ? 'flex-end' : 'flex-start',
    knob: on ? 'var(--color-accent-200)' : 'var(--color-neutral-600)'
  });

  seg = (active, value, setter, label) => ({
    label, go: setter(value),
    bg: active === value ? 'var(--color-accent-800)' : 'transparent',
    fg: active === value ? 'var(--color-accent-100)' : 'var(--color-neutral-500)'
  });

  renderVals() {
    const lang = this.lang, tone = this.tone, screen = this.state.screen;
    const t = Object.assign({}, DICT[lang], TONE[tone][lang]);
    const sc = {}; SCREENS.forEach(k => { sc[k] = screen === k; });

    const rail = [
      { name: 'Onboarding', items: [['welcome', 'Welcome', 'ph-sparkle'], ['language', 'Language', 'ph-translate'], ['consent', 'Consent', 'ph-shield-check']] },
      { name: 'Getting to know you', items: [['profile', 'Your name', 'ph-user-circle'], ['about', 'About your days', 'ph-heartbeat'], ['care', 'One lighter thing', 'ph-feather'], ['tour', 'Tutorial · next, next', 'ph-play-circle'], ['ready', 'Ready when you are', 'ph-hand-heart']] },
      { name: 'Walkthrough', items: [['goals', 'What it should do', 'ph-target'], ['persona', 'Who is wearing it', 'ph-user-focus'], ['voice1', 'Voice sampling', 'ph-microphone'], ['voice2', 'Names training', 'ph-text-aa'], ['enroll', 'Other voices', 'ph-users-three'], ['outcome', 'Your first week', 'ph-trend-up']] },
      { name: 'Devices & control', items: [['pair', 'Find pendant', 'ph-bluetooth'], ['pairPin', 'PIN pairing', 'ph-password'], ['devices', 'My devices', 'ph-devices'], ['control', 'Start controls', 'ph-sliders-horizontal'], ['device', 'Battery & specs', 'ph-broadcast']] },
      { name: 'Rituals', items: [['questNew', 'Create a quest', 'ph-flag-banner'], ['review', 'Daily review', 'ph-moon-stars'], ['journal', 'Journal · the book', 'ph-notebook'], ['affirm', 'Affirmations · sankalpa', 'ph-hands-praying'], ['bucket', 'Bucket list', 'ph-mountains'], ['reminders', 'Reminders', 'ph-bell']] },
      { name: 'Calendar', items: [['calConsent', 'Connect Google', 'ph-calendar-dots'], ['calDraft', 'Confirm an event', 'ph-calendar-plus']] },
      { name: 'Traveller mode', items: [['travelHome', 'Traveller home', 'ph-airplane-tilt'], ['travelSpeak', 'Speak mode', 'ph-speaker-high'], ['travelTable', 'Table talk', 'ph-users']] },
      { name: 'The hero moment', items: [['idle', 'Idle · not recording', 'ph-circle'], ['listening', 'Listening', 'ph-waveform'], ['synth', 'Synthesizing', 'ph-spinner'], ['session', 'Session, made sense of', 'ph-sparkle']] },
      { name: 'Home & sessions', items: [['home', 'Home · session feed', 'ph-house'], ['sessionDetail', 'Session summary', 'ph-article']] },
      { name: 'Core', items: [['today', 'Day view', 'ph-sun-horizon'], ['ask', 'Ask', 'ph-magnifying-glass'], ['planner', 'Plan & Quests', 'ph-check-square'], ['reflect', 'Reflect', 'ph-chart-line-up'], ['guide', 'The Guide · session', 'ph-compass'], ['lifePath', 'Life Path mode', 'ph-path']] },
      { name: 'Trust & packs', items: [['privacy', 'Privacy Centre', 'ph-lock-key'], ['cosmosBirth', 'Cosmos · birth data', 'ph-star'], ['cosmos', 'Cosmos · all systems', 'ph-moon-stars'], ['tarot', 'Cosmos · tarot', 'ph-star-four']] }
    ];
    const railGroups = rail.map(g => ({
      name: g.name,
      items: g.items.map(([id, label, icon]) => ({
        label, icon, go: this.go(id),
        fg: screen === id ? 'var(--color-accent-100)' : 'var(--color-neutral-400)',
        bg: screen === id ? 'var(--color-accent-900)' : 'transparent',
        mark: screen === id ? 'var(--color-accent)' : 'transparent'
      }))
    }));

    const tabDefs = [['home', 'Home', 'ph-house'], ['ask', t.ask, 'ph-magnifying-glass'], ['planner', t.plan, 'ph-check-square'], ['reflect', t.reflect, 'ph-chart-line-up'], ['guide', t.guide, 'ph-compass']];

    const tabs = tabDefs.map(([id, label, icon]) => ({
      label, icon, go: this.go(id),
      fg: screen === id ? 'var(--color-accent-200)' : 'var(--color-neutral-500)'
    }));
    const coreScreens = ['home', 'sessionDetail', 'lifePath', 'affirm', 'today', 'ask', 'planner', 'reflect', 'guide', 'privacy', 'cosmos', 'review', 'journal', 'bucket', 'reminders', 'questNew', 'devices', 'control', 'calConsent', 'calDraft'];
    const showTabs = coreScreens.indexOf(screen) >= 0;

    const mm = String(Math.floor(this.state.elapsed / 60)).padStart(2, '0');
    const ss = String(this.state.elapsed % 60).padStart(2, '0');

    const bars = [];
    for (let i = 0; i < 30; i++) {
      const seedA = Math.sin(i * 12.9898) * 43758.5453;
      const r = seedA - Math.floor(seedA);
      bars.push({ h: Math.round(18 + r * 74), dur: (0.7 + r * 0.9).toFixed(2) + 's', delay: (r * 0.8).toFixed(2) + 's' });
    }

    const synDefs = [
      ['Speech captured', 'ph-waveform', '14:22'],
      ['Transcribed on this phone', 'ph-cpu', 'Hinglish + Gujarati'],
      ['Speakers separated · strangers counted, not identified', 'ph-users-three', '3 voices'],
      ['Names, numbers and dates verified', 'ph-check-circle', '4 · 2 · 1'],
      ['Meaning drawn · raw audio discarded', 'ph-sparkle', 'done']
    ];
    const synSteps = synDefs.map(([label, icon, meta], i) => {
      const st = this.state.syn > i ? 'done' : (this.state.syn === i ? 'now' : 'todo');
      return {
        label, meta,
        icon: st === 'done' ? 'ph-check-circle' : (st === 'now' ? 'ph-spinner' : icon),
        fg: st === 'todo' ? 'var(--color-neutral-700)' : (st === 'done' ? 'var(--color-neutral-300)' : 'var(--color-accent-200)'),
        anim: st === 'now' ? 'spin 1.1s linear infinite' : 'none'
      };
    });

    const timeline = [
      { time: '08:10', title: 'Morning walk', body: 'You set the day out loud: ship the pricing page, then decide on the enclosure.', tags: ['Intention', 'Hinglish'], dot: 'var(--color-accent-500)' },
      { time: '09:40', title: 'Standup with the team', body: '14 min. You took the pricing copy yourself; Meera flagged the D30 events are not wired.', tags: ['3 tasks', '4 speakers'], dot: 'var(--color-neutral-500)' },
      { time: '12:15', title: 'Vendor call · Chirag bhai', body: '₹2,365 per unit at 5,000 pieces. Answer wanted by Thursday.', tags: ['Decision open', 'Hinglish'], dot: 'var(--color-accent-400)' },
      { time: '16:05', title: 'Investor coffee', body: 'Asked for 30-day retention by Friday. You promised it before checking whether it exists.', tags: ['Promise', 'English'], dot: 'var(--color-neutral-500)' },
      { time: '19:30', title: 'Family call', body: 'Ba’s follow-up is Saturday 10:30. Didi can drive her — you said you’d confirm.', tags: ['Gujarati', 'Enrolled voice'], dot: 'var(--color-accent-500)' },
      { time: '21:04', title: 'Winding down', body: 'Voice energy dropped after 16:00 — the third day this week that happened.', tags: ['Pattern'], dot: 'var(--color-neutral-600)' }
    ];

    const taskDefs = [
      ['t1', 'Give Chirag bhai the ₹2,365 decision', 'Vendor call · Tue 12:15 · Hinglish', 'Thu', true],
      ['t2', 'Write the pricing page copy yourself', 'Standup · Wed 09:40', 'Tonight', false],
      ['t3', 'Send D30 retention to the investor', 'Investor coffee · Wed 16:05', 'Fri', true],
      ['t4', 'Confirm who takes Ba on Saturday', 'Family call · Wed 19:30 · Gujarati', 'Fri', false],
      ['t5', 'Wire up the D30 events with Meera', 'Standup · Wed 09:52', 'Wed', false]
    ];
    const mkTask = ([id, text, src, due, urgent]) => {
      const on = !!this.state.done[id];
      return {
        text, src, due, toggle: this.toggleTask(id),
        icon: on ? 'ph-check-circle' : 'ph-circle',
        iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)',
        fg: on ? 'var(--color-neutral-600)' : 'var(--color-text)',
        deco: on ? 'line-through' : 'none',
        dueBg: urgent && !on ? 'var(--color-accent-800)' : 'var(--color-neutral-900)',
        dueFg: urgent && !on ? 'var(--color-accent-100)' : 'var(--color-neutral-500)'
      };
    };
    const tasks = taskDefs.map(mkTask);
    const doneCount = taskDefs.filter(d => this.state.done[d[0]]).length;

    const week = [62, 88, 45, 79, 40, 71, 66].map((v, i) => ({
      h: Math.round(v * 1.02), day: ['M', 'T', 'W', 'T', 'F', 'S', 'S'][i],
      bg: v > 70 ? 'var(--color-accent-500)' : (v > 55 ? 'var(--color-accent-700)' : 'var(--color-neutral-800)')
    }));

    const thread = this.state.thread.map(m => Object.assign({}, m, {
      showCites: this.askMode === 'cited',
      showConf: this.askMode === 'cited'
    }));

    const chips = [
      ['What did I promise this week?', 'promise'],
      ['When is Ba’s checkup?', 'ba'],
      ['What do I owe the investor?', 'investor'],
      ['Kya main is hafte thak gaya?', 'tired']
    ];

    return {
      t, sc, railGroups, tabs, showTabs,
      showListenFab: showTabs,
      isTimeline: this.meta === 'timeline', isCards: this.meta === 'cards', isOne: this.meta === 'oneThing',
      threadEmpty: thread.length === 0,
      goLanguage: this.go('language'), goConsent: this.go('consent'), goPair: this.go('pair'),
      goDevice: this.go('device'), goIdle: this.go('idle'), goToday: this.go('today'), goPlanner: this.go('planner'),
      startSession: this.startSession, endSession: this.endSession, toggleMute: this.toggleMute,
      q: this.state.q, setQ: this.setQ, onKey: this.onKey, submitQ: this.submitQ, thread,
      askChips: chips.map(([label, k]) => ({ label, go: () => this.ask(k) })),
      promises: ['Runs on your phone, not a server', 'One tap on the pendant and it stops — in hardware', 'Speaks 22 Indian languages the way you mix them'],
      langCards: [
        { native: 'English', note: 'Interface + answers', icon: 'ph-check-circle', iconFg: 'var(--color-accent)', border: 'var(--color-accent-700)', go: () => this.setState({ langS: 'en' }) },
        { native: 'हिंदी · Hinglish', note: 'Interface in Hinglish, mixing kept as spoken', icon: 'ph-circle', iconFg: 'var(--color-neutral-700)', border: 'var(--color-divider)', go: () => this.setState({ langS: 'hi' }) },
        { native: 'ગુજરાતી', note: 'ઇન્ટરફેસ અને જવાબ ગુજરાતીમાં', icon: 'ph-circle', iconFg: 'var(--color-neutral-700)', border: 'var(--color-divider)', go: () => this.setState({ langS: 'gu' }) },
        { native: 'મરાઠી · தமிழ் · +19', note: 'All 22 scheduled languages supported', icon: 'ph-caret-right', iconFg: 'var(--color-neutral-600)', border: 'var(--color-divider)', go: () => {} }
      ],
      consents: [
        { title: 'Listen only when I say so', body: 'No always-on capture. Every session starts with a tap and shows the amber light.', tag: 'Required', tagFg: 'var(--color-neutral-600)' },
        { title: 'Keep transcription on my phone', body: 'Speech becomes text on this device. Nothing leaves it unless you ask.', tag: 'Recommended', tagFg: 'var(--color-accent-300)' },
        { title: 'Count strangers, never identify them', body: 'People who are not enrolled are separated as “voice 2, voice 3” — no voiceprint is ever made of them.', tag: 'Never changes', tagFg: 'var(--color-neutral-600)' },
        { title: 'Enrol my family’s voices', body: 'Only with their spoken consent, stored encrypted on this phone. Off until they agree.', tag: 'Off by default', tagFg: 'var(--color-neutral-600)' }
      ].map((c, i) => {
        const id = 'c' + (i + 1); const on = this.state.consent[id];
        return Object.assign({ toggle: this.toggleConsent(id) }, c, this.sw(on));
      }),
      deviceStats: [
        { icon: 'ph-microphone', value: '2-mic array', label: 'SNR 68 dB' },
        { icon: 'ph-database', value: '1 GB buffer', label: 'Offline capture' },
        { icon: 'ph-drop', value: 'IP54', label: 'Splash safe' },
        { icon: 'ph-bluetooth', value: 'BLE 5.3', label: 'Connected' }
      ],
      hwRows: [
        { icon: 'ph-microphone-slash', label: 'One-tap hardware mute', state: 'Armed' },
        { icon: 'ph-lightbulb', label: 'Amber record light', state: 'Always on when live' },
        { icon: 'ph-vibrate', label: 'Haptic confirmation', state: 'Gentle' }
      ],
      idleChips: ['Meetings', 'Family calls', 'Thinking out loud', 'Site visits'],
      elapsedLabel: mm + ':' + ss,
      bars, waveOpacity: this.state.muted ? 0.18 : 1,
      liveLine: this.state.muted ? 'Muted. Nothing is being captured — the light is off.' : '“Paanch hazaar pieces pe 2,365 kar dunga, but Thursday tak bata dena…”',
      liveMeta: this.state.muted ? 'Mute recorded in your consent log · ' + mm + ':' + ss : 'Voice 2 · not enrolled · counted, not identified',
      muteIcon: this.state.muted ? 'ph-microphone-slash' : 'ph-microphone',
      muteFg: this.state.muted ? 'var(--color-accent-100)' : 'var(--color-neutral-300)',
      muteBg: this.state.muted ? 'var(--color-accent-800)' : 'transparent',
      muteBorder: this.state.muted ? 'var(--color-accent)' : 'var(--color-neutral-700)',
      synSteps, synPct: Math.min(100, this.state.syn * 20) + '%',
      sessionSummary: [
        'The enclosure quote landed at ₹2,365 per unit for 5,000 pieces — under your Monday target.',
        'Chirag bhai will hold the price until Thursday, then it moves with the steel index.',
        'You mentioned the 50-unit test batch three times — it is the thing this decision unblocks.'
      ],
      sessionTasks: [
        ['s1', 'Confirm ₹2,365 with Chirag bhai', 'Vendor call · 12:15 · “Thursday tak bata dena”', 'Thu', true],
        ['s2', 'Ask for the NCVM finish sample', 'Vendor call · 12:19', 'Next week', false],
        ['s3', 'Recheck the 50-unit batch cost sheet', 'Vendor call · 12:26', 'Wed', false]
      ].map(mkTask),
      metaTabs: [
        this.seg(this.meta, 'timeline', (v) => () => this.setState({ metaS: v }), t.tl),
        this.seg(this.meta, 'cards', (v) => () => this.setState({ metaS: v }), t.cards),
        this.seg(this.meta, 'oneThing', (v) => () => this.setState({ metaS: v }), t.one)
      ],
      timeline,
      quietRest: [
        { icon: 'ph-check-square', text: '4 other tasks, none of them urgent' },
        { icon: 'ph-chat-circle', text: '2 conversations summarised, nothing needed from you' },
        { icon: 'ph-moon', text: 'Ba’s Saturday plan is already handled by Didi' }
      ],
      tasks, quests: [
        { title: 'Ship Core to 50 testers', base: 40, note: 'Enclosure decision is the only blocker left.' },
        { title: 'Be off the phone by 23:00', base: 71, note: 'Two late nights, both after a vendor call.' },
        { title: 'Speak to Ba twice a week', base: 100, note: 'Held for four weeks running.' }
      ].map((q, i) => {
        const bump = (this.state.checkins[i] || 0) * 6;
        const pct = Math.max(0, Math.min(100, q.base + bump));
        return { title: q.title, note: q.note, stat: pct + '%', pct: pct + '%' };
      }).concat(this.state.extraQuests),
      week, themes: [
        { name: 'Pricing', n: 14, pct: '100%', bg: 'var(--color-accent-500)' },
        { name: 'Hiring', n: 9, pct: '64%', bg: 'var(--color-accent-600)' },
        { name: 'Ba’s health', n: 6, pct: '43%', bg: 'var(--color-accent-700)' },
        { name: 'Sleep', n: 4, pct: '28%', bg: 'var(--color-neutral-700)' }
      ],
      guideActions: [
        { icon: 'ph-microphone', label: 'Answer out loud, two minutes', go: this.startSession },
        { icon: 'ph-check-square', label: 'Turn it into one task', go: this.go('planner') },
        { icon: 'ph-moon-stars', label: 'See what Cosmos makes of it', go: this.go('cosmos') }
      ],
      streak: [1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1].map(v => ({ bg: v ? 'var(--color-accent-600)' : 'var(--color-neutral-900)' })),
      privacyTags: ['On-device STT', 'User-held keys', 'India residency', 'No raw audio'],
      privacyToggles: [
        { title: 'Cloud STT fallback', body: 'Only in poor conditions, only minimized text, only with this on.' },
        { title: 'Encrypted vault backup', body: 'Backed up with your key. We cannot read it, and cannot recover it for you.' },
        { title: 'Guest mode on tap-and-hold', body: 'Nothing is written to memory while guest mode is on.' },
        { title: 'Contribute anonymised speech', body: 'Helps train Indian-language models. Off unless you choose it.' }
      ].map((p, i) => {
        const id = 'p' + (i + 1); const on = this.state.priv[id];
        return Object.assign({ toggle: this.togglePriv(id) }, p, this.sw(on));
      }),
      muteLog: [
        { icon: 'ph-microphone-slash', label: 'Muted by hardware button', time: '16:22', fg: 'var(--color-accent-400)' },
        { icon: 'ph-microphone', label: 'Resumed', time: '16:31', fg: 'var(--color-neutral-500)' },
        { icon: 'ph-user-check', label: 'Didi’s voice enrolled · consent recorded', time: 'Mon', fg: 'var(--color-accent-400)' },
        { icon: 'ph-trash', label: '2 sessions deleted by you', time: 'Sun', fg: 'var(--color-neutral-500)' }
      ],
      cosmosEvidence: [
        'You moved the same decision on Mon, Tue and Wed — 3 sessions.',
        'The vendor himself named Thursday as the deadline.',
        'Your voice energy rises on days you decide before noon.'
      ],
      cosmosTiles: [
        { icon: 'ph-number-circle-seven', value: 'Personal 7', label: 'Numerology day · finish, don’t start' },
        { icon: 'ph-sun', value: 'Before 12:00', label: 'Your own best decision window' },
        { icon: 'ph-warning-circle', value: 'Thu 14:00–16:00', label: 'Avoid signing — you dip here weekly' },
        { icon: 'ph-heart', value: 'Call Ba', label: 'Moon in your 4th · family focus' }
      ],
      doneLabel: doneCount + ' of ' + taskDefs.length + ' done · every task traced to something you said',
      ...(() => {
        const nm = (this.state.profileName || '').trim();
        const first = nm.split(' ')[0];
        const bestLabel = { early: 'early morning', late: 'late morning', noon: 'the afternoon', night: 'late at night' }[this.state.bestTime];
        const plateDefs = [['p1', 'A launch'], ['p2', 'A team'], ['p3', 'Exams'], ['p4', 'A family thing'], ['p5', 'A move'], ['p6', 'Money'], ['p7', 'Health'], ['p8', 'A big decision']];
        const drainDefs = [['d1', 'Remembering everything'], ['d2', 'Being interrupted'], ['d3', 'Saying yes too fast'], ['d4', 'Late nights'], ['d5', 'Admin'], ['d6', 'Small talk']];
        const chip = (on, label, toggle) => ({ label, toggle, bg: on ? 'var(--color-accent-900)' : 'transparent', border: on ? 'var(--color-accent-700)' : 'var(--color-neutral-800)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' });
        const drainNames = drainDefs.filter(d => this.state.drains[d[0]]).map(d => d[1].toLowerCase());
        const care = (this.state.careText || '').trim();
        const tour = [
          { title: 'One press. That is the whole interface.', body: 'No screen, no menus, nothing to learn. Press the pendant twice and it begins. Press once and it stops.', hint: 'Try it now — the light breathes when it is listening.', hintIcon: 'ph-hand-tap', gesture: '2 presses', led: '#e8a33d', ledAnim: 'breathe 2.2s ease-in-out infinite', glow: 'var(--om-hero)' },
          { title: 'Amber means on. Dark means off.', body: 'It will never listen quietly. Anyone in the room can see the light — and one press puts it out in hardware, not in software.', hint: 'Nobody has to take your word for it.', hintIcon: 'ph-eye', gesture: '1 press · mute', led: 'var(--color-neutral-700)', ledAnim: 'none', glow: 'var(--om-hero2)' },
          { title: 'When you stop, it starts thinking.', body: 'Your phone does the work — the words, the voices, the promises you made. Nothing is uploaded to be understood.', hint: 'About twenty seconds for a long meeting.', hintIcon: 'ph-cpu', gesture: 'on your phone', led: 'var(--color-accent)', ledAnim: 'breathe 1.4s ease-in-out infinite', glow: 'var(--om-hero)' },
          { title: 'Then you can simply ask.', body: '“What did I promise this week?” It answers from your own moments, and shows you the exact words it is standing on.', hint: 'No prompts to learn. Ask the way you would ask a friend.', hintIcon: 'ph-chat-circle-dots', gesture: 'ask anything', led: 'var(--color-accent)', ledAnim: 'none', glow: 'var(--om-hero)' },
          { title: 'Two minutes at night. That is the habit.', body: 'A short review, already filled in from your day. Correct what is wrong, name one thing for tomorrow, and put the day down.', hint: 'That is the whole tutorial. You are ready.', hintIcon: 'ph-moon-stars', gesture: 'nightly', led: 'var(--color-accent-400)', ledAnim: 'breathe 3s ease-in-out infinite', glow: 'var(--om-hero)' }
        ][this.state.tourStep];
        return {
          goProfile: this.go('profile'), goAbout: this.go('about'), goCare: this.go('care'), goTour: this.go('tour'), goGoals: this.go('goals'),
          profileName: this.state.profileName, setProfileName: this.setProfileName,
          profileCity: this.state.profileCity, setProfileCity: this.setProfileCity,
          profileDob: this.state.profileDob, setProfileDob: this.setProfileDob,
          profileCta: first ? 'Continue, ' + first : 'Continue',
          aboutTitle: first ? 'So, ' + first + ' — what does a normal week ask of you?' : 'What does a normal week ask of you?',
          plateChips: plateDefs.map(([id, label]) => chip(!!this.state.plate[id], label, this.togglePlate(id))),
          drainChips: drainDefs.map(([id, label]) => chip(!!this.state.drains[id], label, this.toggleDrain(id))),
          bestTimeOpts: [['early', 'Early'], ['late', 'Late morning'], ['noon', 'Afternoon'], ['night', 'Night']].map(([id, label]) => this.seg(this.state.bestTime, id, v => this.setBestTime(v), label)),
          personInput: this.state.personInput, setPersonInput: this.setPersonInput, addPerson: this.addPerson, onPersonKey: this.onPersonKey,
          peopleChips: this.state.people,
          careTitle: 'If one thing felt lighter by Sunday, what would it be?',
          careText: this.state.careText, setCareText: this.setCareText,
          careChips: [
            'Stop carrying every promise in my head.',
            'Decide the thing I keep postponing.',
            'Be properly present with family.',
            'Sleep before midnight.',
            'Study without re-reading everything.'
          ].map(v => ({ label: v.replace(/\.$/, ''), go: this.fillCare(v) })),
          careEcho: care
            ? '“' + care + '” — I will hold that. Every review this week quietly checks whether it got lighter, and I will not bring it up as a failure.'
            : (drainNames.length
              ? 'You said ' + drainNames[0] + ' drains you. That is the first thing I will take off your hands — you will not have to ask.'
              : 'Take your time. You can tell me later, in your own words, and I will start from there.'),
          tourGlow: tour.glow, tourLed: tour.led, tourLedAnim: tour.ledAnim, tourGesture: tour.gesture,
          tourTitle: tour.title, tourBody: tour.body, tourHint: tour.hint, tourHintIcon: tour.hintIcon,
          tourCount: 'Step ' + (this.state.tourStep + 1) + ' of 5',
          tourDots: [0, 1, 2, 3, 4].map(i => ({ w: i === this.state.tourStep ? '22px' : '5px', bg: i <= this.state.tourStep ? 'var(--color-accent)' : 'var(--color-neutral-800)' })),
          tourNext: this.tourNext, tourBack: this.tourBack,
          tourCta: this.state.tourStep >= 4 ? 'Complete' : 'Next',
          readyTitle: first ? 'Ready when you are, ' + first + '.' : 'Ready when you are.',
          readyLead: 'None of that left this phone. From here it is just you, one press, and something that pays attention so you do not have to.',
          readyRecap: [
            { icon: 'ph-map-pin', label: 'Your days', value: (this.state.profileCity || 'You did not say — that is fine, I will learn it') },
            { icon: 'ph-sun-horizon', label: 'At your best', value: 'In the ' + bestLabel + ' — I will bring hard decisions here, and ask nothing of you outside it' },
            { icon: 'ph-heart', label: 'Never forget', value: (this.state.people || []).length ? this.state.people.join(' · ') : 'Add someone whenever you are ready' },
            { icon: 'ph-feather', label: 'One lighter thing', value: care || 'Still deciding — ask me any evening' }
          ],
          readyPromise: 'I am not here to optimise you' + (first ? ', ' + first : '') + '. I am here so the things you say out loud stop slipping through. You press once; I hold the rest.'
        };
      })(),
      ...(() => {
        const ses = SESSIONS.find(x => x.id === this.state.openSession) || SESSIONS[0];
        const tab = this.state.dTab;
        const inc = this.state.shareInc;
        const wa = 'STAY · ' + ses.title + '\n' + ses.ago + ' ' + ses.time + ' · ' + ses.dur + '\n\n'
          + ses.summary.slice(0, 2).map(s => '• ' + s).join('\n')
          + (inc.i2 ? '\n\nActions\n' + ses.tasks.map(t => '☐ ' + t.text + ' — ' + t.owner + ', ' + t.due).join('\n') : '')
          + (inc.i3 ? '\n\n(full transcript attached)' : '')
          + '\n\nShared from STAY';
        return {
          goHome: this.go('home'), goDevices: this.go('devices'),
          homeLed: this.state.capturing ? '#e8a33d' : (this.state.speakMode ? 'var(--color-accent)' : 'var(--color-neutral-700)'),
          homeDeviceState: this.state.speakMode ? 'Connected · ready when you press' : 'Connected · press-to-listen is off',
          speakSw: this.sw(this.state.speakMode), toggleSpeakMode: this.toggleSpeakMode,
          speakFg: this.state.speakMode ? 'var(--color-text)' : 'var(--color-neutral-500)',
          speakModeLabel: this.state.speakMode ? 'Speak mode is on' : 'Speak mode is off',
          speakModeNote: this.state.speakMode ? 'Two presses on the pendant, or the button below, starts a session.' : 'Nothing can start a session until you turn this back on.',
          listenActive: !!this.state.capturing,
          listenIdle: !this.state.capturing,
          miniListenTitle: this.state.muted ? 'Muted — nothing is captured' : 'Listening now',
          miniBars: bars.slice(0, 26).map(b => Object.assign({}, b, { h: Math.max(4, Math.round(b.h * 0.34)) })),
          homeMeta: SESSIONS.length + ' sessions today · ' + SESSIONS.reduce((a, s) => a + s.open, 0) + ' open actions · all stored on this phone',
          sessionCards: SESSIONS.map(s => ({
            time: s.time, dur: s.dur, langs: s.langs, title: s.title, lead: s.lead, voices: s.voices,
            taskLabel: s.open + (s.open === 1 ? ' open action' : ' open actions'),
            taskFg: s.open > 1 ? 'var(--color-accent-300)' : 'var(--color-neutral-500)',
            go: this.openSession(s.id), share: this.openShare(s.id)
          })),
          dTitle: ses.title, dTime: ses.time, dDur: ses.dur, dLangs: ses.langs, dVoices: ses.voices,
          dKind: ses.kind, dAgo: ses.ago, dLead: ses.lead, dSummary: ses.summary, dDecisions: ses.decisions,
          dNumbers: ses.numbers, dRisk: ses.risk, dTopics: ses.topics, dMoments: ses.moments,
          dTalk: ses.talk.map(t => Object.assign({}, t, { bg: t.tag === 'you' ? 'var(--color-accent)' : (t.tag === 'enrolled' ? 'var(--color-accent-600)' : 'var(--color-neutral-700)') })),
          dTranscript: ses.transcript.map(l => Object.assign({}, l, { whoFg: l.who === 'You' ? 'var(--color-accent-200)' : (l.who.indexOf('Voice') === 0 ? 'var(--color-neutral-500)' : 'var(--color-neutral-200)') })),
          dTasks: ses.tasks.map((t, i) => {
            const id = ses.id + '-' + i; const on = !!this.state.done[id];
            return {
              text: t.text, owner: t.owner, due: t.due, toggle: this.toggleTask(id),
              icon: on ? 'ph-check-circle' : 'ph-circle', iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)',
              fg: on ? 'var(--color-neutral-600)' : 'var(--color-text)', deco: on ? 'line-through' : 'none',
              dueBg: on ? 'var(--color-neutral-900)' : 'var(--color-accent-800)', dueFg: on ? 'var(--color-neutral-500)' : 'var(--color-accent-100)'
            };
          }),
          dTabs: [['summary', 'Summary'], ['analysis', 'Analysis'], ['transcript', 'Transcript'], ['actions', 'Actions']].map(([id, label]) => this.seg(tab, id, v => this.setDTab(v), label)),
          dIsSummary: tab === 'summary', dIsAnalysis: tab === 'analysis', dIsTranscript: tab === 'transcript', dIsActions: tab === 'actions',
          shareOpen: this.state.shareOpen, openShare: this.openShare(null), closeShare: this.closeShare,
          waPreview: wa,
          shareIncludes: [
            ['i1', 'Summary and decisions', 'always included'],
            ['i2', 'Actions with owners and dates', ''],
            ['i3', 'Full transcript', 'contains everything that was said']
          ].map(([id, label, note]) => {
            const on = !!inc[id];
            return { label: label + (note ? ' · ' + note : ''), toggle: this.toggleShareInc(id), icon: on ? 'ph-check-square' : 'ph-square', iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)', fg: on ? 'var(--color-text)' : 'var(--color-neutral-500)' };
          }),
          shareAlts: [{ icon: 'ph-copy', label: 'Copy text' }, { icon: 'ph-envelope-simple', label: 'Email' }, { icon: 'ph-file-pdf', label: 'PDF' }]
        };
      })(),
      ...(() => {
        const st = GUIDE_SCRIPT[this.state.gStep] || {};
        const act = st.action;
        const ended = this.state.gEnded;
        return {
          th: THEMES[this.state.light ? 'light' : 'dark'], isDark: !this.state.light, toggleTheme: this.toggleTheme,
          goGuide: this.go('guide'), goLifePath: this.go('lifePath'), goCosmos: this.go('cosmos'),
          goCosmosBirth: this.go('cosmosBirth'), goTarot: this.go('tarot'),
          guideMeta: 'Session 24 · ' + (this.state.gStep + 1) + ' of ' + GUIDE_SCRIPT.length + ' · nothing is recorded',
          gv: {
            icon: this.state.guideVoice ? 'ph-speaker-high' : 'ph-speaker-slash',
            label: this.state.guideVoice ? 'Speaks' : 'Types',
            fg: this.state.guideVoice ? 'var(--color-accent-200)' : 'var(--color-neutral-400)',
            bg: this.state.guideVoice ? 'var(--color-accent-900)' : 'transparent',
            border: this.state.guideVoice ? 'var(--color-accent-700)' : 'var(--color-neutral-800)'
          },
          toggleGuideVoice: this.toggleGuideVoice,
          guideThread: this.state.gThread.map((m, i) => Object.assign({}, m, {
            speaking: !!m.isGuide && this.state.guideVoice && this.state.gSpeaking && i === this.state.gThread.length - 1
          })),
          guideWaves: bars.slice(0, 4).map(b => Object.assign({}, b, { h: Math.max(4, Math.round(b.h * 0.12)) })),
          guideSpeakingLabel: 'Speaking aloud · tap Types to silence',
          guideHasAction: !!act && !this.state.gDismissed && !ended,
          guideActionIcon: act ? act.icon : 'ph-sparkle',
          guideActionKicker: act ? act.kicker : '',
          guideActionText: act ? act.text : '',
          guideActionCta: act ? act.cta : '',
          guideActionGo: this.go(act ? act.screen : 'guide'),
          guideDismiss: this.guideDismiss,
          guideReplies: ended ? [] : (st.replies || []).map(r => ({ label: r, go: () => this.guideSay(r) })),
          guideInput: this.state.guideInput, setGuideInput: this.setGuideInput, onGuideKey: this.onGuideKey,
          guidePlaceholder: ended ? 'Session saved to your journal' : 'Say it in your own words…',
          guideMic: this.guideMic,
          guideMicBorder: 'var(--color-accent-700)', guideMicBg: 'var(--color-accent-900)', guideMicIcon: 'ph-microphone',
          guideEnd: this.guideEnd, guideRestart: this.guideRestart,
          guideEndLabel: ended ? 'Saved to your journal' : 'End & keep this',
          guideFooter: 'This conversation stays on your phone. It is not a session with a clinician, and it will tell you so if you ever need one.',
          lpQuarter: 'Q3 · reviewed 11 weeks ago',
          lpForm: !this.state.lpDone, lpResults: this.state.lpDone,
          lpTitle: 'Ten years, held against this week',
          lpStuck: this.state.lpStuck, setLpStuck: (e) => this.setState({ lpStuck: e.target.value }),
          lpTenEcho: this.state.lpTen <= 10
            ? 'Almost none of it. Either you are over-delegated, or you are doing everyone else’s job.'
            : (this.state.lpTen >= 50 ? 'Most of it. Guard that — it is also the fastest way to become the bottleneck.' : 'About a third. That is normal, and it is also the number that moves your ten years.'),
          lpTenOpts: [[10, '0–2h'], [25, '2–5h'], [35, '5–10h'], [50, '10–20h'], [70, '20h+']].map(([v, label]) => ({
            label: label, go: this.setLp('lpTen', v),
            bg: this.state.lpTen === v ? 'var(--color-accent-900)' : 'transparent',
            border: this.state.lpTen === v ? 'var(--color-accent-700)' : 'var(--color-neutral-800)',
            fg: this.state.lpTen === v ? 'var(--color-accent-100)' : 'var(--color-neutral-400)'
          })),
          lpMoneyOpts: [['surviving', '< 1 month'], ['steady', '3 months'], ['building', 'A year'], ['compounding', 'Indefinitely']].map(([id, label]) => this.seg(this.state.lpMoney, id, v => this.setLp('lpMoney', v), label)),
          lpAccOpts: [['noone', 'No one'], ['myself', 'Only me'], ['partner', 'One person'], ['team', 'A team']].map(([id, label]) => this.seg(this.state.lpAcc, id, v => this.setLp('lpAcc', v), label)),
          lpIntentChips: [['i1', 'Independence'], ['i2', 'Mastery'], ['i3', 'Family close by'], ['i4', 'Impact at scale'], ['i5', 'Freedom to move']].map(([id, label]) => {
            const on = !!this.state.lpIntent[id];
            return { label, toggle: this.toggleLpIntent(id), bg: on ? 'var(--color-accent-900)' : 'transparent', border: on ? 'var(--color-accent-700)' : 'var(--color-neutral-800)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' };
          }),
          lpAgeOpts: [['20s', '20s'], ['30s', '30s'], ['40s', '40s'], ['50s', '50s'], ['60+', '60+']].map(([id, label]) => ({
            label, go: this.setLp('lpAge', id),
            bg: this.state.lpAge === id ? 'var(--color-accent-900)' : 'transparent',
            border: this.state.lpAge === id ? 'var(--color-accent-700)' : 'var(--color-neutral-800)',
            fg: this.state.lpAge === id ? 'var(--color-accent-100)' : 'var(--color-neutral-400)'
          })),
          lpRun: this.lpRun, lpEdit: this.lpEdit,
          ...(() => {
            const ten = this.state.lpTen;
            const accScore = { noone: 24, myself: 46, partner: 72, team: 86 }[this.state.lpAcc];
            const moneyScore = { surviving: 28, steady: 52, building: 71, compounding: 88 }[this.state.lpMoney];
            const prod = Math.round((ten * 0.6) + 34);
            const score = Math.round((ten * 0.9 + accScore + moneyScore + prod) / 4);
            const deg = Math.round(score * 3.6);
            const decades = [['20s', 30], ['30s', 62], ['40s', 74], ['50s', 58], ['60s', 44], ['70s', 34], ['80s', 26]];
            const nowIdx = { '20s': 0, '30s': 1, '40s': 2, '50s': 3, '60+': 4 }[this.state.lpAge];
            return {
              lpScore: score,
              lpRing: 'conic-gradient(var(--color-accent) ' + deg + 'deg, var(--color-neutral-900) 0deg)',
              lpVerdict: score > 70 ? 'Pointed in one direction.' : (score > 50 ? 'Mostly aligned, leaking at the edges.' : 'Busy, and pointed sideways.'),
              lpVerdictNote: (this.state.lpStuck.trim() ? '“' + this.state.lpStuck.trim() + '” has moved three times, and ' : 'Your postponed thing keeps moving, and ') + ({ noone: 'no one is watching', myself: 'only you are watching', partner: 'one person is watching', team: 'a team is watching' })[this.state.lpAcc] + '. That pairing is the whole score.',
              lpBoosters: [
                { name: 'Accountability', icon: 'ph-handshake', score: accScore, note: accScore < 60 ? 'Nobody checks on you, so every promise is enforced by willpower alone. One weekly witness would change more than any system.' : 'You have a witness. Keep the weekly check short and unmissable.' },
                { name: 'Productivity', icon: 'ph-lightning', score: prod, note: 'Your decisions are best before noon and you spend most mornings in meetings. Moving one decision per day earlier is worth more than another tool.' },
                { name: 'Profitability', icon: 'ph-trend-up', score: moneyScore, note: moneyScore < 60 ? 'A short runway makes every decision defensive — including the vendor one. Widening it by three months buys back your judgement.' : 'The runway is long enough to choose well. The risk now is spending that freedom on three ideas instead of one.' }
              ].map(b => ({
                name: b.name, icon: b.icon, score: b.score + '', pct: b.score + '%', note: b.note,
                fg: b.score > 65 ? 'var(--color-accent-200)' : 'var(--color-neutral-300)',
                bg: b.score > 65 ? 'var(--color-accent)' : 'var(--color-accent-600)'
              })),
              lpSplit: [
                { label: 'This week', rows: [
                  { label: 'Meetings and replies', pct: '82%', bg: 'var(--color-neutral-700)' },
                  { label: 'Building the thing', pct: '46%', bg: 'var(--color-accent-600)' },
                  { label: 'People at home', pct: '14%', bg: 'var(--color-accent-800)' }
                ] },
                { label: 'Ten-year intent', rows: [
                  { label: 'Independence', pct: '88%', bg: 'var(--color-accent)' },
                  { label: 'Family close by', pct: '76%', bg: 'var(--color-accent-500)' },
                  { label: 'Mastery', pct: '40%', bg: 'var(--color-accent-700)' }
                ] }
              ],
              lpGap: 'The gap is family: 76% of what you say matters long term, 14% of the week you actually lived. Everything else is roughly honest.',
              lpDecades: decades.map(([label, h], i) => ({
                label, h: h,
                bg: i === nowIdx ? 'var(--color-accent)' : (i < nowIdx ? 'var(--color-neutral-800)' : 'var(--color-accent-900)'),
                border: i === nowIdx ? 'var(--color-accent)' : 'var(--color-divider)',
                fg: i === nowIdx ? 'var(--color-accent-200)' : 'var(--color-neutral-600)'
              })),
              lpMilestones: [
                { when: 'Now', text: 'The decade where the compounding either starts or does not. Most of your leverage is in the next 30 months.' },
                { when: '+6y', text: 'Ba is 78. The Kedarnath trip is realistically in this window, not later.' },
                { when: '+18y', text: 'On your own numbers, independence lands here — if the profitability line holds.' }
              ],
              lpPlan: 'Three things, drawn from your own answers: one named witness for the promise you keep breaking, ' + (this.state.lpStuck.trim() ? '“' + this.state.lpStuck.trim() + '” given a date rather than an intention' : 'the postponed decision given a date rather than an intention') + ', and one hour of family time sitting in the calendar like any meeting. I will ask about all three on Sunday.'
            };
          })()
        };
      })(),
      ...(() => {
        const stars = [];
        for (let i = 0; i < 26; i++) {
          const a = Math.sin(i * 78.233) * 43758.5453; const ra = a - Math.floor(a);
          const b2 = Math.sin(i * 12.9898) * 43758.5453; const rb = b2 - Math.floor(b2);
          stars.push({ top: Math.round(rb * 88) + '%', left: Math.round(ra * 94) + '%', size: (rb > 0.72 ? 2.4 : 1.4) + 'px', dur: (2.6 + ra * 3).toFixed(1) + 's', delay: (ra * 2.5).toFixed(1) + 's' });
        }
        const tab = this.state.csTab;
        const known = !this.state.unknownTime;
        const SYS = {
          vedic: {
            icon: 'ph-sun-dim', title: 'Vedic · Jyotiṣa', meta: 'Sidereal · Lahiri ayanamsa · ' + this.state.birthPlace,
            read: 'Shāni’s daśā has been running since 2019 — the long apprenticeship. It rewards the unglamorous version of ambition and punishes shortcuts, which matches the week you just had.',
            placements: [
              { label: 'Moon · Rāśi', value: 'Vṛṣabha', note: 'Steady, slow to decide, hard to move once moved' },
              { label: 'Nakṣatra', value: 'Rohiṇī', note: 'Pada 2 · makes things grow, resents rushing' },
              { label: 'Lagna', value: known ? 'Kanyā' : 'Needs birth time', note: known ? 'Analytical rising · the fixer others lean on' : 'Add your time to unlock houses' },
              { label: 'Mahādaśā', value: 'Śani', note: '2019–2038 · discipline over speed' }
            ],
            rows: [
              { icon: 'ph-clock-countdown', title: 'Antardaśā · Budha until Nov', body: 'A talking, negotiating sub-period. Contracts signed now hold; ones you delay tend to be re-quoted.' },
              { icon: 'ph-clock-countdown', title: 'Sāḍe Sātī · not yet', body: 'Saturn reaches Meṣa — the 12th from your Vṛṣabha Moon — in 2028. What you are feeling now is daśā, not transit.' },
              { icon: 'ph-leaf', title: 'Remedies, the useful kind', body: 'Saturn is served by consistency, not ritual: a fixed hour, a kept promise, and something given quietly on Saturdays.' }
            ]
          },
          western: {
            icon: 'ph-planet', title: 'Western · tropical', meta: 'Placidus houses · ' + (known ? 'exact time' : 'no birth time'),
            read: 'Pisces sun, Taurus moon, Virgo rising: you dream in wide strokes, digest slowly, and present as the practical one. The distance between the first and third is most of your inner argument.',
            placements: [
              { label: 'Sun', value: 'Pisces 23°', note: 'Meaning-led, absorbs the room' },
              { label: 'Moon', value: 'Taurus 8°', note: 'Needs steadiness before it can feel safe' },
              { label: 'Rising', value: known ? 'Virgo 15°' : 'Unknown', note: known ? 'Reads as competent, hides the doubt' : 'Birth time required' },
              { label: 'Dominant', value: 'Earth · mutable', note: 'Adapts, then quietly resents adapting' }
            ],
            rows: [
              { icon: 'ph-arrows-clockwise', title: 'Mercury direct Thursday', body: 'The classic read is renegotiation. Yours is literal: the price you were quoted expires the same day.' },
              { icon: 'ph-mountains', title: 'Saturn square natal Sun', body: 'A two-year lesson in authority — specifically, being the one who signs.' },
              { icon: 'ph-house', title: '10th house stellium', body: 'Career weight is real, not imagined. The chart agrees you carry more of it than you admit.' }
            ]
          },
          numerology: {
            icon: 'ph-number-circle-seven', title: 'Numerology', meta: 'Pythagorean · from 14 · 03 · 1994',
            read: 'Life path 7 with an 8 personal year: a thinker being asked to execute. That tension is exactly what a stalled decision feels like from the inside.',
            placements: [
              { label: 'Life path', value: '7', note: 'Analyst · needs to understand before moving' },
              { label: 'Expression', value: '5', note: 'Restless, learns by doing' },
              { label: 'Soul urge', value: '3', note: 'Wants to create and be heard' },
              { label: 'Personal year', value: '8', note: 'Money, authority, consequences' }
            ],
            rows: [
              { icon: 'ph-calendar-check', title: 'Personal day 7 · today', body: 'Finish, do not start. Sign what is already understood.' },
              { icon: 'ph-hash', title: 'Challenge number 2', body: 'Learning to decide without unanimous agreement — the same theme every system is circling.' }
            ]
          },
          all: {
            icon: 'ph-atom', title: 'All four, one page', meta: 'Vedic + Chinese + Western + numbers',
            read: 'Every system you asked for is saying one thing this week: finish the thing you already understand. They disagree only about why — Saturn calls it duty, the Dog calls it principle, Pisces calls it fear, and the 7 calls it insufficient information.',
            placements: [
              { label: 'Vedic', value: 'Śani mahādaśā', note: 'Discipline over speed' },
              { label: 'Zodiac', value: 'Saturn square Sun', note: 'Authority · being the one who signs' },
              { label: 'Numbers', value: '7 in an 8 year', note: 'Thinker asked to execute' },
              { label: 'Agreement', value: '3 of 3', note: 'Finish what is already understood' }
            ],
            rows: []
          }
        };
        const cs = SYS[tab] || SYS.all;
        const deck = TAROT;
        const isDaily = this.state.tarotMode === 'daily';
        const pick = this.state.pick, shuffling = this.state.shuffling, revealedD = this.state.revealed;
        const dailyCard = pick === null ? deck[2] : deck[(pick * 5 + 2) % deck.length];
        const fanCards = [0, 1, 2, 3, 4, 5, 6].map(i => {
          const ang = -27 + i * 9, dx = (i - 3) * 27, dy = Math.abs(i - 3) * 7;
          let tf, op = '1', z = 10 + i;
          if (shuffling) { tf = 'translate(0px,26px) rotate(' + ((i % 2 ? 4 : -4)) + 'deg) scale(.94)'; op = '.5'; }
          else if (pick === null) { tf = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + ang + 'deg)'; }
          else if (pick === i) { tf = 'translate(0px,-30px) rotate(0deg) scale(1.14)'; z = 40; }
          else { tf = 'translate(' + (dx * 2.4) + 'px,120px) rotate(' + (ang * 1.6) + 'deg) scale(.8)'; op = '0'; }
          return {
            pick: this.pickCard(i), tf, op, z: z + '',
            flip: pick === i && revealedD ? 'rotateY(180deg)' : 'rotateY(0deg)',
            tw: (2.4 + (i % 3) * 0.7).toFixed(1) + 's'
          };
        });
        const askCards = [deck[2], deck[0], deck[4]].map((c, i) => {
          const up = !!this.state.tarotFlipped[i];
          const slots = ['Where you are', 'What to do', 'What follows'];
          return {
            flip: this.flipCard(i), flip3d: up ? 'rotateY(180deg)' : 'rotateY(0deg)',
            slot: slots[i], slotLabel: up ? slots[i] : 'Face down',
            name: c.name, orient: c.up ? 'Upright' : 'Reversed', key: c.key
          };
        });
        const askRevealed = askCards.filter((c, i) => !!this.state.tarotFlipped[i]).length;
        const reads = isDaily
          ? (revealedD ? [{ slot: 'Today · you chose this one', name: dailyCard.name + (dailyCard.up ? '' : ' · reversed'), read: dailyCard.read, tie: dailyCard.tie }] : [])
          : [deck[2], deck[0], deck[4]].map((c, i) => ({
            slot: ['Where you are', 'What to do', 'What follows'][i],
            name: c.name + (c.up ? '' : ' · reversed'), read: c.read, tie: c.tie
          })).slice(0, askRevealed);
        const revealed = isDaily ? (revealedD ? 1 : 0) : askRevealed;
        return {
          stars,
          birthFields: [
            { label: 'Date of birth', value: this.state.birthDate, set: this.setBirth('birthDate'), ph: '14 · 03 · 1994', font: 'ui-monospace,Menlo,monospace', tag: 'Sun · numbers', tagFg: '#b5abfc', note: 'Enough for sun sign, life path and the Chinese year.' },
            { label: 'Time of birth', value: this.state.unknownTime ? '' : this.state.birthTime, set: this.setBirth('birthTime'), ph: '04:22', font: 'ui-monospace,Menlo,monospace', tag: known ? 'Rising · houses' : 'Missing', tagFg: known ? '#b5abfc' : '#75798c', note: 'Sets the ascendant, the houses and the Vedic lagna. Within 20 minutes is usually enough.' },
            { label: 'Place of birth', value: this.state.birthPlace, set: this.setBirth('birthPlace'), ph: 'Ahmedabad, Gujarat', font: 'inherit', tag: 'Sky position', tagFg: '#b5abfc', note: 'Latitude and longitude decide what was actually overhead.' }
          ],
          toggleUnknownTime: this.toggleUnknownTime,
          unknownIcon: this.state.unknownTime ? 'ph-check-square' : 'ph-square',
          unknownFg: this.state.unknownTime ? '#9184d9' : '#595d6c',
          birthConfidence: known
            ? 'Full chart available: sun, moon, rising, houses, Vedic lagna and daśā, four pillars, and all numerology. I will tell you when a reading depends on the time being exact.'
            : 'Without a birth time I will read sun, moon and numbers only, and I will say “not enough data” rather than guess a rising sign.',
          chartLine: (known ? 'Full chart' : 'Partial chart') + ' · ' + this.state.birthDate + (known ? ' · ' + this.state.birthTime : '') + ' · ' + this.state.birthPlace,
          cosmosTabs: [['all', 'All systems'], ['vedic', 'Vedic · kundli'], ['western', 'Zodiac'], ['numerology', 'Numerology']].map(([id, label]) => ({
            label, go: this.setCsTab(id),
            bg: tab === id ? '#2b2741' : 'transparent',
            border: tab === id ? '#5d5294' : '#3f424d',
            fg: tab === id ? '#e7e5fe' : '#9397ab'
          })),
          csIsVedic: tab === 'vedic',
          ...(() => {
            const d9 = this.state.varga === 'd9';
            const HOUSES = [
              { left: '50%', top: '22%' }, { left: '26%', top: '10%' }, { left: '10%', top: '26%' },
              { left: '24%', top: '50%' }, { left: '10%', top: '74%' }, { left: '26%', top: '90%' },
              { left: '50%', top: '78%' }, { left: '74%', top: '90%' }, { left: '90%', top: '74%' },
              { left: '76%', top: '50%' }, { left: '90%', top: '26%' }, { left: '74%', top: '10%' }
            ];
            const D1 = { asc: 6, planets: { 1: 'Ra', 5: 'Ma', 6: 'Sa · Ve · Me', 7: 'Su · Ke', 9: 'Ju · Mo' } };
            const D9 = { asc: 9, planets: { 1: 'Ve', 3: 'Mo · Ke', 4: 'Sa', 6: 'Su', 7: 'Ju · Ra', 10: 'Ma', 11: 'Me' } };
            const chart = d9 ? D9 : D1;
            const houses = HOUSES.map((pos, i) => {
              const rashiNum = ((chart.asc - 1 + i) % 12) + 1;
              const pl = chart.planets[i + 1] || '';
              const isAsc = i === 0;
              return {
                left: pos.left, top: pos.top, num: rashiNum + (isAsc ? ' ↑' : ''),
                planets: pl, numFg: isAsc ? '#d2cefd' : '#75798c',
                fg: pl ? '#e9e9ed' : '#3f424d'
              };
            });
            return {
              vargaTabs: [['d1', 'D1 · Lagna'], ['d9', 'D9 · Navāṃśa']].map(([id, label]) => {
                const on = this.state.varga === id;
                return { label, go: () => this.setState({ varga: id }), bg: on ? '#423a6a' : 'transparent', fg: on ? '#e7e5fe' : '#9397ab' };
              }),
              kundliTitle: d9 ? 'Navāṃśa · D9' : 'Lagna kuṇḍlī · D1',
              kundliMeta: d9 ? 'Marriage, dharma, the inner chart · Dhanu lagna' : 'North Indian · Lahiri ayanāṃśa · Kanyā lagna 15°04′',
              kundliHouses: houses,
              kundliLegend: ['↑ lagna', 'Su Mo Ma Me Ju Ve Sa', 'Ra · Ke nodes', 'numbers = rāśi'],
              kundliNote: d9
                ? 'Venus is vargottama — the same sign in D1 and D9. Classically that steadies whatever it touches: in your case, what you commit to, you keep.'
                : 'Six of nine grahas sit in the 5th to 9th arc — the houses of what you make and what you believe. The 6th holds Saturn in its own sign with Mercury and Venus: work, service, and the ability to outlast an obstacle rather than out-argue it.',
              grahaRows: [
                { name: 'Sūrya', rashi: 'Mīna', deg: '29°42′', nak: 'Revatī', pada: '4', house: '7', state: 'gandānta', stateFg: '#b5abfc' },
                { name: 'Candra', rashi: 'Vṛṣabha', deg: '08°16′', nak: 'Rohiṇī', pada: '2', house: '9', state: 'exalted', stateFg: '#9184d9' },
                { name: 'Maṅgala', rashi: 'Makara', deg: '21°03′', nak: 'Dhaniṣṭhā', pada: '1', house: '5', state: 'exalted', stateFg: '#9184d9' },
                { name: 'Budha', rashi: 'Kumbha', deg: '11°38′', nak: 'Śatabhiṣā', pada: '2', house: '6', state: '—', stateFg: '#595d6c' },
                { name: 'Guru', rashi: 'Vṛṣabha', deg: '02°55′', nak: 'Kṛttikā', pada: '3', house: '9', state: 'retrograde', stateFg: '#b5abfc' },
                { name: 'Śukra', rashi: 'Kumbha', deg: '26°10′', nak: 'Pūrva Bhādra', pada: '1', house: '6', state: 'vargottama', stateFg: '#9184d9' },
                { name: 'Śani', rashi: 'Kumbha', deg: '18°47′', nak: 'Śatabhiṣā', pada: '4', house: '6', state: 'own sign', stateFg: '#9184d9' },
                { name: 'Rāhu', rashi: 'Kanyā', deg: '04°21′', nak: 'Uttaraphalgunī', pada: '2', house: '1', state: 'on lagna', stateFg: '#b5abfc' },
                { name: 'Ketu', rashi: 'Mīna', deg: '04°21′', nak: 'Uttarabhādra', pada: '4', house: '7', state: '—', stateFg: '#595d6c' }
              ],
              dashaRows: [
                { lord: 'Śani–Śani', span: '2019–2022', pct: '100%', bg: '#3f424d', fg: '#9397ab', note: 'Completed. The years you stopped asking permission.' },
                { lord: 'Śani–Budha', span: '2022–Nov 26', pct: '88%', bg: '#9184d9', fg: '#e9e9ed', note: 'Running. Negotiation, contracts, being believed. Four months left — this is the window to sign.' },
                { lord: 'Śani–Ketu', span: 'Nov 26–Jan 28', pct: '0%', bg: '#292b31', fg: '#b2b6ca', note: 'Next. Detachment: things you outgrew fall away without ceremony.' },
                { lord: 'Śani–Śukra', span: 'Jan 28–Mar 31', pct: '0%', bg: '#292b31', fg: '#75798c', note: 'The comfortable stretch. Money and home both ease.' },
                { lord: 'Budha mahādaśā', span: '2038 →', pct: '0%', bg: '#292b31', fg: '#75798c', note: 'The long communication cycle. Whatever you are building now speaks for you then.' }
              ],
              dashaNow: 'You are 88% through Śani–Budha. Vedically and practically, the same sentence: sign the thing you already understand before November.',
              doshaCards: [
                { name: 'Maṅgala doṣa', icon: 'ph-check-circle', verdict: 'Not present', note: 'Mars sits in the 5th, not 1/2/4/7/8/12.', fg: '#9184d9', border: '#423a6a' },
                { name: 'Sāḍe sātī', icon: 'ph-clock-countdown', verdict: 'Begins 2028', note: 'Saturn reaches Meṣa, 12th from your Moon.', fg: '#b5abfc', border: 'rgba(233,233,237,.14)' },
                { name: 'Kāla sarpa', icon: 'ph-x-circle', verdict: 'Partial', note: 'Guru falls outside the Rāhu–Ketu axis.', fg: '#9397ab', border: 'rgba(233,233,237,.14)' },
                { name: 'Gaṇḍānta', icon: 'ph-warning-circle', verdict: 'Sun, 29°42′', note: 'Read gently: identity was formed at a threshold.', fg: '#b5abfc', border: 'rgba(233,233,237,.14)' }
              ],
              yogaRows: [
                { name: 'Viparīta Rāja yoga', status: 'present', icon: 'ph-shield-check', fg: '#9184d9', body: 'Śani, lord of the 6th, sits in the 6th in its own sign. The classical reading: difficulty becomes the source of standing. Yours shows up as outlasting people who out-talk you.' },
                { name: 'Rucaka-like Mars', status: 'partial', icon: 'ph-flame', fg: '#b5abfc', body: 'Mars exalted in Makara, but in the 5th rather than a kendra. Strength of execution without the public authority the full yoga gives — you finish, quietly.' },
                { name: 'Gaja-kesarī', status: 'present', icon: 'ph-sparkle', fg: '#9184d9', body: 'Guru with an exalted Candra in the 9th. Good counsel finds you; your judgement improves when you say the problem out loud to someone older.' },
                { name: 'Budha-Āditya', status: 'absent', icon: 'ph-minus-circle', fg: '#595d6c', body: 'Sun and Mercury are in different signs. Analysis and identity stay separate — which is why criticism of the work does not have to be criticism of you.' }
              ],
              avBars: [30, 26, 34, 25, 31, 38, 22, 27, 33, 29, 35, 24].map((v, i) => ({
                v: v, h: Math.round((v - 18) * 2.6), h_label: (i + 1),
                bg: v >= 30 ? '#9184d9' : (v >= 26 ? '#5d5294' : '#3f424d'),
                fg: v >= 30 ? '#d2cefd' : '#75798c'
              })),
              panchangPlace: this.state.birthPlace.split(',')[0] + ' · 29 Jul',
              panchang: [
                { label: 'Tithi', value: 'Kṛṣṇa Ṣaṣṭhī' }, { label: 'Vāra', value: 'Budhavāra' },
                { label: 'Nakṣatra', value: 'Aśvinī → 21:12' }, { label: 'Yoga', value: 'Śubha' },
                { label: 'Karaṇa', value: 'Vaṇija' }, { label: 'Moon today', value: 'Meṣa' }
              ],
              muhurta: 'Abhijit muhūrta today: 12:04–12:56. If the vendor call has to happen tomorrow, 11:20–12:40 is the clean window — and it matches your own best hours.'
            };
          })(),
          csIcon: cs.icon, csTitle: cs.title, csMeta: cs.meta, csRead: cs.read,
          csPlacements: cs.placements, csRows: cs.rows, csHasRows: cs.rows.length > 0,
          csAgree: 'Four traditions, built centuries and continents apart, are pointing at the same Thursday.',
          csConsensus: [
            { name: 'Finish', pct: '92%', verdict: 'all four' },
            { name: 'Start new', pct: '18%', verdict: 'none' },
            { name: 'Rest', pct: '64%', verdict: 'three' },
            { name: 'Family', pct: '71%', verdict: 'three' }
          ],
          csConflict: 'Where they disagree: Vedic says wait for Budha to finish, Western says move on Thursday. I would take Thursday — your vendor, not the sky, set that deadline.',
          tarotDate: 'Wed 29 Jul',
          tarotTitle: isDaily ? 'One card for today' : 'Ask, then draw three',
          tarotLead: isDaily ? 'Drawn once a day, at your hour. It knows what your week looked like before it speaks.' : 'Type the question you are actually carrying. Three cards: where you are, what to do, what follows.',
          tarotModes: [['daily', 'Daily card'], ['ask', 'Ask a question']].map(([id, label]) => this.seg(this.state.tarotMode, id, v => this.setTarotMode(v), label)),
          tarotAsking: !isDaily, tarotQ: this.state.tarotQ, setTarotQ: this.setTarotQ, onTarotKey: this.onTarotKey,
          tarotCards: askCards, tarotHasRead: revealed > 0, tarotReads: reads,
          tarotIsDaily: isDaily, tarotIsAsk: !isDaily,
          fanCards, dailyPicked: revealedD, dailyHeld: pick !== null && !revealedD, revealCard: this.revealCard,
          dailyName: dailyCard.name, dailyOrient: dailyCard.up ? 'Upright' : 'Reversed',
          dailyKey: dailyCard.key, dailyIcon: dailyCard.up ? 'ph-star-four' : 'ph-arrow-u-down-left',
          fanStatus: shuffling ? 'Shuffling…' : (pick === null ? 'Seven cards. Take a breath, and pick the one your hand goes to.' : (revealedD ? 'This is yours for today.' : 'Held. Turn it over when you are ready.')),
          fanStatusFg: pick !== null && revealedD ? '#d2cefd' : '#9397ab',
          shuffleDeck: this.shuffleDeck,
          shuffleLabel: pick === null ? 'Shuffle the deck' : 'Shuffle and pick again',
          shuffleBorder: pick === null ? '#3f424d' : '#5d5294',
          shuffleFg: pick === null ? '#b2b6ca' : '#d2cefd',
          tarotSave: this.tarotSave, tarotReset: this.tarotReset,
          tarotResetLabel: revealed > 0 ? 'Shuffle and draw again' : 'Tap a card to turn it over'
        };
      })(),
      ...(() => {
        const line = this.state.affLine, playing = this.state.playing;
        const streaks = [];
        for (let i = 0; i < 16; i++) {
          const a = Math.sin(i * 33.77) * 43758.5453; const r = a - Math.floor(a);
          streaks.push({ left: Math.round(r * 96) + '%', w: (r > 0.7 ? 2 : 1) + 'px', h: Math.round(60 + r * 120) + 'px', op: (0.12 + r * 0.3).toFixed(2), dur: (3.4 + r * 3.6).toFixed(1) + 's', delay: (r * 4).toFixed(1) + 's' });
        }
        const total = SANKALPA.length * (this.state.pace === 'slow' ? 4.2 : (this.state.pace === 'quick' ? 2.2 : 3.2));
        const done = (line + (playing ? 1 : 0)) * (total / SANKALPA.length);
        const fmt = (s) => Math.floor(s / 60) + ':' + String(Math.round(s % 60)).padStart(2, '0');
        return {
          goAffirm: this.go('affirm'),
          affirmHint: 'It becomes a line you can hear tomorrow morning, in your own words.',
          affirmTabLabel: 'Open affirmations · ' + this.state.affirmations.length + ' saved',
          affirmCount: 'Sankalpa · ' + SANKALPA.length + ' lines · rebuilt every Sunday',
          addAffirmation: this.addAffirmation,
          sankalpaMeta: playing ? 'line ' + (line + 1) + ' of ' + SANKALPA.length : 'rebuilt 3 days ago',
          lyricLines: SANKALPA.map((l, i) => {
            const active = playing && i === line;
            const near = Math.abs(i - line) <= 1;
            return {
              text: l.text, source: l.source, active,
              op: active ? '1' : (playing ? (near ? '.42' : '.16') : '.62'),
              shift: active ? '4px' : '0px',
              size: active ? '21px' : '15px',
              fg: active ? 'var(--color-accent-100)' : 'var(--color-neutral-300)'
            };
          }),
          chantWaves: bars.slice(0, 4).map(b => Object.assign({}, b, { h: Math.max(3, Math.round(b.h * 0.1)) })),
          playPct: Math.min(100, Math.round((done / total) * 100)) + '%',
          playElapsed: fmt(done), playTotal: fmt(total),
          togglePlay: this.togglePlay, affirmRestart: this.affirmRestart,
          playIcon: playing ? 'ph-pause' : 'ph-play',
          playLabel: playing ? 'Playing · ' + (line + 1) + ' of ' + SANKALPA.length : 'Play my sankalpa',
          playBg: playing ? 'var(--color-accent-900)' : 'transparent',
          ambientOpacity: this.state.ambient ? (playing ? '1' : '.45') : '0',
          bellAnim1: playing && this.state.ambient ? 'ring 6s ease-out infinite' : 'none',
          bellAnim2: playing && this.state.ambient ? 'ring 6s ease-out 2.6s infinite' : 'none',
          toggleAmbient: this.toggleAmbient,
          ambientIcon: this.state.ambient ? 'ph-speaker-high' : 'ph-speaker-slash',
          ambientFg: this.state.ambient ? 'var(--color-accent-200)' : 'var(--color-neutral-500)',
          ambientBorder: this.state.ambient ? 'var(--color-accent-700)' : 'var(--color-neutral-800)',
          soundOpts: [['bells', 'Tibetan bells', 'ph-bell-simple'], ['water', 'Waterfall', 'ph-drop'], ['both', 'Bells over water', 'ph-waves'], ['silence', 'Voice only', 'ph-speaker-slash']].map(([id, label, icon]) => {
            const on = this.state.sound === id;
            return { label, icon, go: this.setSound(id), bg: on ? 'var(--color-accent-900)' : 'transparent', border: on ? 'var(--color-accent-700)' : 'var(--color-neutral-800)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' };
          }),
          voiceNote: this.state.affVoice === 'mine' ? 'Built from your own voice samples' : 'Neutral, slow, no accent coaching',
          voiceOpts: [['guide', 'The Guide'], ['mine', 'My own voice'], ['gu', 'ગુજરાતી']].map(([id, label]) => this.seg(this.state.affVoice, id, v => this.setVoice(v), label)),
          paceOpts: [['slow', 'Slow'], ['calm', 'Calm'], ['quick', 'Brisk']].map(([id, label]) => this.seg(this.state.pace, id, v => this.setPace(v), label)),
          sankalpaWhy: 'Seven lines, all of them yours. I took the sentences you repeated, the ones you said most quietly, and the resolve you set on Sunday — then put them in the present tense, because a sankalpa is stated as already true.',
          sankalpaSources: [
            'Three lines lifted from your journal answers this week.',
            'Two from the Guide session where you named the real fear.',
            'One from Life Path, one from the day you chose the name.'
          ],
          affList: this.state.affirmations.map((a, i) => ({
            text: a.text, source: a.source,
            play: this.togglePlay, icon: 'ph-play',
            border: a.pinned ? 'var(--color-accent-800)' : 'var(--color-divider)',
            pin: this.togglePin(i), pinIcon: a.pinned ? 'ph-push-pin-fill' : 'ph-push-pin',
            pinFg: a.pinned ? 'var(--color-accent-400)' : 'var(--color-neutral-700)'
          })),
          streaks
        };
      })(),
      goPersona: this.go('persona'), goVoice1: this.go('voice1'), goVoice2: this.go('voice2'),
      goEnroll: this.go('enroll'), goOutcome: this.go('outcome'), goControl: this.go('control'),
      goPairPin: this.go('pairPin'), goCalConsent: this.go('calConsent'), goCalDraft: this.go('calDraft'),
      goTravelHome: this.go('travelHome'), goReview: this.go('review'), goJournal: this.go('journal'),
      goQuestNew: this.go('questNew'), goBucket: this.go('bucket'), goReminders: this.go('reminders'),

      goalCards: [
        ['g1', 'Remember every detail', 'Names, numbers and promises, exactly as they were said.', 'ph-brain'],
        ['g2', 'Finish what I start', 'Tasks lifted out of conversations, then quietly chased.', 'ph-check-square'],
        ['g3', 'Think more clearly', 'Two honest minutes a day, against the week you actually had.', 'ph-spiral'],
        ['g4', 'Study better', 'Lectures become notes, then revision questions.', 'ph-student'],
        ['g5', 'Grow the business', 'Vendors, meetings and follow-ups in one thread.', 'ph-trend-up'],
        ['g6', 'Speak any language', 'Say it once; the phone says it for you, out loud.', 'ph-translate']
      ].map(([id, label, note, icon]) => {
        const on = !!this.state.goals[id];
        return { label, note, icon, toggle: this.toggleGoal(id), check: on ? 'ph-check-circle' : 'ph-circle', iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)', border: on ? 'var(--color-accent-700)' : 'var(--color-divider)' };
      }),
      goalSummary: (() => {
        const n = Object.keys(this.state.goals).filter(k => this.state.goals[k]).length;
        if (!n) return 'Nothing picked yet — STAY will simply show your day in order.';
        return n + ' chosen · Today will lead with open promises, and Ask will suggest questions in that direction.';
      })(),
      personaCards: PERSONAS.map(p => {
        const on = this.state.persona === p.id;
        return { label: p.label, icon: p.icon, outcome: p.outcome, go: this.setPersona(p.id), check: on ? 'ph-check-circle' : 'ph-circle', iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)', border: on ? 'var(--color-accent-700)' : 'var(--color-divider)', bg: on ? 'var(--color-accent-900)' : 'var(--color-surface)' };
      }),
      samplePhrase: ['“My name is Aarav, and at work I speak half Hindi, half English.”', '“Chirag bhai said two thousand three hundred sixty five per unit.”', '“Remind me to call Ba on Saturday morning.”'][Math.min(2, this.state.samples)],
      samplePhraseNote: 'Line ' + Math.min(3, this.state.samples + 1) + ' of 3 · normal voice, normal speed',
      takeSample: this.takeSample,
      sampleIcon: this.state.sampling ? 'ph-waveform' : 'ph-microphone',
      sampleAnim: this.state.sampling ? 'breathe 1.3s ease-in-out infinite' : 'none',
      sampleRing: this.state.sampling ? 'var(--color-accent)' : 'var(--color-accent-600)',
      sampleBars: bars.slice(0, 18).map(b => Object.assign({}, b, { h: Math.round(b.h * 0.42), bg: this.state.sampling ? 'var(--color-accent-400)' : 'var(--color-neutral-800)' })),
      sampleStatus: this.state.sampling ? 'Listening…' : (this.state.samples === 0 ? 'Tap once and read the line' : (this.state.samples < 3 ? 'Got it. One more line.' : 'Voice profile ready')),
      sampleDots: [0, 1, 2].map(i => ({ bg: i < this.state.samples ? 'var(--color-accent)' : 'var(--color-neutral-800)' })),
      samplePct: [12, 58, 86, 96][this.state.samples] + '%',
      sampleCta: this.state.samples >= 3 ? 'Continue' : 'Skip for now',
      sampleCtaBorder: this.state.samples >= 3 ? 'var(--color-accent)' : 'var(--color-neutral-700)',
      sampleCtaFg: this.state.samples >= 3 ? 'var(--color-accent-200)' : 'var(--color-neutral-400)',
      nameInput: this.state.nameInput, setNameInput: this.setNameInput, addName: this.addName, onNameKey: this.onNameKey,
      nameChips: this.state.names.map((n, i) => ({ label: n, conf: i < 5 ? '99%' : 'new' })),
      enrollRows: [
        ['e1', 'Didi', 'family · heard most evenings'],
        ['e2', 'Meera', 'team · heard in standups'],
        ['e3', 'Chirag bhai', 'vendor · heard on calls']
      ].map(([id, name, who]) => {
        const st2 = this.state.enroll[id];
        const map = {
          consented: { status: who + ' · consent recorded ' + '· named in summaries', icon: 'ph-user-check', iconFg: 'var(--color-accent)', btn: 'Remove', btnBorder: 'var(--color-neutral-800)', btnFg: 'var(--color-neutral-400)' },
          invited: { status: who + ' · consent request sent', icon: 'ph-paper-plane-tilt', iconFg: 'var(--color-accent-400)', btn: 'Resend', btnBorder: 'var(--color-accent-700)', btnFg: 'var(--color-accent-200)' },
          none: { status: who + ' · currently just “another voice”', icon: 'ph-user', iconFg: 'var(--color-neutral-600)', btn: 'Ask consent', btnBorder: 'var(--color-accent-700)', btnFg: 'var(--color-accent-200)' }
        };
        return Object.assign({ name, action: this.enrollAct(id) }, map[st2]);
      }),
      personaPromise: (PERSONAS.find(p => p.id === this.state.persona) || PERSONAS[1]).promise,
      personaStat: (PERSONAS.find(p => p.id === this.state.persona) || PERSONAS[1]).stat,
      personaStatNote: (PERSONAS.find(p => p.id === this.state.persona) || PERSONAS[1]).statNote,
      firstWeek: [
        { day: 'Day 1', title: 'Wear it for one meeting', body: 'Nothing else. See what comes back when it ends.' },
        { day: 'Day 3', title: 'Ask it your first question', body: '“What did I promise this week?” — that is the moment it clicks.' },
        { day: 'Day 7', title: 'Your first weekly walk-through', body: 'Ten minutes. Quests, bucket list, and what actually moved.' }
      ],

      deviceList: [
        { id: 'd1', name: 'STAY One', model: 'Listen-only', finish: 'Obsidian', batt: '86%', body: 'radial-gradient(120% 120% at 30% 22%,#4c5069,#1c1e2a 72%)', bail: '#5a5e73', dot: 'var(--color-accent)' },
        { id: 'd2', name: 'STAY One Pro', model: 'Speaks back', finish: 'Warm Gold', batt: '42%', body: 'radial-gradient(120% 120% at 30% 22%,#8a7350,#2a231a 72%)', bail: '#8a7350', dot: 'var(--color-accent-400)' },
        { id: 'd3', name: 'STAY Clip', model: 'Pocket clip', finish: 'Brushed Steel', batt: '12%', body: 'radial-gradient(120% 120% at 30% 22%,#767b8c,#25272f 72%)', bail: '#767b8c', dot: 'var(--color-neutral-600)' }
      ].map(d => {
        const active = this.state.activeDevice === d.id;
        return Object.assign({}, d, {
          go: this.setActiveDevice(d.id),
          border: active ? 'var(--color-accent-700)' : 'var(--color-divider)',
          badge: active ? 'Active' : (d.id === 'd3' ? 'Charging' : 'Idle'),
          badgeBg: active ? 'var(--color-accent-800)' : 'var(--color-neutral-900)',
          badgeFg: active ? 'var(--color-accent-100)' : 'var(--color-neutral-500)',
          battBg: parseInt(d.batt, 10) < 20 ? 'var(--color-neutral-600)' : 'var(--color-accent)'
        });
      }),
      models: [
        { name: 'One', note: 'Listens. The everyday pendant.', price: '₹9,999', border: this.state.model === 'one' ? 'var(--color-accent-700)' : 'var(--color-divider)' },
        { name: 'One Pro', note: 'Speaks back. Needed for traveller mode.', price: '₹12,999', border: this.state.model === 'pro' ? 'var(--color-accent-700)' : 'var(--color-divider)' },
        { name: 'Clip', note: 'Same mics, pocket clip, no bail.', price: '₹7,999', border: this.state.model === 'clip' ? 'var(--color-accent-700)' : 'var(--color-divider)' }
      ],
      modelPicker: [['one', 'STAY One'], ['pro', 'One Pro'], ['clip', 'Clip']].map(([id, name]) => {
        const on = this.state.model === id;
        return { name, go: this.setModel(id), border: on ? 'var(--color-accent-700)' : 'var(--color-divider)', bg: on ? 'var(--color-accent-900)' : 'var(--color-surface)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' };
      }),
      pairTitleTxt: ['Wake the pendant', 'Do these match?', 'Name this one'][this.state.pairStep],
      pairSubTxt: [
        'Press twice on the face. The light breathes amber when it is ready to pair.',
        'The pendant blinks its code back at you — count the blinks, or trust the match.',
        'Two pendants, one phone: give this one a name so summaries say where they came from.'
      ][this.state.pairStep],
      pairLed: ['#e8a33d', 'var(--color-accent)', 'var(--color-accent)'][this.state.pairStep],
      pinDigits: '429107'.split('').map((d) => {
        const filled = this.state.pairStep >= 1;
        return { d: filled ? d : '·', border: filled ? 'var(--color-accent-700)' : 'var(--color-divider)', fg: filled ? 'var(--color-accent-100)' : 'var(--color-neutral-700)' };
      }),
      pairStepTxt: [
        'Waiting for a double press… keep the pendant within arm’s reach.',
        'Six digits, shown here and blinked there. Nothing else pairs while this is open.',
        'Paired over BLE 5.3. Audio never leaves it unencrypted.'
      ][this.state.pairStep],
      pairSteps: [['Double press the face', 'ph-hand-tap'], ['Match the six-digit code', 'ph-password'], ['Name it and finish', 'ph-check-circle']].map(([label, icon], i) => {
        const st2 = this.state.pairStep > i ? 'done' : (this.state.pairStep === i ? 'now' : 'todo');
        return {
          label, icon: st2 === 'done' ? 'ph-check-circle' : icon,
          fg: st2 === 'todo' ? 'var(--color-neutral-700)' : (st2 === 'now' ? 'var(--color-accent-100)' : 'var(--color-neutral-400)'),
          bg: st2 === 'now' ? 'var(--color-accent-900)' : 'transparent',
          border: st2 === 'now' ? 'var(--color-accent-800)' : 'var(--color-divider)'
        };
      }),
      pairAdvance: this.pairAdvance,
      pairCta: ['It is blinking amber', 'The codes match', 'Save this pendant'][this.state.pairStep],

      triggerOpts: [
        ['pendant', 'Pendant only', 'ph-hand-tap', 'Two presses on the face starts and ends a session. The phone can stay in your pocket.'],
        ['phone', 'Phone only', 'ph-device-mobile', 'The pendant never starts on its own — useful in rooms where you want zero doubt.'],
        ['either', 'Either one', 'ph-arrows-in', 'Recommended. Start on the pendant, end on the phone, or the other way round.']
      ].map(([id, label, icon, note]) => {
        const on = this.state.trigger === id;
        return { label, icon, note, go: this.setTrigger(id), check: on ? 'ph-check-circle' : 'ph-circle', iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)', bg: on ? 'var(--color-accent-900)' : 'var(--color-surface)', border: on ? 'var(--color-accent-700)' : 'var(--color-divider)' };
      }),
      gestures: [
        { input: '1 press', action: 'Mute now — in hardware, light goes out' },
        { input: '2 presses', action: 'Start or end a session' },
        { input: 'Hold 3 s', action: 'Guest mode — nothing is written to memory' },
        { input: 'Double tap', action: 'Bookmark this moment for later' }
      ],
      ctrlToggles: [
        { title: 'Haptic confirmation', body: 'A short pulse so you know it heard the press, without looking.' },
        { title: 'Bright record light', body: 'Brighter amber for meeting rooms and daylight.' },
        { title: 'Auto-end after silence', body: 'Ends the session after 90 seconds of quiet, to save battery.' },
        { title: 'Low-battery throttle', body: 'Below 10%, capture only, comprehension waits for charge.' }
      ].map((c, i) => {
        const id = 'k' + (i + 1); const on = this.state.ctrl[id];
        return Object.assign({ toggle: this.toggleCtrl(id) }, c, this.sw(on));
      }),

      questTitle: this.state.questTitle, setQuestTitle: this.setQuestTitle,
      questWhy: this.state.questWhy, setQuestWhy: this.setQuestWhy,
      cadenceOpts: [['daily', 'Daily'], ['weekly', 'Weekly'], ['date', 'By a date']].map(([id, label]) => this.seg(this.state.cadence, id, v => () => this.setState({ cadence: v }), label)),
      horizonOpts: [['30', '30 days'], ['90', '90 days'], ['365', 'This year'], ['none', 'No end date']].map(([id, label]) => {
        const on = this.state.horizon === id;
        return { label, go: this.setHorizon(id), bg: on ? 'var(--color-accent-900)' : 'transparent', border: on ? 'var(--color-accent-700)' : 'var(--color-neutral-800)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' };
      }),
      questHelp: [
        ['h1', 'Bring it up in the daily review'],
        ['h2', 'Pull tasks for it out of my conversations'],
        ['h3', 'Nudge me if I have not touched it in five days']
      ].map(([id, label]) => {
        const on = !!this.state.qhelp[id];
        return { label, toggle: this.toggleQhelp(id), icon: on ? 'ph-check-square' : 'ph-square', iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)', fg: on ? 'var(--color-text)' : 'var(--color-neutral-500)' };
      }),
      createQuest: this.createQuest,
      questFooter: 'It appears in Plan, and in Sunday’s walk-through with the bucket list.',

      reviewMoved: [
        ['m1', 'Pricing copy drafted', 'Said at 21:02 · “half of it is done”'],
        ['m2', 'Vendor quote received and checked', 'Vendor call · 12:15'],
        ['m3', 'D30 events wired up', 'Standup · 09:52 · assigned to Meera']
      ].map(([id, text, src]) => {
        const on = !!this.state.moved[id];
        return { text, src, toggle: this.toggleMoved(id), icon: on ? 'ph-check-circle' : 'ph-circle', iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)', bg: on ? 'var(--color-neutral-900)' : 'transparent', fg: on ? 'var(--color-text)' : 'var(--color-neutral-500)' };
      }),
      reviewTomorrow: this.state.reviewTomorrow, setReviewTomorrow: this.setReviewTomorrow,
      saveReview: this.saveReview,
      reviewCta: this.state.reviewSaved ? 'Saved · open journal' : 'Save review',

      journalYes: this.journalYes, journalNo: this.journalNo,
      journalInput: this.state.journalInput, setJournalInput: this.setJournalInput,
      onJournalKey: this.onJournalKey, addJournal: this.addJournal,
      ...(() => {
        const page = this.state.journalPage;
        const q = JOURNAL_QS[this.state.qIndex];
        const entry = page > 0 ? this.state.journal[page - 1] : null;
        const sel = WEB_STRANDS.find(w => w.id === this.state.webSel) || WEB_STRANDS[0];
        const nodes = WEB_STRANDS.map((w, i) => {
          const ang = (-90 + i * 60) * Math.PI / 180;
          const r = 96;
          const on = this.state.webSel === w.id;
          return {
            label: w.label, count: w.count, go: this.selectWeb(w.id),
            left: Math.round(50 + Math.cos(ang) * 33) + '%',
            top: Math.round(50 + Math.sin(ang) * 38) + '%',
            rot: Math.round(-90 + i * 60) + 'deg', lineW: r + 'px',
            lineFrom: on ? 'var(--color-accent)' : 'var(--color-neutral-800)',
            lineTo: on ? 'var(--color-accent-700)' : 'transparent',
            bg: on ? 'var(--color-accent-900)' : 'var(--color-neutral-900)',
            border: on ? 'var(--color-accent-600)' : 'var(--color-divider)',
            fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-300)',
            subFg: on ? 'var(--color-accent-400)' : 'var(--color-neutral-600)'
          };
        });
        return {
          journalDate: 'Wednesday · 29 July',
          journalStreak: '11 days',
          bookTransform: this.state.turning ? 'rotateY(-62deg)' : 'rotateY(0deg)',
          bookOpacity: this.state.turning ? '.25' : '1',
          pageKicker: page === 0 ? 'Question ' + (47 + this.state.qIndex) : 'Page ' + (page + 1) + ' · earlier',
          pageNumber: page === 0 ? 'Tonight' : (entry ? entry.time : ''),
          pageQuestion: page === 0 ? q.q : (entry ? '“' + entry.quest + '”' : ''),
          pageProse: page === 0 ? q.prose : 'What you wrote, kept exactly as you said it.',
          pageIsToday: page === 0,
          pageHasEntry: page > 0 && !!entry,
          pageEntry: entry ? entry.text : '',
          pageEntryTime: entry ? entry.time : '',
          pageEntryQuest: entry ? entry.quest : '',
          pageHasNote: !!(entry && entry.hasNote),
          pageNote: entry ? entry.note : '',
          pageDots: [0, 1, 2, 3].map(i => ({
            w: i === Math.min(3, page) ? '18px' : '4px',
            bg: i === Math.min(3, page) ? 'var(--color-accent)' : 'var(--color-neutral-800)'
          })),
          pagePrev: this.turnPage(-1), pageNext: this.turnPage(1),
          journalSpeak: this.journalSpeak,
          jsRing: this.state.jsRec ? 'var(--color-accent)' : 'var(--color-accent-700)',
          jsAnim1: this.state.jsRec ? 'ring 2.2s ease-out infinite' : 'breathe 4s ease-in-out infinite',
          jsAnim2: this.state.jsRec ? 'ring 2.2s ease-out .8s infinite' : 'none',
          jsIcon: this.state.jsRec ? 'ph-waveform' : 'ph-microphone',
          jsWaveOpacity: this.state.jsRec ? '1' : '.18',
          jsStatus: this.state.jsRec ? 'Listening — say it however it comes out' : 'Speak your answer, or write below',
          journalWaves: bars.slice(0, 20).map(b => Object.assign({}, b, { h: Math.max(3, Math.round(b.h * 0.24)) })),
          journalPlaceholder: 'Start anywhere…',
          shuffleQuestion: this.shuffleQuestion,
          webNodes: nodes, webTotal: '105',
          webSelLabel: sel.label, webSelIcon: sel.icon, webSelMethod: sel.method,
          webSelBody: sel.body, webSelQuotes: sel.quotes, webSelQuestion: sel.question,
          stoicMine: ['Saying yes to Chirag bhai', 'Being home by 8 on Saturday', 'Sleeping before midnight'],
          stoicNot: ['Whether steel prices move', 'What the investor decides', 'How Ba’s scan reads'],
          stoicNote: 'Two thirds of what kept you up this week sits in the right-hand column. The left-hand column takes about forty minutes.',
          emotions: [
            { name: 'Anticipation', shade: 'vigilance → interest', pct: '78%' },
            { name: 'Fear', shade: 'apprehension', pct: '52%' },
            { name: 'Trust', shade: 'acceptance', pct: '61%' },
            { name: 'Joy', shade: 'serenity', pct: '34%' },
            { name: 'Sadness', shade: 'pensiveness', pct: '29%' },
            { name: 'Anger', shade: 'annoyance', pct: '23%' },
            { name: 'Surprise', shade: 'distraction', pct: '18%' },
            { name: 'Disgust', shade: 'boredom', pct: '9%' }
          ].map(e => ({ name: e.name, shade: e.shade, pct: e.pct, bg: parseInt(e.pct, 10) > 50 ? 'var(--color-accent)' : 'var(--color-accent-700)' })),
          emotionRead: 'Anticipation over apprehension, with joy low. In Plutchik’s terms that pairing is anxiety — not a mood, a stance. It usually eases when one open decision closes.',
          journalEntries: this.state.journal.map((j, i) => Object.assign({}, j, { go: this.openPage(i) }))
        };
      })(),

      bucketItems: [
        ['b1', 'Take Ba to Kedarnath', 'ph-mountains', 'Before next monsoon', 'Wednesday', 'You told Didi “we should do it before her knees get worse.”'],
        ['b2', 'Ship STAY to 10,000 people', 'ph-rocket-launch', 'This year', 'today', 'Mentioned in 9 of this week’s 14 sessions.'],
        ['b3', 'Run a half marathon', 'ph-sneaker', 'No end date', '6 weeks ago', 'Has not come up in conversation since June.'],
        ['b4', 'Learn to sail', 'ph-boat', 'Someday', '4 months ago', 'Came up once, on the Goa trip.']
      ].map(([id, title, icon, horizon, last, evidence]) => {
        const on = !!this.state.bucketWeekly[id];
        return Object.assign({ title, icon, horizon, last, evidence, toggle: this.toggleBucket(id) }, this.sw(on));
      }),

      calChip: this.state.calConnected ? 'Calendar connected' : 'Connect calendar',
      calChipBorder: this.state.calConnected ? 'var(--color-accent-700)' : 'var(--color-neutral-800)',
      calChipFg: this.state.calConnected ? 'var(--color-accent-200)' : 'var(--color-neutral-400)',
      reminderList: [
        { mon: 'Jul', day: '30', title: 'Enclosure decision — Chirag bhai', src: '“Thursday tak bata dena” · Vendor call', time: '11:30' },
        { mon: 'Jul', day: '31', title: 'Send D30 retention to the investor', src: '“Send me D30 by Friday” · Investor coffee', time: '17:00' },
        { mon: 'Aug', day: '01', title: 'Confirm Ba’s ride with Didi', src: 'Family call · Gujarati', time: '20:00' },
        { mon: 'Aug', day: '02', title: 'Ba’s follow-up · Sterling', src: 'Family call · “શનિવારે સાઢા દસે”', time: '10:30' }
      ].map(r => Object.assign({}, r, {
        go: this.go('calDraft'),
        btn: this.state.calConnected ? 'In Google Calendar · open' : 'Add to Google Calendar',
        btnBorder: this.state.calConnected ? 'var(--color-neutral-800)' : 'var(--color-accent-700)',
        btnFg: this.state.calConnected ? 'var(--color-neutral-300)' : 'var(--color-accent-200)'
      })),
      calScopes: [
        { icon: 'ph-check-circle', fg: 'var(--color-accent)', titleFg: 'var(--color-text)', title: 'Create events you confirm', body: 'One tap per event. STAY writes the title, time, guests and a note with the quote it came from.' },
        { icon: 'ph-check-circle', fg: 'var(--color-accent)', titleFg: 'var(--color-text)', title: 'Read only when you are busy', body: 'Free/busy times, so it never suggests a slot you cannot take.' },
        { icon: 'ph-x-circle', fg: 'var(--color-neutral-600)', titleFg: 'var(--color-neutral-400)', title: 'Never read what is in your events', body: 'Titles, guests and notes of existing events are not requested at all.' },
        { icon: 'ph-x-circle', fg: 'var(--color-neutral-600)', titleFg: 'var(--color-neutral-400)', title: 'Never invite anyone silently', body: 'Guests are only added if you tick them on the confirmation screen.' }
      ],
      calConnected: this.state.calConnected, toggleCal: this.toggleCal,
      calBtn: this.state.calConnected ? 'Disconnect Google Calendar' : 'Connect Google Calendar',
      calBtnBorder: this.state.calConnected ? 'var(--color-neutral-700)' : 'var(--color-accent)',
      calBtnFg: this.state.calConnected ? 'var(--color-neutral-300)' : 'var(--color-accent-200)',
      attendees: (() => {
        const defs = [['a1', 'Chirag bhai', 'Vendor · external guest'], ['a2', 'Meera', 'Your team'], ['a3', 'You', 'Organiser']];
        const firstOn = defs.filter(d => this.state.att[d[0]])[0];
        return defs.map(([id, name, role]) => {
          const on = !!this.state.att[id];
          return { name, role, toggle: this.toggleAtt(id), icon: on ? 'ph-check-circle' : 'ph-circle', iconFg: on ? 'var(--color-accent)' : 'var(--color-neutral-700)', fg: on ? 'var(--color-text)' : 'var(--color-neutral-500)', isOwner: !!firstOn && firstOn[0] === id };
        });
      })(),
      evDates: [['thu', 'Thu 30 Jul'], ['fri', 'Fri 31 Jul'], ['mon', 'Mon 3 Aug']].map(([id, label]) => {
        const on = this.state.evDate === id;
        return { label, go: this.setEv('evDate', id), bg: on ? 'var(--color-accent-900)' : 'transparent', border: on ? 'var(--color-accent-700)' : 'var(--color-neutral-800)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' };
      }),
      evTimes: ['10:00', '11:30', '16:00', '18:30'].map(label => {
        const on = this.state.evTime === label;
        return { label, go: this.setEv('evTime', label), bg: on ? 'var(--color-accent-900)' : 'transparent', border: on ? 'var(--color-accent-700)' : 'var(--color-neutral-800)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' };
      }),
      evDurs: ['15 min', '30 min', '45 min'].map(label => {
        const on = this.state.evDur === label.split(' ')[0];
        return { label, go: this.setEv('evDur', label.split(' ')[0]), bg: on ? 'var(--color-accent-900)' : 'transparent', border: on ? 'var(--color-accent-700)' : 'var(--color-neutral-800)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' };
      }),
      evRem: this.sw(this.state.evReminder), toggleEvReminder: this.toggleEvReminder,
      calCreated: this.state.calCreated,
      calCreatedLine: 'Added · ' + ({ thu: 'Thu 30 Jul', fri: 'Fri 31 Jul', mon: 'Mon 3 Aug' })[this.state.evDate] + ', ' + this.state.evTime,
      createEvent: this.createEvent,
      createEventLabel: this.state.calConnected ? (this.state.calCreated ? 'Update the event' : 'Create in Google Calendar') : 'Connect Google Calendar first',

      fromLang: LANGS[this.state.travelFrom], toLang: LANGS[this.state.travelTo],
      swapLangs: this.swapLangs, pickFrom: this.cycleFrom, pickTo: this.cycleTo,
      langPills: Object.keys(LANGS).map(k => {
        const isSource = !!SOURCE[k];
        const on = isSource ? this.state.travelFrom === k : this.state.travelTo === k;
        return { label: LANGS[k], go: isSource ? this.setTravel('travelFrom', k) : this.setTravel('travelTo', k), bg: on ? 'var(--color-accent-900)' : 'transparent', border: on ? 'var(--color-accent-700)' : 'var(--color-neutral-800)', fg: on ? 'var(--color-accent-100)' : 'var(--color-neutral-400)' };
      }),
      travelModes: [
        { title: 'Speak and be heard', body: 'You talk, the phone says it in their language, out loud.', icon: 'ph-speaker-high', go: this.go('travelSpeak') },
        { title: 'Table talk · both ways', body: 'Pendant in the middle, screen split — nobody leans over.', icon: 'ph-users', go: this.go('travelTable') },
        { title: 'Listen and caption', body: 'Announcements and menus, captioned as they are spoken.', icon: 'ph-subtitles', go: this.go('travelSpeak') }
      ],
      phrasebook: [
        'Two coffees, one without sugar.',
        'Is there something without onion or garlic?',
        'My mother takes this medicine — do you have it?',
        'Can you write the address for the driver?'
      ],
      ...(() => {
        const from = this.state.travelFrom, to = this.state.travelTo;
        const src = SOURCE[from], tr = TRANSLATE[to] || TRANSLATE.ja;
        const phase = this.state.speakPhase, rev = !!this.state.reverse;
        const back = phase === 'in' ? !rev : rev;
        const waves = bars.slice(0, 4).map(b => Object.assign({}, b, { h: Math.max(6, Math.round(b.h * 0.22)) }));
        const turnData = [
          { youBig: src.station, youSmall: 'They hear: ' + tr.station.out, themBig: tr.station.out, themSmall: tr.station.roman, cta: 'Tap when they reply' },
          { youBig: tr.replyBack[from], youSmall: 'They said: ' + tr.reply, themBig: tr.reply, themSmall: tr.replyRoman, cta: 'Tap to speak again' },
          { youBig: src.ticket, youSmall: 'They hear: ' + tr.ticket.out, themBig: tr.ticket.out, themSmall: tr.ticket.roman, cta: 'Tap when they reply' }
        ][this.state.turn];
        return {
          speakFrom: rev ? LANGS[to] : LANGS[from], speakTo: rev ? LANGS[from] : LANGS[to],
          speakFromFg: 'var(--color-neutral-300)', speakToFg: 'var(--color-accent-200)',
          speakIdle: phase === 'idle' || phase === 'listening',
          speakHasResult: phase === 'out' || phase === 'in',
          speakPrompt: 'Say it in ' + (rev ? LANGS[to] : LANGS[from]) + '. Normally.',
          speakHeardLabel: back ? 'Heard · ' + LANGS[to] : 'You said · ' + LANGS[from],
          speakHeard: back ? tr.reply : src.coffee,
          speakSaidLabel: back ? 'For you · ' + LANGS[from] : 'Phone is saying · ' + LANGS[to],
          speakOut: back ? tr.replyBack[from] : tr.coffee.out,
          speakRoman: back ? tr.replyRoman : tr.coffee.roman,
          theirTurnLabel: phase === 'in' ? 'Your turn — tap the mic and keep going.' : 'They answered? Tap here and I will bring it back into ' + LANGS[from] + '.',
          speakWaveOpacity: phase === 'listening' ? 1 : 0.16,
          speakTap: this.speakTap, theirTurn: this.theirTurn, speakAgain: this.speakAgain, speakSlower: this.speakSlower,
          speakRing: phase === 'listening' ? 'var(--color-accent)' : 'var(--color-accent-600)',
          speakAnim: phase === 'listening' ? 'breathe 1.2s ease-in-out infinite' : 'none',
          speakIcon: phase === 'listening' ? 'ph-waveform' : 'ph-microphone',
          speakStatus: phase === 'listening' ? 'Listening…' : (phase === 'idle' ? 'Tap to speak' : 'Tap to say something else'),
          speakerWaves: waves, tableWaves: bars.slice(4, 9).map(b => Object.assign({}, b, { h: Math.max(5, Math.round(b.h * 0.2)) })),
          tableThemLabel: 'For them · ' + LANGS[to], tableYouLabel: 'For you · ' + LANGS[from],
          tableThemBig: turnData.themBig, tableThemSmall: turnData.themSmall,
          tableYouBig: turnData.youBig, tableYouSmall: turnData.youSmall,
          tableCta: turnData.cta, nextTurn: this.nextTurn
        };
      })(),

      questCheckins: [
        { title: 'Ship Core to 50 testers', base: 40, note: 'Last moved yesterday · weekly check-in' },
        { title: 'Be off the phone by 23:00', base: 71, note: '5 of 7 nights this week' },
        { title: 'Speak to Ba twice a week', base: 100, note: 'Done · twice already' }
      ].map((q, i) => {
        const bump = (this.state.checkins[i] || 0) * 6;
        const pct = Math.max(0, Math.min(100, q.base + bump));
        return { title: q.title, note: q.note, pct: pct + '%', plus: this.checkin(i, 1), skip: this.checkin(i, 0) };
      }),

      switchers: [
        { name: 'Language', opts: [this.seg(lang, 'en', v => () => this.setState({ langS: v }), 'EN'), this.seg(lang, 'hi', v => () => this.setState({ langS: v }), 'Hinglish'), this.seg(lang, 'gu', v => () => this.setState({ langS: v }), 'ગુજ')] },
        { name: 'Tone of copy', opts: [this.seg(tone, 'warm', v => () => this.setState({ toneS: v }), 'Companion'), this.seg(tone, 'neutral', v => () => this.setState({ toneS: v }), 'Neutral tool')] },
        { name: 'Today layout', opts: [this.seg(this.meta, 'timeline', v => () => this.setState({ metaS: v }), 'Timeline'), this.seg(this.meta, 'cards', v => () => this.setState({ metaS: v }), 'Cards'), this.seg(this.meta, 'oneThing', v => () => this.setState({ metaS: v }), 'One thing')] },
        { name: 'Appearance', opts: [this.seg(this.state.light ? 'light' : 'dark', 'dark', () => () => this.setState({ light: false }), 'Dark'), this.seg(this.state.light ? 'light' : 'dark', 'light', () => () => this.setState({ light: true }), 'Light')] },
        { name: 'Ask answers', opts: [this.seg(this.askMode, 'cited', v => () => this.setState({ askS: v }), 'With citations'), this.seg(this.askMode, 'chat', v => () => this.setState({ askS: v }), 'Plain chat')] }
      ]
    };
  }

  render() {
    return <StayCanvas v={this.renderVals()} />;
  }
}
