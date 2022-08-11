import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Popular from "./Popular";
import Toprated from "./Toprated";
import Search from "./Search";

function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/popular" element={<Popular />} />
        <Route  path="/toprated" element={<Toprated />} />
        <Route  path="/search" element={<Search />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
