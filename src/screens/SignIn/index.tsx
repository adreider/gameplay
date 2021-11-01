import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles } from './styles';
import IllustrationImg from "../../assets/illustration.png";

export function SignIn() {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image 
      source={IllustrationImg} 
      style={styles.image}
      resizeMode="stretch"
      />

      <View style={styles.content }>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente {`\n`}
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
      </View>
     
    </View>
  )
}

