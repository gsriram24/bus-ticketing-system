
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import firebase from 'react-native-firebase'


export default class Dashboard extends Component {

  componentDidMount() {
    StatusBar.setHidden(true);
    this.checkIfLoggedIn()
  }

  checkIfLoggedIn = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          if(user.isAnonymous) {
            this.props.navigation.navigate('GuestDashboardSwitchNavigator')
          }
          else {
            this.props.navigation.navigate('UserDashboardTabNavigator')
          }
        }
        else {
           this.props.navigation.navigate('EntryLoginSwitchNavigator')
         }
       }
       )
  }

  render() {
    return (
      <View>
        <ActivityIndicator size = "large" />
      </View>
    );

  }
}
