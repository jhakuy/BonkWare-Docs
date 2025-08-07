'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  CheckCircle, 
  Clock, 
  Rocket, 
  Zap, 
  Crown, 
  Gamepad2, 
  Brain, 
  Sparkles,
  ArrowRight,
  Calendar,
  Users,
  Star
} from 'lucide-react'

interface RoadmapPhase {
  id: string
  title: string
  subtitle: string
  status: 'completed' | 'current' | 'upcoming' | 'future'
  progress: number
  timeline: string
  description: string
  features: string[]
  icon: any
  bonkEmoji: string
  color: string
}

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const phases: RoadmapPhase[] = [
    {
      id: 'genesis',
      title: 'Genesis Launch',
      subtitle: 'Foundation & Community',
      status: 'completed',
      progress: 100,
      timeline: 'Q4 2024',
      description: 'Established the core infrastructure and launched our vibrant community.',
      features: [
        'BONK token distribution',
        'Council of Architects NFT mint',
        'Community Discord server',
        'Initial governance framework'
      ],
      icon: Crown,
      bonkEmoji: '👑',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'alpha',
      title: 'Alpha Release',
      subtitle: 'Core Gaming & Governance',
      status: 'current',
      progress: 75,
      timeline: 'Q1 2025',
      description: 'Rolling out the first games and establishing decentralized governance.',
      features: [
        'BonkFlip & BonkRace launch',
        'Governance voting system',
        'Reputation rewards',
        'Community proposals'
      ],
      icon: Gamepad2,
      bonkEmoji: '🎮',
      color: 'from-bonk-400 to-sunset-500'
    },
    {
      id: 'beta',
      title: 'Beta Expansion',
      subtitle: 'AI Integration & Advanced Games',
      status: 'upcoming',
      progress: 0,
      timeline: 'Q2 2025',
      description: 'Introducing AI-powered features and expanding the game ecosystem.',
      features: [
        'BonkMemory & BonkAI Duel',
        'Claude Sonnet integration',
        'Automated development pipeline',
        'Narrative episodes system'
      ],
      icon: Brain,
      bonkEmoji: '🧠',
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'gamma',
      title: 'Gamma Evolution',
      subtitle: 'DeFi & Cross-chain',
      status: 'upcoming',
      progress: 0,
      timeline: 'Q3 2025',
      description: 'Expanding into DeFi protocols and multi-chain compatibility.',
      features: [
        'Yield farming pools',
        'Cross-chain bridging',
        'Advanced staking mechanisms',
        'Partner integrations'
      ],
      icon: Zap,
      bonkEmoji: '⚡',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'omega',
      title: 'Omega Ascension',
      subtitle: 'Full Autonomy & Metaverse',
      status: 'future',
      progress: 0,
      timeline: 'Q4 2025+',
      description: 'Achieving full platform autonomy and metaverse integration.',
      features: [
        'Fully autonomous governance',
        'Metaverse integration',
        'Global ecosystem expansion',
        'Next-gen AI companions'
      ],
      icon: Rocket,
      bonkEmoji: '🚀',
      color: 'from-indigo-400 to-purple-600'
    }
  ]

  const getStatusIcon = (status: string, progress: number) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'current':
        return (
          <div className="relative">
            <div className="w-6 h-6 rounded-full border-3 border-bonk-400 flex items-center justify-center">
              <div className="w-3 h-3 bg-bonk-500 rounded-full animate-pulse" />
            </div>
            <div className="absolute inset-0 w-6 h-6 rounded-full border-3 border-bonk-300 animate-spin" 
                 style={{ animationDuration: '3s' }} />
          </div>
        )
      default:
        return <Clock className="w-6 h-6 text-gray-400" />
    }
  }

  const getBonkMood = (status: string) => {
    switch (status) {
      case 'completed': return '😎' // Cool completed bonk
      case 'current': return '🔥' // Excited working bonk
      case 'upcoming': return '👀' // Curious anticipating bonk
      default: return '💤' // Sleeping future bonk
    }
  }

  return (
    <section id="roadmap" className="py-20 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-amber-100/30" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-bonk-300/20 to-sunset-300/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-sunset-400/30 to-bonk-400/30 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-bonk-100 to-sunset-100 rounded-full px-6 py-3 mb-6"
          >
            <Rocket className="w-5 h-5 text-bonk-600" />
            <span className="text-base font-medium text-bonk-700">Mission Timeline</span>
            <span className="text-xl">🚀</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Journey to the <span className="bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent">Future</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow BONK's evolution from community experiment to autonomous AI ecosystem. 
            Each milestone brings us closer to the decentralized future.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-bonk-200 via-sunset-300 to-bonk-400 transform -translate-x-1/2 hidden lg:block">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-bonk-500 to-sunset-500 origin-top"
            />
          </div>

          {/* Phase Cards */}
          <div className="space-y-12 lg:space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className={`relative lg:flex lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden lg:block z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} p-1 shadow-2xl`}>
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <phase.icon className="w-7 h-7 text-gray-700" />
                      </div>
                    </div>
                    
                    {/* Cute BONK */}
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-2 -right-2 text-2xl"
                    >
                      {getBonkMood(phase.status)}
                    </motion.div>
                    
                    {/* Pulse Animation for Current */}
                    {phase.status === 'current' && (
                      <div className="absolute inset-0 rounded-full bg-bonk-400/30 animate-ping" />
                    )}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  onHoverStart={() => setActivePhase(phase.id)}
                  onHoverEnd={() => setActivePhase(null)}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`lg:w-2/5 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
                    {/* Mobile Timeline Node */}
                    <div className="flex items-center space-x-4 lg:hidden mb-6">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} p-1`}>
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <phase.icon className="w-6 h-6 text-gray-700" />
                        </div>
                      </div>
                      {getStatusIcon(phase.status, phase.progress)}
                    </div>

                    {/* Card Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium text-gray-500">{phase.timeline}</span>
                        </div>
                        
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          phase.status === 'completed' ? 'bg-green-100 text-green-700' :
                          phase.status === 'current' ? 'bg-bonk-100 text-bonk-700' :
                          phase.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-500'
                        }`}>
                          {phase.status === 'completed' ? 'COMPLETED' :
                           phase.status === 'current' ? 'IN PROGRESS' :
                           phase.status === 'upcoming' ? 'COMING SOON' :
                           'FUTURE'}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-bonk-600 font-medium">{phase.subtitle}</p>
                    </div>

                    {/* Progress Bar */}
                    {phase.status === 'current' && (
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">Progress</span>
                          <span className="text-sm font-bold text-bonk-600">{phase.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${phase.progress}%` } : {}}
                            transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
                            className="bg-gradient-to-r from-bonk-500 to-sunset-500 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {phase.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.3 + featureIndex * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          {phase.status === 'completed' ? (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <div className="w-2 h-2 bg-bonk-400 rounded-full flex-shrink-0" />
                          )}
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Effect - Extra Info */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: activePhase === phase.id ? 1 : 0,
                        height: activePhase === phase.id ? 'auto' : 0 
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-bonk-500" />
                            <span className="text-sm text-gray-600">Community Impact</span>
                          </div>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-sunset-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-2/5" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-bonk-50 to-sunset-50 rounded-3xl p-12 border border-bonk-100">
            <Sparkles className="w-16 h-16 text-bonk-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The Journey Continues <span className="text-4xl">🐕</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              This roadmap is community-driven and evolves with every BONK holder's voice. 
              Join us in shaping the future of decentralized AI!
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Join the Mission</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Roadmap