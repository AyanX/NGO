import "./App.scss";
import Navbar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Volunteer from "./Components/Volunteer/Volunteer";
import Contact from "./Components/Contact/Contact";
import Error404 from "./Components/Error/Error404";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
          <Outlet />
        </div>
        <Footer />
      </>
    );
  };

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </>,
    ),
  );

  return (
    <div className="App">
    <HelmetProvider>
      <RouterProvider router={routes} />
      </HelmetProvider>
    </div>
  );
}

export default App;
