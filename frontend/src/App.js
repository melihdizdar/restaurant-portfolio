import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import GalleryScreen from "./screens/GalleryScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
  return (
    <div className="contact">
        <BrowserRouter>
            <header>
              <Navbar/>
            </header>
            <main>
              <Routes>
                  <Route path="/" element={<HomeScreen/>}/>
                  <Route path="/about" element={<AboutScreen/>}/>
                  <Route path="/menu" element={<MenuScreen/>}/>
                  <Route path="/gallery" element={<GalleryScreen/>}/>
                  <Route path="/contact" element={<ContactScreen/>}/>
                </Routes>
            </main>
            <footer>
              <Footer/>
            </footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
