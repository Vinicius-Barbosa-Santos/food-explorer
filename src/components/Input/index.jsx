import * as C from "./styles";

export const Input = ({ children, ...rest }) => {
  return <C.Container {...rest}>{children}</C.Container>;
};
