import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from '@expo/vector-icons/Ionicons'


export default class Detail extends React.Component{

    state = {
        name: "",
        comment: "",
      }

    handleNameChange = (text) => {
        this.setState({ name: text });
    };

    handleCommentChange = (text) => {
        this.setState({ comment: text });
    };

    onSubmit = (text) => {
        this.props.onSubmit(this.state);
    }
    render() {

        const { id, name, comment } = this.props;

        return  ( 
            <View style={styles.container}>
                <View style={styles.nameContainer}>
                <Icon style={{padding:10}} name="md-person" size={35}> </Icon>
                <View>
                <TextInput 
                onChangeText={this.handleNameChange}
                defaultValue={name}
                placeholder='Enter your Name Here!' 
                 />
                </View>
                </View>

                <View style={styles.emailContainer}>
                <Icon style={{padding:10}} name="ios-create" size={35}> </Icon>
                <View>
                <TextInput style={styles.textInput}
                onChangeText={this.handleCommentChange}
                defaultValue={comment}
                placeholder='Enter your Memories Here!' 
                     
                 />
                </View>
                </View>
                
                <TouchableOpacity onPress={this.onSubmit} style={{flex:0, alignItems:'center', paddongTop: 20}}>
                    <View style={{height:30, width:90, backgroundColor:'skyblue', borderWidth:1, alignItems:'center',
                    justifyContent:'center', borderBottomRightRadius:10, borderBottomLeftRadius:10,
                    borderTopLeftRadius:10, borderTopRightRadius:10, }}>
                        <Text style={{fontSize:18, color:'black'}}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex:0,
        width: 310,
		height: 250,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'skyblue',
		flexDirection:'column',
		justifyContent: "space-between",
        paddingBottom:20,
        margin:20
    
    },
    nameContainer:{
        flex:1,
        flexDirection:'row',
        height:20,
        width:280,
        borderWidth:2,
        borderColor:'black',
        padding:10,
        margin:10
               
    },
    emailContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:"wrap",
        flexShrink:1,
        height:80,
        width:280,
        borderColor:'black',
        borderWidth:1,
        margin:10,
        paddingBottom:30,
        alignItems:'flex-end'
        
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
        flexWrap: 'wrap'
    }

});