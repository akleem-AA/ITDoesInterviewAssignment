

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import {

  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginScreen from './Component/LoginScreen';
import NavigationScreen from './Component/Navigation/NavigationScreen';

const App = () => {
  return (
    <>
      {/* <NavigationContainer> */}
      <View style={{ flex: 1 }}>
        <NavigationScreen />
        {/* <LoginScreen /> */}
      </View>
      {/* </NavigationContainer> */}
    </>
  )
}
const styles = StyleSheet.create({

});

export default App;
