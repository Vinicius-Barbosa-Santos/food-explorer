import { Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignOut } from "../pages/SignOut";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-out" element={<SignOut />} />
    </Routes>
  );
};
