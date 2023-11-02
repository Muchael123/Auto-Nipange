import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
import {t} from 'react-native-tailwindcss';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
const Input = props => {
  // console.log(props.inputs);
  return (
    <View
      style={{
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'gray',
        width: '90%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 5,
        position: 'relative',
        borderColor: props.error ? 'red' : props.isFocused ? 'green' : 'white',
      }}>
      <Text style={{marginLeft: 8}}>{props.Icon}</Text>

      <Pressable
        onPress={id => {
          props.toogle(id);
        }}
        style={{
          marginLeft: 8,
          position: 'absolute',
          right: 15,
          top: '30%',
          zIndex: 99,
        }}>
        {props.eye}
      </Pressable>
      <TextInput
        style={[
          t.border,
          t.borderWhite,
          t.pL5,
          t.pR5,
          t.bgGray300,
          t.textBlack,
          {
            borderRadius: 5,
            width: '90%',
            height: '100%',
            // backgroundColor: '#eeeee',

            shadowColor: '#000',
            elevation: 4,
          },
        ]}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={'#333'}
        keyboardType={props.keyboardType}
        // keyboardType='phone-pad'
        secureTextEntry={props.isPassword}
      />
      {props.error && (
        <Text
          style={{
            color: 'red',
            fontSize: 12,
            marginTop: 10,
            top: 30,
            position: 'absolute',
          }}>
          {props.error}
        </Text>
      )}
    </View>
  );
};

export default Input;
