import { Head } from "../../components/Head";

import * as C from "./styles";

// Exemplo
import dishImage from "../../assets/dish.svg";

import { IoIosArrowBack } from "react-icons/io";
import { Tag } from "../../components/Tag";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Quantity } from "../../components/Quantity";

export const Dish = () => {
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

      <C.Content>
        <Link to={"/"}>
          <IoIosArrowBack size={34} color="#fff" />
          <span>voltar</span>
        </Link>

        <C.Main>
          <img src={dishImage} alt="Prato" />

          <C.MainText>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <C.Tags>
              {tags.map((tag) => {
                return <Tag key={tag.id} tagName={tag.name} />;
              })}
            </C.Tags>

            <Quantity />
          </C.MainText>
        </C.Main>
      </C.Content>
    </C.Container>
  );
};
