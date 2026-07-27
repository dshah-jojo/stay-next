// STAY prototype content — ported verbatim from the design source
// (STAY App.dc.html data-dc-script).

export const DICT = {
  en: {
    wTitle: 'A companion that\u2019s actually been there.', wSub: 'STAY listens to your day on a pendant, and helps you live it \u2014 in your language, on your phone.',
    begin: 'Begin', slogan: 'APNI DHUN MEIN RAHO', cont: 'Continue',
    langTitle: 'Which language do you live in?', langSub: 'Pick how you speak, not how you type. STAY handles the mixing.',
    mixNote: 'Code-mixing is expected \u2014 half-Hindi, half-English sentences are transcribed as spoken.',
    consentTitle: 'What STAY will never do.', consentSub: 'Four promises, each one a switch you control. Two are off by default.',
    dpdp: 'DPDP-aligned consent. You can change any of this later in the Privacy Centre.',
    pairTitle: 'Hold the pendant close.', pairSub: 'One tap pairs over BLE. No account needed yet.', connect: 'Pair pendant', connected: 'Paired',
    startUsing: 'Start listening', ready: 'Ready', idleTitle: 'Nothing is being recorded.', idleSub: 'Tap once when a moment matters. The amber light shows anyone nearby it\u2019s on.',
    recLight: 'Recording \u2014 light on', onDevice: 'On-device', listening: 'I\u2019m listening', endSession: 'End & make sense',
    muteHint: 'One tap on the pendant mutes it too \u2014 in hardware.',
    synKicker: 'Making sense', synTitle: 'Turning 14 minutes into what matters.', synNote: 'Transcription ran on this phone. Raw audio is discarded when this finishes.',
    sessionKicker: 'Session complete', sessionTitle: 'Your day, simplified.', whatHappened: 'What happened', tasksFound: 'Tasks found', decision: 'Decision', heardRight: 'Heard exactly right', seeDay: 'See it in your day',
    dateLine: 'Wednesday \u00b7 29 July', greeting: 'Six moments. Here\u2019s what they add up to.',
    today: 'Today', ask: 'Ask', plan: 'Plan', reflect: 'Reflect', guide: 'Guide',
    tl: 'Timeline', cards: 'Cards', one: 'One thing', oneThing: 'The one thing',
    askKicker: 'Search your own life', askPh: 'What did I promise\u2026', from: 'From your own moments', askEmpty: 'Ask anything that happened to you. Answers come back with the moment they came from.',
    planKicker: 'Taken from what you said', quests: 'Quests',
    reflectKicker: 'Patterns, not judgements', energy: 'Energy', energyNote: 'Your best hours are before 13:00. Four of six hard decisions this week were made after 17:00.',
    themes: 'What you kept returning to', noticed: 'What I noticed', insight: 'You brought up pricing in every work conversation this week \u2014 and never once in the ones you enjoyed.',
    guideKicker: 'The Guide', guideLead: 'One question a day, drawn from the week you actually had.',
    guideQ: 'You moved the vendor decision three times. What are you actually afraid of getting wrong?',
    guideWhy: 'Asked because the same task has moved from Monday to Thursday across three sessions.',
    streak: 'Reflection streak', streakNote: '11 of the last 14 days. Two minutes each.',
    privacyKicker: 'Yours, provably', privacy: 'Privacy Centre', vault: 'Everything lives on this phone',
    vaultBody: '1,284 moments in an encrypted vault, keyed to you. Raw audio was never uploaded and is deleted after processing.',
    muteLog: 'Consent & mute log', export: 'Export all', delete: 'Delete all',
    packLabel: 'Pack \u00b7 installed', cosmosLead: 'Astrology read through your real week \u2014 not a generic horoscope.',
    cosmosRead: 'A stalled decision starts moving Thursday. The read matches your week: the vendor gave you exactly that deadline.',
    groundedIn: 'Grounded in', cosmosDisclaimer: 'Interpretive, not predictive. Cosmos never reads your health or money data.'
  },
  hi: {
    wTitle: 'Ek saathi jo waqai wahaan tha.', wSub: 'STAY aapka din pendant se sunta hai, aur usse jeene mein madad karta hai \u2014 aapki bhasha mein, aapke phone par.',
    begin: 'Shuru karein', slogan: 'APNI DHUN MEIN RAHO', cont: 'Aage badhein',
    langTitle: 'Aap kis bhasha mein jeete hain?', langSub: 'Jaise bolte hain waise chunein, likhne jaisa nahi. Mixing STAY sambhal lega.',
    mixNote: 'Aadha Hindi aadha English \u2014 jaisa bola, waisa likha jayega.',
    consentTitle: 'STAY yeh kabhi nahi karega.', consentSub: 'Chaar vaade, har ek aapke control mein. Do by default band hain.',
    dpdp: 'DPDP ke hisaab se consent. Baad mein Privacy Centre se badal sakte hain.',
    pairTitle: 'Pendant paas rakhein.', pairSub: 'Ek tap se BLE pair ho jayega. Account abhi zaroori nahi.', connect: 'Pendant pair karein', connected: 'Pair ho gaya',
    startUsing: 'Sunna shuru karein', ready: 'Taiyaar', idleTitle: 'Abhi kuch record nahi ho raha.', idleSub: 'Jab lamha zaroori ho, ek tap. Amber light sabko dikhati hai ki on hai.',
    recLight: 'Record ho raha \u2014 light on', onDevice: 'Phone par hi', listening: 'Main sun raha hoon', endSession: 'Khatam karein',
    muteHint: 'Pendant par ek tap se hardware mute bhi ho jata hai.',
    synKicker: 'Samajh raha hoon', synTitle: '14 minute ko kaam ki baat bana raha hoon.', synNote: 'Transcription isi phone par chala. Poora hone par raw audio delete ho jayega.',
    sessionKicker: 'Session poora', sessionTitle: 'Aapka din, saaf.', whatHappened: 'Kya hua', tasksFound: 'Kaam mile', decision: 'Faisla', heardRight: 'Bilkul sahi suna', seeDay: 'Din mein dekhein',
    dateLine: 'Budhwaar \u00b7 29 July', greeting: 'Chhe lamhe. Inka matlab yeh hai.',
    today: 'Aaj', ask: 'Poochho', plan: 'Yojana', reflect: 'Chintan', guide: 'Margdarshan',
    tl: 'Timeline', cards: 'Cards', one: 'Ek baat', oneThing: 'Sirf ek baat',
    askKicker: 'Apni zindagi mein dhoondein', askPh: 'Maine kya vaada kiya\u2026', from: 'Aapke hi lamhon se', askEmpty: 'Jo aapke saath hua, kuch bhi poochhein. Jawab uske lamhe ke saath aayega.',
    planKicker: 'Aapki baaton se nikaale gaye', quests: 'Quests',
    reflectKicker: 'Pattern, faisla nahi', energy: 'Energy', energyNote: 'Aapke behtareen ghante 13:00 se pehle hain. Is hafte 6 mein se 4 mushkil faisle 17:00 ke baad hue.',
    themes: 'Jin par baar baar laute', noticed: 'Maine dekha', insight: 'Is hafte har kaam ki baat mein pricing aayi \u2014 aur jo baatein aapko achhi lagi, unmein ek baar bhi nahi.',
    guideKicker: 'Margdarshan', guideLead: 'Roz ek sawaal, aapke asli hafte se.',
    guideQ: 'Vendor ka faisla teen baar taala. Sach mein kis cheez ke galat hone ka dar hai?',
    guideWhy: 'Poochha kyunki yahi kaam teen session se Monday se Thursday khisak raha hai.',
    streak: 'Chintan streak', streakNote: 'Pichhle 14 dinon mein 11. Do minute roz.',
    privacyKicker: 'Aapka, saabit', privacy: 'Privacy Centre', vault: 'Sab kuch isi phone par',
    vaultBody: '1,284 lamhe encrypted vault mein, sirf aapki chaabi se. Raw audio kabhi upload nahi hua.',
    muteLog: 'Consent aur mute log', export: 'Sab export karein', delete: 'Sab delete karein',
    packLabel: 'Pack \u00b7 installed', cosmosLead: 'Jyotish aapke asli hafte ke saath padha gaya \u2014 generic rashifal nahi.',
    cosmosRead: 'Ruka hua faisla Thursday se chalne lagega. Aapka hafta yahi kehta hai: vendor ne wahi deadline di.',
    groundedIn: 'Aadhaar', cosmosDisclaimer: 'Vyakhya hai, bhavishyavani nahi. Cosmos aapka health ya paisa data kabhi nahi padhta.'
  },
  gu: {
    wTitle: '\u0a8f\u0ab5\u0acb \u0ab8\u0abe\u0aa5\u0ac0 \u0a9c\u0ac7 \u0ab8\u0abe\u0a9a\u0ac7\u0a9c \u0aa4\u0aae\u0abe\u0ab0\u0abe \u0ab8\u0abe\u0aa5\u0ac7 \u0ab9\u0aa4\u0acb.', wSub: 'STAY \u0aaa\u0ac7\u0aa8\u0acd\u0aa1\u0aa8\u0acd\u0a9f \u0aa5\u0ac0 \u0aa4\u0aae\u0abe\u0ab0\u0acb \u0aa6\u0abf\u0ab5\u0ab8 \u0ab8\u0abe\u0a82\u0aad\u0ab3\u0ac7 \u0a9b\u0ac7, \u0a85\u0aa8\u0ac7 \u0aa4\u0ac7 \u0a9c\u0ac0\u0ab5\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0aae\u0aa6\u0aa6 \u0a95\u0ab0\u0ac7 \u0a9b\u0ac7.',
    begin: '\u0ab6\u0ab0\u0ac2 \u0a95\u0ab0\u0acb', slogan: '\u0aa4\u0aae\u0abe\u0ab0\u0ac0 \u0aa7\u0ac2\u0aa8\u0aae\u0abe\u0a82 \u0ab0\u0ab9\u0acb', cont: '\u0a86\u0a97\u0ab3 \u0ab5\u0aa7\u0acb',
    langTitle: '\u0aa4\u0aae\u0ac7 \u0a95\u0aaf\u0ac0 \u0aad\u0abe\u0ab7\u0abe\u0aae\u0abe\u0a82 \u0a9c\u0abf\u0ab5\u0acb \u0a9b\u0acb?', langSub: '\u0a9c\u0ac7\u0ab5\u0ac0 \u0ab0\u0ac0\u0aa4\u0ac7 \u0aac\u0acb\u0ab2\u0acb \u0a9b\u0acb \u0aa4\u0ac7 \u0aaa\u0ab8\u0a82\u0aa6 \u0a95\u0ab0\u0acb. \u0aae\u0abf\u0a95\u0acd\u0ab8\u0abf\u0a82\u0a97 STAY \u0ab8\u0a82\u0aad\u0abe\u0ab3\u0ab6\u0ac7.',
    mixNote: '\u0a85\u0aa7\u0ac0 \u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0, \u0a85\u0aa7\u0ac0 \u0a85\u0a82\u0a97\u0acd\u0ab0\u0ac7\u0a9c\u0ac0 \u2014 \u0a9c\u0ac7\u0aae \u0aac\u0acb\u0ab2\u0acd\u0aaf\u0abe \u0aa4\u0ac7\u0aae \u0ab2\u0a96\u0abe\u0ab6\u0ac7.',
    consentTitle: 'STAY \u0a95\u0aa6\u0ac0 \u0a86 \u0aa8\u0ab9\u0abf\u0a82 \u0a95\u0ab0\u0ac7.', consentSub: '\u0a9a\u0abe\u0ab0 \u0ab5\u0a9a\u0aa8, \u0aa6\u0ab0\u0ac7\u0a95 \u0aa4\u0aae\u0abe\u0ab0\u0abe \u0ab9\u0abe\u0aa5\u0aae\u0abe\u0a82. \u0aac\u0ac7 \u0ab6\u0ab0\u0ac2\u0a86\u0aa4\u0aae\u0abe\u0a82 \u0aac\u0a82\u0aa7.',
    dpdp: 'DPDP \u0a85\u0aa8\u0ac1\u0ab8\u0abe\u0ab0 \u0ab8\u0a82\u0aae\u0aa4\u0abf. \u0aaa\u0a9b\u0ac0 \u0aaa\u0aa3 \u0aac\u0aa6\u0ab2\u0ac0 \u0ab6\u0a95\u0abe\u0aaf.',
    pairTitle: '\u0aaa\u0ac7\u0aa8\u0acd\u0aa1\u0aa8\u0acd\u0a9f \u0aaa\u0abe\u0ab8\u0ac7 \u0ab0\u0abe\u0a96\u0acb.', pairSub: '\u0a8f\u0a95 \u0a9f\u0ac7\u0aaa\u0aae\u0abe\u0a82 BLE \u0aaa\u0ac7\u0ab0 \u0aa5\u0ab6\u0ac7.', connect: '\u0aaa\u0ac7\u0aa8\u0acd\u0aa1\u0aa8\u0acd\u0a9f \u0aaa\u0ac7\u0ab0 \u0a95\u0ab0\u0acb', connected: '\u0aaa\u0ac7\u0ab0 \u0aa5\u0aaf\u0ac1\u0a82',
    startUsing: '\u0ab8\u0abe\u0a82\u0aad\u0ab3\u0ab5\u0abe\u0aa8\u0ac1\u0a82 \u0ab6\u0ab0\u0ac2', ready: '\u0aa4\u0ac8\u0aaf\u0abe\u0ab0', idleTitle: '\u0ab9\u0abe\u0ab2 \u0a95\u0a82\u0a88 \u0ab0\u0ac7\u0a95\u0acb\u0ab0\u0acd\u0aa1 \u0aa5\u0aa4\u0ac1\u0a82 \u0aa8\u0aa5\u0ac0.', idleSub: '\u0a9c\u0acd\u0aaf\u0abe\u0ab0\u0ac7 \u0a95\u0acb\u0a88 \u0a95\u0ab7\u0aa3 \u0a9c\u0ab0\u0ac2\u0ab0\u0ac0 \u0ab9\u0acb\u0aaf, \u0a8f\u0a95 \u0a9f\u0ac7\u0aaa. \u0a85\u0a82\u0aac\u0ab0 \u0ab2\u0abe\u0a88\u0a9f \u0aac\u0aa7\u0abe\u0aa8\u0ac7 \u0aa6\u0ac7\u0a96\u0abe\u0aaf.',
    recLight: '\u0ab0\u0ac7\u0a95\u0acb\u0ab0\u0acd\u0aa1 \u2014 \u0ab2\u0abe\u0a88\u0a9f \u0a9a\u0abe\u0ab2\u0ac1', onDevice: '\u0aab\u0acb\u0aa8 \u0aaa\u0ab0 \u0a9c', listening: '\u0ab9\u0ac1\u0a82 \u0ab8\u0abe\u0a82\u0aad\u0ab3\u0ac1\u0a82 \u0a9b\u0ac1\u0a82', endSession: '\u0aaa\u0ac2\u0ab0\u0ac1\u0a82 \u0a95\u0ab0\u0acb',
    muteHint: '\u0aaa\u0ac7\u0aa8\u0acd\u0aa1\u0aa8\u0acd\u0a9f \u0aaa\u0ab0 \u0a8f\u0a95 \u0a9f\u0ac7\u0aaa \u0aa5\u0ac0 \u0ab9\u0abe\u0ab0\u0acd\u0aa1\u0ab5\u0ac7\u0ab0 \u0aae\u0acd\u0aaf\u0ac2\u0a9f.',
    synKicker: '\u0ab8\u0aae\u0a9c\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0acb \u0a9b\u0ac1\u0a82', synTitle: '14 \u0aae\u0abf\u0aa8\u0abf\u0a9f\u0aa8\u0ac7 \u0a95\u0abe\u0aae\u0aa8\u0ac0 \u0ab5\u0abe\u0aa4 \u0aac\u0aa8\u0abe\u0ab5\u0ac1\u0a82 \u0a9b\u0ac1\u0a82.', synNote: '\u0a9f\u0acd\u0ab0\u0abe\u0aa8\u0acd\u0ab8\u0a95\u0acd\u0ab0\u0abf\u0aaa\u0acd\u0ab6\u0aa8 \u0a86 \u0aab\u0acb\u0aa8 \u0aaa\u0ab0 \u0a9c \u0a9a\u0abe\u0ab2\u0acd\u0aaf\u0ac1\u0a82. \u0ab0\u0acb \u0a91\u0aa1\u0abf\u0aaf\u0acb \u0aaa\u0a9b\u0ac0 \u0aa1\u0abf\u0ab2\u0ac0\u0a9f.',
    sessionKicker: '\u0ab8\u0ac7\u0ab6\u0aa8 \u0aaa\u0ac2\u0ab0\u0ac1\u0a82', sessionTitle: '\u0aa4\u0aae\u0abe\u0ab0\u0acb \u0aa6\u0abf\u0ab5\u0ab8, \u0ab8\u0acd\u0aaa\u0ab7\u0acd\u0a9f.', whatHappened: '\u0ab6\u0ac1\u0a82 \u0aa5\u0aaf\u0ac1\u0a82', tasksFound: '\u0a95\u0abe\u0aae \u0aae\u0ab3\u0acd\u0aaf\u0abe', decision: '\u0aa8\u0abf\u0ab0\u0acd\u0aa3\u0aaf', heardRight: '\u0aac\u0ab0\u0abe\u0aac\u0ab0 \u0ab8\u0abe\u0a82\u0aad\u0ab3\u0acd\u0aaf\u0ac1\u0a82', seeDay: '\u0aa6\u0abf\u0ab5\u0ab8\u0aae\u0abe\u0a82 \u0a9c\u0ac1\u0a93',
    dateLine: '\u0aac\u0ac1\u0aa7\u0ab5\u0abe\u0ab0 \u00b7 29 \u0a9c\u0ac1\u0ab2\u0abe\u0a88', greeting: '\u0a9b \u0a95\u0ab7\u0aa3. \u0a86\u0aa8\u0acb \u0a85\u0ab0\u0acd\u0aa5 \u0a86 \u0a9b\u0ac7.',
    today: '\u0a86\u0a9c', ask: '\u0aaa\u0ac2\u0a9b\u0acb', plan: '\u0aaf\u0acb\u0a9c\u0aa8\u0abe', reflect: '\u0a9a\u0abf\u0a82\u0aa4\u0aa8', guide: '\u0aae\u0abe\u0ab0\u0acd\u0a97',
    tl: '\u0ab8\u0aae\u0aaf\u0ab0\u0ac7\u0a96\u0abe', cards: '\u0a95\u0abe\u0ab0\u0acd\u0aa1', one: '\u0a8f\u0a95 \u0ab5\u0abe\u0aa4', oneThing: '\u0aab\u0a95\u0acd\u0aa4 \u0a8f\u0a95 \u0ab5\u0abe\u0aa4',
    askKicker: '\u0aa4\u0aae\u0abe\u0ab0\u0abe \u0a9c\u0ac0\u0ab5\u0aa8\u0aae\u0abe\u0a82 \u0ab6\u0acb\u0aa7\u0acb', askPh: '\u0aae\u0ac7\u0a82 \u0ab6\u0ac1\u0a82 \u0ab5\u0a9a\u0aa8 \u0a86\u0aaa\u0acd\u0aaf\u0ac1\u0a82\u2026', from: '\u0aa4\u0aae\u0abe\u0ab0\u0abe \u0a95\u0ab7\u0aa3\u0acb\u0aae\u0abe\u0a82\u0aa5\u0ac0', askEmpty: '\u0aa4\u0aae\u0abe\u0ab0\u0ac0 \u0ab8\u0abe\u0aa5\u0ac7 \u0aac\u0aa8\u0ac7\u0ab2\u0ac1\u0a82 \u0a95\u0a82\u0a88 \u0aaa\u0aa3 \u0aaa\u0ac2\u0a9b\u0acb. \u0a9c\u0ab5\u0abe\u0aac \u0ab8\u0abe\u0aa5\u0ac7 \u0a95\u0ab7\u0aa3 \u0aaa\u0aa3 \u0a86\u0ab5\u0ab6\u0ac7.',
    planKicker: '\u0aa4\u0aae\u0abe\u0ab0\u0ac0 \u0ab5\u0abe\u0aa4\u0acb\u0aae\u0abe\u0a82\u0aa5\u0ac0', quests: '\u0ab2\u0a95\u0acd\u0ab7\u0acd\u0aaf',
    reflectKicker: '\u0aaa\u0ac7\u0a9f\u0ab0\u0acd\u0aa8, \u0aa8\u0abf\u0ab0\u0acd\u0aa3\u0aaf \u0aa8\u0ab9\u0abf\u0a82', energy: '\u0a8a\u0ab0\u0acd\u0a9c\u0abe', energyNote: '\u0aa4\u0aae\u0abe\u0ab0\u0abe \u0ab6\u0acd\u0ab0\u0ac7\u0ab7\u0acd\u0aa0 \u0a95\u0ab2\u0abe\u0a95 13:00 \u0aaa\u0ab9\u0ac7\u0ab2\u0abe\u0a82 \u0a9b\u0ac7. \u0a86 \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0ac7 6 \u0aae\u0abe\u0a82\u0aa5\u0ac0 4 \u0a95\u0aa0\u0abf\u0aa8 \u0aa8\u0abf\u0ab0\u0acd\u0aa3\u0aaf 17:00 \u0aaa\u0a9b\u0ac0 \u0ab2\u0ac0\u0aa7\u0abe.',
    themes: '\u0a9c\u0ac7\u0aa8\u0ac0 \u0aaa\u0abe\u0a9b\u0ab3 \u0ab5\u0abe\u0ab0\u0a82\u0ab5\u0abe\u0ab0 \u0a97\u0aaf\u0abe', noticed: '\u0aae\u0ac7\u0a82 \u0a9c\u0acb\u0aaf\u0ac1\u0a82', insight: '\u0a86 \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0ac7 \u0aa6\u0ab0\u0ac7\u0a95 \u0a95\u0abe\u0aae\u0aa8\u0ac0 \u0ab5\u0abe\u0aa4\u0aae\u0abe\u0a82 \u0aaa\u0acd\u0ab0\u0abe\u0a87\u0ab8\u0abf\u0a82\u0a97 \u0a86\u0ab5\u0acd\u0aaf\u0ac1\u0a82 \u2014 \u0a85\u0aa8\u0ac7 \u0a9c\u0ac7 \u0ab5\u0abe\u0aa4\u0acb \u0a97\u0aae\u0ac0 \u0aa4\u0ac7\u0aae\u0abe\u0a82 \u0a8f\u0a95\u0ab5\u0abe\u0ab0 \u0aaa\u0aa3 \u0aa8\u0ab9\u0abf\u0a82.',
    guideKicker: '\u0aae\u0abe\u0ab0\u0acd\u0a97\u0aa6\u0ab0\u0acd\u0ab6\u0aa8', guideLead: '\u0ab0\u0acb\u0a9c \u0a8f\u0a95 \u0ab8\u0ab5\u0abe\u0ab2, \u0aa4\u0aae\u0abe\u0ab0\u0abe \u0a96\u0ab0\u0abe \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0abe\u0aae\u0abe\u0a82\u0aa5\u0ac0.',
    guideQ: '\u0ab5\u0ac7\u0aa8\u0acd\u0aa1\u0ab0\u0aa8\u0acb \u0aa8\u0abf\u0ab0\u0acd\u0aa3\u0aaf \u0aa4\u0acd\u0ab0\u0aa3 \u0ab5\u0abe\u0ab0 \u0aa0\u0ac7\u0ab2\u0acd\u0aaf\u0acb. \u0a96\u0ab0\u0ac7\u0a96\u0ab0 \u0ab6\u0ac1\u0a82 \u0a96\u0acb\u0a9f\u0ac1\u0a82 \u0aaa\u0aa1\u0ab5\u0abe\u0aa8\u0ac0 \u0aac\u0ac0\u0a95 \u0a9b\u0ac7?',
    guideWhy: '\u0aaa\u0ac2\u0a9b\u0acd\u0aaf\u0ac1\u0a82 \u0a95\u0abe\u0ab0\u0aa3 \u0a95\u0ac7 \u0a8f \u0a95\u0abe\u0aae \u0aa4\u0acd\u0ab0\u0aa3 \u0ab8\u0ac7\u0ab6\u0aa8\u0aa5\u0ac0 \u0a96\u0ab8\u0ac7\u0aa1\u0abe\u0aaf \u0a9b\u0ac7.',
    streak: '\u0a9a\u0abf\u0a82\u0aa4\u0aa8 \u0ab8\u0abe\u0aa4\u0aa4\u0acd\u0aaf', streakNote: '\u0a9b\u0ac7\u0ab2\u0acd\u0ab2\u0abe 14 \u0aae\u0abe\u0a82\u0aa5\u0ac0 11 \u0aa6\u0abf\u0ab5\u0ab8.',
    privacyKicker: '\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82, \u0ab8\u0abe\u0aac\u0abf\u0aa4', privacy: '\u0a97\u0acb\u0aaa\u0aa8\u0ac0\u0aaf\u0aa4\u0abe', vault: '\u0aac\u0aa7\u0ac1\u0a82 \u0a86 \u0aab\u0acb\u0aa8 \u0aaa\u0ab0 \u0a9c',
    vaultBody: '1,284 \u0a95\u0ab7\u0aa3 \u0a8f\u0aa8\u0acd\u0a95\u0acd\u0ab0\u0abf\u0aaa\u0acd\u0a9f\u0ac7\u0aa1 \u0ab5\u0ac9\u0ab2\u0acd\u0a9f\u0aae\u0abe\u0a82. \u0ab0\u0acb \u0a91\u0aa1\u0abf\u0aaf\u0acb \u0a95\u0aa6\u0ac0 \u0a85\u0aaa\u0ab2\u0acb\u0aa1 \u0aa5\u0aaf\u0ac1\u0a82 \u0aa8\u0aa5\u0ac0.',
    muteLog: '\u0ab8\u0a82\u0aae\u0aa4\u0abf \u0a85\u0aa8\u0ac7 \u0aae\u0acd\u0aaf\u0ac2\u0a9f \u0ab2\u0acb\u0a97', export: '\u0aac\u0aa7\u0ac1\u0a82 \u0a8f\u0a95\u0acd\u0ab8\u0aaa\u0acb\u0ab0\u0acd\u0a9f', delete: '\u0aac\u0aa7\u0ac1\u0a82 \u0aa1\u0abf\u0ab2\u0ac0\u0a9f',
    packLabel: '\u0aaa\u0ac7\u0a95 \u00b7 \u0a87\u0aa8\u0acd\u0ab8\u0acd\u0a9f\u0acb\u0ab2', cosmosLead: '\u0a9c\u0acd\u0aaf\u0acb\u0aa4\u0abf\u0ab7, \u0aa4\u0aae\u0abe\u0ab0\u0abe \u0a96\u0ab0\u0abe \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0abe \u0ab8\u0abe\u0aa5\u0ac7 \u0ab5\u0abe\u0a82\u0a9a\u0ac7\u0ab2\u0ac1\u0a82.',
    cosmosRead: '\u0a85\u0a9f\u0a95\u0ac7\u0ab2\u0acb \u0aa8\u0abf\u0ab0\u0acd\u0aa3\u0aaf \u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0\u0aa5\u0ac0 \u0a9a\u0abe\u0ab2\u0ab6\u0ac7. \u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0a85\u0aa0\u0ab5\u0abe\u0aa1\u0abf\u0aaf\u0ac1\u0a82 \u0a8f\u0a9c \u0a95\u0ab9\u0ac7 \u0a9b\u0ac7.',
    groundedIn: '\u0a86\u0aa7\u0abe\u0ab0', cosmosDisclaimer: '\u0a85\u0ab0\u0acd\u0aa5\u0aa8\u0abf\u0ab0\u0acd\u0aa3\u0aaf, \u0aad\u0ab5\u0abf\u0ab7\u0acd\u0aaf\u0ab5\u0abe\u0aa3\u0ac0 \u0aa8\u0ab9\u0abf\u0a82.'
  }
};

