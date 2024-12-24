import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Downloads from "./pages/Downloads";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DeviceDownloads from "./pages/Downloads/DeviceDownloads"
import Team from "./pages/Team";

function App() {
  return (
    <div className=" h-screen">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<HomePage/>} />
          <Route path="/downloads" element={<Downloads/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/downloads/:codename" element={<DeviceDownloads/> } />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
