import React from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';

export function ButtonIcon(){
  return (
    <TouchableOpacity style={styles.container}>
     <View style={styles.iconWrapper}>
      <Image source={DiscordImg} style={styles.icon} />
     </View>

    <Text style={styles.title}>
      Entrar com o Discord
    </Text>
    </TouchableOpacity>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 