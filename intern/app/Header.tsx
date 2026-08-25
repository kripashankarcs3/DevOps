"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { href: '/colleges', label: 'Colleges' },
  { href: '/predictor', label: 'Predictor' },
  { href: '/compare', label: 'Compare' },
  { href: '/dashboard', label: 'Dashboard' },
]

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg-primary) 90%, transparent)' : 'color-mix(in srgb, var(--bg-primary) 70%, transparent)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid var(--border-default)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="group relative flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 8, scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-electric-100 to-accent-purple shadow-glow"
            >
              <span className="text-white font-bold text-sm">CD</span>
            </motion.div>
            <span className="font-display font-semibold text-lg sm:text-xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
              College<span className="gradient-text-cyber">Discovery</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname?.startsWith(item.href + '/')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm rounded-full transition-all duration-300 hover:bg-white/[0.06] group/nav"
                  style={{ color: active ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                >
                  {item.label}
                  <span
                    className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-electric-100 to-accent-purple transition-transform duration-300 origin-left"
                    style={{ transform: active ? 'scaleX(1)' : 'scaleX(0)' }}
                  />
                  <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-electric-100 to-accent-purple scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300 origin-left opacity-60" />
                </Link>
              )
            })}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/[0.06] ml-1"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.25 }}
                  className="flex"
                >
                  {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/[0.06]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-white/[0.06]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'color-mix(in srgb, var(--bg-primary) 95%, transparent)' }}
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item, i) => {
                const active = pathname === item.href || pathname?.startsWith(item.href + '/')
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-sm rounded-xl transition-all duration-300"
                      style={{
                        color: active ? '#fff' : 'var(--text-secondary)',
                        backgroundColor: active ? 'rgba(99,102,241,0.9)' : 'transparent',
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
