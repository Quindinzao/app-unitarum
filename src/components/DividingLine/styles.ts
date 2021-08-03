import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    line: {
        backgroundColor: theme.colors.dark_brown,
        borderRadius: 10,
        height: 5,
        marginTop: 26,
        width: '90%'
    }
})