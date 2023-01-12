import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    padding: 20px;
    margin-top: 24px;
    border-radius: 8px;
    align-items: center;
`;

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24
}))`
    position: absolute;
    right: 8px;
    top: 8px;
`;

export const Percentage = styled.Text`
    font-weight: bold;
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Description = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.GRAY_400};
`;