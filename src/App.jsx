import Header from './components/Header'
import WayToTech from './components/WayToTech'
import Button from './components/Button/Button'
import { useState } from 'react'
import { ways, differences } from '/src/data.js'

function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type = ' ') {
    setContentType(type)
  }

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
          <Button
            active="active"
            onClick={() => handleClick('way')}
            text="button 1"
            title="Кнопка 1"
          >
            Подход
          </Button>
          <Button onClick={() => handleClick('easy')} text="" title="Кнопка 2">
            Доступность
          </Button>
          <Button
            onClick={() => handleClick('program')}
            text="button 3"
            title=""
          >
            Концентрация
          </Button>
          {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <div>Нажми кнопку</div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
