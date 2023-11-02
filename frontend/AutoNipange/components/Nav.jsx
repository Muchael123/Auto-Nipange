import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import {t} from 'react-native-tailwindcss';
function Nav({onPress}) {
  return (
    <View
      style={{
        width: '95%',
        height: 80,
        marginTop: 30,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../src/assets/pixel.png')}
          alt="profile"
          style={{
            borderRadius: 30,
            height: 50,
            width: 50,
            backgroundColor: '#51954a',
            objectFit: 'cover',
            marginRight: 5,
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text>Hello 👋</Text>
          <Text style={{fontSize: 20, fontWeight: 800}}>Mr John Doe</Text>
        </View>
      </View>
      <View
        style={{
          alignContent: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#51954a',
            paddingVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 20,
            marginBottom: 15,
          }}>
          <Text>LOGOUT</Text>
          <FontAwesome
            style={[
              {
                fontSize: 20,
                textAlign: 'center',
              },
            ]}
            icon={SolidIcons.signOutAlt}
          />
        </TouchableOpacity>

        <FontAwesome
          // onPress={handleLogOut}
          style={[
            {
              fontSize: 25,
              textAlign: 'center',
              color: '#51954a',
            },
          ]}
          icon={SolidIcons.bell}
        />
      </View>
    </View>
  );
}

export default Nav;
