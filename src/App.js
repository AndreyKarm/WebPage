import Navbar from "./Navbar"
import Footer from "./Footer"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <>
    <span className="font-link">
      <div className="gradient">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/WebPage/" element={<Home />} />
            <Route path="/WebPage/pricing" element={<Pricing />} />
            <Route path="/WebPage/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </span>
    </>
  )
}

export default App