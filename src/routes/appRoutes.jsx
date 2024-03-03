import { Routes, Route } from "react-router-dom";

import { HomePage } from "../pages/Home";
import { Dish } from "../pages/Dish";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dish" element={<Dish />} />
    </Routes>
  );
};
