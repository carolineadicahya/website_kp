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
import StatusPeserta from "./peserta/status";
import ProfilPeserta from "./peserta/profil";
import Sekretaris from "./sekre/sekre";
import SDM from "./sdm/sdm";
import SekreDetail from "./sekre/detail_peserta";
import SDMDetail from "./sdm/detail_peserta";
import Upload from "./components/upload_file";
import DataDiri from "./layouts/form_stepper/DataDiri";
import DataPendidikan from "./layouts/form_stepper/DataPendidikan";
import DataMagang from "./layouts/form_stepper/DataMagang";
import DataLampiran from "./layouts/form_stepper/Lampiran";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPages />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/career" element={<DaftarProgram />} />
      <Route path="/dashboard" element={<StatusPeserta />} />
      <Route path="/profil" element={<ProfilPeserta />} />
      <Route path="/sekretaris" element={<Sekretaris />} />
      <Route path="/peserta_magang" element={<SekreDetail />} />
      <Route path="/peserta_reviewed" element={<SDM />} />
      <Route path="/detail_peserta" element={<SDMDetail />} />
      <Route path="/surat_balasan" element={<Upload />} />
      <Route path="/data_diri" element={<DataDiri />} />
      <Route path="/data_pendidikan" element={<DataPendidikan />} />
      <Route path="/data_magang" element={<DataMagang />} />
      <Route path="/lampiran" element={<DataLampiran />} />
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