export const TONE = {
  warm: {
    en: { greeting: 'Six moments. Here\u2019s what they add up to.', listening: 'I\u2019m listening', synTitle: 'Turning 14 minutes into what matters.', sessionTitle: 'Your day, simplified.', idleTitle: 'Nothing is being recorded.' },
    hi: { greeting: 'Chhe lamhe. Inka matlab yeh hai.', listening: 'Main sun raha hoon', synTitle: '14 minute ko kaam ki baat bana raha hoon.', sessionTitle: 'Aapka din, saaf.', idleTitle: 'Abhi kuch record nahi ho raha.' },
    gu: { greeting: DICT.gu.greeting, listening: DICT.gu.listening, synTitle: DICT.gu.synTitle, sessionTitle: DICT.gu.sessionTitle, idleTitle: DICT.gu.idleTitle }
  },
  neutral: {
    en: { greeting: '6 sessions captured \u00b7 3 open items.', listening: 'Capturing', synTitle: 'Processing 14 min 22 s of audio.', sessionTitle: 'Session output', idleTitle: 'Capture idle.' },
    hi: { greeting: '6 session capture \u00b7 3 kaam baaki.', listening: 'Capture ho raha hai', synTitle: '14 min 22 s audio process ho raha hai.', sessionTitle: 'Session output', idleTitle: 'Capture band hai.' },
    gu: { greeting: '6 \u0ab8\u0ac7\u0ab6\u0aa8 \u00b7 3 \u0a95\u0abe\u0aae \u0aac\u0abe\u0a95\u0ac0', listening: '\u0a95\u0ac7\u0aaa\u0acd\u0a9a\u0ab0 \u0a9a\u0abe\u0ab2\u0ac1', synTitle: '14 \u0aae\u0abf\u0aa8\u0abf\u0a9f 22 \u0ab8\u0ac7\u0a95\u0aa8\u0acd\u0aa1 \u0aaa\u0acd\u0ab0\u0acb\u0ab8\u0ac7\u0ab8 \u0aa5\u0abe\u0aaf \u0a9b\u0ac7.', sessionTitle: '\u0ab8\u0ac7\u0ab6\u0aa8 \u0aaa\u0ab0\u0abf\u0aa3\u0abe\u0aae', idleTitle: '\u0a95\u0ac7\u0aaa\u0acd\u0a9a\u0ab0 \u0aac\u0a82\u0aa7 \u0a9b\u0ac7.' }
  }
};

