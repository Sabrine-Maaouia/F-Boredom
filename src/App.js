import { Routes, Route, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import { LandingPage, MoviesPage, SingleMoviePage } from "./pages";
import NavBarLayout from "./layout/NavBarLayout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("auth-token")) {
      setLoggedIn(true);
    }
  },[loggedIn])

  return (
    <Routes>
      <Route path="" element={<LandingPage  setLoggedIn={() => setLoggedIn(true)} />} />
      <Route
        path="movies"
        element={
          <>
            <NavBarLayout setLoggedIn={() => setLoggedIn(true)} />
            <Outlet />
          </>
        }
      >
        <Route index path="" element={<MoviesPage />} />
        <Route path=":id" element={<SingleMoviePage />} />
      </Route>
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
