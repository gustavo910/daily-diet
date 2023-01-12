import styled, { css } from "styled-components/native";
import { UserCircle } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 24px;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 80px;
    height: 40px;
`;

export const UserIcon = styled(UserCircle).attrs(({ theme }) => ({
    color: theme.COLORS.GRAY_400,
    size: 46
}))``;

export const TitleMeals = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `};
    margin: 24px 0 8px 0;
`;

export const DateMeal = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_600};
    `};
    margin: 22px 0 8px 0;
`;

export const EmptyContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const EmptyText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `};
    margin-top: 24px;
`;