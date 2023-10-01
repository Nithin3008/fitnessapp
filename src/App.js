import "./App.css";

import Goal from "./pages/Goal";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Welcome from "./pages/Welcome";
import Exercise from "./pages/Exercise";
import Food from "./pages/Food";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout></AppLayout>,
      children: [
        {
          path: "/",
          element: <Welcome></Welcome>,
        },
        {
          path: "/Exercise",
          element: <Exercise></Exercise>,
        },
        { path: "/Food", element: <Food></Food> },
        {
          path: "/Goal",
          element: <Goal></Goal>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
