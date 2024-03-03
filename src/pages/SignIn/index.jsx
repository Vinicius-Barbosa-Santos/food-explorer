import * as C from "./styles";

import { Head } from "../../components/Head";

import logoImg from "../../assets/logo-main.svg";

export const SignIn = () => {
  return (
    <C.Container>
      <Head title="Login" />

      <C.Content>
        <C.LogoImage>
          <img src={logoImg} alt="Logo Food-Explorer" />
        </C.LogoImage>

        <C.Form>
          <C.FormContent>
            <header>
              <h2>Faça Login</h2>
            </header>

            <C.LabelBlock>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
              />
            </C.LabelBlock>

            <C.LabelBlock>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="No mínimo 6 caracteres"
              />
            </C.LabelBlock>

            <button type="button">
              <span>Entrar</span>
            </button>

            <footer>Criar uma conta</footer>
          </C.FormContent>
        </C.Form>
      </C.Content>
    </C.Container>
  );
};
