'use client'

import { motion } from 'framer-motion'
import { Users, Eye, Gamepad, Zap, ArrowRight, CheckCircle } from 'lucide-react'

const Introduction = () => {
  const features = [
    {
      icon: Users,
      title: 'Community-First Development',
      description: 'Token holders directly influence platform evolution through our governance system.',
      highlights: ['Direct voting rights', 'Proposal submissions', 'Feature prioritization'],
      color: 'from-bonk-500 to-sunset-600'
    },
    {
      icon: Eye,
      title: 'Transparent Governance',
      description: 'On-chain voting through Council of Architects NFT holders ensures transparency.',
      highlights: ['On-chain verification', 'Public voting records', 'Democratic consensus'],
      color: 'from-sunset-500 to-bonk-600'
    },
    {
      icon: Gamepad,
      title: 'Gamified Experience',
      description: 'Engaging mini-games and narrative elements make participation fun.',
      highlights: ['4 Game modes', 'Seasonal events', 'NFT rewards'],
      color: 'from-bonk-400 to-sunset-500'
    },
    {
      icon: Zap,
      title: 'Autonomous Execution',
      description: 'AI-driven implementation of approved community proposals.',
      highlights: ['Claude Sonnet AI', 'Automated deployment', 'Quality assurance'],
      color: 'from-sunset-600 to-bonk-700'
    }
  ]

  const targetAudience = [
    'Crypto enthusiasts seeking governance participation',
    'Gamers looking for rewarding experiences',
    'Developers interested in community-driven projects',
    'Innovation advocates supporting decentralized systems'
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-bonk-100 to-sunset-100 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-gradient-bonk rounded-full animate-pulse" />
            <span className="text-sm font-medium text-bonk-700">Platform Introduction</span>
          </motion.div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing <span className="bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent">Community Governance</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            BonkWare represents the next evolution in decentralized platforms, 
            where every community member has the power to shape the future.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
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
            </motion.div>
          ))}
        </div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-bonk-50 to-sunset-50 rounded-3xl p-8 lg:p-12 border border-bonk-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Built for <span className="bg-gradient-to-r from-bonk-600 to-sunset-600 bg-clip-text text-transparent">Everyone</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform welcomes diverse participants, each bringing unique value to the ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-3 h-3 bg-gradient-bonk rounded-full flex-shrink-0" />
                <p className="text-gray-700 font-medium">{audience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-4">
            <button className="btn-primary group">
              <span>Join the Revolution</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Introduction