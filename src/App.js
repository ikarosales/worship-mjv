/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import Navbar from './components/navbar/Main';

const navigationOptions = {
    title: 'Escalas de Equipes',
    subtitle: 'MJV Louvor',
};

export default class App extends Component {
    render() {
        return (
        <View style={{ backgroundColor: 'white' }}>
            <StatusBar translucent
                barStyle={'dark-content'}
                backgroundColor="transparent" />

            <Navbar
                title={navigationOptions.title}
                subtitle={navigationOptions.subtitle} />
        </View>);
    }
}
