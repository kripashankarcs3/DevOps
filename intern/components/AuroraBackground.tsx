"use client"

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg-primary)' }} />

      <div
        className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-2xl animate-blob gpu-layer"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.14), transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[26rem] h-[26rem] rounded-full blur-2xl animate-blob-fast gpu-layer"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent 70%)', animationDelay: '2s' }}
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)',
        }}
      />

      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              width: i % 3 === 0 ? '3px' : '2px',
              height: i % 3 === 0 ? '3px' : '2px',
              backgroundColor: i % 2 === 0 ? '#8B5CF6' : '#3B82F6',
              animationDelay: `${(i % 6) * 0.5}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AuroraBackground
