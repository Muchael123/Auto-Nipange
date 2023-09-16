import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Pressable,
  Alert,
} from 'react-native';
import {t} from 'react-native-tailwindcss';
import React, {startTransition, useState} from 'react';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {user_login} from '../api/user_api';
import Loader from '../components/Loader';
// import {postdata} from '../test';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Login = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPassword, setIsPassword] = useState();
  const toogle = () => {
    setIsPassword(!isPassword);
  };
  const [isFocused, setIsFocused] = useState(false);
  const [inputs, setInput] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const handleLoginValidate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      valid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      valid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5 chars', 'password');
      valid = false;
    }
    if (valid) {
      handleLogin();
    } else {
      Alert.alert('Error', 'All filled required*');
    }
  };

  const handleLogin = () => {
    setIsLoading(true);
    postdata();
  };

  function postdata() {
    let url = 'https://nipange.onrender.com/api/users/login/';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then(res => {
        const data = res.json();
        console.log(data);
        console.log(res?.status);
        if (res?.status == 202) {
          setIsLoading(false);
          Alert.alert('🚀success','login success');
          props.navigation.replace('home');
        } else {
          setIsLoading(false);
          Alert.alert('login fail');
        }
      })
      .catch(error => console.log(error));

    // return res.status;
  }
  const handleOnchange = (text, input) => {
    setInput(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (errorMessage, input) => {
    setErrors(prevState => ({...prevState, [input]: errorMessage}));
  };

  return (
    <View
      style={{
        backgroundColor: '#333',
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Loader visible={isLoading} />
      <View
        style={{
          // backgroundColor: 'red',
          // flex: 1,
          width: '100%',
          height: '50%',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <Text
          style={[
            t.text2xl,
            t.fontBold,
            t.trackingWidest,
            {marginTop: -50, textTransform: 'uppercase'},
          ]}>
          Login
        </Text>
        <Input
          onChangeText={text => handleOnchange(text, 'email')}
          inputs={inputs}
          error={errors.email}
          onFocus={() => {
            handleError(null, 'email');
            setIsFocused(true);
          }}
          isFocused={isFocused}
          // setIsFocused={setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
          Icon={
            <FontAwesome
              style={[
                t.textWhite,
                {
                  width: 50,
                  height: 50,
                  textAlign: 'center',
                },
              ]}
              icon={SolidIcons.envelope}
            />
          }
          placeholder="Enter email..."
        />
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'left',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginLeft: 20,
              textAlign: 'left',
              alignSelf: 'flex-start',
            }}>
            Forgot password?
          </Text>
          <Pressable
          // onPress={() => props.navigation.replace('register')}
          >
            <Text style={[t.textBlue400, {fontWeight: '700', marginRight: 20}]}>
              Recover
            </Text>
          </Pressable>
        </View>
        <Input
          onChangeText={text => handleOnchange(text, 'password')}
          inputs={inputs}
          error={errors.password}
          onFocus={() => {
            handleError(null, 'password');
            setIsFocused(true);
          }}
          isFocused={isFocused}
          // setIsFocused={setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
          Icon={
            <FontAwesome
              style={[
                t.textWhite,
                {
                  width: 50,
                  height: 50,
                  textAlign: 'center',
                },
              ]}
              icon={SolidIcons.lock}
            />
          }
          eye={
            <FontAwesome
              style={[
                t.textBlue600,
                {
                  width: 50,
                  height: 50,
                  textAlign: 'center',
                  zIndex: 888,
                },
              ]}
              icon={isPassword ? SolidIcons.eye : SolidIcons.eyeSlash}
            />
          }
          placeholder="Enter password..."
          isPassword={!isPassword}
          toogle={toogle}
        />
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'left',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginLeft: 20,
              textAlign: 'left',
              alignSelf: 'flex-start',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.replace('register')}>
            <Text style={[t.textBlue400, {fontWeight: '700', marginRight: 20}]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleLoginValidate}
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
            },
          ]}>
          <Text style={[t.fontBold, t.uppercase, t.textCenter]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
