/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import BusDetails from '../BusDetails'
import Ticket from '../Ticket'

import { createSwitchNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createSwitchNavigator({
  BusDetails: {
    screen: BusDetails,
    navigationOptions: {
      header:null,
    }
  },
  Ticket: {
    screen: Ticket,
    navigationOptions: {
      header:null,
    },
  },
});

const BusTicketSwitchNavigator = createAppContainer(AppNavigator)
export default BusTicketSwitchNavigator;
