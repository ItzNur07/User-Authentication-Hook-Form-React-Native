import React from 'react';
import { Text, View, Image, Alert, ScrollView } from 'react-native';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import SocialSigninButton from '../Components/SocialSigninButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const EMAIL_REGX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onSignupPress = () => {
    Alert.alert('Registation Successfully!');
    navigation.navigate('Home');
  };

  const onForgetPress = () => {
    navigation.navigate('ForgetPassword');
  };

  const onTramsPress = () => {
    Alert.alert('Trams press come!');
  };

  const onPrivecyPress = () => {
    Alert.alert('Privecy Policy accept here!');
  };

  const onSigninPress = () => {
    navigation.navigate('Signin');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Text
          style={{
            color: '#051C60',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create an account
        </Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          skey={false}
          rules={{ required: 'username is required' }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          skey={false}
          rules={{
            required: 'email is required',
            pattern: { value: EMAIL_REGX, message: 'email was invalid' },
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          skey={true}
          rules={{
            required: 'password is required',
            minLength: {
              value: 6,
              message: 'password should be minimum 6 character',
            },
          }}
        />
        <CustomInput
          name="confirmPassword"
          control={control}
          placeholder="Confirm Password"
          skey={true}
          rules={{
            required: 'password is required',
            validate: (value) => value === pwd || 'Password do not match!',
          }}
        />
        <CustomButton
          text="Register"
          onPress={handleSubmit(onSignupPress)}
          type="PRIMERY"
        />
        <Text style={{ color: 'gray', fontSize: 16, marginVertical: 10 }}>
          By registering, your confirm that your accect our{' '}
          <Text
            onPress={onTramsPress}
            style={{
              textDecorationLine: 'underline',
              fontWeight: '500',
              color: '#fdb075',
            }}>
            Trams of Use
          </Text>{' '}
          and{' '}
          <Text
            onPress={onPrivecyPress}
            style={{
              textDecorationLine: 'underline',
              fontWeight: '500',
              color: '#fdb075',
            }}>
            Privecy Policy
          </Text>
        </Text>
        <SocialSigninButton />
        <CustomButton
          text="already have an account? Log In"
          onPress={onSigninPress}
          type="TERSERY"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
