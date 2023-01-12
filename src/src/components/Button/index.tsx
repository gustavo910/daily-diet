import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import * as S from "./styles";
import { ButtonIconTypeProps, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: ButtonIconTypeProps;
};

export default function Button({ title, type = "primary", icon, ...rest }: Props) {
  return (
    <S.Container type={type} {...rest}>
        <S.Icon type={type} name={icon} />
      <S.Title type={type}>{title}</S.Title>
    </S.Container>
  );
}
