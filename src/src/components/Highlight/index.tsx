import theme from "../../theme";
import * as S from "./styles";

type Props = {
  percentage: string;
};

export default function Highlight({ percentage }: Props) {
  // set color based on percentage
  const color = Number(percentage) >= 70 ? "green" : "red";
  // set color background based on color with theme colors
  const backgroundColor =
    color === "green" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
  // set color text based on color
  const textColor =
    color === "green" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK;
  return (
    <S.Container style={{ backgroundColor }}>
      <S.ArrowUpRightIcon color={textColor} />
      <S.Percentage>{percentage}%</S.Percentage>
      <S.Description>das refeições dentro da dieta</S.Description>
    </S.Container>
  );
}
