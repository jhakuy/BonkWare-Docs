'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Zap, Users, Gamepad2 } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    {
      number: '4',
      label: 'Game Modes',
      icon: Gamepad2,
      description: 'Interactive experiences'
    },
    {
      number: '∞',
      label: 'Community Ideas',
      icon: Sparkles,
      description: 'Unlimited possibilities'
    },
    {
      number: '24/7',
      label: 'AI Operation',
      icon: Zap,
      description: 'Autonomous development'
    }
  ]

  // Fixed positions to avoid hydration mismatch
  const floatingElements = [
    { left: '15%', top: '20%', delay: 0.5, duration: 4 },
    { left: '85%', top: '15%', delay: 1.2, duration: 3.5 },
    { left: '25%', top: '80%', delay: 2.1, duration: 4.5 },
    { left: '75%', top: '70%', delay: 0.8, duration: 3.8 },
    { left: '45%', top: '25%', delay: 1.8, duration: 4.2 },
    { left: '65%', top: '85%', delay: 2.5, duration: 3.2 },
  ]

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">
                Community-Driven AI Evolution Platform
              </span>
              <div className="w-2 h-2 bg-gradient-bonk rounded-full" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Power the Future with</span>
              <br />
              <span className="text-gradient-bonk">BonkWare</span>
            </h1>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28">
      {/* Animated Background - Sunset Theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-bonk-100/30 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-bonk-300/30 to-sunset-300/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-sunset-400/30 to-bonk-400/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-bonk rounded-full opacity-60"
            style={{
              left: element.left,
              top: element.top,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 pt-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-bonk-100/60 to-sunset-100/60 border border-bonk-200 rounded-full px-6 py-3 backdrop-blur-sm"
          >
            <Zap className="w-5 h-5 text-bonk-600" />
            <span className="text-base font-medium text-bonk-700">
              Community-Driven AI Evolution Platform
            </span>
            <div className="w-2 h-2 bg-gradient-bonk rounded-full animate-pulse" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-gray-900">Power the Future with</span>
            <br />
            <span className="text-gradient-bonk animate-gradient bg-gradient-to-r from-bonk-600 via-bonk-500 to-sunset-600">
              BonkWare
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Where governance meets gaming, and community drives innovation. 
            Join the revolution of decentralized AI development on Solana.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="btn-primary group">
              <span>Explore Platform</span>
              <ArrowDown className="w-5 h-5 ml-2 group-hover:animate-bounce" />
            </button>
            <button className="btn-secondary">
              Join Community
            </button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-20 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="bg-white/70 backdrop-blur-sm border border-bonk-200/50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/80 hover:shadow-bonk-200/20">
                <div className="absolute inset-0 bg-gradient-to-br from-bonk-500/5 to-sunset-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-bonk rounded-xl mb-4 mx-auto shadow-lg shadow-bonk-200">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Hero