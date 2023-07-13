import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Event from "../pages/Event";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/event/:id"
          element={<Event />}
        />
      </Routes>
    </>
  );
}
