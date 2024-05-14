import { useCallback, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import DropList from "./DropList";
import { useTranslation } from "react-i18next";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header>
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}

export default Header;
