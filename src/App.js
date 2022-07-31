import { Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import { LandingPage, MoviesPage, SingleMoviePage } from "./pages";
import NavBarLayout from "./layout/NavBarLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="movies"
        element={
          <>
            <NavBarLayout />
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
