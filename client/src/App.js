
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
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <div style={{marginTop:"100px"}}>
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
        </Route>
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
