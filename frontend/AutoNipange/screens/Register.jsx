import {
  View,
  Text,
  Dimensions,
  Alert,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
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
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Register = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => {};
  const [isPasswordLog, setIsPasswordLog] = useState();
  const toogle1 = () => {
    setIsPasswordLog(!isPasswordLog);
  };
  const [isCPassword, setIsCPassword] = useState();
  const toogle2 = () => {
    setIsCPassword(!isCPassword);
  };
  const [inputs, setInput] = useState({
    email: '',
    firstname: '',
    lastname: '',
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const handleValidate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      valid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      valid = false;
    }

    if (!inputs.firstname) {
      handleError('Please input firstname', 'firstname');
      valid = false;
    }
    if (!inputs.lastname) {
      handleError('Please input lastname', 'lastname');
      valid = false;
    }
    if (!inputs.lastname) {
      handleError('Please input username', 'username');
      valid = false;
    }
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      valid = false;
    } else if (inputs.phone.length != 10) {
      handleError('phone number must be 10 digits', 'phone');
      valid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      valid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5 chars', 'password');
      valid = false;
    }
    if (!inputs.confirmPassword) {
      handleError('Please confirm password', 'confirmPassword');
      valid = false;
    } else if (inputs.confirmPassword != inputs.password) {
      handleError('password missmatch', 'confirmPassword');
      valid = false;
    }
    if (valid) {
      handleRegister();
    } else {
      Alert.alert('Error', 'All filled required*');
    }
  };

  const handleRegister = () => {
    setIsLoading(true);
    try {
      // AsyncStorage.setItem('user', JSON.stringify(inputs));
      postdata();
    } catch (error) {
      Alert.alert('Error', 'something went wrong', error);
    }
  };

  function postdata() {
    let url = 'https://nipange.onrender.com/api/users/create_user/';
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        username: inputs.username,
        email: inputs.email,
        firstname: inputs.firstname,
        lastname: inputs.lastname,
        phone: inputs.phone,
        password: inputs.password,
      }),
    })
      .then(res => {
        const data = res.json();
        console.log(res?.status);
        console.log(data);
        if (res?.status == 201) {
          setIsLoading(false);
          Alert.alert('register success');
          props.navigation.navigate('login');
        } else {
          setIsLoading(false);
          Alert.alert('register fail');
        }
      })
      .catch(error => console.log(error));

    // return data;
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
          height: '73%',
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
            {marginTop: -40, textTransform: 'uppercase'},
          ]}>
          Register
        </Text>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Input
            onChangeText={text => handleOnchange(text, 'firstname')}
            inputs={inputs}
            error={errors.firstname}
            onFocus={() => {
              handleError(null, 'firstname');
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
                icon={SolidIcons.userAstronaut}
              />
            }
            placeholder="Enter your firstname..."
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Input
            onChangeText={text => handleOnchange(text, 'lastname')}
            inputs={inputs}
            error={errors.lastname}
            onFocus={() => {
              handleError(null, 'lastname');
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
                icon={SolidIcons.user}
              />
            }
            placeholder="Enter lastname..."
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Input
            onChangeText={text => handleOnchange(text, 'username')}
            inputs={inputs}
            error={errors.username}
            onFocus={() => {
              handleError(null, 'username');
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
                icon={SolidIcons.userNinja}
              />
            }
            placeholder="Enter your username..."
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Input
            onChangeText={text => handleOnchange(text, 'phone')}
            inputs={inputs}
            error={errors.phone}
            onFocus={() => {
              handleError(null, 'phone');
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
                icon={SolidIcons.phone}
              />
            }
            placeholder="Enter phone number..."
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
              position: 'relative',
              borderColor: errors.password
                ? 'red'
                : isFocused
                ? 'green'
                : 'white',
            }}>
            <Text style={{marginLeft: 8}}>
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
            </Text>

            <Pressable
              onPress={() => {
                toogle1();
              }}
              style={{
                marginLeft: 8,
                position: 'absolute',
                right: 15,
                top: '30%',
                zIndex: 99,
              }}>
              <FontAwesome
                style={[
                  t.textBlue600,
                  {
                    width: 50,
                    height: 50,
                    textAlign: 'center',
                  },
                ]}
                icon={isPasswordLog ? SolidIcons.eye : SolidIcons.eyeSlash}
              />
            </Pressable>
            <TextInput
              onChangeText={text => handleOnchange(text, 'password')}
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
              onFocus={() => {
                handleError(null, 'password');
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
              placeholder="Enter password..."
              placeholderTextColor={'#333'}
              secureTextEntry={!isPasswordLog}
            />
            {errors.password && (
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginTop: 7,
                  position: 'absolute',
                  marginTop: 10,
                  top: 30,
                }}>
                {errors.password}
              </Text>
            )}
          </View>
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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
              position: 'relative',
              borderColor: errors.confirmPassword
                ? 'red'
                : isFocused
                ? 'green'
                : 'white',
            }}>
            <Text style={{marginLeft: 8}}>
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
            </Text>

            <Pressable
              onPress={() => {
                toogle2();
              }}
              style={{
                marginLeft: 8,
                position: 'absolute',
                right: 15,
                top: '30%',
                zIndex: 99,
              }}>
              <FontAwesome
                style={[
                  t.textBlue600,
                  {
                    width: 50,
                    height: 50,
                    textAlign: 'center',
                  },
                ]}
                icon={isCPassword ? SolidIcons.eye : SolidIcons.eyeSlash}
              />
            </Pressable>
            <TextInput
              onChangeText={text => handleOnchange(text, 'confirmPassword')}
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
              onFocus={() => {
                handleError(null, 'confirmPassword');
                setIsFocused(true);
              }}
              onBlur={() => {
                setIsFocused(false);
              }}
              placeholder="Confirm password..."
              placeholderTextColor={'#333'}
              secureTextEntry={!isCPassword}
            />
            {errors.confirmPassword && (
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginTop: 7,
                  position: 'absolute',
                  marginTop: 10,
                  top: 30,
                }}>
                {errors.confirmPassword}
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'left',
            justifyContent: 'space-between',
          }}
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
            Have an account?
          </Text>
          <Pressable onPress={() => props.navigation.replace('login')}>
            <Text style={[t.textBlue400, {fontWeight: '700', marginRight: 20}]}>
              Login
            </Text>
          </Pressable>
        </View>
        <TouchableOpacity
          onPress={handleValidate}
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
          <Text style={[t.fontBold, t.uppercase, t.textCenter]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
