import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Post from "./pages/post";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <NotFound/>,
    children: [
      { index: true, element: <Home /> },
      { path: "Post", element: <Post /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;