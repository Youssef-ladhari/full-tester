import React from 'react';
import {Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
// Simple usage, defaults for all but the value
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

export const permissions = () => {
  //return <Text>adza</Text>;
  //   const explore = () => {
  //     try {
  //       const loc = Geolocation.getCurrentPosition(
  //         position => {
  //           console.log(position);
  //         },
  //         error => {
  //           // See error code charts below.
  //           console.log(error.code, error.message);
  //         },
  //         {enableHighAccuracy: true, timeout: 50000},
  //       );
  //       console.log('loc', loc);
  //       return loc;
  //     } catch (err) {
  //       console.error('err', err);
  //       return null;
  //     }
  //   };
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      console.log(error);
    });
  return (
    <View>
      <Text>dzadza</Text>
    </View>
  );
};
