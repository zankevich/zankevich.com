export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[#0a0b1e]" />
      <Stars />
      <Nebula />
    </div>
  )
}

function Stars() {
  return (
    <div className="absolute inset-0">
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  )
}

function Nebula() {
  return (
    <div
      className="absolute inset-0 opacity-20 animate-nebula"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,0) 70%)',
        backgroundSize: '400% 400%',
      }}
    />
  )
}
