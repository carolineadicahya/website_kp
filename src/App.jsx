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
import Status from "./peserta/status";
import Profil from "./peserta/profil";
import Sekretaris from "./sekre/sekre";
import SDM from "./sdm/sdm";
import Review from "./sekre/detail_peserta";
import Detail from "./sdm/detail_peserta";
import Upload from "./components/upload_file";
import Diri from "./layouts/form_stepper/DataDiri";
import Pendidikan from "./layouts/form_stepper/DataPendidikan";
import Magang from "./layouts/form_stepper/DataMagang";
import Lampiran from "./layouts/form_stepper/Lampiran";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/career" element={<DaftarProgram />} />
      <Route path="/dashboard" element={<Status />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/sekretaris" element={<Sekretaris />} />
      <Route path="/peserta_reviewed" element={<SDM />} />
      <Route path="/peserta_magang" element={<Review />} />
      <Route path="/detail_peserta" element={<Detail />} />
      <Route path="/surat_balasan" element={<Upload />} />
      <Route path="/data_diri" element={<Diri />} />
      <Route path="/data_pendidikan" element={<Pendidikan />} />
      <Route path="/data_magang" element={<Magang />} />
      <Route path="/lampiran" element={<Lampiran />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    initFlowbite();
    // if (!localStorage.getItem("savedPage")) {
    //   localStorage.setItem("savedPage", JSON.stringify([]));
    // }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
