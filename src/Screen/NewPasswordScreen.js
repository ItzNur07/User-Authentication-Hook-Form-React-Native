import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const NewPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  // Autentication Functionality and Hooks

  const onSubmitPress = (data) => {
    Alert.alert('Password Reset Successfully!');
    navigation.navigate('Home');
    console.log(data);
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
          Reset your password
        </Text>
        <CustomInput
          name="code"
          placeholder="Code"
          keyboardType="numeric"
          control={control}
          rules={{
            required: 'code is required',
            minLength: {
              value: 4,
              message: 'code minimum 4 character',
            },
          }}
        />
        <CustomInput
          name="newpassword"
          control={control}
          placeholder="Enter Your New Password"
          rules={{
            required: 'password is required',
            minLength: {
              value: 6,
              message: 'code minimum 6 character',
            },
          }}
        />
        <CustomButton
          text="Submit"
          onPress={handleSubmit(onSubmitPress)}
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

export default NewPasswordScreen;
