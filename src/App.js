import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/partials/Header"
import About from "./components/pages/About"
import Menu from "./components/pages/Menu"
import Contact from "./components/pages/Contact"

import './App.css';
import Home from './components/pages/Home';
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
