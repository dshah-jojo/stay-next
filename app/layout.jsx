import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@phosphor-icons/web/regular/style.css';
import './globals.css';

export const metadata = {
  title: 'STAY — Apni Dhun Mein Raho',
  description:
    'Vernacular AI life companion. Core prototype, 16 screens: a screen-free pendant, a quiet app.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