export const ANSWERS = [
  { keys: ['vendor', 'quote', 'price', 'pricing', 'chirag', '2365', 'enclosure'],
    a: 'Chirag bhai quoted \u20b92,365 per unit at 5,000 pieces \u2014 12% under the number you set on Monday. He needs your answer by Thursday, and you have moved that decision three times.',
    cites: [ { label: 'Vendor call \u00b7 Tue 12:15 \u00b7 Hinglish', quote: 'Paanch hazaar pieces pe 2,365 kar dunga, but Thursday tak bata dena.' }, { label: 'Cost sheet, thinking aloud \u00b7 Mon 18:40', quote: 'Anything under 2,600 and the 50% margin holds.' } ],
    conf: 'High confidence \u00b7 2 corroborating moments \u00b7 amounts verified' },
  { keys: ['ba', 'mother', 'mom', 'family', 'health', 'checkup', 'hospital', 'saturday'],
    a: 'Ba\u2019s follow-up is Saturday 10:30 at Sterling. Your sister offered to take her if you are travelling \u2014 you said you would confirm by Friday and have not.',
    cites: [ { label: 'Family call \u00b7 Wed 19:30 \u00b7 Gujarati', quote: '\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0\u0ac7 \u0ab8\u0abe\u0aa2\u0abe \u0aa6\u0ab8\u0ac7 \u0ab8\u0acd\u0a9f\u0ab0\u0acd\u0ab2\u0abf\u0a82\u0a97\u0aae\u0abe\u0a82 \u0a9c\u0ab5\u0abe\u0aa8\u0ac1\u0a82 \u0a9b\u0ac7.' } ],
    conf: 'High confidence \u00b7 1 moment \u00b7 speaker: enrolled (Didi)' },
  { keys: ['investor', 'retention', 'friday', 'data', 'metrics'],
    a: 'You owe the investor 30-day retention by Friday. You have D7 at 61% from the tester cohort; D30 is not instrumented yet, so the honest answer is a partial one.',
    cites: [ { label: 'Investor coffee \u00b7 Wed 16:05', quote: 'Send me D30 by Friday and we can move fast.' }, { label: 'Standup \u00b7 Wed 09:52', quote: 'D30 events aren\u2019t wired up \u2014 give me two days.' } ],
    conf: 'Medium confidence \u00b7 one figure is inferred from your own notes' },
  { keys: ['promise', 'promised', 'commit', 'owe', 'vaada'],
    a: 'Four promises are open this week: the vendor decision (Thursday), retention data for the investor (Friday), confirming Ba\u2019s ride (Friday), and the pricing page copy you told the team you would write yourself.',
    cites: [ { label: 'Vendor call \u00b7 Tue 12:15', quote: 'Thursday tak final bata deta hoon.' }, { label: 'Standup \u00b7 Wed 09:40', quote: 'Pricing copy main khud likh dunga, aaj raat.' } ],
    conf: 'High confidence \u00b7 4 moments \u00b7 2 languages' },
  { keys: ['tired', 'thak', 'energy', 'sleep', 'thaka'],
    a: 'You sounded flattest on Tuesday and Thursday \u2014 both days you spoke after 22:00 and both followed a day with no walk. Your voice energy is highest in the 30 minutes after the morning walk.',
    cites: [ { label: 'Late note \u00b7 Thu 23:14 \u00b7 Hinglish', quote: 'Yaar bahut thak gaya, kal subah dekhunga.' } ],
    conf: 'Medium confidence \u00b7 tone signal, not a health claim' }
];

