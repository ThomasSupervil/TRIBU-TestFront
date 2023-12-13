import Essentials from "./components/Essentials"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

const App = () => {

  return (
    <div id="content">
      <Header />

      <main>
        <Hero />
        <Essentials />
      </main>

      <Footer />
    </div>
  )
}

export default App
