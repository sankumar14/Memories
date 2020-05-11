import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableOpacity,
TextInput } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from '@expo/vector-icons/Ionicons'


import NameBox from './components/NameBox'
import DetailScreen from './components/DetailScreen'
import store from './store'


export default class App extends React.Component {

  render() {
    return <AppContainer />;
  }
}

class LogginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 30, justifyContent: 'space-between' }}><Image
          style={{ flex: 0, height: 40, width: 40 }} source={require('./assets/prime.png')} />Welcome to Memories</Text>
        <Button title="Click here to Login" onPress={() => this.props.navigation.navigate('HomePage')} />

      </View>
    );
  }
}


class Home extends Component {
  
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
                        style={styles.ImageStyle} source={require('./assets/prime.png')} />
                        Memories</Text>
                </View>
                <Button title="Add your Comments here"
                    onPress={() => this.props.navigation.navigate('Details')} />
                <View style={styles.main}>
                    <ScrollView style={styles.scrollView} justifyContent='space-between' >
                        <NameBox id={id} name={name} comment={comment}/>
                    </ScrollView>
                </View>
            </View>      
    );
}
}

class Profile1 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Profile</Text>
      </View>
    );
  }
}

const Details = (props) => (
  <DetailScreen/>
);

const HomePage = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Home',
        headerLeft: (
          <Icon style={{ padding: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu" size={20} />

        )
      }
    }
  },
  Details: {
    screen: Details
  }
});

// This is the second screen in the Tab Navigation(the screen details should be in the class)
const Profile = createStackNavigator({
  Profile1: {
    screen: Profile1,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (
          <Icon style={{ padding: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu" size={20} />

        )
      }
    }
  }
});


// This is the Tab Navigator we can see in the bottom when in Home Screen & other screens mentioned here
// setting the "header" to null will avoid the double headers due to stack and tab navigation
// state.route will read teh screen name
const MainTabNavigator = createBottomTabNavigator({
  HomePage,
  Profile
},
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index]
      return {
        header: null,
        headerTitle: routeName
      };
    }
  });

// This is the First Stack Navigator which is HomeScreen and will include the TabNavigator
const MainStackNavigator = createStackNavigator({
  MainTabNavigator: MainTabNavigator
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: <Icon style={{ padding: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu" size={20} />
      }
    }
  });

// This is the main Drawer navigator for the App
const AppDrawerNavigator = createDrawerNavigator({
  MainScreen: {
    screen: MainStackNavigator
  },
  Loggout: {
    screen: LogginScreen
  }
});

//Switch Navigator helps to move to other navigated screens
const AppSwitchNavigator = createSwitchNavigator({
  Loggin: { screen: LogginScreen },
  MainScreen: { screen: AppDrawerNavigator }
});

// Loggin and MainScreen Container
const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
