import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Agenda from './components/Agenda'
import Speakers from './components/Speakers'
import Tickets from './components/Tickets'
import Venue from './components/Venue'
import Sponsors from './components/Sponsors'
import GalleryTestimonials from './components/GalleryTestimonials'
import StayInTouch from './StayInTouch'
import Footer from './components/Footer'
// import Header from './components/Header'
const App = () => {
  return (
    <div>
      {/* <Header /> */}
<Hero />
<About />
<Agenda />
<Speakers />
<Tickets />
<Venue />
<Sponsors />
<GalleryTestimonials />
<StayInTouch/>
<Footer />
    </div>
  )
}

export default App