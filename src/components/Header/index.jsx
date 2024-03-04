import * as C from "./styles";

import logoImg from "../../assets/logo-main.svg";
import requestImg from "../../assets/receipt.svg";

import { FiLogOut } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <C.Container>
      <C.Content>
        <C.MainBar>
          <C.MenuMobile>
            <FiMenu />
          </C.MenuMobile>

          <img src={logoImg} alt="Logo Food-Explorer" />

          <C.Form>
            <C.Search>
              <IoSearchOutline size={24} />
              <input
                type="text"
                placeholder="Busque por pratos ou ingredientes"
              />
            </C.Search>

            <button type="submit">
              <img src={requestImg} alt="Pedido" />
              <span>Pedidos (0)</span>
            </button>

            <FiLogOut size={32} className="logout" />
          </C.Form>
        </C.MainBar>
      </C.Content>
    </C.Container>
  );
};
