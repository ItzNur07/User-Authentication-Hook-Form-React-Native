import React from 'react';
import { Text, View, Image, Alert, ScrollView, TextInput } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import SocialSigninButton from '../Components/SocialSigninButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const SigninScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSigninPress = () => {
    navigation.navigate('Home');
    Alert.alert('Sign In Successfully!');
  };

  const onForgetPress = () => {
    navigation.navigate('ForgetPassword');
  };

  const onSignupPress = () => {
    navigation.navigate('Signup');
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center', padding: 20 }}>
          <Image
            source={require('../Assets/images/bicycle-shop-logo-design-vector_53876-40626-removebg-preview.png')}
            style={{ width: 180, height: 180 }}
          />
          <CustomInput
            control={control}
            name="username"
            placeholder="Username"
            skey={false}
            rules={{ required: 'Email is required' }}
          />
          <CustomInput
            // value={password}
            // setValue={setPassword}
            control={control}
            name="password"
            placeholder="Password"
            skey={true}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'password should be minimum 6 character',
              },
            }}
          />

          <CustomButton
            text="Sing In"
            onPress={handleSubmit(onSigninPress)}
            type="PRIMERY"
          />

          <CustomButton
            text="Forget Password?"
            onPress={onForgetPress}
            type="TERSERY"
          />
          <SocialSigninButton />
          <CustomButton
            text="Don't have an account? Create one?"
            onPress={onSignupPress}
            type="TERSERY"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default SigninScreen;
