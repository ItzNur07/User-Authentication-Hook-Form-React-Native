import React from 'react';
import { View, Text } from 'react-native';
import SigninScreen from './SigninScreen';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: '700', color: 'dodgerblue' }}>
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
