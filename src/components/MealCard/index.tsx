import { TouchableOpacityProps } from "react-native";
import theme from "../../theme";
import * as Styles from "./styles";

type DietProps = "yes" | "no";

type Props = TouchableOpacityProps & {
  title: string;
  time: string;
  insideDiet: DietProps;
};

export default function MealCard({ title, time, insideDiet, ...rest }: Props) {
  const color = insideDiet === "yes" ? "green" : "red";
  const dietStatusColor =
    color === "green" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID;
  return (
    <Styles.Container {...rest}>
      <Styles.InfoCard>
        <Styles.TimeContainer>
          <Styles.Time>{time}</Styles.Time>
        </Styles.TimeContainer>
        <Styles.Title>{title}</Styles.Title>
      </Styles.InfoCard>
      <Styles.InsideDiet style={{ backgroundColor: dietStatusColor }}></Styles.InsideDiet>
    </Styles.Container>
  );
}