/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './style.js'
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRScanner extends Component {
    constructor(props) {
    super(props);
  }
  onSuccess = (e) => {
    this.props.navigation.navigate('BusDetails', {number:e.data})
   }
  render() {
    return (
      <View style= {styles.body}>
        <View style= {styles.headerContainer}>
          <Text style={styles.headerText}>Read QR</Text>
        </View>
        <View style= {styles.QRContainer}>
          <QRCodeScanner
          onRead={this.onSuccess}
          />
        </View>
      </View>
    );
  }
}
