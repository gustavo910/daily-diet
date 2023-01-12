import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type InputStyleProps = {
    width?: number;
    height?: number;
};

export const Container = styled.View`
    flex-direction: column;
    margin: 8px 0;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_600};
    `};
    margin-bottom: 4px;
`;

export const Input = styled(TextInput) <InputStyleProps>`
    /* if width props use width px else 100% */
    min-width: ${({ width }) => (width ? `${width}%` : "100%")};
    /* if height props use height px else 56px */
    min-height: ${({ height }) => (height ? `${height}px` : "56px")};
    ${({ theme }) => css`
        background-color: ${theme.COLORS.WHITE};
        border: 1px solid ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_600};
    `};
    border-radius: 8px;
    padding: 8px;
`;
