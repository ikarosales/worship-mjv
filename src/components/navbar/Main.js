/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons/faArrowRotateRight';

import Styles from './style';

export default class Main extends Component {
    render() {
        const { title, subtitle } = this.props;

        return (<View style={Styles.navbar}>
            <Text style={Styles.title}>{ title || 'Escalas de Equipes' }</Text>
            <Text style={Styles.subtitle}>{ subtitle || 'MJV Louvor' }</Text>

            <TouchableOpacity onPress={update}>
                <FontAwesomeIcon icon={faArrowRotateRight} color={'#777'} size={20}/>
            </TouchableOpacity>
        </View>);
    }
}

function update() {
    console.warn('Pressed');
}
