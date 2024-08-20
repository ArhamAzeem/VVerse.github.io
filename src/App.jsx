import './App.css'
import Banner from './Banner'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import IconCards from './components/IconCards'
import LogoCarousel from './components/LogoCarousel'
import Message from './components/Message'
import Navbar from './components/NavBar'
import ProductContainer from './components/ProductContainer'

function App() {

  return (
    <>
      <Navbar />
      <Banner/>
      <IconCards/>
      <ProductContainer/>
      <Message/>
      <ContactSection/>
      <LogoCarousel/>
      <Footer/>
    </>
  )
}

export default App
