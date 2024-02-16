// Importar las dependencias necesarias
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"

// Importar componentes
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/Errors/ErrorPage';
import Quotation from './components/Quotation/Quotation';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Nav'
// enrutador
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />


        <Route path="/contacto" element={<Contact />} />
        <Route path="/cotizacion" element={<Quotation />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer></Footer>
      <SpeedInsights />
    </BrowserRouter>
  );
}

        /*  
                <Route path="/usados" element={<UsedCars />} />
        <Route path="/nuevos" element={<NewCars />} />
        <Route path="/usados/:id" element={<UsedCars />} />
        <Route path="/cerokm/:id" element={<NewCars />} />
         */
export default App;