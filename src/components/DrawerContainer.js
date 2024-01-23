/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import MenuButton from './MenuButton';
import { AppIcon } from '../utils/AppStyles';

const DrawerContainer = ({ navigation, state }) => {

    const handleLogout = () => {
        navigation.navigate('Login')
    };

    return (
        <View style={[styles.content, { backgroundColor: '#232530' }]}>
            <View style={[styles.view, { backgroundColor: '#201f2b' }]}>
                <FastImage
                    style={{ width: 60, height: 60 }}
                    source={AppIcon.images.logo}
                />
                <Text style={{ color: '#fff' }} variant="headlineMedium">App</Text>
            </View>
            <View style={styles.container}>
                <MenuButton
                    title="Home"
                    icon='home'
                    active={state.index === 0 ? true : false}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                />
                <MenuButton
                    title="Profile"
                    icon='account'
                    active={state.index === 1 ? true : false}
                    onPress={() => {
                        navigation.navigate('Profile');
                    }}
                />
                <MenuButton
                    title="Logout"
                    icon='logout'
                    active={false}
                    onPress={() => {
                        handleLogout()
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    view: {
        paddingVertical: 15,
        paddingLeft: 10,
        paddingTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
});

export default DrawerContainer