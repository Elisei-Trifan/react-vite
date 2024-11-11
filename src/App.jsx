import { useState } from 'react'
import FeedbackSection from './components/FeedbackSection'
import Header from './components/Header/Header'
import IntroSection from './components/IntroSection'
import Section from './components/Section'
import SectionButton from './components/SectionButton'
import TabsSection from './components/TabsSection'
import EffectSection from './components/EffectSection'

function App() {
  const [tab, setTab] = useState('effect')
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <Section />
            <SectionButton />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}
        {tab === 'effect' && <EffectSection />}
      </main>
    </>
  )
}

export default App
