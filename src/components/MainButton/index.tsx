import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function MainButton() {
    return (
        <View style = {styles.container}>
            <View style = {styles.backgroundButton}>
                <TouchableOpacity style = {styles.button}>
                
                </TouchableOpacity>
            </View>
        </View>
    )
}