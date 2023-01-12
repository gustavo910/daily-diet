import { TextInputProps } from "react-native";
import * as S from "./styles";

type Props = TextInputProps & {
  label: string;
  width?: number;
  height?: number;
};

export default function Input({ label, width, height, ...rest }: Props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input width={width} height={height} {...rest} />
    </S.Container>
  );
}
