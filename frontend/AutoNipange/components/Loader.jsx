import {View, Text, ActivityIndicator, Dimensions} from 'react-native';
import React from 'react';
import {color, t} from 'react-native-tailwindcss';
const Loader = ({visible = false}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    visible && (
      <View
        style={{
          width: width,
          height: height,
          zIndex: 1000,
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,.85)',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 50,
            backgroundColor: '#fff',
            marginHorizontal: 50,
            flexDirection: 'row',
            borderRadius: 5,
            alignItems: 'center',
            paddingHorizontal: 20,
            elevation: 8,
          }}>
          <ActivityIndicator
            size="large"
            color="rgb(0, 110, 255)"
            style={{elevation: 8}}
          />
          <Text
            style={{fontSize: 16, marginLeft: 20, color: 'rgb(0, 110, 255)'}}>
            Loading...
          </Text>
        </View>
      </View>
    )
  );
};

export default Loader;
