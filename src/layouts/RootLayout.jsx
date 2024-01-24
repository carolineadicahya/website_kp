import NavigationBar from "../components/navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    // <div className="flex flex-col justify-between">
    <div className="">
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
