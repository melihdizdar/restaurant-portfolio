import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomeScreen/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
