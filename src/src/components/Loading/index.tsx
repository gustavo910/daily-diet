import * as S from "./styles";
import LogoImg from "@assets/logo.png";

export default function Loading() {
  return (
    <S.Container>
        <S.Logo source={LogoImg} />
        <S.LoadIndicator />
    </S.Container>
  );
}