import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Person, WithContext } from 'schema-dts';
import './globals.css';


const title = 'Artyom Zankevich | Software Engineer, Manager, Mentor | Expert in Frontend Development, Backend Development, and Cloud Services';
const description = 'Artyom Zankevich — Software Engineer working with JavaScript / TypeScript, Angular / React / React Native / Ionic, Ruby / Ruby on Rails, HTML / CSS / SASS and more.';
const image = 'https://secure.gravatar.com/avatar/b0f3fe3a6f5afeb2a8955d8d78f5ede0';

export const metadata: Metadata = {
  title,
  description,
  creator: 'Artyom Zankevich',
  authors: [{ name: 'Artyom Zankevich', url: 'https://www.zankevich.com' }],
  openGraph: {
    type: 'website',
    title,
    description,
    url: 'https://www.zankevich.com',
    images: image,
  },
  twitter: {
    card: 'summary',
    site: '@ArtyomZankevich',
    creator: '@ArtyomZankevich',
    title,
    description,
    images: image,
  },
};

const jsonLdPerson: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Artyom Zankevich',
  givenName: 'Artyom',
  familyName: 'Zankevich',
  gender: 'http://schema.org/Male',
  nationality: 'Belarusian',
  birthDate: '1992-07-29',
  email: 'artyom@zankevich.com',
  url: 'https://www.zankevich.com',
  image,
  jobTitle: 'Head of Web Department',
  worksFor: {
    '@type': 'Organization',
    name: 'Akveo',
    legalName: 'Akveo LLC',
    email: 'contact@akveo.com',
    url: 'https://www.akveo.com'
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Belarusian State University',
    url: 'https://bsu.by/en',
    sameAs: 'https://en.wikipedia.org/wiki/Belarusian_State_University'
  },
  sameAs: [
    'https://linkedin.com/in/zankevich',
    'https://github.com/zankevich',
    'https://www.zankevich.com',
    'https://x.com/ArtyomZankevich',
    'https://www.instagram.com/artyom.zankevich'
  ],
  knowsLanguage: ['Belarusian', 'Russian', 'English', 'Polish'],
  knowsAbout: [
    'Frontend Development',
    'Backend Development',
    'Cloud Services',
    'Management',
    'Mentoring',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </body>
    </html>
  );
}
