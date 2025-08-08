'use client'

import { motion } from 'framer-motion'
import { Monitor, Code, GitBranch, ArrowRight, Construction, Zap, Brain, Eye } from 'lucide-react'
import Image from 'next/image'

const AIBackrooms = () => {
  return (
    <section id="ai-backrooms" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-bonk-500/10 to-sunset-500/10 rounded-full blur-3xl" />
        
        {/* Matrix-like effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100/20 to-blue-100/20 rounded-full px-6 py-3 mb-6">
            <Image
              src="/BonkWarePFP.jpeg"
              alt="BonkWare"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="text-base font-medium text-green-400">AI Development Lab</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            The AI <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Backrooms</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Peek behind the curtain and watch our autonomous AI at work. See real-time development, 
            code generation, and decision-making processes as they happen.
          </p>
        </div>

        {/* Work in Progress Notice */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-12 border border-green-500/20 text-center backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Construction className="w-12 h-12 text-green-400" />
              <Monitor className="w-10 h-10 text-blue-400" />
              <Brain className="w-8 h-8 text-green-400" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Work in Progress
            </h3>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              We&apos;re building a transparent window into our AI&apos;s autonomous development process. 
              This will be your backstage pass to see how BonkWare evolves itself.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/10">
                <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Live Code Generation</h4>
                <p className="text-gray-400 text-sm">Watch AI write, test, and deploy code in real-time</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500/10">
                <GitBranch className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Decision Trees</h4>
                <p className="text-gray-400 text-sm">See how AI prioritizes and makes development choices</p>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-bonk-500/10">
                <Eye className="w-8 h-8 text-bonk-400 mx-auto mb-3" />
                <h4 className="text-white font-bold mb-2">Transparent Process</h4>
                <p className="text-gray-400 text-sm">Full visibility into autonomous development workflow</p>
              </div>
            </div>

            <a
              href="https://x.com/BonkWareAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Follow Development</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Coming Soon Features */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Coming Soon to the Backrooms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Monitor, title: 'Live Terminal', desc: 'Real AI command execution' },
              { icon: Code, title: 'Code Diff Viewer', desc: 'See every change as it happens' },
              { icon: GitBranch, title: 'Decision Logs', desc: 'AI reasoning transparency' },
              { icon: Zap, title: 'Performance Metrics', desc: 'Development speed tracking' }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/30">
                <feature.icon className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIBackrooms