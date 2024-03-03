import { Head } from "../../components/Head";

import * as C from "./styles";

import logoImg from "../../assets/logo-main.svg";

export const CreateAnAccount = () => {
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

            <C.LabelBlock>
              <label htmlFor="name">Seu nome</label>
              <input type="text" name="name" id="name" placeholder="Exemplo: Maria da Silva" />
            </C.LabelBlock>

            <C.LabelBlock>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
            </C.LabelBlock>

            <C.LabelBlock>
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" placeholder="No mínimo 6 caracteres"/>
            </C.LabelBlock>

            <button type="button">
              <span>Criar Conta</span>
            </button>

            <footer>Já tenho uma conta</footer>
          </C.FormContent>
        </C.Form>
      </C.Content>
    </C.Container>
  );
};
