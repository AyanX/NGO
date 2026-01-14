import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import HomePage from "./components/HomePage/HomePage";
import AdminNavbar from "./components/NavBar/AdminNavbar";
import Messages from "./components/Messages/Messages";
import VolunteerApplications from "./components/Volunteer/Volunteer";
function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AdminNavbar />}>
        <Route index element={<HomePage />} />
        <Route path="messages" element={<Messages />} />
        <Route path="volunteer-applications" element={<VolunteerApplications />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
