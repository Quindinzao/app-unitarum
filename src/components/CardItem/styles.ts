import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    cardItem: {
        backgroundColor: theme.colors.light_gray,
        borderRadius: 10,
        height: 100,
        justifyContent: 'center',
        marginTop: 26,
        width: '90%'
    },
    container: {
        alignItems: 'center'
    }
})