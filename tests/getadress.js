import React from 'react';
import {Text, View} from 'react-native';
// Simple usage, defaults for all but the value
import Geocoder from 'react-native-geocoding';
export const getadress = () => {
  //return <Text>adza</Text>;

  Geocoder.init('AIzaSyDreHP-oL-wQU223lIe9j0EeoL5ybs83IE');
  Geocoder.from(41.89, 12.49)
    .then(json => {
      var addressComponent = json.results[0].address_components[0];
      console.log(addressComponent);
    })
    .catch(error => console.warn(error));
  return (
    <View>
      <Text>azdzadza</Text>
    </View>
  );
};
///////// MOOOONNNEEEEYYYY
