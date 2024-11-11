/* eslint-disable react/prop-types */
import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button active={active === 'main'} onClick={() => onChange('main')}>
        Главная
      </Button>
      <Button
        active={active === 'feedback'}
        onClick={() => onChange('feedback')}
      >
        Обратная связь
      </Button>
      <Button active={active === 'effect'} onClick={() => onChange('effect')}>
        Обратная связь
      </Button>
    </section>
  )
}
