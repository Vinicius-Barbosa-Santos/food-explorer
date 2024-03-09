// Components
import { Head } from "../../components/Head";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

// Router
import { Link } from "react-router-dom";

// Styles
import * as C from "./styles";

// Assets
import logoImg from "../../assets/logo-main.svg";


export const SignUp = () => {
  return (
    <C.Container>
      <Head title="Criar Conta" />

      <C.Content>
        <C.LogoImage>
          <img src={logoImg} alt="Logo Food-Explorer" />
        </C.LogoImage>

        <C.Form>
          <C.FormContent>
            <header>
              <h2>Crie sua conta</h2>
            </header>

            <Input>
              <label htmlFor="name">Seu nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Exemplo: Maria da Silva"
              />
            </Input>

            <Input>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
              />
            </Input>

            <Input>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="No mínimo 6 caracteres"
              />
            </Input>

            <Button>
              <ButtonText title={"Criar conta"} />
            </Button>

            <footer>
              <Link to={"/sign-in"}>Já tenho uma conta</Link>
            </footer>
          </C.FormContent>
        </C.Form>
      </C.Content>
    </C.Container>
  );
};
