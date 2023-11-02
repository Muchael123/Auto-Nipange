import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Onboard from '../screens/Onboard';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Account from '../screens/Account';
import {t} from 'react-native-tailwindcss';
import Plans from '../screens/Plans';
import Notification from '../screens/Notification';
import Groups from '../screens/Groups';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

const TabNavivagtion = () => {
  return (
    <Tab.Navigator
      initialRouteName="home-tab"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#51954a',
        tabBarActiveTintColor: 'white',
        tabBarIconStyle: {
          color: 'gray',
        },
        tabBarStyle: {
          marginTop: 0,
          padding: 0,
          backgroundColor: '#333',
          size: 10,
          paddingBottom: 3,
          height: 78,
        },
      }}>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarItemStyle: {
            borderTopRightRadius: 30,
            paddingBottom: 8,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              style={{
                color: color,
                fontSize: size,
              }}
              icon={SolidIcons.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PLANS"
        component={Plans}
        options={{
          tabBarItemStyle: {
            borderTopRightRadius: 10,

            borderTopLeftRadius: 10,

            paddingBottom: 8,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              style={{color: color, fontSize: size}}
              icon={SolidIcons.calendarAlt}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GROUPS"
        component={Groups}
        options={{
          tabBarItemStyle: {
            borderTopRightRadius: 10,

            borderTopLeftRadius: 10,

            paddingBottom: 8,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              style={{color: color, fontSize: size}}
              icon={SolidIcons.users}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="NOTIFICATION"
        component={Notification}
        options={{
          tabBarItemStyle: {
            borderTopRightRadius: 10,

            borderTopLeftRadius: 10,

            paddingBottom: 8,
          },
          tabBarBadge: 4,
          tabBarBadgeStyle: {
            backgroundColor: 'tomato',
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              style={{color: color, fontSize: size}}
              icon={SolidIcons.bell}
            /> 
          ),
        }}
      />*/}
      <Tab.Screen
        name="ACCOUNT"
        component={Account}
        options={{
          tabBarItemStyle: {
            borderTopLeftRadius: 30,
            paddingBottom: 8,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome
              style={{color: color, fontSize: size}}
              icon={SolidIcons.user}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
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
            component={TabNavivagtion}
            options={{header: () => false}}
          />
        </stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Home;
