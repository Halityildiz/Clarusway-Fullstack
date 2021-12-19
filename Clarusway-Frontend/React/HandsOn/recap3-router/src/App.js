import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Hastalik from "./pages/Hastalik";
import Cerrahi from "./pages/Cerrahi";
import Ortopedi from "./pages/Ortopedi";
import Psikoloji from "./pages/Psikoloji";
import Scientists from "./pages/Scientists";
import Education from "./pages/Education";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hastalik" element={<Hastalik />} />
        <Route path="/ortopedi" element={<Ortopedi />} />
        <Route path="/psikoloji" element={<Psikoloji />} />
        <Route path="/cerrahi" element={<Cerrahi />} />
        <Route path="/scientists" element={<Scientists />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
