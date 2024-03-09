import { Routes, Route } from "react-router-dom";

import { Dish } from "../pages/Dish";
import { HomePage } from "../pages/Home";
import { DefaultLayout } from "./Layout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dish" element={<Dish />} />
      </Route>
    </Routes>
  );
};
