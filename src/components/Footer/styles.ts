import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    footer: {
        alignItems: 'center',
        backgroundColor: theme.colors.dark_brown,
        height: 72,
    }
})