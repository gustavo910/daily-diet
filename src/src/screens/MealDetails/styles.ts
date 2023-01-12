import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type DietStyleProps = "yes" | "no";

type Props = {
    diet: DietStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({ theme, diet }) => diet === "yes" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View<Props>`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme, diet }) => diet === "yes" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    padding: 24px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 24px;
`;

export const BackButtonIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_600,
    size: 28
}))``;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_600};
    `};
`;

export const Body = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 24px;
    padding: 30px 24px;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_600};
    `};
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_500};
        margin-top: 10px;
    `};
`;

export const TimeTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_600};
    `};
    margin-top: 24px;
`;

export const Time = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_500};
    `};
    margin-top: 8px;
`;

export const DietStatusContainer = styled.View`
    width: 135px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    margin-top: 24px;
    border-radius: 18px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const DietStatusColor = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 8px;
    background-color: ${({ theme, diet }) => diet === "yes" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const DietStatusText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `};
`;

export const ActionsContainer = styled.View`
    width: 100%;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 24px;
`;

