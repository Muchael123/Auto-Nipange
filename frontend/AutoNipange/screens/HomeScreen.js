import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {t} from 'react-native-tailwindcss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = props => {
  const [userDatails, setUserDetails] = useState();
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };
  const handleLogOut = () => {
    AsyncStorage.setItem(
      'user',
      JSON.stringify({...userDatails, loggedIn: true}),
    );
    props.navigation.navigate('login');
  };
  return (
    <View
      style={[
        {
          width: width,
          height: height,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'grey',
        },
      ]}>
      <Text>Hey 👋, welcome to autonipange ...commig soon...</Text>
      <TouchableOpacity
        onPress={handleLogOut}
        style={[
          t.flex,
          t.justifyCenter,
          t.alignCenter,
          t.bgBlue500,
          t.pL10,
          t.pR10,

          {
            width: '70%',
            height: 50,
            borderRadius: 10,
            marginTop: 30,
            elevation: 8,
            gap: 8,
          },
        ]}>
        <Text style={[t.fontBold, t.uppercase, t.textCenter]}>logOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
