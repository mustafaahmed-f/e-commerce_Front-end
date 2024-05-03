import { Link } from "react-router-dom";

import { disableLink } from "../Utils/disableLink";

import { useTranslation } from "react-i18next";
// initialize components based on data attribute selectors

function NavItems() {
  const { t, i18n } = useTranslation();

  function Logout() {
    localStorage.removeItem("sarahaLoginToken");
    window.location.reload();
  }

  return (
    <>
      <div className="hidden md:flex md:justify-center">
        <div className="flex h-full flex-row items-center gap-5">
          <Link
            to="/login"
            className="hover:text-teal-600 dark:hover:text-teal-300"
            onClick={disableLink}
          >
            {t("Log in")}
          </Link>
          <Link
            to="/signup"
            className="hover:text-teal-600 dark:hover:text-teal-300"
            onClick={disableLink}
          >
            {t("Sign up")}
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavItems;
