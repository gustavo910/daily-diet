import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    padding: 8px;
    `;

export const InfoCard = styled.View`
    width: 90%;
    height: 36px;
    flex-direction: row;
    align-items: center;
`;

export const TimeContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.COLORS.GRAY_300};
    padding-right: 8px;
`;

export const Time = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_600};
    `};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `};
    margin-left: 8px;
`;

export const InsideDiet = styled.View`
    width: 22px;
    height: 22px;
    border-radius: 11px;
`;