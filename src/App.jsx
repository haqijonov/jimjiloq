import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ProtectRouter from "./components/protect/ProtectRouter";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import Register from "./page/Register";
import Login from "./page/Login";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import IsOnline from "./components/isOnline/IsOnline";

import MyProfile from "./page/MyProfile";
function App() {
  const { user } = useSelector((state) => state.userSlice);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  console.log(isOnline);
  useEffect(() => {
    // Ulanish holati o'zgarganda funksiyani yangilash
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => {
      setIsOnline(false);
    };

    // online va offline hodisalarini qo'shish
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Tozalash funksiyasi
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectRouter user={user}>
          <MainLayout />
        </ProtectRouter>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/myprofile",
          element: <MyProfile />,
        },
      ],
    },
    {
      path: "/register",
      element: user ? <Navigate to={"/"} /> : <Register />,
    },
    {
      path: "/login",
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
  ]);
  return (
    <div>{isOnline ? <RouterProvider router={routes} /> : <IsOnline />}</div>
  );
}

export default App;
