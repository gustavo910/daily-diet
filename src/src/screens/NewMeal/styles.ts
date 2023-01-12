import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type QuestionStyleProps = {
    color: 'green' | 'red',
    response?: 'yes' | 'no' | 'none'
};

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
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
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 24px;
    padding: 30px 24px;
`;

export const TimeContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const QuestionContainer = styled.View`
    width: 100%;
    flex-direction: column;
    margin-top: 10px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_600};
    `};
    margin-bottom: 4px;
`;

export const OptionsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 8px;
`;

export const Option = styled.TouchableOpacity<QuestionStyleProps>`
    width: 48%;
    height: 56px;
    border-radius: 8px;
    background-color: ${({ theme, color, response }) => response === 'yes' && color === 'green' ? theme.COLORS.GREEN_LIGHT : response === 'no' && color === 'red' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};
    border: 1px solid ${({ theme, color, response }) => response === 'yes' && color === 'green' ? theme.COLORS.GREEN_DARK : response === 'no' && color === 'red' ? theme.COLORS.RED_DARK : theme.COLORS.WHITE};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const OptionStatusColor = styled.View<QuestionStyleProps>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ theme, color }) => color === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    margin-right: 8px;
`;

export const OptionText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_600};
    `};
`;
