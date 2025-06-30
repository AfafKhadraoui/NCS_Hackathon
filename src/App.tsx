import Navbar from "./Container/Navbar.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Dashboard from "./Pages/Dashboard.tsx";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"; // Import useLocation
import React, { useEffect } from "react"; // Import useEffect;
import Home from "./Pages/Home.tsx";
import Login from "./Pages/login.tsx";
import Signup from "./Pages/signup.tsx";
import { ScrollProvider } from "./Context/ScrollContext.tsx";


// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  
  return null;
}

// Layout with Navbar and Footer
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

// Layout without Navbar (for dashboard)
function DashboardLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollProvider>
        <ScrollToTop />
        <Routes>
          {/* Routes with Navbar */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          
          {/* Dashboard route without Navbar */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </ScrollProvider>
    </BrowserRouter>
  );
}

export default App;