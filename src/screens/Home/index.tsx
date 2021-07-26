import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainButton } from '../../components/MainButton';

import { styles } from './styles';

export function Home() {
    return (
        <View>
            <SafeAreaView style = {styles.container}>
                <Header/>
            </SafeAreaView>
            <View>
                <Footer/>
                <MainButton/>
            </View>
        </View>
    )
}