import './App.css'
import Title from './sections/Title'
import About from './sections/About'
import Process from './sections/Process'
import Services from './sections/Services'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

function App() {

  return (
     <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Title></Title>
      <About></About>
      <Process></Process>
      <Services></Services>
      <CTA></CTA>
      <Footer></Footer>
     </div>
  )
}

export default App
