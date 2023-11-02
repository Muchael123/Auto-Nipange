import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {color} from 'react-native-tailwindcss';
import {View, Button} from 'react-native';

// const App = () => <Button title="Hello World!" />;
const Dots = ({selected}) => {
  return (
    <View
      style={{
        width: 17,
        height: 17,
        borderWidth: 2,
        backgroundColor: selected ? 'white' : 'rgba(230, 230,230, 0.2)',
        borderRadius: 10,
        borderColor: '#f0f8ff',
        marginHorizontal: 3,
      }}
    />
  );
};
const Onboard = props => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#51954a',
          titleStyles: {
            fontSize: 30,
            fontWeight: 900,
          },
          subTitleStyles: {
            fontSize: 20,
            fontWeight: 500,
          },
          image: (
            <LottieView
              source={require('../src/assets/lottieFiles/animation_lm23u9l6 (1).json')}
              style={{width: 400, height: 400}}
              autoPlay
            />
          ),
          title: 'Welcome To AUTONIPANGE',
          subtitle:
            'We automate airtime disbursment process, easy payment process, instant airtime',
        },
        {
          backgroundColor: '#00b9e8',
          titleStyles: {
            fontSize: 30,
            fontWeight: 900,
          },
          subTitleStyles: {
            fontSize: 20,
            fontWeight: 500,
          },
          image: (
            <LottieView
              source={require('../src/assets/lottieFiles/animation_lm240vcg (1).json')}
              style={{width: 400, height: 400}}
              autoPlay
            />
          ),
          title: 'PLANS',
          subtitle: 'Get started with two plans , TUGAWANE and ZINGATIA',
        },
        {
          backgroundColor: 'olive',
          titleStyles: {
            fontSize: 30,
            fontWeight: 900,
          },
          subTitleStyles: {
            fontSize: 20,
            fontWeight: 500,
          },
          image: (
            <LottieView
              source={require('../src/assets/lottieFiles/pay.json')}
              style={{width: 400, height: 400}}
              autoPlay
            />
          ),
          title: 'TUGAWANE',
          subtitle:
            'TUGAWANE automates disbursment of airtime sent same time and same amout',
        },
        {
          backgroundColor: 'tomato',
          titleStyles: {
            fontSize: 30,
            fontWeight: 900,
          },
          subTitleStyles: {
            fontSize: 20,
            fontWeight: 500,
          },
          image: (
            <LottieView
              source={require('../src/assets/lottieFiles/animation_lm245hqy (1).json')}
              style={{width: 400, height: 400}}
              autoPlay
            />
          ),
          title: 'ZINGATIA',
          subtitle:
            'ZINGATIA  automates disbursment of airtime sent same time and different amount according as peruser requirement',
        },
      ]}
      DotComponent={Dots}
      onDone={() => props.navigation.replace('login')}
      onSkip={() => props.navigation.replace('login')}
    />
  );
};

export default Onboard;
