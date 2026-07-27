import StayApp from './stay-app';

// Prototype props (defaults from the design's data-props):
// language: 'en' | 'hi' | 'gu' · tone: 'warm' | 'neutral'
// todayLayout: 'timeline' | 'cards' | 'oneThing' · askStyle: 'cited' | 'chat'
// Deep-link any screen with ?screen=<id>, e.g. /?screen=welcome
export default async function Page({ searchParams }) {
  const sp = await searchParams;
  return (
    <StayApp
      language="en"
      tone="warm"
      todayLayout="timeline"
      askStyle="cited"
      initialScreen={typeof sp?.screen === 'string' ? sp.screen : undefined}
    />
  );
}
