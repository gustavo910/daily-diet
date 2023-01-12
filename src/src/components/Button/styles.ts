import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "primary" | "secondary";

export type ButtonIconTypeProps = "add" | "create" | "delete";

type Props = {
    type: ButtonTypeStyleProps;
    icon?: ButtonIconTypeProps;
};

//button container
export const Container = styled(TouchableOpacity) <Props>`
    width: 100%;
    height: 56px;
    flex-direction: row;
    background-color: ${({ theme, type }) => type === "primary" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
    border: 1px solid ${({ theme, type }) => type === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type, icon }) => ({
    size: 24,
    color: type === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600,
}))`
    margin-right: 4px;
`;

//button text
export const Title = styled.Text <Props>`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme, type }) => type === "primary" ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
`;