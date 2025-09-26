import React from 'react'

const socials = [
  { name: 'Instagram', href: 'https://instagram.com', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1 1 0 100 2 1 1 0 000-2z"/>
    </svg>
  ) },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-7.2c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z"/>
    </svg>
  ) },
  { name: 'Twitter', href: 'https://twitter.com', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.27 4.27 0 00-7.29 3.9A12.12 12.12 0 013 4.9a4.26 4.26 0 001.32 5.7c-.63-.02-1.22-.19-1.73-.47v.05a4.27 4.27 0 003.42 4.18c-.3.08-.61.12-.93.12-.23 0-.45-.02-.66-.06a4.27 4.27 0 003.98 2.96A8.56 8.56 0 012 19.54a12.08 12.08 0 006.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.39-.01-.58A8.7 8.7 0 0024 5.56a8.5 8.5 0 01-2.54.7z"/>
    </svg>
  ) },
  { name: 'YouTube', href: 'https://youtube.com', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23.5 6.2a3.01 3.01 0 00-2.12-2.13C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.38.57A3.01 3.01 0 00.5 6.2 31.13 31.13 0 000 12c0 1.94.06 3.88.5 5.8.28 1.01 1.11 1.8 2.12 2.1C4.48 20.5 12 20.5 12 20.5s7.52 0 9.38-.57a3.01 3.01 0 002.12-2.13c.44-1.92.5-3.86.5-5.8 0-1.94-.06-3.88-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
    </svg>
  ) },
  { name: 'Facebook', href: 'https://facebook.com', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M22.675 0h-21.35C.595 0 0 .594 0 1.326v21.348C0 23.406.595 24 1.325 24H12.82v-9.294H9.692V11.08h3.127V8.41c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.463.099 2.796.143v3.24h-1.919c-1.504 0-1.794.715-1.794 1.765v2.31h3.587l-.467 3.626h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .594 23.406 0 22.675 0z"/>
    </svg>
  ) },
]

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0b0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#15161a] border border-white/10 flex items-center justify-center">
            <img src="/logo.png" alt="Vaayu Robotics" className="h-6 w-6 object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white/90 font-medium">Vaayu Robotics</span>
            <span className="text-xs text-white/50">Advanced Drone Solutions</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}
               className="text-white/60 hover:text-[#ffcf14] transition-colors">
              {s.icon}
            </a>
          ))}
        </div>

        <div className="text-right text-white/60 text-sm">
          <span>Copyright 2025 Vaayu Robotics | All rights reserved</span>
        </div>
      </div>

      <div className="md:hidden px-6 pb-6 flex items-center gap-4 justify-start">
        {socials.map(s => (
          <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}
             className="text-white/60 hover:text-[#ffcf14] transition-colors">
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer


