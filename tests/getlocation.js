import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import {Text, View, Button} from 'react-native';
// Simple usage, defaults for all but the value
import Geolocation from 'react-native-geolocation-service';

export const getlocation = () => {
  //return <Text>adza</Text>;
  Geolocation.getCurrentPosition(
    position => {
      console.log(position);
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {timeout: 15000, maximumAge: 10000},
  );
  console.log('azdaz');
  return (
    <View>
      <Text>
        dzadazzfjhghghjggg g ggggggggggggggggggggggggggggggggggggggggggggggggggg
      </Text>
      <Button
        title="click"
        onPress={() => {
          console.log('pressed');
        }}></Button>
    </View>
  );
};
