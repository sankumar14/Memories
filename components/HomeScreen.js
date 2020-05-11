import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import store from '../store';
import {navigation } from 'react-navigation'

import DetailScreen from './DetailScreen'
import NameBox from './NameBox'

export default class HomeScreen extends React.Component {

    render() {
        const {
            id,
            name,
            comment
        } = this.props;
        
        return (
                <View style={styles.titleContainer}>
                <View style={styles.pageContainer}>
                    <Text style={styles.mediumText}><Image
                        style={styles.ImageStyle} source={require('../assets/prime.png')} />
                        Memories</Text>
                </View>
                <Button title="Add your Comments here"
                    onPress={() => this.props.navigation.navigate('Details')} />
                <View style={styles.main}>
                    <ScrollView style={styles.scrollView} justifyContent='space-between' >
                        <NameBox  />
                    </ScrollView>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageContainer: {
        flex: 0,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderColor: 'black',
        margin: 10,
        borderBottomColor: 'black',
        height: 70
    },
    main: {
        flex: 1,
        padding: 1,
        justifyContent: 'space-around'
    },
    titleContainer: {
        flex: 3,
        flexDirection: 'column',
        paddingTop: 1,
        paddingBottom: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#D6D7DA',
        justifyContent: 'space-between',
    },
    intro: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 60,
        width: 340,
        height: 80,
        backgroundColor: 'powderblue',
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },

    ImageStyle: {
        resizeMode: 'contain',
        height: 40,
        width: 40,
    },
    largeText: {
        fontSize: 44,
    },
    mediumText: {
        fontSize: 36,
    },
    smallText: {
        fontSize: 15,
    },
    scrollView: {
        flexDirection: 'column',
        margin: 10,


    }
});