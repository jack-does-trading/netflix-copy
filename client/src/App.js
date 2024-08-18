import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import TitlePage from "./pages/TitlePage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/title" element={<TitlePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
