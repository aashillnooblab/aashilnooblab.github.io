import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Downloads from "./pages/Downloads";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
