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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
