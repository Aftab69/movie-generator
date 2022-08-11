import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Popular from "./Popular";
import Toprated from "./Toprated";
import Search from "./Search";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/popular" element={<Popular />} />
        <Route  path="/toprated" element={<Toprated />} />
        <Route  path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
