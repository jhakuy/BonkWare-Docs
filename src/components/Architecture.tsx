'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Brain, 
  Github, 
  Users, 
  ArrowRight, 
  ArrowDown,
  Zap,
  Eye,
  Shield,
  Cpu,
  GitBranch,
  Vote,
  Rocket,
  Settings,
  CheckCircle,
  Clock
} from 'lucide-react'

const Architecture = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const architectureNodes = [
    {
      id: 'governance',
      title: 'Community Governance',
      subtitle: 'Proposals & Voting',
      description: 'Feature requests and major decisions live in our transparent voting system. Only approved proposals enter the AI work queue.',
      icon: Vote,
      bonkEmoji: '🗳️',
      color: 'from-blue-400 to-cyan-500',
      position: { x: 15, y: 30 },
      features: ['On-chain voting', 'Proposal system', 'Community-driven', 'Transparent decisions']
    },
    {
      id: 'ai-agent',
      title: 'Autonomous AI Agent',
      subtitle: 'Claude Sonnet → Opus',
      description: 'Runs 24/7, continuously ingesting community-approved specs and self-driving deployments. Upgradeable to Opus for more capacity.',
      icon: Brain,
      bonkEmoji: '🤖',
      color: 'from-bonk-400 to-sunset-500',
      position: { x: 50, y: 70 },
      features: ['24/7 operation', 'Claude Sonnet powered', 'Auto-deployments', 'Upgradeable to Opus']
    },
    {
      id: 'codebase',
      title: 'Open Source Codebase',
      subtitle: 'GitHub Repository',
      description: 'Entire codebase—AI pipelines, infra scripts, deployment manifests—is public. Encourages contributions, audits, and full transparency.',
      icon: Github,
      bonkEmoji: '📚',
      color: 'from-purple-400 to-pink-500',
      position: { x: 85, y: 30 },
      features: ['Fully open source', 'Public audits', 'Community contributions', 'Zero closed doors']
    }
  ]

  const pillars = [
    {
      id: 'autonomous',
      title: 'Autonomous AI Agent',
      description: 'Claude Sonnet runs continuously, ingesting approved specs and managing deployments autonomously. Future upgrade path to Opus for enhanced capacity.',
      icon: Brain,
      bonkEmoji: '🧠',
      color: 'from-bonk-500 to-sunset-600',
      benefits: ['24/7 operation', 'Self-managing', 'Scalable AI', 'Future-proof']
    },
    {
      id: 'opensource',
      title: 'Fully Open Source',
      description: 'Complete transparency with public codebase, AI pipelines, and infrastructure. Community-driven development with full audit capabilities.',
      icon: Github,
      bonkEmoji: '🌐',
      color: 'from-purple-500 to-indigo-600',
      benefits: ['Full transparency', 'Community audits', 'Open contributions', 'Trust through visibility']
    },
    {
      id: 'governance',
      title: 'Community Governance',
      description: 'Democratic decision-making through transparent voting. Only community-approved proposals drive development priorities.',
      icon: Users,
      bonkEmoji: '🗳️',
      color: 'from-blue-500 to-cyan-600',
      benefits: ['Democratic process', 'Community control', 'Transparent voting', 'Collective wisdom']
    }
  ]

  const getConnectionPath = (from: any, to: any) => {
    const dx = to.x - from.x
    const dy = to.y - from.y
    const midX = from.x + dx * 0.5
    const midY = from.y + dy * 0.5
    
    return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`
  }

  return (
    <section id="architecture" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-white to-orange-50/30" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)
            `,
          }} />
        </div>
        
        {/* Floating Code Particles */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-6 h-6 text-bonk-400 opacity-60"
        >
          &lt;/&gt;
        </motion.div>
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotate: [0, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-20 right-20 w-8 h-8 text-sunset-500 opacity-60"
        >
          { }
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
            <Cpu className="w-5 h-5 text-bonk-600" />
            <span className="text-base font-medium text-bonk-700">System Architecture</span>
            <span className="text-xl">⚙️</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Autonomous <span className="bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent">AI Ecosystem</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BonkWare operates as a self-driving platform where community governance meets 
            autonomous AI execution—transparent, efficient, and completely decentralized.
          </p>
        </motion.div>

        {/* Simple Flow Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How BonkWare Works
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {architectureNodes.map((node, index) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-bonk-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    {index < architectureNodes.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-bonk-400 hidden lg:block" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 text-center h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${node.color} p-1 shadow-lg`}>
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <node.icon className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {node.title}
                  </h4>
                  <p className="text-bonk-600 font-medium mb-4">{node.subtitle}</p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {node.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {node.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* BONK Emoji */}
                  <div className="absolute top-4 right-4 text-2xl">
                    {node.bonkEmoji}
                  </div>
                </div>

                {/* Mobile Arrow */}
                {index < architectureNodes.length - 1 && (
                  <div className="flex justify-center my-6 lg:hidden">
                    <ArrowDown className="w-6 h-6 text-bonk-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Three Pillars of Autonomy
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Icon & Emoji */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${pillar.color} p-1 shadow-lg`}>
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <pillar.icon className="w-8 h-8 text-gray-700" />
                      </div>
                    </div>
                    <span className="text-3xl">{pillar.bonkEmoji}</span>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {pillar.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-bonk-400 rounded-full" />
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-bonk-50 to-sunset-50 rounded-2xl p-8 border border-bonk-100">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Rocket className="w-6 h-6 text-bonk-600" />
              <h4 className="text-xl font-bold text-gray-900">Evolution Path</h4>
              <span className="text-2xl">🚀</span>
            </div>
            
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              <strong>Current:</strong> Claude Sonnet provides robust 24/7 autonomous operation.
              <br />
              <strong>Future:</strong> Seamless upgrade to Opus when we need enhanced capacity and capabilities.
              <br />
              <em>Zero downtime, maximum transparency, infinite scalability.</em>
            </p>

            <div className="flex items-center justify-center mt-6 space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-600">Claude Sonnet Active</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 text-gray-400" />
                <span className="text-gray-600">Opus Ready</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Architecture