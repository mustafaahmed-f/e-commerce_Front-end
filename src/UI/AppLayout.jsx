import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] max-w-screen">
      <Header />
      <div className="flex flex-grow overflow-x-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
