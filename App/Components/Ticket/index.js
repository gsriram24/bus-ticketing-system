/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RNHTMLtoPDF from "react-native-html-to-pdf";

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
    super(props);
    this.state = {
      ticketNo:Math.floor(Math.random() * (99999 - 0)) + 0,
      date: '',
      time: '',
      busNo: this.props.navigation.state.params.busNo,
      from: this.props.navigation.state.params.from,
      to: this.props.navigation.state.params.to,
      numberAdults: this.props.navigation.state.params.numberAdults,
      numberChildren: this.props.navigation.state.params.numberChildren,
      numberSC: this.props.navigation.state.params.numberSC,
      fare: this.props.navigation.state.params.fare,
      txnId: this.props.navigation.state.params.txnId,
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    that.setState({

      //Setting the value of the date time
      date:
        date + '.' + month + '.' + year ,
      time:
        hours + ':' + min + ':' + sec,
    });
    this.generatePDF
  }
  generatePDF = () => {
    const html =
        `<div>
         <p>T.No ${this.state.ticketNo}</p>
         <p>Bus.No ${this.state.busNo}</p>
         <p>Date ${this.state.date}</p>
         <p>Time ${this.state.time}</p>
         <p>From ${this.state.from}</p>
         <p>To ${this.state.to}</p>
         <p>Adults x${this.state.numberAdults}</p>
         <p>Children x${this.state.numberChildren}</p>
         <p>Senior x${this.state.numberSC}</p>
         </div>`;
         const options = {html,
         fileName: this.state.ticketNo,
         directory: "Documents"
       };
    const file = RNHTMLtoPDF.convert(options);
    Alert.alert("PDF Generated")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.ticketBusNo}>
          <Text style={styles.ticketNumber}>T. No: {this.state.ticketNo}</Text>
          <Text style={styles.busNo}>{this.state.busNo}</Text>
        </View>
        <View style = {styles.ticketBusNo}>
          <Text style={styles.ticketNumber}>{this.state.date}</Text>
          <Text style={styles.busNo}>{this.state.time}</Text>
        </View>
        <View style={styles.journey}>
          <Text style = {styles.journeyText}>{this.state.from}</Text>
          <Text style = {styles.journeyTextTo}>TO</Text>
          <Text style = {styles.journeyText}>{this.state.to}</Text>
        </View>
        <View style ={styles.tickets}>
          <Text style = {styles.ticket}>ADULT x {this.state.numberAdults}</Text>
          <Text style = {styles.ticket}>CHILD x {this.state.numberChildren}</Text>
          <Text style = {styles.ticket}>SENIOR x {this.state.numberSC}</Text>
        </View>
        <View style ={styles.tickets}>
          <Text style = {styles.totalFare}>TOTAL FARE: {this.state.fare}</Text>
        </View>
        <Text style = {{textAlign:'center', marginTop:50,}}>TxnID: {this.state.txnId}</Text>
        <Text style = {{textAlign:'center', marginTop:50,}}>NOT TRANSFERABLE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  journeyText: {
    marginTop:10,
    fontSize: 20,
  },
  journeyTextTo: {
    marginTop:10,
    fontSize: 15,
  },
  container: {
    flex: 1,
    borderWidth:1,
    borderRadius:5,
  },
  ticketBusNo: {
    flexDirection:'row',
    marginTop:20,
    marginTop:14,

  },
  ticketNumber: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    marginLeft: 20,
    fontSize: 16,
  },
  busNo: {
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 16,
  },
  journey: {
    marginTop: 50,
    alignItems: 'center',
  },
  tickets: {
    marginTop: 50,
    alignItems: 'center',
  },
  ticket: {
    fontSize:16,
  },
  totalFare: {
    fontSize: 20,
  }
});
