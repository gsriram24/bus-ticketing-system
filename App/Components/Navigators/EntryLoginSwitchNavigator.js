/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import UserLogin from '../UserLogin'
import EntryLogin from '../EntryLogin'
import GuestDashboard from '../GuestDashboard'

import { createSwitchNavigator, createAppContainer} from "react-navigation";

const AppNavigator = createSwitchNavigator({
  EntryLogin: {
    screen: EntryLogin,
    navigationOptions: {
      header:null,
    }
  },
  UserLogin: {
    screen: UserLogin,
    navigationOptions: {
      header:null,
    }
  },
  GuestDashboard: {
    screen:GuestDashboard,
    navigationOptions: {
      header:null,
    }
  }
});

const LoginSwitchNavigator = createAppContainer(AppNavigator)
export default LoginSwitchNavigator;
