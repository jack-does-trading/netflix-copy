import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import TitlePage from "./pages/TitlePage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Login from "./pages/Login.jsx";

function Layout() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/login";

  return (
    <>
      <ScrollToTop />
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/title" element={<TitlePage />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
