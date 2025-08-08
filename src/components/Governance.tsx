'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { 
  Lock,
  MessageSquare,
  Camera,
  FileText,
  Clock,
  Vote,
  Shield,
  Users,
  Archive,
  CheckCircle,
  ArrowDown,
  ArrowRight,
  Timer,
  Coins,
  Database,
  AlertTriangle
} from 'lucide-react'

interface GovernanceStep {
  id: string
  stepNumber: string
  title: string
  subtitle: string
  description: string
  details: string[]
  icon: any
  bonkEmoji: string
  color: string
  duration?: string
  isOptional?: boolean
}

const Governance = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.1 })

  const governanceSteps: GovernanceStep[] = [
    {
      id: 'vebai-locking',
      stepNumber: '0',
      title: 'veBAI Locking',
      subtitle: 'Optional Pre-Step',
      description: 'Lock BAI tokens to mint veBAI and gain voting power. Your veBAI balance determines voting weight across all governance steps.',
      details: [
        'Lock BAI → mint veBAI instantly',
        'Voting power = amount × (lock time / max time)',
        'veBAI balance decays linearly over time',
        'Higher lock time = more voting weight'
      ],
      icon: Lock,
      bonkEmoji: '🔐',
      color: 'from-purple-400 to-indigo-500',
      duration: 'Instant',
      isOptional: true
    },
    {
      id: 'ideation',
      stepNumber: '1',
      title: 'Ideation & Drafting',
      subtitle: 'Community Brainstorming',
      description: 'Community discusses and refines ideas in off-chain forums. Early feedback and specification drafting happens here.',
      details: [
        'Open brainstorming in Discord/Discourse',
        'Community feedback and discussion',
        'Technical specification drafting',
        'Collaborative idea refinement'
      ],
      icon: MessageSquare,
      bonkEmoji: '💡',
      color: 'from-blue-400 to-cyan-500',
      duration: 'Ongoing'
    },
    {
      id: 'snapshot-vote',
      stepNumber: '2',
      title: 'Snapshot Signal Vote',
      subtitle: 'Gas-Free Sentiment Check',
      description: 'Lightweight off-chain vote to gauge community sentiment. Anyone with veBAI can participate without gas fees.',
      details: [
        'Gas-free voting on Snapshot',
        'veBAI holders get voting rights',
        '1 vote per veBAI held at snapshot',
        'Broad community sentiment check'
      ],
      icon: Camera,
      bonkEmoji: '📸',
      color: 'from-green-400 to-blue-500',
      duration: '3-5 days'
    },
    {
      id: 'proposal-submission',
      stepNumber: '3',
      title: 'On-Chain Proposal',
      subtitle: 'Formal Submission',
      description: 'If Snapshot passes threshold (≥50% yes, ≥10% turnout), proposer stakes BAI deposit and submits on-chain.',
      details: [
        'Requires Snapshot threshold success',
        'Refundable BAI deposit required',
        'On-chain submission with metadata',
        'Triggers automated review timer'
      ],
      icon: FileText,
      bonkEmoji: '📋',
      color: 'from-bonk-400 to-sunset-500',
      duration: 'Transaction'
    },
    {
      id: 'review-period',
      stepNumber: '4',
      title: 'Review Period',
      subtitle: 'AI Analysis & Community Input',
      description: 'Claude Sonnet analyzes the proposal, generates digests, and identifies technical issues. Community can still provide feedback.',
      details: [
        'Automated Claude Sonnet analysis',
        'Proposal abstract generation',
        'Technical red-flag detection',
        'Final community feedback window'
      ],
      icon: Clock,
      bonkEmoji: '🤖',
      color: 'from-yellow-400 to-orange-500',
      duration: '48 hours'
    },
    {
      id: 'voting-window',
      stepNumber: '5',
      title: 'On-Chain Voting',
      subtitle: 'Weighted Decision Making',
      description: 'Official voting period where veBAI holders cast weighted votes. Voting power equals current veBAI balance.',
      details: [
        'Token-weighted voting system',
        'Voting power = current veBAI',
        'On-chain vote casting (gas fees)',
        'Configurable voting duration'
      ],
      icon: Vote,
      bonkEmoji: '🗳️',
      color: 'from-red-400 to-pink-500',
      duration: '72 hours'
    },
    {
      id: 'execution-timelock',
      stepNumber: '6',
      title: 'Execution Timelock',
      subtitle: 'Final Safety Period',
      description: 'Passed proposals enter timelock for final review. Allows last-minute objections and dispute resolution.',
      details: [
        'Requires quorum (≥10% veBAI participation)',
        'Majority vote requirement',
        'Final objection/dispute window',
        'Safety delay before execution'
      ],
      icon: Timer,
      bonkEmoji: '⏰',
      color: 'from-orange-400 to-red-500',
      duration: '24 hours'
    },
    {
      id: 'multisig-execution',
      stepNumber: '7',
      title: 'Multisig Execution',
      subtitle: 'Secure Implementation',
      description: 'Prepared multisig transaction executes approved changes. 4-of-6 signature requirement ensures security.',
      details: [
        'Auto-generated multisig transaction',
        '4-of-6 (M-of-N) signature requirement',
        'Parameter updates & deployments',
        'Treasury disbursements'
      ],
      icon: Shield,
      bonkEmoji: '🛡️',
      color: 'from-indigo-400 to-purple-500',
      duration: 'On signature'
    },
    {
      id: 'archive-iterate',
      stepNumber: '8',
      title: 'Archive & Iterate',
      subtitle: 'Learning & Improvement',
      description: 'Complete governance records stored in dashboard. Community reviews outcomes and can propose governance improvements.',
      details: [
        'Full process documentation',
        'Governance dashboard records',
        'Participation leaderboards',
        'Meta-governance improvements'
      ],
      icon: Archive,
      bonkEmoji: '📊',
      color: 'from-gray-400 to-slate-500',
      duration: 'Permanent'
    }
  ]

  const keyFeatures = [
    {
      icon: Coins,
      title: 'veBAI Tokenomics',
      description: 'Vote-escrowed tokens provide time-weighted governance power',
      bonkEmoji: '💰'
    },
    {
      icon: Database,
      title: 'Multi-Layer Process',
      description: 'Off-chain ideation + on-chain execution for efficiency',
      bonkEmoji: '🏗️'
    },
    {
      icon: AlertTriangle,
      title: 'Safety Mechanisms',
      description: 'Multiple review periods and multisig execution',
      bonkEmoji: '🛡️'
    }
  ]

  return (
    <section id="governance" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-orange-50/30 to-white" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-bonk-200/20 to-sunset-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sunset-300/20 to-bonk-300/20 rounded-full blur-3xl" />
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
            <Image
              src="/BonkWarePFP.jpeg"
              alt="BonkWare"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-base font-medium text-bonk-700">Democratic Governance</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Community <span className="bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent">Decision Making</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BonkWare&apos;s governance combines the efficiency of off-chain discussion with the security 
            of on-chain execution. Every step is transparent, democratic, and community-driven.
          </p>
        </motion.div>

        {/* Key Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/90 rounded-xl p-6 border border-bonk-100 text-center"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-bonk-400 to-sunset-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl">{feature.bonkEmoji}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Governance Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Governance Process Flow
          </h3>

          <div className="space-y-8">
            {governanceSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Card */}
                <div className="flex-1 max-w-2xl">
                  <div className="bg-white/90 rounded-2xl p-8 shadow-lg border border-gray-200">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        {/* Step Number */}
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-lg">{step.stepNumber}</span>
                        </div>
                        
                        {/* Title & Subtitle */}
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="text-xl font-bold text-gray-900">{step.title}</h4>
                            {step.isOptional && (
                              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Optional</span>
                            )}
                          </div>
                          <p className="text-bonk-600 font-medium">{step.subtitle}</p>
                          {step.duration && (
                            <p className="text-xs text-gray-500 mt-1">⏱️ {step.duration}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* BONK Emoji */}
                      <span className="text-3xl">{step.bonkEmoji}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} p-1 shadow-2xl`}>
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Arrow (not for last item) */}
                {index < governanceSteps.length - 1 && (
                  <div className="flex justify-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:bottom-0 lg:translate-y-full lg:z-10">
                    <div className="lg:hidden">
                      <ArrowDown className="w-8 h-8 text-bonk-400" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Governance Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-bonk-50 to-sunset-50 rounded-3xl p-12 border border-bonk-100">
            <div className="text-center">
              <Database className="w-16 h-16 text-bonk-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Governance Dashboard <span className="text-4xl">📊</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Track proposals, view participation stats, and access complete governance history. 
                Everything is transparent and auditable by the community.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/60 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">📋 Active Proposals</h4>
                  <p className="text-sm text-gray-600">Track current voting and review periods</p>
                </div>
                <div className="bg-white/60 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">🏆 Participation Stats</h4>
                  <p className="text-sm text-gray-600">Leaderboards and engagement metrics</p>
                </div>
                <div className="bg-white/60 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2">📚 Complete History</h4>
                  <p className="text-sm text-gray-600">Full records of all governance activity</p>
                </div>
              </div>

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
        </motion.div>
      </div>
    </section>
  )
}

export default Governance