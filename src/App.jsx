import Navbar from './Components/Navbar'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Media from './Components/Media'
import ContactUs from './Components/ContactUs'
import VaishnaviRmc from './Components/VaishnaviRMC'
import VaishnaviCrushers from './Components/VaishnaviCrushers'
import VaishnaviBricks from './Components/VaishnaviBricks'
import MrkBricks from './Components/MrkBricks'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const companyData = {
    founder:'Madhusudhan Reddy Nimma',
    founderPosition:'Managing Director',
    contact:'+91 7093320405',
    email:'vaishnavireadymix@gmail.com',
    address:'8-2-248/A/5/25, Venkateshwara Hills, Beside Tata Capital Road, RD No-3 Banjarahills, Hyderabad'
  }

  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}>
    </Route>
    <Route path='/aboutus' element={<AboutUs/>}>
    </Route>
    <Route path='/services' element={<Services/>}>
    </Route>
    <Route path='/media' element={<Media/>}>
    </Route>
    <Route path='/contactus' element={<ContactUs/>}>
    </Route>
    <Route path='/mrk-bricks' element={<MrkBricks/>}>
    </Route>
    <Route path='/vaishnavi-bricks' element={<VaishnaviBricks/>}>
    </Route>
    <Route path='/vaishnavi-crushers' element={<VaishnaviCrushers/>}>
    </Route>
    <Route path='/vaishnavi-rmc' element={<VaishnaviRmc/>}>
    </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
