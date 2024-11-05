import Header from './components/Header'

function WayToTech() {
  return (
    <li>
      <p>
        <strong>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quam.
        </strong>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        repellendus est possimus voluptatum voluptatibus deleniti cumque natus
        atque, temporibus doloremque quo vel, eveniet consequatur omnis aperiam
        impedit. Dicta, aspernatur modi!
      </p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <WayToTech />
          <WayToTech />
          <WayToTech />
        </section>
      </main>
    </div>
  )
}

export default App
