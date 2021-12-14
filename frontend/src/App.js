import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import GalleryScreen from "./screens/GalleryScreen";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/about" element={<AboutScreen/>}/>
                <Route path="/menu" element={<MenuScreen/>}/>
                <Route path="/gallery" element={<GalleryScreen/>}/>
              </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
