import "./App.css";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";

import LandingPages from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DaftarProgram from "./pages/DaftarProgram";
// import TabForm from "./components/tabs";
import StepperLayout from "./layouts/StepperLayout";
import Status from "./anak_magang/status";
import Profil from "./anak_magang/profil";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/career" element={<DaftarProgram />} />
      {/* <Route path="/form" element={<TabForm />} /> */}
      <Route path="/form" element={<StepperLayout />} />
      <Route path="/dashboard" element={<Status />} />
      <Route path="/profil" element={<Profil />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    initFlowbite();
    if (!localStorage.getItem("savedPage")) {
      localStorage.setItem("savedPage", JSON.stringify([]));
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
