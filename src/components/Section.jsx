import WayToTech from './WayToTech'
import { ways } from '../data.js'

export default function Section() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      {ways.map((item) => (
        <WayToTech key={item.title} {...item} />
      ))}
      {/* <WayToTech title={ways[0].title} description={ways[0].description} />
        <WayToTech {...ways[1]} />
        <WayToTech {...ways[2]} />
        <WayToTech {...ways[3]} /> */}
    </section>
  )
}
