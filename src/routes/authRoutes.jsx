import { Routes, Route } from "react-router-dom";

import { CreateAnAccount } from "../pages/CreateAnAccount";
import { SignIn } from "../pages/SignIn";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<CreateAnAccount />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};
