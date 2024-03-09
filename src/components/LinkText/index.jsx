import * as C from "./styles";

export const LinkText = ({ title, ...rest }) => {
  return <C.Container {...rest}>{title}</C.Container>;
};
