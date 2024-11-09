/* eslint-disable react/jsx-key */
import Header from './components/Header'

import Button from './components/Button/Button'
import { useState } from 'react'
import { differences } from '/src/data.js'

function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Отличия от других</h3>
          <Button
            active={contentType === 'way'}
            onClick={() => handleClick('way')}
            text="button 1"
            title="Кнопка 1"
          >
            Подход
          </Button>
          <Button
            active={contentType === 'easy'}
            onClick={() => handleClick('easy')}
            text=""
            title="Кнопка 2"
          >
            Доступность
          </Button>
          <Button
            active={contentType === 'program'}
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
