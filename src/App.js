
import Navbar from './Container/Navbar.tsx';
import Footer from './Components/Footer/Footer.tsx';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.tsx'
import { ScrollProvider } from './Context/ScrollContext.tsx';

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
    <ScrollProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="events" element={<Events />} />
          <Route path="about-us" element={<AboutUs />} /> */}
        </Route>

        {/* <Route path="/test" element={<Layout />}>
          <Route index element={<Test />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
     
              </ScrollProvider>
  );
}

export default App;