export const LANGS = { gu: '\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0', hi: '\u0939\u093f\u0928\u094d\u0926\u0940', en: 'English', ja: '\u65e5\u672c\u8a9e', es: 'Espa\u00f1ol', fr: 'Fran\u00e7ais' };

export const SOURCE = {
  gu: { coffee: '\u0aac\u0ac7 \u0a95\u0acb\u0aab\u0ac0, \u0a8f\u0a95\u0aae\u0abe\u0a82 \u0a96\u0abe\u0a82\u0aa1 \u0aa8\u0ab9\u0abf\u0a82.', station: '\u0ab8\u0acd\u0a9f\u0ac7\u0ab6\u0aa8 \u0a85\u0ab9\u0ac0\u0a82\u0aa5\u0ac0 \u0aa6\u0ac2\u0ab0 \u0a9b\u0ac7?', ticket: '\u0a9f\u0abf\u0a95\u0abf\u0a9f \u0a95\u0acd\u0aaf\u0abe\u0a82\u0aa5\u0ac0 \u0aae\u0ab3\u0ab6\u0ac7?', ok: '\u0ab8\u0aae\u0a9c\u0ac0 \u0a97\u0aaf\u0acb, \u0a86\u0aad\u0abe\u0ab0.' },
  hi: { coffee: 'Do coffee, ek mein cheeni nahi.', station: 'Station yahaan se door hai?', ticket: 'Ticket kahaan milega?', ok: 'Samajh gaya, dhanyavaad.' },
  en: { coffee: 'Two coffees, one without sugar.', station: 'Is the station far from here?', ticket: 'Where do I buy a ticket?', ok: 'Understood, thank you.' }
};

