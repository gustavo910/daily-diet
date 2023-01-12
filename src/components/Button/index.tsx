import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import * as Styles from "./styles";
import { ButtonIconTypeProps, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: ButtonIconTypeProps;
};

export default function Button({ title, type = "primary", icon, ...rest }: Props) {
  return (
    <Styles.Container type={type} {...rest}>
        <Styles.Icon type={type} name={icon} />
      <Styles.Title type={type}>{title}</Styles.Title>
    </Styles.Container>
  );
}