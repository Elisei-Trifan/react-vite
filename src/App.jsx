import Header from './components/Header'
import WayToTech from './components/WayToTech'
import Button from './components/Button/Button'
import { ways } from '/src/data.js'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <WayToTech title={ways[0].title} description={ways[0].description} />
          <WayToTech {...ways[1]} />
          <WayToTech {...ways[2]} />
          <WayToTech {...ways[3]} />
        </section>
        <section>
          <h3>Отличия от других</h3>
          <Button text="button 1" />
          <Button text="button 2" />
        </section>
      </main>
    </div>
  )
}

export default App