export const TRANSLATE = {
  ja: {
    coffee: { out: '\u30b3\u30fc\u30d2\u30fc\u3092\u4e8c\u3064\u3001\u4e00\u3064\u306f\u7802\u7cd6\u306a\u3057\u3067\u3002', roman: 'K\u014dh\u012b o futatsu, hitotsu wa sat\u014d nashi de.' },
    station: { out: '\u99c5\u306f\u3053\u3053\u304b\u3089\u9060\u3044\u3067\u3059\u304b\uff1f', roman: 'Eki wa koko kara t\u014di desu ka?' },
    ticket: { out: '\u5207\u7b26\u306f\u3069\u3053\u3067\u8cb7\u3048\u307e\u3059\u304b\uff1f', roman: 'Kippu wa doko de kaemasu ka?' },
    reply: '\u3044\u3044\u3048\u3001\u6b69\u3044\u3066\u5341\u5206\u307b\u3069\u3067\u3059\u3002', replyRoman: 'Iie, aruite jippun hodo desu.',
    replyBack: { gu: '\u0aa8\u0abe, \u0a9a\u0abe\u0ab2\u0ac0\u0aa8\u0ac7 \u0aa6\u0ab8 \u0aae\u0abf\u0aa8\u0abf\u0a9f \u0a9c\u0ac7\u0a9f\u0ab2\u0ac1\u0a82.', hi: 'Nahi, paidal das minute.', en: 'No, about ten minutes on foot.' }
  },
  es: {
    coffee: { out: 'Dos caf\u00e9s, uno sin az\u00facar.', roman: 'dos ka-FES, OO-no sin a-SOO-kar' },
    station: { out: '\u00bfEst\u00e1 lejos la estaci\u00f3n?', roman: 'es-TA LE-hos la es-ta-SYON' },
    ticket: { out: '\u00bfD\u00f3nde compro un billete?', roman: 'DON-de KOM-pro un bi-YE-te' },
    reply: 'No, est\u00e1 a diez minutos andando.', replyRoman: 'no, es-TA a dyes mi-NOO-tos an-DAN-do',
    replyBack: { gu: '\u0aa8\u0abe, \u0a9a\u0abe\u0ab2\u0ac0\u0aa8\u0ac7 \u0aa6\u0ab8 \u0aae\u0abf\u0aa8\u0abf\u0a9f.', hi: 'Nahi, paidal das minute.', en: 'No, ten minutes on foot.' }
  },
  fr: {
    coffee: { out: 'Deux caf\u00e9s, un sans sucre.', roman: 'deu ka-FE, an san SUKR' },
    station: { out: 'La gare est loin d\u2019ici ?', roman: 'la gar e lwan dee-SEE' },
    ticket: { out: 'O\u00f9 est-ce qu\u2019on ach\u00e8te un billet ?', roman: 'oo es-kon a-SHET an bee-YE' },
    reply: 'Non, c\u2019est \u00e0 dix minutes \u00e0 pied.', replyRoman: 'non, se-ta dee mee-NUT a pye',
    replyBack: { gu: '\u0aa8\u0abe, \u0a9a\u0abe\u0ab2\u0ac0\u0aa8\u0ac7 \u0aa6\u0ab8 \u0aae\u0abf\u0aa8\u0abf\u0a9f.', hi: 'Nahi, paidal das minute.', en: 'No, ten minutes on foot.' }
  }
};

