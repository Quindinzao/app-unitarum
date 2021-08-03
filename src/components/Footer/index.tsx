import React from 'react';
import { View } from 'react-native';
import { MainButton } from '../MainButton';

import { styles } from './styles';

export function Footer() {
    return (
        <View style = {styles.container}>
            <View style = {styles.footer}>
                <MainButton/>
                {/* botões secundários */}
            </View>
        </View>
    )
}