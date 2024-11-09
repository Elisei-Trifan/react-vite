import FeedbackSection from './components/FeedbackSection'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import Section from './components/Section'
import SectionButton from './components/SectionButton'
import TabsSection from './components/TabsSection'

function App() {
  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection />

        <Section />
        <SectionButton />

        <FeedbackSection />
      </main>
    </>
  )
}

export default App
