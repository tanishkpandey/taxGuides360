import MainNavbar from "./components/MainNavbar";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Signup from "./pages/Signup";
import MainFooter from "./components/MainFooter";
import Gst from "./pages/Gst";
import Incorporation from "./pages/Incorporation";
import Itr from "./pages/Itr";
import TaxConsultantServices from "./pages/TaxConsultantServices";
import Tds from "./pages/Tds";
import Faq from "./pages/Faq";
import Dashboard from "./pages/Dashboard/Dashboard";
import News from "./pages/News";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const location = useLocation();
  const showNavbarFooter = !['/login', '/dashboard', '/dashboard/news-updates', '/dashboard/slide-show', '/dashboard/logout'].includes(location.pathname);

  return (
    <AuthProvider>
      <div>
        {showNavbarFooter && <MainNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gst" element={<Gst />} />
          <Route path="/incorporation" element={<Incorporation />} />
          <Route path="/itr" element={<Itr />} />
          <Route path="/taxconsultant" element={<TaxConsultantServices />} />
          <Route path="/tds" element={<Tds />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>
        {showNavbarFooter && <MainFooter />}
      </div>
    </AuthProvider>
  );
}

export default App;
