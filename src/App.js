import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// import './App.css';
// import Home from './Pages/Home';
// import Footer from './Components/Footer/Footer';
// import Events from './Pages/Events';
// import AboutUs from './Pages/AboutUs';
// import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
// import Navbar from './Containers/Navbar';
// import Faq from './Pages/Faq';
// import Test from './Pages/Test';
// import './index.css';

// // Layout Component
// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// // App Component
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="events" element={<Events />} />
//           <Route path="about-us" element={<AboutUs />} />
//         </Route>
//         <Route path="/faq" element={<Layout />}>
//           <Route index element={<Faq />} />
//           {/* <Route path="events" element={<Events />} /> */}
//           {/* <Route path="about-us" element={<AboutUs />} /> */}
//         </Route>
//         <Route path="/test" element={<Layout />}>
//           <Route index element={<Test />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


