'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Gamepad2,
  Coins,
  Zap,
  Brain,
  Trophy,
  Clock,
  Users,
  Star,
  Sparkles,
  ArrowRight,
  Construction,
  Hammer
} from 'lucide-react'

interface GameMode {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  bonkEmoji: string
  color: string
  status: 'coming-soon' | 'in-development' | 'planning'
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert'
}

const Gamemodes = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const gameModes: GameMode[] = [
    {
      id: 'bonkflip',
      title: 'BonkFlip',
      subtitle: 'Classic Coin Flip',
      description: 'Simple yet addictive coin flipping game with BonkWare theming. Test your luck and earn rewards!',
      features: ['50/50 odds', 'Instant results', 'Reward multipliers', 'Streak bonuses'],
      bonkEmoji: '🪙',
      color: 'from-bonk-400 to-sunset-500',
      status: 'in-development',
      difficulty: 'Easy'
    },
    {
      id: 'bonkrace',
      title: 'BonkRace',
      subtitle: 'Fast-Paced Racing',
      description: 'High-speed racing mini-game where reflexes and strategy determine the winner. Compete against other BONK holders!',
      features: ['Real-time racing', 'Power-ups', 'Leaderboards', 'Tournament modes'],
      bonkEmoji: '🏁',
      color: 'from-blue-400 to-indigo-500',
      status: 'in-development',
      difficulty: 'Medium'
    },
    {
      id: 'bonkmemory',
      title: 'BonkMemory',
      subtitle: 'Memory Matching',
      description: 'Challenge your memory with BONK-themed cards. Match pairs to earn NFT rewards and climb the leaderboard.',
      features: ['NFT card rewards', 'Increasing difficulty', 'Memory challenges', 'Collection building'],
      bonkEmoji: '🧠',
      color: 'from-purple-400 to-pink-500',
      status: 'coming-soon',
      difficulty: 'Medium'
    },
    {
      id: 'bonkai-duel',
      title: 'BonkAI Duel',
      subtitle: 'Player vs AI',
      description: 'Strategic battles against our AI powered by Claude. Outsmart the AI to prove your tactical superiority!',
      features: ['AI opponents', 'Strategy gameplay', 'Adaptive difficulty', 'Skill progression'],
      bonkEmoji: '⚔️',
      color: 'from-red-400 to-orange-500',
      status: 'coming-soon',
      difficulty: 'Expert'
    }
  ]

  const developmentStats = [
    { label: 'Games in Development', value: '2', icon: Construction },
    { label: 'Games Planned', value: '4', icon: Sparkles },
    { label: 'Community Requests', value: '12+', icon: Users }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-development':
        return { text: 'In Development', color: 'bg-bonk-100 text-bonk-700', icon: '🔨' }
      case 'coming-soon':
        return { text: 'Coming Soon', color: 'bg-blue-100 text-blue-700', icon: '🔮' }
      case 'planning':
        return { text: 'Planning', color: 'bg-gray-100 text-gray-700', icon: '📋' }
      default:
        return { text: 'Unknown', color: 'bg-gray-100 text-gray-700', icon: '❓' }
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600'
      case 'Medium': return 'text-yellow-600'
      case 'Hard': return 'text-orange-600'
      case 'Expert': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <section id="gamemodes" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-orange-50/30" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-bonk-200/20 to-sunset-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-sunset-300/20 to-bonk-300/20 rounded-full blur-3xl" />
        
        {/* Floating Game Elements */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 text-4xl opacity-20"
        >
          🎮
        </motion.div>
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 right-32 text-3xl opacity-20"
        >
          🏆
        </motion.div>
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
            <Gamepad2 className="w-5 h-5 text-bonk-600" />
            <span className="text-base font-medium text-bonk-700">Game Ecosystem</span>
            <span className="text-xl">🎮</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            BONK <span className="bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent">Gamemodes</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get ready for an exciting gaming ecosystem! Our development team is hard at work 
            creating fun, engaging, and rewarding game experiences for the BONK community.
          </p>
        </motion.div>

        {/* Work in Progress Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-bonk-50 to-sunset-50 rounded-2xl p-8 border border-bonk-200 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Construction className="w-8 h-8 text-bonk-600" />
              <Hammer className="w-6 h-6 text-bonk-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Currently Under Development
            </h3>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Our team is actively building these exciting gamemodes! While they&apos;re not ready to play yet, 
              you can preview what&apos;s coming and follow our development progress.
            </p>

            {/* Development Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {developmentStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-white/60 rounded-xl p-4"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-bonk-600" />
                  </div>
                  <div className="text-2xl font-bold text-bonk-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Game Modes Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            <span className="text-4xl mr-3">🎯</span>
            Upcoming Game Modes
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gameModes.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      {/* Game Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${game.color} p-1 shadow-lg`}>
                        <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                          <span className="text-2xl">{game.bonkEmoji}</span>
                        </div>
                      </div>
                      
                      {/* Title & Status */}
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{game.title}</h4>
                        <p className="text-bonk-600 font-medium text-sm mb-2">{game.subtitle}</p>
                        
                        <div className="flex items-center space-x-2">
                          {(() => {
                            const badge = getStatusBadge(game.status)
                            return (
                              <span className={`text-xs px-3 py-1 rounded-full font-medium ${badge.color}`}>
                                {badge.icon} {badge.text}
                              </span>
                            )
                          })()}
                          <span className={`text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                            ⭐ {game.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coming Soon Indicator */}
                    {game.status !== 'in-development' && (
                      <div className="text-right">
                        <Clock className="w-5 h-5 text-gray-400 mb-1" />
                        <p className="text-xs text-gray-500">Soon</p>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {game.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-sunset-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar for In Development */}
                  {game.status === 'in-development' && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Development Progress</span>
                        <span className="text-sm font-bold text-bonk-600">
                          {game.id === 'bonkflip' ? '75%' : '45%'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { 
                            width: game.id === 'bonkflip' ? '75%' : '45%' 
                          } : {}}
                          transition={{ delay: 1 + index * 0.2, duration: 1 }}
                          className="bg-gradient-to-r from-bonk-500 to-sunset-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-bonk-50 hover:to-sunset-50 text-gray-700 hover:text-bonk-700 font-medium py-3 px-6 rounded-xl transition-all duration-300 cursor-not-allowed"
                    disabled
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>Coming Soon</span>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Involvement CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-bonk-50 to-sunset-50 rounded-3xl p-12 border border-bonk-100">
            <Sparkles className="w-16 h-16 text-bonk-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Help Shape Our Games <span className="text-4xl">🎮</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Got ideas for new game modes or features? Join our Discord community and 
              help us build the most engaging BONK gaming experience!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Join Discord</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Follow Development</span>
                <Users className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gamemodes