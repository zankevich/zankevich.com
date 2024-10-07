import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Person, WithContext } from 'schema-dts';
import config from '@/config';
import './globals.css';


export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl),
  title: config.title,
  description: config.description,
  creator: config.author,
  authors: [{ name: config.author, url: config.siteUrl }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: config.title,
    siteName: config.title,
    description: config.description,
    url: '/',
  },
  twitter: {
    card: 'summary',
    site: '@ArtyomZankevich',
    creator: '@ArtyomZankevich',
    title: config.title,
    description: config.description,
  },
};

const jsonLdPerson: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: config.author,
  givenName: 'Artyom',
  familyName: 'Zankevich',
  gender: 'https://schema.org/Male',
  nationality: {
    '@type': 'Country',
    name: 'Belarus',
    url: 'https://en.wikipedia.org/wiki/Belarus',
  },
  birthDate: '1992-07-29',
  email: 'artyom@zankevich.com',
  url: config.siteUrl,
  image: 'https://secure.gravatar.com/avatar/b0f3fe3a6f5afeb2a8955d8d78f5ede0?s=200',
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
    config.siteUrl,
    'https://linkedin.com/in/zankevich',
    'https://github.com/zankevich',
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <body className="bg-slate-900">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
      </body>
    </html>
  );
}
