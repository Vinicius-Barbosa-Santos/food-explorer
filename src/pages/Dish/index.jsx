import { Head } from "../../components/Head";
import { Header } from "../../components/Header";

import * as C from "./styles";

import logoImgDark from "../../assets/logo-dark.svg";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

// Exemplo
import dishImage from "../../assets/dish.svg";

import { IoIosArrowBack } from "react-icons/io";
import { Tag } from "../../components/Tag";

import { useState } from "react";

export const Dish = () => {
  const date = new Date();

  const [tags, setTags] = useState([
    {
      id: 1,
      name: "alface",
    },
    {
      id: 2,
      name: "cebola",
    },
    {
      id: 3,
      name: "pão naan",
    },
    {
      id: 4,
      name: "pepino",
    },
    {
      id: 5,
      name: "rabanete",
    },
    {
      id: 6,
      name: "tomate",
    },
  ]);

  return (
    <C.Container>
      <Head
        title="Prato"
        description="O prazer da escolha está em suas mãos. Em nosso restaurante, oferecemos uma variedade de pratos cuidadosamente elaborados para satisfazer todos os paladares. Desde pratos clássicos até criações inovadoras, cada opção é uma jornada culinária única. Explore nosso menu e deixe seu paladar guiar você. Seu prato, sua escolha - porque sabemos que a felicidade começa com um simples ato de escolha."
      />
      <Header />

      <C.Content>
        <a href="#">
          <IoIosArrowBack size={34} color="#fff" />
          <span>voltar</span>
        </a>

        <C.DishContent>
          <img src={dishImage} alt="Prato" />

          <C.DishText>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <C.GridItems>
              {tags.map((tag) => {
                return <Tag key={tag.id} tagName={tag.name} />;
              })}
            </C.GridItems>

            <C.QuantityText>
              <C.QuantityTextContent>
                <button>
                  <AiOutlineMinus size={24} />
                </button>
                <span>01</span>
                <button>
                  <AiOutlinePlus size={24} />
                </button>
              </C.QuantityTextContent>

              <button type="button">
                <span>Incluir ∙ R$25,00</span>
              </button>
            </C.QuantityText>
          </C.DishText>
        </C.DishContent>
      </C.Content>

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
