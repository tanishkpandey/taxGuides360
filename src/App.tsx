import { DarkThemeToggle } from "flowbite-react";
import MainNavbar from "./components/MainNavbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
