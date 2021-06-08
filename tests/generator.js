import QRCode from 'react-native-qrcode-svg';
import React from 'react';
import {Text, View} from 'react-native';
// Simple usage, defaults for all but the value

export const Generator = () => {
  //return <Text>adza</Text>;

  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    <View>
      <QRCode
        value="Just some string value"
        logo={{uri: base64Logo}}
        logoSize={30}
        logoBackgroundColor="transparent"
      />
    </View>
  );
};
