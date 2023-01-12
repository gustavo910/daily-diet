import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 50px;
    margin-bottom: 24px;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_DARK
}))``;