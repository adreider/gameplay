import React from 'react';

import {
  View
} from 'react-native';

import { styles } from './styles';

type Props = {
  isCenterd?: boolean;
}

export function ListDivider({ isCenterd }: Props){
  return (
    <View 
      style={[styles.container,
      isCenterd ? {
        marginVertical: 12,
      } : {
        marginTop: 2,
        marginBottom: 31
      }
      ]}
    />
  );
}