export const SESSIONS = [
  {
    id: 's1', title: 'Vendor call — Chirag bhai', time: '12:15', ago: 'Today', dur: '14m 22s',
    langs: ['Hinglish', 'Gujarati'], voices: '3 voices · 1 named', kind: 'Work', open: 2,
    lead: 'Enclosure quote landed at \u20b92,365 per unit for 5,000 pieces — under your Monday target. He holds the price until Thursday.',
    summary: [
      'The quote came in at \u20b92,365 per unit at 5,000 pieces, twelve per cent under the number you set on Monday.',
      'Chirag bhai will hold that price until Thursday, after which it moves with the steel index.',
      'You raised the 50-unit test batch three times — it is the thing this decision unblocks.',
      'He offered an NCVM finish sample next week at no cost if you confirm the order quantity.'
    ],
    decisions: [
      { text: 'Order quantity fixed at 5,000 pieces for the first production run', by: 'You · 12:19' },
      { text: 'Final price confirmation deferred to Thursday', by: 'Chirag bhai · 12:26' }
    ],
    numbers: [
      { v: '\u20b92,365', l: 'Per unit, at 5,000 pcs' },
      { v: '5,000', l: 'Order quantity' },
      { v: 'Thu', l: 'Price held until' },
      { v: '−12%', l: 'Against your target' }
    ],
    topics: [
      { name: 'Pricing', pct: '100%', n: '9 min' },
      { name: 'Finish & samples', pct: '48%', n: '4 min' },
      { name: 'Test batch', pct: '26%', n: '2 min' },
      { name: 'Small talk', pct: '11%', n: '1 min' }
    ],
    talk: [
      { who: 'Chirag bhai', pct: '54%', tag: 'enrolled' },
      { who: 'You', pct: '38%', tag: 'you' },
      { who: 'Voice 3', pct: '8%', tag: 'not identified' }
    ],
    moments: [
      { t: '02:14', label: 'Price first named', quote: 'Dekho, 2,365 kar dunga paanch hazaar pe.' },
      { t: '06:02', label: 'Deadline set', quote: 'Thursday tak bata dena, phir steel ka rate badal jayega.' },
      { t: '09:40', label: 'Sample offered', quote: 'NCVM ka sample bhej deta hoon, free mein.' },
      { t: '12:51', label: 'Your commitment', quote: 'Main Thursday se pehle final bata deta hoon.' }
    ],
    transcript: [
      { t: '00:04', who: 'You', text: 'Chirag bhai, quote ready hai? Main aaj hi decide karna chahta hoon.', lang: 'Hinglish' },
      { t: '00:11', who: 'Chirag bhai', text: 'Haan, ready hai. Paanch hazaar pieces pe main 2,365 kar dunga.', lang: 'Hinglish' },
      { t: '02:14', who: 'You', text: 'Aur agar hum 3,000 pe rahe to?', lang: 'Hinglish' },
      { t: '02:22', who: 'Chirag bhai', text: 'Phir 2,610. Tooling amortise nahi hoga itne mein.', lang: 'Hinglish' },
      { t: '06:02', who: 'Chirag bhai', text: 'Thursday tak bata dena, phir steel ka rate badal jayega.', lang: 'Hinglish' },
      { t: '09:40', who: 'Chirag bhai', text: 'NCVM finish ka sample bhej deta hoon, free mein, next week.', lang: 'Hinglish' },
      { t: '11:18', who: 'Voice 3', text: '\u0aa4\u0ac7 \u0ab8\u0abe\u0aa5\u0ac7 \u0aac\u0acb\u0a95\u0acd\u0ab8 \u0aaa\u0aa3 \u0aae\u0acb\u0a95\u0ab2\u0ab6\u0ac7?', lang: 'Gujarati' },
      { t: '12:51', who: 'You', text: 'Main Thursday se pehle final bata deta hoon. Batch 50 units ka pehle karenge.', lang: 'Hinglish' }
    ],
    tasks: [
      { text: 'Confirm \u20b92,365 with Chirag bhai', owner: 'You', due: 'Thu 30 Jul' },
      { text: 'Ask for the NCVM finish sample', owner: 'You', due: 'Next week' },
      { text: 'Recheck the 50-unit batch cost sheet', owner: 'Meera', due: 'Wed' }
    ],
    risk: 'The price holds only until Thursday. Two of the last three vendor decisions moved past their deadline.'
  },
  {
    id: 's2', title: 'Standup with the team', time: '09:40', ago: 'Today', dur: '13m 08s',
    langs: ['Hinglish'], voices: '4 voices · 2 named', kind: 'Work', open: 3,
    lead: 'You took the pricing copy yourself. Meera flagged that the D30 retention events are not instrumented — two days of work.',
    summary: [
      'You committed to writing the pricing page copy yourself, tonight.',
      'Meera reported the D30 retention events are not wired up; she asked for two days.',
      'Testing on mid-range Android is the open engineering risk nobody owns yet.'
    ],
    decisions: [{ text: 'Pricing copy stays with you rather than going to the agency', by: 'You · 09:44' }],
    numbers: [{ v: '61%', l: 'D7 retention, tester cohort' }, { v: '2 days', l: 'To wire D30' }],
    topics: [{ name: 'Retention data', pct: '100%', n: '6 min' }, { name: 'Pricing page', pct: '62%', n: '4 min' }, { name: 'Android testing', pct: '30%', n: '2 min' }],
    talk: [{ who: 'You', pct: '41%', tag: 'you' }, { who: 'Meera', pct: '36%', tag: 'enrolled' }, { who: 'Voice 3', pct: '14%', tag: 'not identified' }, { who: 'Voice 4', pct: '9%', tag: 'not identified' }],
    moments: [{ t: '03:12', label: 'Blocker named', quote: 'D30 events aren\u2019t wired up — give me two days.' }, { t: '07:30', label: 'You took it on', quote: 'Pricing copy main khud likh dunga, aaj raat.' }],
    transcript: [
      { t: '00:08', who: 'You', text: 'Chalo, quickly — kal ke blockers?', lang: 'Hinglish' },
      { t: '03:12', who: 'Meera', text: 'D30 events aren\u2019t wired up. Give me two days and it\u2019s clean.', lang: 'English' },
      { t: '07:30', who: 'You', text: 'Pricing copy main khud likh dunga, aaj raat.', lang: 'Hinglish' },
      { t: '10:02', who: 'Voice 3', text: 'Mid-range Android pe testing kisne kiya hai?', lang: 'Hinglish' }
    ],
    tasks: [
      { text: 'Write the pricing page copy', owner: 'You', due: 'Tonight' },
      { text: 'Wire up D30 retention events', owner: 'Meera', due: 'Fri' },
      { text: 'Find an owner for mid-range Android testing', owner: 'Unassigned', due: 'This week' }
    ],
    risk: 'Nobody owns Android testing. It has come up in three standups without a name against it.'
  },
  {
    id: 's3', title: 'Investor coffee', time: '16:05', ago: 'Today', dur: '26m 40s',
    langs: ['English'], voices: '2 voices · 1 named', kind: 'Work', open: 1,
    lead: 'He asked for 30-day retention by Friday. You said yes before checking whether the number exists.',
    summary: [
      'He wants D30 retention from the tester cohort by Friday to move quickly.',
      'You promised it in the room; internally D30 is not instrumented yet.',
      'He was most interested in the on-device privacy story, not the hardware margin.'
    ],
    decisions: [{ text: 'You will send a partial, honest number rather than wait', by: 'You · 24:10' }],
    numbers: [{ v: 'Friday', l: 'Data promised by' }, { v: 'D30', l: 'Metric asked for' }],
    topics: [{ name: 'Retention', pct: '100%', n: '11 min' }, { name: 'Privacy architecture', pct: '70%', n: '8 min' }, { name: 'Manufacturing', pct: '35%', n: '4 min' }],
    talk: [{ who: 'Investor', pct: '52%', tag: 'not identified' }, { who: 'You', pct: '48%', tag: 'you' }],
    moments: [{ t: '18:22', label: 'The ask', quote: 'Send me D30 by Friday and we can move fast.' }],
    transcript: [
      { t: '02:40', who: 'Investor', text: 'What does retention look like after the first month?', lang: 'English' },
      { t: '18:22', who: 'Investor', text: 'Send me D30 by Friday and we can move fast.', lang: 'English' },
      { t: '18:31', who: 'You', text: 'You\u2019ll have it Friday.', lang: 'English' },
      { t: '24:10', who: 'You', text: 'I\u2019d rather send you a partial number than a pretty one.', lang: 'English' }
    ],
    tasks: [{ text: 'Send D30 retention (or the honest partial)', owner: 'You', due: 'Fri 31 Jul' }],
    risk: 'You promised a number that does not exist yet. Two days of Meera\u2019s work sits between you and it.'
  },
  {
    id: 's4', title: 'Family call', time: '19:30', ago: 'Today', dur: '8m 12s',
    langs: ['Gujarati'], voices: '2 voices · 1 named', kind: 'Family', open: 1,
    lead: 'Ba\u2019s follow-up is Saturday 10:30 at Sterling. Didi can drive her — you said you would confirm by Friday.',
    summary: [
      'Ba\u2019s follow-up appointment is Saturday at 10:30, at Sterling.',
      'Didi offered to take her if you are travelling.',
      'You said you would confirm by Friday, and have not.'
    ],
    decisions: [{ text: 'Didi is the fallback if you are away', by: 'Didi · 05:40' }],
    numbers: [{ v: 'Sat 10:30', l: 'Appointment' }, { v: 'Friday', l: 'You confirm by' }],
    topics: [{ name: 'Ba\u2019s health', pct: '100%', n: '6 min' }, { name: 'Travel plans', pct: '30%', n: '2 min' }],
    talk: [{ who: 'Didi', pct: '61%', tag: 'enrolled' }, { who: 'You', pct: '39%', tag: 'you' }],
    moments: [{ t: '05:40', label: 'The offer', quote: '\u0ab9\u0ac1\u0a82 \u0ab2\u0a88 \u0a9c\u0a88\u0ab6, \u0aa4\u0ac1\u0a82 \u0a9a\u0abf\u0a82\u0aa4\u0abe \u0aa8 \u0a95\u0ab0.' }],
    transcript: [
      { t: '01:10', who: 'Didi', text: '\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0\u0ac7 \u0ab8\u0abe\u0aa2\u0abe \u0aa6\u0ab8\u0ac7 \u0ab8\u0acd\u0a9f\u0ab0\u0acd\u0ab2\u0abf\u0a82\u0a97\u0aae\u0abe\u0a82 \u0a9c\u0ab5\u0abe\u0aa8\u0ac1\u0a82 \u0a9b\u0ac7.', lang: 'Gujarati' },
      { t: '05:40', who: 'Didi', text: '\u0ab9\u0ac1\u0a82 \u0ab2\u0a88 \u0a9c\u0a88\u0ab6, \u0aa4\u0ac1\u0a82 \u0a9a\u0abf\u0a82\u0aa4\u0abe \u0aa8 \u0a95\u0ab0.', lang: 'Gujarati' },
      { t: '06:20', who: 'You', text: '\u0ab9\u0ac1\u0a82 \u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0 \u0ab8\u0ac1\u0aa7\u0ac0 \u0a95\u0ab9\u0ac1\u0a82 \u0a9b\u0ac1\u0a82.', lang: 'Gujarati' }
    ],
    tasks: [{ text: 'Confirm who takes Ba on Saturday', owner: 'You', due: 'Fri 31 Jul' }],
    risk: 'This is the third week a family commitment has waited on your travel plans.'
  }
];

