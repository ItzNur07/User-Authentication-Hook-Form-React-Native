import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import { useForm } from 'react-hook-form';

// Autentication Functionality and Hooks

const EmailConfirmScreen = () => {
  const { control, handleSubmit } = useForm();

  const onConfirmPress = () => {
    Alert.alert('Confirm Code Successfully!');
  };

  const onResendPress = () => {
    Alert.alert('Code Resend Successfully!');
  };

  const onSigninPress = () => {
    Alert.alert('Loged in sucessfully!');
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
          Confirm email code
        </Text>
        <CustomInput
          name="code"
          placeholder="Enter your confirm code"
          control={control}
          rules={{required:'code is required'}}
        />
        <CustomButton text="Confirm" onPress={onConfirmPress} type="PRIMERY" />
        <CustomButton text="Resend" onPress={onResendPress} type="SECONDERY" />
        <CustomButton
          text="Back to Sign In"
          onPress={handleSubmit(onSigninPress)}
          type="TERSERY"
        />
      </View>
    </ScrollView>
  );
};

export default EmailConfirmScreen;
