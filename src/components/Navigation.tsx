'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink, Twitter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#introduction', label: 'Introduction' },
    { href: '#architecture', label: 'Architecture' },
    { href: '#ai-backrooms', label: 'AI Backrooms' },
    { href: '#gamemodes', label: 'Gamemodes' },
    { href: '#governance', label: 'Governance' },
    { href: '#roadmap', label: 'Roadmap' },
  ]

  const socialLinks = [
    { href: 'https://x.com/BonkWareAI', icon: Twitter, label: 'Twitter/X' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 border-b border-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <Image
                src="/BonkWarePFP.jpeg"
                alt="BonkWare Logo"
                width={32}
                height={32}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-sunset-400 to-bonk-500 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gradient-bonk">
                BonkWare
              </h1>
              <div className="flex items-center space-x-1">
                <span className="text-xs font-medium text-bonk-600 bg-bonk-100 px-2 py-0.5 rounded-full">
                  DOCS
                </span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-bonk-600 font-medium text-sm transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-bonk group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-2 text-gray-600 hover:text-bonk-600 hover:bg-bonk-50 rounded-lg transition-all duration-200"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="#"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Launch App</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-bonk-600 hover:bg-bonk-50 rounded-lg transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-bonk-600 font-medium py-2 px-4 rounded-lg hover:bg-bonk-50 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="p-2 text-gray-600 hover:text-bonk-600 hover:bg-bonk-50 rounded-lg transition-all duration-200"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                  <Link
                    href="#"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Launch App</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation