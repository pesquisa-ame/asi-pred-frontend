import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/header/view/header.view";
import { Home } from "./pages/home/home";


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
