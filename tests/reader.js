'use strict';

import React, {Component, useState} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Button,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export const ScanScreen = () => {
  const [flash, setflash] = useState('on');
  const [mode, setmode] = useState('off');
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode[mode]}
      topContent={
        <View>
          <Text style={styles.centerText}>ScanQr code</Text>
          <Button
            title={`turn ${flash} flash`}
            onPress={() => {
              mode === 'off'
                ? (setmode('torch'), setflash('off'))
                : (setmode('off'), setflash('on'));
            }}
          />
        </View>
      }
      bottomContent={<View />}
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

AppRegistry.registerComponent('default', () => ScanScreen);
