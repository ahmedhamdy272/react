
import Header from './componants/header/Header';
import HeroSec from './componants/heroSec/HeroSec';
import ContactUs from './componants/contactUs/ContactUs';
import MainSec from './componants/mainSec/MainSec';
import Footer from './componants/footer/Footer';
import './index.css'

function App() {
  
  return (
    <>
    <div className='container'>
      <Header className= 'header'/>
      <HeroSec className= 'hero' />
      <hr />
      <MainSec />
      <hr />
      <ContactUs />
      <hr />
      <Footer /> 
    </div>
     
    </>
  )
}

export default App
