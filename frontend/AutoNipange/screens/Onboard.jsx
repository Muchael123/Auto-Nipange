import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

const Onboard = props => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#333',
          image: (
            <LottieView
              source={require('../src/assets/lottieFiles/animation_lm23u9l6 (1).json')}
              style={{width: 400, height: 400}}
              autoPlay
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#333',
          image: (
            <LottieView
              source={require('../src/assets/lottieFiles/animation_lm240vcg (1).json')}
              style={{width: 400, height: 400}}
              autoPlay
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#333',
          image: (
            <LottieView
              source={require('../src/assets/lottieFiles/pay.json')}
              style={{width: 400, height: 400}}
              autoPlay
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#333',
          image: (
            <LottieView
              source={require('../src/assets/lottieFiles/animation_lm245hqy (1).json')}
              style={{width: 400, height: 400}}
              autoPlay
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
      onDone={() => props.navigation.replace('login')}
      onSkip={() => props.navigation.replace('login')}
    />
  );
};

export default Onboard;
