import React from 'react';

import {
  View,
  TextInputProps,
  TextInput
} from 'react-native';

import { styles } from './styles';

export function SmallInput({ ...rest }: TextInputProps){
  return (
    <TextInput
      style={styles.container}
      {...rest}
      keyboardType="numeric"
    />
  );
}