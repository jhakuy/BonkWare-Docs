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

  // Games are currently work in progress - commenting out for now
  /*
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
  */


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
        <div className="mb-16">
          <div className="bg-gradient-to-r from-bonk-50 to-sunset-50 rounded-2xl p-12 border border-bonk-200 text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Construction className="w-12 h-12 text-bonk-600" />
              <Hammer className="w-8 h-8 text-bonk-500" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Work in Progress
            </h3>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Gaming experiences are currently under development. Follow our progress on Twitter for updates!
            </p>

            <a
              href="https://x.com/BonkWareAI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <span>Follow Development</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Gamemodes