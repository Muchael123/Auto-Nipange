/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Onboard from '../screens/Onboard';
const stack = createNativeStackNavigator();

import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import Login from '../screens/Login';
import Register from '../screens/Register';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;
const styles = StyleSheet.create({});

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name="onboarding"
            component={Onboard}
            options={{header: () => false}}
          />
          <stack.Screen
            name="login"
            component={Login}
            options={{header: () => false}}
          />
          <stack.Screen
            name="register"
            component={Register}
            options={{header: () => false}}
          />
          <stack.Screen
            name="home"
            component={HomeScreen}
            options={{header: () => false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
