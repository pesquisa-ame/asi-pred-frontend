import {  Route, Routes } from "react-router";
import { Header } from "./components/header/view/header.view";
import { Home, UseAsiPred, HowToUse, AboutUs, HowToCite } from "./pages";
import "./App.css";
import Results from "./pages/results/results";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="use-asi-pred" element={<UseAsiPred />} />
        <Route path="how-to-use" element={<HowToUse />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="how-to-cite" element={<HowToCite />} />
        <Route path="results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
