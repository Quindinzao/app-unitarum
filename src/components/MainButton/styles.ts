import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },
    backgroundButton: {
        alignItems: 'center',
        backgroundColor: theme.colors.dark_brown,
        borderRadius: 32,
        height: 64,
        marginBottom: 28,
        width: 64
    },
    button: {
        alignItems: 'center',
        backgroundColor: theme.colors.dark_yellow,
        borderRadius: 30,
        height: 56,
        marginTop: 5,
        width: 56
    },
})