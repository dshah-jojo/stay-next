'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import StayApp from './stay-app';

// Prototype props (defaults from the design's data-props):
// language: 'en' | 'hi' | 'gu' · tone: 'warm' | 'neutral'
// todayLayout: 'timeline' | 'cards' | 'oneThing' · askStyle: 'cited' | 'chat'
// Deep-link any screen with ?screen=<id>, e.g. /?screen=welcome
function App() {
  const sp = useSearchParams();
  return (
    <StayApp
      language="en"
      tone="warm"
      todayLayout="timeline"
      askStyle="cited"
      initialScreen={sp.get('screen') || undefined}
    />
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <App />
    </Suspense>
  );
}
