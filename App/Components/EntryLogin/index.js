/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './style.js'
import firebase from 'react-native-firebase'

export default class EntryLogin extends Component {
  onLoginPress = () => {
    this.props.navigation.navigate('UserLogin')
  }
  onGuestPress = () => {
    firebase.auth().signInAnonymously().catch(function(error) {
      Alert.alert(error.message);
    });
  }
  render() {
    return (
      <View style={styles.body}>
        <View style = {styles.container1}>
          <TouchableOpacity onPress = {_ => this.onLoginPress()}>
            <View style = {styles.button}>
              <Text style = {styles.buttonText}>Register/Login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.container1}>
          <TouchableOpacity onPress = {_ => this.onGuestPress()}>
            <View style = {styles.button1}>
              <Text style = {styles.buttonText}>Guest Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
