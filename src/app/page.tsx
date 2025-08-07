import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Introduction from '@/components/Introduction'
import Architecture from '@/components/Architecture'
import Gamemodes from '@/components/Gamemodes'
import Governance from '@/components/Governance'
import Roadmap from '@/components/Roadmap'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <Architecture />
        <Gamemodes />
        <Governance />
        <Roadmap />
      </main>
    </>
  )
}