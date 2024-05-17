import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useMenuDivContext } from "../Contexts/menuDivContext";

function AppLayout() {
  const { showMenu } = useMenuDivContext();
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] max-w-screen">
      <Header />
      <div className="flex flex-grow overflow-x-auto pt-[124px] sm:pt-0 pb-2">
        <Outlet />
      </div>
      {!showMenu && <Footer />}
    </div>
  );
}

export default AppLayout;
