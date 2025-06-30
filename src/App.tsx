import Navbar from "./Container/Navbar.tsx";
import Footer from "./Components/Footer/Footer.tsx";
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

// New ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current path

  useEffect(() => {
    // When the pathname changes, scroll to the top of the window with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // Depend on pathname to trigger scroll on route change

  return null; // This component doesn't render any UI
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter should wrap ScrollProvider */}
      <ScrollProvider> {/* ScrollProvider must be inside BrowserRouter to access routing context */}
        <ScrollToTop /> {/* Place ScrollToTop here, inside BrowserRouter */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* <Route path="/test" element={<Layout />}>
            <Route index element={<Test />} />
            </Route> */}
        </Routes>
      </ScrollProvider>
    </BrowserRouter>
  );
}

export default App;
