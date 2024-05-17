import { createContext, useContext, useMemo, useState } from "react";

const menuDivContext = createContext();

export default function MenuDivContextProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const value = useMemo(
    () => ({
      showMenu,
      setShowMenu,
    }),
    [showMenu, setShowMenu]
  );

  return (
    <menuDivContext.Provider value={value}>{children}</menuDivContext.Provider>
  );
}

export function useMenuDivContext() {
  const context = useContext(menuDivContext);
  if (context === undefined) {
    throw new Error(
      "useMenuDivContext must be used within a MenuDivContextProvider"
    );
  }

  return context;
}
