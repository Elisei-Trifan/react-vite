import Button from './Button/Button'
import { differences } from '../data.js'
import { useState } from 'react'

export default function SectionButton() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }
  return (
    <section>
      <h3>Отличия от других:</h3>
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
  )
}
