import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./UI/AppLayout";
import ErrorElement from "./UI/ErrorElement";
import Home from "./Pages/Home";
import MenuDivContextProvider from "./Contexts/menuDivContext";

const router = createBrowserRouter([
  {
    element: (
      <MenuDivContextProvider>
        <AppLayout />
      </MenuDivContextProvider>
    ),
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
