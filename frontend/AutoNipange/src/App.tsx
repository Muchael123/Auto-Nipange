/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from '../components/Home';
import{SafeAreaView} from 'react-native'
function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Home />
  );
}

export default App;
