
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default function NameBox({onPress, placeholder}) {

    // default show placeholder text
    let comp = <Text style={styles.boxText}>{placeholder}</Text>


    return (
      <View style={styles.Container}>
        <Text style={styles.smallText}> Your Comments here!</Text>
      </View>
    );
  }


NameBox.defaultProps = {
  placeholder: '?'
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },

  Container: {
		width: 340,
		height: 60,
		borderWidth: 2,
		borderColor: 'powderblue',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
    paddingBottom:20,

	},
});
