import { Head } from "../../components/Head";
import { Header } from "../../components/Header";

import * as C from "./styles";

import logoImgDark from "../../assets/logo-dark.svg";

export const HomePage = () => {
  const date = new Date();

  return (
    <C.Container>
      <Head
        title="Home"
        description="Sabores inigualáveis Sinta o cuidado do preparo com ingredientes selecionados"
      />
      <Header />

      <C.Content>....</C.Content>

      <C.Footer>
        <C.FooterContent>
          <img src={logoImgDark} alt="Logo Food-Explorer" />
          <span>
            &copy; {date.getFullYear()} - Todos os direitos reservados.
          </span>
        </C.FooterContent>
      </C.Footer>
    </C.Container>
  );
};
