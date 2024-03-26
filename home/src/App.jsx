import NavBar from "./Components/NavBar";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
