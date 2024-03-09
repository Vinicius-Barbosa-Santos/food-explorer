import * as C from "./styles";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export const Quantity = () => {
  return (
    <C.Container>
      <C.Content>
        <button>
          <AiOutlineMinus size={24} />
        </button>
        <span>01</span>
        <button>
          <AiOutlinePlus size={24} />
        </button>
      </C.Content>

      <Button>
        <ButtonText title={"Incluir ∙ R$25,00"} />
      </Button>
    </C.Container>
  );
};
