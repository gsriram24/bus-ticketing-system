import React from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator} from "react-navigation";
import GuestDashboardSwitchNavigator from './App/Components/Navigators/GuestDashboardSwitchNavigator'
import Loading from './App/Components/Loading'
import GuestDashboard from './App/Components/GuestDashboard'
import UserDashboardTabNavigator from './App/Components/Navigators/UserDashboardTabNavigator'
import EntryLoginSwitchNavigator from './App/Components/Navigators/EntryLoginSwitchNavigator'

import firebase from "react-native-firebase"


var firebaseConfig = {
  apiKey: "AIzaSyB-r8W6fytCdWGZspShPJMnIS9pj7JK0og",
  authDomain: "bmtc-fdffb.firebaseapp.com",
  databaseURL: "https://bmtc-fdffb.firebaseio.com",
  projectId: "bmtc-fdffb",
  storageBucket: "bmtc-fdffb.appspot.com",
  messagingSenderId: "274644389929",
  appId: "1:274644389929:web:67b415b93c99690a"
};

firebase.initializeApp(firebaseConfig);
const AppSwitchNavigator = createSwitchNavigator({
  
  // EntryLoginStackNavigator:EntryLoginSwitchNavigator,
  // Loading: Loading,
  GuestDashboardSwitchNavigator: GuestDashboardSwitchNavigator,
  UserDashboardTabNavigator: UserDashboardTabNavigator,
}
)
const AppNavigator = createAppContainer(AppSwitchNavigator);

export default AppNavigator;
