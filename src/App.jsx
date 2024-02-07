import "./App.css";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// import { render } from "react-dom";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RootLayout from "./layouts/RootLayout";
import Error from "./pages/Error";

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
import PesertaTerima from "./sdm/peserta_terima";
import Detail from "./sdm/detail";
import PesertaTolak from "./sdm/peserta_tolak";
import { FormDataProvider } from './context/FormDataContext';

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
      {/* <Route path="/peserta_magang" element={<SekreDetail />} /> */}
      <Route path="/peserta_magang/:id" element={<SekreDetail />} />
      <Route path="/sdm" element={<SDM />} />
      {/* <Route path="/detail_peserta" element={<SDMDetail />} /> */}
      <Route path="/detail_peserta/:id" element={<SDMDetail />} />
      <Route path="/surat_balasan/:id" element={<Upload />} />
      <Route path="/data_diri" element={<DataDiri />} />
      <Route path="/data_pendidikan" element={<DataPendidikan />} />
      <Route path="/data_magang" element={<DataMagang />} />
      <Route path="/lampiran" element={<DataLampiran />} />
      <Route path="/peserta_terima" element={<PesertaTerima />} />
      <Route path="/peserta_tolak" element={<PesertaTolak />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/error" element={<Error />} />
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

  return (
    <FormDataProvider>
      <RouterProvider router={router} />
    </FormDataProvider>
  );
}

export default App;
