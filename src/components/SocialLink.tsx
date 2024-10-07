export default function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={label}
      className="text-2xl text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 active:scale-90"
    >
      {icon}
    </a>
  )
}
