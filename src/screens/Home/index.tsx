import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CardItem } from '../../components/CardItem';
import { DividingLine } from '../../components/DividingLine';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainButton } from '../../components/MainButton';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Home() {
    return (
        <View>
            <SafeAreaView style = {styles.container}>
                <Header>
                    <View style = {styles.itemsRow}>
                        <View style = {styles.itemsSearch}>
                            <TouchableOpacity>
                                <MaterialIcons
                                    name = 'search' 
                                    size = {35} 
                                    color = {theme.colors.white} 
                                />
                            </TouchableOpacity>

                            {/* <TouchableOpacity>
                                <MaterialIcons
                                    name = 'search-off' 
                                    size = {35} 
                                    color = {theme.colors.white} 
                                />
                           </TouchableOpacity> */}
                        </View>

                        <View style = {styles.itemsOrder}>
                            <TouchableOpacity>
                                <MaterialCommunityIcons 
                                    name = 'order-bool-ascending-variant' 
                                    size = {35} 
                                    color = {theme.colors.white}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Header>

                <TouchableOpacity>
                    <CardItem>
                        <View style = {styles.itemsRow}>
                            <MaterialIcons 
                                name = 'add-box' 
                                size = {72} 
                                color = {theme.colors.dark_orange}
                                style = {{marginLeft: 15}}
                            />
                            <View style = {styles.lineCardItem}/>
                            <View style = {{marginLeft: 25, flexDirection: 'column'}}>
                                <Text style = {{color: theme.colors.dark_brown, fontWeight: 'bold', fontSize: 17.5}}>New folder</Text>
                                <Text style = {{color: theme.colors.dark_brown, fontWeight: 'bold', fontSize: 17.5}}>New personal project</Text>
                                <Text style = {{color: theme.colors.dark_brown, fontWeight: 'bold', fontSize: 17.5}}>New shared project</Text>
                            </View>
                        </View>        
                    </CardItem>
                </TouchableOpacity>

                <DividingLine/>

                <CardItem>
                </CardItem>
                
                <CardItem>
                </CardItem>

                <CardItem>    
                </CardItem>

                <CardItem>    
                </CardItem>

                <CardItem>    
                </CardItem>
            </SafeAreaView>
            <View>
                <Footer/>
            </View>
        </View>
    )
}