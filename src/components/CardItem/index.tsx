import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
    children: ReactNode;
}

export function CardItem({ children } : Props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.cardItem}>
                {children}
            </View>
        </View>
    )
}