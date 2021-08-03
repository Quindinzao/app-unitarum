import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    itemsRow: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        width: '90%'
    },
    itemsSearch: {
        flexDirection: 'row',
        width: '50%'
    },
    itemsOrder: {
        flexDirection: 'row-reverse',
        width: '50%'
    },
    lineCardItem: {
        backgroundColor: theme.colors.light_brown,
        borderRadius: 10,
        height: 85,
        marginLeft: 16,
        width: 3
    },
    textInput: {
        backgroundColor: theme.colors.light_gray,
        borderRadius: 10,
        height: 30,
        marginLeft: '5%',
        width: '100%'
    }
})