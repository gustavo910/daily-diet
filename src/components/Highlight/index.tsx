import theme from "../../theme";
import * as Styles from "./styles";

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
    <Styles.Container style={{ backgroundColor }}>
      <Styles.ArrowUpRightIcon color={textColor} />
      <Styles.Percentage>{percentage}%</Styles.Percentage>
      <Styles.Description>das refeições dentro da dieta</Styles.Description>
    </Styles.Container>
  );
}