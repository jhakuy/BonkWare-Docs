'use client'

import { motion } from 'framer-motion'
import { Users, Eye, Gamepad, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const Introduction = () => {
  const features = [
    {
      icon: Zap,
      title: 'Autonomous Build Loop',
      description: 'AI proposes; humans approve. Features go from community ideas to shipped code automatically.',
      highlights: ['AI drafts specs & PRs', 'Automated testing & CI', 'Human approval required'],
      color: 'from-bonk-500 to-sunset-600'
    },
    {
      icon: Eye,
      title: 'Verifiable by Design',
      description: 'Transparent operations, program IDs, timelock queue. Every action is public and auditable.',
      highlights: ['Transparent operations', 'Public deployment logs', 'On-chain verification'],
      color: 'from-sunset-500 to-bonk-600'
    },
    {
      icon: Users,
      title: 'Safety Over Speed',
      description: 'Multisig control with public change windows. No instant deployments without oversight.',
      highlights: ['Multisig approval required', '48-hour timelock', 'Public review period'],
      color: 'from-bonk-400 to-sunset-500'
    },
    {
      icon: Gamepad,
      title: 'Community Flywheel',
      description: 'Fair games fund bounties, prizes, and new features. Play to build the future.',
      highlights: ['Provably fair games', 'Community rewards', 'Development funding'],
      color: 'from-sunset-600 to-bonk-700'
    }
  ]

  const gameFunding = [
    'Day-one mini-games with provably fair mechanics',
    'Small, capped rake directed to community rewards',
    'VRF-based randomness for transparent outcomes',
    'Funding for ongoing operations and new features'
  ]

  return (
    <section id="introduction" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements - Sunset Theme */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-bonk-200/40 to-sunset-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-sunset-300/30 to-bonk-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-amber-200/25 to-orange-200/25 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-bonk-100 to-sunset-100 rounded-full px-4 py-2 mb-6">
            <Image
              src="/BonkWarePFP.jpeg"
              alt="BonkWare"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-bonk-700">Platform Introduction</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Autonomous <span className="bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent">Build Loop</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BonkWare is a community-governed AI agent that turns approved suggestions into real product: it drafts specs, writes code, and runs tests before proposing deployments. Every change is guarded by multisig and a 48-hour timelock, with full transparency into how features ship and how funds move.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative hover:scale-105 transition-transform duration-200"
            >
              <div className="bg-white/80 rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Target Audience */}
        <div className="bg-gradient-to-r from-bonk-50 to-sunset-50 rounded-3xl p-8 lg:p-12 border border-bonk-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              How BonkWare <span className="bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent">Works</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              BonkWare is a community-governed, autonomous product loop. The AI reads from an approved queue, generates specs and code, runs tests in a sandbox, and prepares deployments. Nothing ships instantly: upgrades, liquidity moves, and admin actions require multisig approval and a 48-hour timelock, with all activity visible on-chain. We keep programs verified, reports public, and the community in full control of the agent&apos;s actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameFunding.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white/80 rounded-xl p-6 shadow-md"
              >
                <div className="w-3 h-3 bg-gradient-bonk rounded-full flex-shrink-0" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <button className="btn-primary group">
              <span>Ship Faster Than Chat</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a 
              href="https://x.com/BonkWareAI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Follow Updates
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction