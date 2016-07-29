/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                       style={styles.pic}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
        borderWidth: 2,
        borderColor: '#00ff00',
    },
    welcome: {
        flex: 3,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'red',
        borderWidth: 2,
        borderColor: '#00ff00',
    },
    instructions: {
        flex: 2,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        borderWidth: 2,
        borderColor: '#00ff00',
    },
    pic: {
        flex: 2,
        alignSelf: 'flex-start',
        borderWidth: 2,
        borderColor: '#00ff00',
        width: 200
    },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
