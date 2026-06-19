import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Post from "./pages/post";
import Login from "./pages/login";
import { Register } from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "Post/:id", element: <Post /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;