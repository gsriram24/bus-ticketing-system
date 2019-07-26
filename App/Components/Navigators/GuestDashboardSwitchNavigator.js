/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import GuestDashboard from '../GuestDashboard'
import BusDetails from '../BusDetails'
import BusTicketSwitchNavigator from '../Navigators/BusTicketSwitchNavigator'
import { createSwitchNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createSwitchNavigator({
  GuestDashboard: {
    screen: GuestDashboard,
    navigationOptions: {
      header:null,
    }
  },
  BusTicketSwitchNavigator: {
    screen:BusTicketSwitchNavigator,
    navigationOptions: {
      header:null,
    }
  },



});

const QRSwitchNavigator = createAppContainer(AppNavigator)
export default QRSwitchNavigator;
