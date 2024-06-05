import { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import NavBar from "./component/navigation/navbar/NavBar";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