export const GUIDE_SCRIPT = [
  { text: 'It is just past nine, and you have had six conversations today. Before we look at any of them \u2014 how are you, actually?',
    replies: ['Tired, but okay', 'Wired and restless', 'Honestly, not great'] },
  { text: 'Thank you for saying it plainly. I noticed something today: the vendor decision moved for the third time. I do not think that is laziness. What would saying yes to it actually cost you?',
    replies: ['If I am wrong, it is real money', 'It means I am the one who chose', 'I do not know yet'] },
  { text: 'So the price is not the risk \u2014 being the one who decided is. That is a reasonable thing to be careful about, and it is also the thing you are avoiding by moving the date. Would it help to make the decision smaller? One call, thirty minutes, Thursday morning, when you are at your best.',
    replies: ['Yes, book it', 'Let me think about it'],
    action: { kicker: 'From this conversation', icon: 'ph-calendar-plus', text: 'Thursday 11:30, thirty minutes, Chirag bhai. I will put the quote and your own words in the invite.', cta: 'Put it in the calendar', screen: 'calDraft' } },
  { text: 'Good. Now the other thing, and I will say it gently. You told me you wanted to be properly present with your family. Ba\u2019s Saturday is still unconfirmed, four days later. Those two sentences are about the same thing.',
    replies: ['You are right', 'Didi said she would handle it', 'That one is harder'] },
  { text: 'Then let us not make it another task you will move. Make it a quest, and I will ask about it once a week instead of nagging you daily \u2014 the point is the relationship, not the reminder.',
    replies: ['Make it a quest', 'Not yet'],
    action: { kicker: 'Worth keeping', icon: 'ph-flag-banner', text: 'A weekly quest: be reachable for the people at home before the people at work.', cta: 'Create the quest', screen: 'questNew' } },
  { text: 'One last thing, and then I will let you sleep. Say the sentence you want to be true by Sunday. Just one. I will hold it and ask you about it on Sunday night \u2014 not to check on you, but so you do not have to remember it alone.',
    replies: ['The decision is made and the batch is ordered', 'I was home for dinner twice'] },
  { text: 'Held. I will ask you on Sunday at eight. Nothing else tonight \u2014 you have done the hard part, which was saying it out loud.',
    replies: ['Thank you', 'Goodnight'] }
];

export const SANKALPA = [
  { text: 'I am already the person who decides.', source: 'Guide session, Wednesday' },
  { text: 'Main jo keh deta hoon, wahi karta hoon.', source: 'Your own words, Monday 08:10' },
  { text: 'What is mine to carry, I carry. The rest I set down.', source: 'Journal · dichotomy of control' },
  { text: 'My mornings belong to the work that matters.', source: 'Life Path · best hours before noon' },
  { text: 'The people at home come before the people at work.', source: 'Journal · family strand' },
  { text: 'I finish what I already understand.', source: 'Cosmos · all four systems agree' },
  { text: 'Apni dhun mein rahoon.', source: 'Yours, from the first day' }
];

export const JOURNAL_QS = [
  { q: 'If today repeated itself for a year, what would it make of you?', prose: 'Not whether it was a good day. Whether it was a day you would agree to become.', spoken: 'It would make me someone efficient and slightly absent. Good at deciding things that do not matter and slow with the ones that do.' },
  { q: 'What did you carry today that was never yours to carry?', prose: 'Some weight belongs to you. Some was handed over while you were being useful.', spoken: 'Other people\u2019s uncertainty. I kept absorbing it so nobody had to sit with it.' },
  { q: 'Name the thing you avoided. Now name what it protects you from.', prose: 'Avoidance is never lazy. It is always guarding something.', spoken: 'The vendor decision. It protects me from being the person who got it wrong.' },
  { q: 'Who were you today that you would not choose to be tomorrow?', prose: 'You are allowed to answer this without cruelty.', spoken: 'Short with Meera. She asked for two days and I heard a delay instead of honesty.' },
  { q: 'What are you still doing only because you once said you would?', prose: 'Old promises outlive the reasons that made them.', spoken: 'The weekly update nobody reads. I promised it in month one and nobody has asked since.' },
  { q: 'If nobody ever knew you did it, would you still do it?', prose: 'A quiet test for the thing you are working hardest on.', spoken: 'The product, yes. The posting about the product, no.' },
  { q: 'Where did you feel most like yourself today \u2014 and who was there?', prose: 'Note the room, the hour, the person. Those three are data.', spoken: 'The morning walk, alone, before anyone needed anything. And for ten minutes on the phone with Ba.' },
  { q: 'What would you attempt if you trusted that you could survive being wrong?', prose: 'Survival is usually the hidden question underneath ambition.', spoken: 'Order the full batch instead of fifty units, and stop hedging.' }
];

