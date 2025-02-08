import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Welcome from './components/welcome/Welcome';
import Whatwedo from './components/whatwedo/Whatwedo';
import Founder from './components/founder/Founder';
import Footer from './components/footer/Footer';
import Activities from './components/activities/Activities';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import TheTeam from './components/theteam/TheTeam';
import LatestActivities from './components/latestactivties/LatestActivities';
import Loader from './components/Loader/Loader';
import Donate from './components/donate/Donate';
import TakePart from './components/takepart/TakePart';
import Environmental from './components/environmental/Environmental';
import Maradasa from './components/madarasa/Maradasa';
import Inspiring from './components/inspiring/Inspiring';
import Feeding from './components/feeding/Feeding';


function App() {
   const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, []);

  return (
    <BrowserRouter>
      <div>
        {loading ? (<Loader />) : (
          <main>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TheTeam />} />
          <Route path="/latestactivities" element={<LatestActivities />} />
          <Route path="/enviromental" element={<Environmental />} />
          <Route path="/madarasa" element={<Maradasa />} />
          <Route path="/inspiring" element={<Inspiring />} />
          <Route path="/feeding-the-community" element={<Feeding />} />
          <Route path='/upcoming' element={<Donate />}/>
          <Route path='/donate' element={<TakePart />}/>
        </Routes>
        <Footer />
        
          </main>
            )
        }
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <Welcome />
      <Whatwedo />
      <Founder />
      <Activities />
    </div>
  );
}

export default App;
