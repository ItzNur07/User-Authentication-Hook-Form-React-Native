import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ForgetPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  // Autentication Functionality and Hooks

  const onForgetPress = () => {
    navigation.navigate('NewPassword');
  };

  const onSigninPress = () => {
    navigation.navigate('Signin');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: 'center', padding: 20, height: '100%' }}>
        <Text
          style={{
            color: '#051C60',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Reset Password
        </Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{ required: 'username is required' }}
        />
        <CustomButton
          text="Send"
          onPress={handleSubmit(onForgetPress)}
          type="PRIMERY"
        />
        <CustomButton
          text="Back to Sign In"
          onPress={onSigninPress}
          type="TERSERY"
        />
      </View>
    </ScrollView>
  );
};

export default ForgetPasswordScreen;
