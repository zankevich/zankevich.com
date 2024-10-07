import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaXTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import UniverseBackground from '@/components/UniverseBackground';
import SocialLink from '@/components/SocialLink';


const workHistory = [
  {
    company: 'Akveo',
    href: 'https://www.akveo.com',
    logo: '/akveo-logo.png',
    position: 'Head of Web Department',
    period: '2021 — Present',
  },
  {
    company: 'Akveo',
    href: 'https://www.akveo.com',
    logo: '/akveo-logo.png',
    position: 'Software Engineer',
    period: '2019 — 2021',
  },
  {
    company: 'Vention (iTechArt)',
    href: 'https://ventionteams.com',
    logo: '/vention-logo.png',
    position: 'Software Engineer',
    period: '2015 — 2019',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0b1e] text-gray-100">
      <UniverseBackground />
      <Header />
      <WorkHistory />
    </div>
  )
}

function Header() {
  return (
    <header className="animate-fade-in relative z-10 flex flex-col justify-center items-center min-h-screen p-4 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
        Artyom Zankevich
      </h1>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-200">
        Software Engineer, Manager, Mentor
      </h2>
      <h3 className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl">
        Crafting cutting-edge interfaces with expertise in frontend development, backend development, and cloud services
      </h3>
      <div className="flex justify-center space-x-4 mb-8">
        <SocialLink href="https://linkedin.com/in/zankevich" icon={<FaLinkedin />} label="Artyom Zankevich's LinkedIn" />
        <SocialLink href="https://github.com/zankevich" icon={<FaGithub />} label="Artyom Zankevich's GitHub" />
        <SocialLink href="https://x.com/ArtyomZankevich" icon={<FaXTwitter />} label="Artyom Zankevich's Twitter" />
        <SocialLink href="mailto:artyom@zankevich.com" icon={<FaEnvelope />} label="Artyom Zankevich's Email" />
      </div>
      <Link
        href="#work"
        className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        View My Work History
      </Link>
    </header>
  )
}

function WorkHistory() {
  return (
    <section id="work" className="animate-fade-in relative z-10 flex flex-col justify-center items-center min-h-screen p-4">
      <div className="container max-w-4xl px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          Work History
        </h2>
        <div className="relative">
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>
          <div className="space-y-12">
            {workHistory.map((job, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#0a0b1e] z-10"></div>
                <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg flex items-center">
                  <a href={job.href} target="_blank" rel="noopener noreferrer nofollow" aria-label={`${job.company} homepage`}>
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      title={`${job.company} homepage`}
                      width={40}
                      height={40}
                      className="min-w-10 min-h-10 rounded-full"
                    />
                  </a>
                  <div className="flex items-center mx-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold">{job.company}</h3>
                      <p className="text-gray-400">{job.position}</p>
                    </div>
                  </div>
                  <p className="hidden min-[375px]:block text-gray-300 ml-auto text-nowrap">{job.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="https://www.linkedin.com/in/zankevich/"
            rel="noopener noreferrer nofollow"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 inline-flex items-center hover:scale-105 active:scale-95"
          >
            Open Resume
          </Link>
        </div>
      </div>
    </section>
  )
}
