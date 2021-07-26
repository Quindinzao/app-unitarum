import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { theme } from './src/global/styles/theme';
import { Routes } from './src/routes';
import { Background } from './src/components/Background';

export default function App() {
  return (
    <Background>
      <SafeAreaView style = {styles.topSafeArea}/>
      {Platform.OS === 'android' && 
        <StatusBar
          backgroundColor = {theme.colors.dark_brown}
          barStyle = 'light-content'
          translucent = {false}
        />
      }
      {Platform.OS === 'ios' && 
        <StatusBar
          backgroundColor = 'transparent'
          barStyle = 'light-content'
          translucent = {false}
        />
      }
      <Routes/>
    </Background>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    backgroundColor: theme.colors.dark_brown,
    flex: 0
  }
})