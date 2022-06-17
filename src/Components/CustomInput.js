import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
  name,
  control,
  placeholder,
  skey,
  rules,
  keyboardType,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? 'red' : '#e8e8e8' },
            ]}>
            <TextInput
              placeholder={placeholder}
              onChangeText={onChange}
              value={value}
              secureTextEntry={skey}
              onBlur={onBlur}
              keyboardType={keyboardType}
            />
          </View>
          {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch' }}>
              {error.message || Error}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});

export default CustomInput;
