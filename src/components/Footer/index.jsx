import * as C from "./styles";

import logoDark from "../../assets/logo-dark.svg";

export const Footer = () => {
  const date = new Date();
  
  return (
    <C.Container>
      <C.Content>
        <img src={logoDark} alt="Logo Food-Explorer" />
        <span>&copy; {date.getFullYear()} - Todos os direitos reservados.</span>
      </C.Content>
    </C.Container>
  );
};
