/**
 * Created by dam on 29/7/2016.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 15,
    },
    textGroup1: {
        flex: 1,
    },
    title: {
        fontSize: 21,
        color: 'green',
    },
    row: {
        flexDirection: 'row',

    },
});


class MyImage extends Component {
    render() {
        return (
            <Image source={{url: 'https://facebook.github.io/react/img/logo_og.png'}}
                   style={{width: 100, height: 50,}}/>
        );
    }
}

class MyTextGroup extends Component {
    defaultProps = {
        title1: 'TITLE1',
        title2: 'TITLE2',
    }


    render() {
        const {title1, title2, viewStyle, textStyle} = this.props;
        return (
            <View style={viewStyle}>
                <Text style={textStyle}>
                    {title1}
                </Text>
                <Text>
                    {title2}
                </Text>
            </View>
        )
    }
}


class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>

                    <View style={styles.group1}>
                        <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                        <MyImage />
                    </View>

                    <View style={styles.column}>
                        <View style={styles.group1}>
                            <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1}
                                         textStyle={styles.title}/>
                            <MyImage />
                        </View>

                        <View style={styles.row}>

                            <View style={styles.group1}>
                                <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1}
                                             textStyle={styles.title}/>
                                <MyImage />
                            </View>

                            <View style={styles.group1}>
                                <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1}
                                             textStyle={styles.title}/>
                                <MyImage />
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.group1}>
                    <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                    <MyImage />
                </View>

                <View style={styles.group1}>
                    <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                    <MyImage />
                </View>

                <View style={styles.group1}>
                    <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                    <MyImage />
                </View>

                <View style={styles.group1}>
                    <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                    <MyImage />
                </View>
                <View style={styles.group1}>
                    <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                    <MyImage />
                </View>
                <View style={styles.group1}>
                    <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                    <MyImage />
                </View>
                <View style={styles.group1}>
                    <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                    <MyImage />
                </View>
                <View style={styles.group1}>
                    <MyTextGroup title1='123' title2='456' viewStyle={styles.textGroup1} textStyle={styles.title}/>
                    <MyImage />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
