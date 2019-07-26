/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Picker,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import firebase from 'react-native-firebase'
import NumericInput from 'react-native-numeric-input'
import RNUpiPayment from "react-native-upi-payment";
import styles from './style.js'
export default class MyComponent extends Component {
    constructor(props) {
    super(props);
    this.db=firebase.firestore()
    this.db.collection('bus').where('busReg','==',this.props.navigation.state.params.number).get().then((querySnapshot) => {
    if(querySnapshot.empty) {
      Alert.alert(
          'Not Found!',
          'Bus not found!',
        )}
      else {
        querySnapshot.forEach((doc)=> {
            let data=doc.data()
            this.setState({details:data})
          }
        );
      }
      });
    this.state = {
      details: null,
      from:0,
      to:0,
      numberAdults:0,
      numberChildren:0,
      numberSC:0,
      fare:0,
      regNo : this.props.navigation.state.params.number,
    }
  }
  failureCallback = (data) => {
    if(data['Status']=="SUCCESS"){
      this.setState({Status:"SUCCESS"});
      this.setState({txnId:data['txnId']});
      this.props.navigation.navigate('Ticket', {busNo: this.state.details.busNo,
        from: this.state.details.busStops[this.state.from],
        to: this.state.details.busStops[this.state.to],
        numberAdults: this.state.numberAdults,
        numberChildren: this.state.numberChildren,
        numberSC: this.state.numberSC,
        fare: this.calculateFare(),
        txnId:this.state.txnId,
        })
    }
    else {
        this.setState({Status:"FAILURE"})
        this.setState({txnId:data['txnId']})
        Alert.alert("Failure")
    }

  }
  successCallback = (data) => {
      //nothing happened here using Google Pay
  }
  makePayment = () => {
    RNUpiPayment.initializePayment({
      vpa: '8252047349@airtel', // or can be john@ybl or mobileNo@upi
      payeeName: 'BMTC',
      amount: this.calculateFare(),
      transactionRef: 'aasf-332-aoei-fn',
      transactionNote: this.state.details.busStops[this.state.from] + '->' +this.state.details.busStops[this.state.to]+' ' +'A:'+ this.state.numberAdults+'C:'+ this.state.numberChildren+'S:'+ this.state.numberSC
    }, this.successCallback, this.failureCallback);
  }
  calculateFare = () => {
    const adult = [0,5,9,12,15,16,16,17,18,20,20,20,21,21,21,21,22,22,22,23,23,23,24,24,24,26,26,26,27,27,27,28,28,28,29,29,29,30,30,30,31,31,31,32,32,32,33,33,33,34,34,34,35,35,35,36,36,36,37,37,37,38,38,38,39,39,39];
    const child = [0,3,5,6,8,8,8,9,9,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12,13,13,13,14,14,14,14,14,14,15,15,15,15,15,15,16,16,16,16,16,16,17,17,17,17,17,17,18,18,18,18,18,18,19,19,19,19,19,19,20,20,20];
    const sc = [0,4,7,9,11,12,12,13,14,15,15,15,16,16,16,16,17,17,17,17,17,17,18,18,18,20,20,20,20,20,20,21,21,21,22,22,22,23,23,23,23,23,23,24,24,24,25,25,25,26,26,26,26,26,26,27,27,27,28,28,28,29,29,29,29,29,29];
    let fromIndex=this.state.from
    let toIndex = this.state.to
    let indexDiff=Math.abs(fromIndex-toIndex)
    if(indexDiff==0) {
      return 0
    }
    let cost=(adult[parseInt(indexDiff/2)+1]*this.state.numberAdults + child[parseInt(indexDiff/2)+1]*this.state.numberChildren + sc[parseInt(indexDiff/2)+1]*this.state.numberSC)
    return cost
  }
  fetchdata = () => {
    this.db=firebase.firestore()
    this.db.collection('bus').where('busReg','==',this.props.navigation.state.params.number).get().then((querySnapshot) => {
    if(querySnapshot.empty) {
      Alert.alert(
          'Not Found!',
          'Bus not found!',
        )}
      else {
        querySnapshot.forEach((doc)=> {
            let data=doc.data()
            this.setState({details:data})
          }
        );
      }
      });
  }
  render() {
    if(this.state.details===null) {
      this.fetchData
      return (
      <View style= {styles.container}>
        <ActivityIndicator size = "large" />
      </View>

    );
  }
    return (
      <View style={styles.body}>
        <View style = {styles.headerContainer}>
          <Text style = {styles.headerText}>{this.state.details.busNo}</Text>
        </View>
        <View style = {styles.bodyContainer}>
          <View style = {styles.pickerBox}>
            <Text style = {styles.venueText}>From</Text>
            <Picker
                style={styles.picker}
                selectedValue={this.state.from}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) => this.setState({from:itemValue})}
                itemStyle={{fontSize: 15,color: 'black',textAlign: 'center',fontWeight: 'bold'}}>
                {this.state.details.busStops.map((item, index) => {
                   return (< Picker.Item label={item} value={index} key={index} />);
                })}
            </Picker>
          </View>
          <View style = {styles.pickerBox}>
            <Text style = {styles.venueText}>To</Text>
            <Picker
                style={styles.picker}
                selectedValue={this.state.to}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) => this.setState({to:itemValue})}
                itemStyle={{fontSize: 15,color: 'black',textAlign: 'center',fontWeight: 'bold'}}>
                {this.state.details.busStops.map((item, index) => {
                   return (< Picker.Item label={item} value={index} key={index} />);
                })}
            </Picker>
          </View>
          <View style = {styles.numberContainer}>
            <Text style={styles.typeText}>Adults</Text>
            <View style={styles.number1}>
              <NumericInput minValue = {0} value={this.state.numberAdults} onChange={value => this.setState({numberAdults:value})} />
            </View>
          </View>
          <View style = {styles.numberContainer}>

            <Text style={styles.typeText}>Children</Text>
              <View style={styles.number2}>
                <NumericInput minValue = {0} value={this.state.numberChildren} onChange={value => this.setState({numberChildren:value})} />
              </View>
          </View>
          <View style = {styles.numberContainer}>
            <Text style={styles.typeText}>Senior Citizens</Text>
              <View style={styles.number3}>
                <NumericInput minValue = {0} value={this.state.numberSC} onChange={value => this.setState({numberSC:value})} />
              </View>
          </View>
          <View style = {styles.fareContainer}>
            <Text style={styles.fareText}>Total Fare:     </Text>
            <Text style={styles.fare}>{this.calculateFare()}</Text>
          </View>
          <TouchableOpacity onPress = {this.makePayment} style={styles.payButton}>
            <Text style={styles.payText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
