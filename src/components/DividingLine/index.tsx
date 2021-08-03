import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

export function DividingLine() {
    return (
        <View style = {styles.container}>
            <View style = {styles.line}/>
        </View>
    )
}