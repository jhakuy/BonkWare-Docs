'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Zap, Users, Gamepad2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

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
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-bonk-300/20 to-sunset-300/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-sunset-400/20 to-bonk-400/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-amber-300/15 to-orange-300/15 rounded-full blur-xl" />
        {/* Static floating dots */}
        <div className="absolute w-2 h-2 bg-bonk-400/40 rounded-full" style={{ left: '15%', top: '20%' }} />
        <div className="absolute w-2 h-2 bg-sunset-400/40 rounded-full" style={{ left: '85%', top: '15%' }} />
        <div className="absolute w-2 h-2 bg-bonk-500/40 rounded-full" style={{ left: '75%', top: '70%' }} />
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
              Ideas in. Product out. All on-chain.
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
            BonkWare&apos;s mission is to turn community-approved ideas into shipped code—safely and on-chain—by pairing an autonomous AI agent with community-controlled governance.
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
            <a 
              href="https://x.com/BonkWareAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow on X
            </a>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="mt-20 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative hover:scale-105 transition-transform duration-200"
            >
              <div className="bg-white/80 border border-bonk-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-bonk rounded-xl mb-4 mx-auto shadow-md">
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
          ))}
        </div>

        {/* BonkWare Banner */}
        <div className="mt-16 flex justify-center">
          <div className="relative max-w-2xl w-full">
            <Image
              src="/BonkWareBanner.jpeg"
              alt="BonkWare - Ideas in. Product out. All on-chain."
              width={800}
              height={200}
              className="rounded-2xl shadow-2xl hover:shadow-bonk-200/30 transition-shadow duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero