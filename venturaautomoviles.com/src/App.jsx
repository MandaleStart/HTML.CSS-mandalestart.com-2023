// Importar las dependencias necesarias
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"

// Importar componentes
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/Errors/ErrorPage';
import SellCars from './components/SellCars/SellCars';
import Navbar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

// enrutador
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usados" element={<UsedCars />} />
        <Route path="/cerokm" element={<NewCars />} />
        <Route path="/usados/:id" element={<UsedCars />} />
        <Route path="/cerokm/:id" element={<NewCars />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/vender" element={<SellCars />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer></Footer>
      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;