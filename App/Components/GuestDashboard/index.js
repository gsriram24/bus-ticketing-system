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
  Linking,
} from 'react-native';
import styles from './style.js'
import QRCodeScanner from 'react-native-qrcode-scanner';
import firebase from 'react-native-firebase'

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
        <View style= {styles.QRContainer}>
          <QRCodeScanner
          onRead={this.onSuccess}
          showMarker={true}
          />
        </View>
        <View style= {styles.headerContainer}>
          <Text style={styles.headerText}>Please Scan QR</Text>
        </View>
        <View style={{flexDirection:'row', alignSelf:'center',flex:2,}}>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('mailto:md@bmtc.com' + '?subject=&body=')}>
      <View style = {styles.gradient1}>
        <Text style={{color:'white'}}>MD</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('tel:08022952422')}>
      <View style = {styles.gradient2}>
        <Text style={{color:'white'}}>CR</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('tel:108')}>
      <View style = {styles.gradient3}>
        <Text style={{color:'white'}}>SOS</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.button} onPress={() => Linking.openURL('tel:1800425163')}>
      <View style = {styles.gradient4}>
        <Text style={{color:'white'}}>H</Text>
      </View>
      </TouchableOpacity>

      </View>
      </View>
    );
  }
}
