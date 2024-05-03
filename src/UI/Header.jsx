import { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import DropList from "./DropList";
import { useTranslation } from "react-i18next";

function Header() {
  const [dark, setDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const { t, i18n } = useTranslation();

  //=================================================================================
  //=================================================================================

  //// Function to perform dark mode ////////////////

  const performDarkMode = useCallback(function performDarkMode() {
    localStorage.setItem("theme", "Dark");
    document.documentElement.classList.add("dark");
    setDark(true);
  }, []);

  //// Function to perform light mode  ///////////////

  const performLightMode = useCallback(function performLightMode() {
    localStorage.setItem("theme", "Light");
    document.documentElement.classList.remove("dark");
    setDark(false);
  }, []);

  //// Function to toggle mode /////////////////

  const toggleDark = useCallback(() => {
    localStorage.getItem("theme") === "Light"
      ? performDarkMode()
      : performLightMode();
  });

  useEffect(function () {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "Dark") {
      setDark(true);
    } else if (currentTheme === "Light") {
      setDark(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  //=================================================================================
  //=================================================================================

  return (
    <header className="grid grid-cols-[auto_1fr_auto] bg-teal-300 align-middle text-black dark:bg-slate-950 dark:text-white">
      <Link to="/" className="w-fit">
        <img
          className="w-24"
          src="https://saraha-by-mustafa.netlify.app/logo_nav.png"
        />
      </Link>

      <NavItems />
      <DropList />

      <div className="flex flex-wrap items-center gap-4 text-center">
        {/* <div className="hidden md:block">
          {user.isAuth && `${t("Welcome")}, ${user.firstName}`}
        </div> */}

        <span
          className="flex cursor-pointer pr-2 align-middle text-2xl"
          onClick={toggleDark}
        >
          {!dark ? "🌙" : "🌞"}
        </span>
      </div>
    </header>
  );
}

export default Header;
