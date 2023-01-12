import * as Styles from "./styles";
import LogoImg from "@assets/logo.png";

export default function Loading() {
  return (
    <Styles.Container>
        <Styles.Logo source={LogoImg} />
        <Styles.LoadIndicator />
    </Styles.Container>
  );
}