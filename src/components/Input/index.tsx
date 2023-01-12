import { TextInputProps } from "react-native";
import * as Styles from "./styles";

type Props = TextInputProps & {
  label: string;
  width?: number;
  height?: number;
};

export default function Input({ label, width, height, ...rest }: Props) {
  return (
    <Styles.Container>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Input width={width} height={height} {...rest} />
    </Styles.Container>
  );
}