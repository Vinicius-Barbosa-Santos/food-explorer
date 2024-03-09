import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";

export const DefaultLayout = () => {
  return (
    <C.Container>
      <Header />
      <Outlet />
      <Footer />
    </C.Container>
  );
};
