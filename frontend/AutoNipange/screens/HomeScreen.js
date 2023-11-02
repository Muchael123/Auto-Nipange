import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {t} from 'react-native-tailwindcss';
import React, {useEffect, useState} from 'react';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Nav from '../components/Nav';
import {color} from 'react-native-tailwindcss';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = props => {
  const [userDatails, setUserDetails] = useState();
  const [isBalance, setIsBalance] = useState(false);
  const toogle = () => {
    setIsBalance(!isBalance);
  };
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
    console.log('click');
    props.navigation.navigate('login');
  };
  return (
    <SafeAreaView
      style={[
        {
          width: width,
          height: height,
          flex: 1,
          alignItems: 'center',
          // justifyContent: 'center',
          backgroundColor: '#333',
          margin: 0,
          padding: 0,
        },
      ]}>
      <Nav onPress={handleLogOut} />
      <View
        style={{
          marginTop: 20,
          width: '86%',
          padding: 5,
          backgroundColor: 'darkgray',
          height: 180,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
          }}>
          <Text style={{fontSize: 20}}>Account Balance</Text>
          <FontAwesome
            onPress={toogle}
            style={[
              {
                color: 'dodgerblue',
                fontSize: 20,
                textAlign: 'center',
              },
            ]}
            icon={!isBalance ? SolidIcons.eye : SolidIcons.eyeSlash}
          />
        </View>
        <Text style={{fontSize: 27, opacity: 1}}>
          Ksh . <Text style={{}}>56699</Text>{' '}
        </Text>

        <TouchableOpacity
          onPress={() => {}}
          style={[
            t.flex,
            t.justifyCenter,
            t.alignCenter,
            t.pL10,
            t.pR10,

            {
              backgroundColor: '#51954a',
              width: '80%',
              height: 50,
              borderRadius: 10,
              marginTop: 30,
              elevation: 8,
              gap: 8,
            },
          ]}>
          <Text
            style={[t.uppercase, t.textCenter, {fontSize: 18, color: 'white'}]}>
            DEPOSIT
            {'  '}
            <FontAwesome
              onPress={toogle}
              style={[
                {
                  textAlign: 'center',
                },
              ]}
              icon={SolidIcons.moneyBill}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
