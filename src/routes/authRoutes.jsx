import { Routes, Route } from "react-router-dom";

import { SignUp } from "../pages/SignUp";
import { SignIn } from "../pages/SignIn";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};
