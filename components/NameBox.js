
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default class NameBox extends React.Component {

    render(){
      const { name } = this.props;

    return (
      <View style={styles.Small}>
        <Text style={styles.smallText}>
        <Image style={styles.ImageStyle} source={require('../assets/person.png')}/>{name}
        </Text>
      </View>
    );
  }
}


NameBox.defaultProps = {
  placeholder: '?'
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  smallText:{
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent:'space-around'
  },

  Small: {
		width: 310,
		height: 50,
		backgroundColor: 'skyblue',
		borderWidth: 2,
		borderColor: 'black',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		justifyContent: "space-around",
    paddingBottom:20,
	},
  ImageStyle: {

    borderTopRightRadius: 20,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
		height: 30,
		width: 30,
	},

});
