import * as C from "./styles";

export const ButtonText = ({ title, ...rest }) => {
  return <C.Container {...rest}>{title}</C.Container>;
};