export const WEB_STRANDS = [
  { id: 'w1', label: 'Being the decider', count: '31 thoughts', icon: 'ph-scales', method: 'CBT · thought record',
    body: 'A third of what you said this week circles one belief: that a wrong decision would be read as who you are, not what you chose. The thought appears most often within two hours of talking to money.',
    quotes: ['If I get this wrong, it is on me.', 'Let me sleep on it, one more night.'],
    question: 'What would change if a wrong call were simply information?' },
  { id: 'w2', label: 'Time and worth', count: '22 thoughts', icon: 'ph-hourglass', method: 'Ikigai · vocation axis',
    body: 'You measure your days in output, almost never in meaning. When you do speak about meaning, it is about people at home \u2014 which never appears in your calendar.',
    quotes: ['Today was useless, I only had calls.', 'I will make it up on the weekend.'],
    question: 'Which hour this week would you keep if you could only keep one?' },
  { id: 'w3', label: 'Family, quietly', count: '18 thoughts', icon: 'ph-house-heart', method: 'Attachment · secure base',
    body: 'It comes up in short sentences, late, and always as logistics rather than feeling. The words soften noticeably when you speak Gujarati.',
    quotes: ['\u0ab9\u0ac1\u0a82 \u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0 \u0ab8\u0ac1\u0aa7\u0ac0 \u0a95\u0ab9\u0ac1\u0a82 \u0a9b\u0ac1\u0a82.', 'Ba\u2019s appointment \u2014 someone should go.'],
    question: 'What would you say to Ba if logistics were already handled?' },
  { id: 'w4', label: 'The body, ignored', count: '11 thoughts', icon: 'ph-heartbeat', method: 'Maslow · base needs',
    body: 'Sleep, food and the walk appear only as things you skipped. Your voice energy drops nine per cent on days with no walk \u2014 the same days hard decisions get postponed.',
    quotes: ['I will sleep after this.', 'Skipped the walk, no time.'],
    question: 'What is the smallest promise to your body you could actually keep?' },
  { id: 'w5', label: 'Being seen', count: '14 thoughts', icon: 'ph-eye', method: 'Self-determination · relatedness',
    body: 'Two versions of you appear in the recordings: the one who explains, and the one who thinks out loud. The second one only shows up when you are alone or with Didi.',
    quotes: ['Let me put together a proper deck for that.', 'Honestly? I am guessing at this part.'],
    question: 'Who gets the version of you that thinks out loud?' },
  { id: 'w6', label: 'The long thing', count: '9 thoughts', icon: 'ph-mountains', method: 'Stoic · memento mori',
    body: 'Kedarnath, sailing, the half marathon. They appear in the same tone as the pricing page \u2014 flat, procedural. The dreams have been reduced to tasks.',
    quotes: ['We should do Kedarnath before her knees get worse.', 'Someday, when things calm down.'],
    question: 'Which of these would you regret leaving as a someday?' }
];

export const THEMES = {
  dark: {
    bg: '#161826', surface: '#232532', text: '#e9e9ed', divider: 'rgba(233,233,237,0.16)',
    accent: '#9184d9', a100: '#f5f4ff', a200: '#e7e5fe', a300: '#d2cefd', a400: '#b5abfc', a500: '#968ae0',
    a600: '#796cbf', a700: '#5d5294', a800: '#423a6a', a900: '#2b2741',
    n200: '#e4e7f5', n300: '#cfd3e5', n400: '#b2b6ca', n500: '#9397ab', n600: '#75798c', n700: '#595d6c', n800: '#3f424d', n900: '#292b31',
    shSm: '0 0 0 1px #3f424d', shMd: '0 0 0 1px #595d6c, 0 6px 18px rgba(0,0,0,0.55)', shLg: '0 0 0 1px #9397ab, 0 16px 40px rgba(0,0,0,0.65)',
    hero: '#262a4a', hero2: '#20222f', card2: '#2c3057', fab1: '#3b3566', fab2: '#272442'
  },
  light: {
    bg: '#f4f4f9', surface: '#ffffff', text: '#1b1c26', divider: 'rgba(27,28,38,0.12)',
    accent: '#7264cf', a100: '#2b2455', a200: '#453a86', a300: '#5b4fa8', a400: '#7264cf', a500: '#9a8fe0',
    a600: '#bdb4ee', a700: '#d5cffa', a800: '#e6e2fd', a900: '#f2f0ff',
    n200: '#2a2c38', n300: '#3d404f', n400: '#5f6377', n500: '#7c8194', n600: '#9498a9', n700: '#c2c5d2', n800: '#dfe1ea', n900: '#eef0f6',
    shSm: '0 0 0 1px rgba(27,28,38,0.08)', shMd: '0 0 0 1px rgba(27,28,38,0.08), 0 6px 18px rgba(27,28,38,0.10)', shLg: '0 0 0 1px rgba(27,28,38,0.10), 0 16px 40px rgba(27,28,38,0.16)',
    hero: '#e7e5fb', hero2: '#eceef7', card2: '#f0eefc', fab1: '#7264cf', fab2: '#5b4fa8'
  }
};

export const TAROT = [
  { name: 'The Star', up: true, key: 'Quiet hope after a hard stretch', read: 'You have been running on will alone. The Star does not ask you to push \u2014 it asks you to let one good thing be true.', tie: 'You have not taken a full day off in eleven days.' },
  { name: 'Eight of Pentacles', up: true, key: 'Craft, repetition, mastery', read: 'The unglamorous version of ambition. Small work, done today, is the whole answer.', tie: 'Nine of this week\u2019s fourteen sessions touched the same build.' },
  { name: 'Two of Swords', up: false, key: 'A decision avoided', read: 'Reversed: the blindfold is coming off. You already know the answer; you are negotiating with the discomfort of saying it.', tie: 'The vendor decision has moved three days running.' },
  { name: 'The Empress', up: true, key: 'Care, family, growing things', read: 'Something at home needs your presence more than your competence.', tie: 'Ba\u2019s Saturday appointment is still unconfirmed.' },
  { name: 'Wheel of Fortune', up: true, key: 'A turn you did not schedule', read: 'A change lands this week from outside your plan. Meet it early rather than reacting late.', tie: 'Mercury turns direct Thursday \u2014 the same day your price expires.' },
  { name: 'Four of Cups', up: false, key: 'Interest returning', read: 'Reversed: the numbness lifts. Say yes to the small invitation you have been declining.', tie: 'You declined two social plans this week.' }
];

export const PERSONAS = [
  { id: 'student', label: 'Student', icon: 'ph-student', outcome: 'Lectures become notes, then revision questions the night before.', promise: 'Week one is about one thing: never rewriting a lecture again.', stat: '4 h 10 m', statNote: 'Median time students got back in week one of the pilot \u2014 mostly re-reading and re-typing.' },
  { id: 'founder', label: 'Founder', icon: 'ph-rocket-launch', outcome: 'Every promise you make out loud comes back as a task with the quote attached.', promise: 'Week one is about one thing: nothing you promised gets dropped.', stat: '2 h 40 m', statNote: 'Median time founders got back in week one of the pilot \u2014 mostly recall and follow-ups.' },
  { id: 'creator', label: 'Creator', icon: 'ph-video', outcome: 'Half-formed ideas said out loud become a searchable idea bank.', promise: 'Week one is about one thing: no idea said out loud is lost.', stat: '31 ideas', statNote: 'Average number of usable ideas creators recovered in their first week.' },
  { id: 'pro', label: 'Professional', icon: 'ph-briefcase', outcome: 'Meetings end with owners, dates and the exact words that were agreed.', promise: 'Week one is about one thing: never being the person who mis-remembered.', stat: '2 h 05 m', statNote: 'Median time professionals got back in week one, mostly writing up meetings.' },
  { id: 'seeker', label: 'Seeker', icon: 'ph-compass', outcome: 'A quiet daily reflection that already knows how your week actually went.', promise: 'Week one is about one thing: two honest minutes a day.', stat: '11 of 14', statNote: 'Days pilot users kept their reflection streak without a single reminder.' }
];
