import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      {/* Header Component */}
      <Header />

      {/* Routes Section */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chethan-jodidhar/about-us" element={<About />} />
        </Routes>
      </main>

      {/* Footer Component */}
      <Footer />
    </Router>
  );
}

export default App;
