import * as C from "./styles";

export const Button = ({ children, ...rest }) => {
  return (
    <C.Container {...rest} type="button">
      {children}
    </C.Container>
  );
};
