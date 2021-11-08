import React from 'react';

import {
  View,
  FlatList
} from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props){
  const guilds = [
    { 
      id: '1',
      name: 'Legendários',
      icon: 'img.pgn',
      owner: true
    },
    { 
      id: '2',
      name: 'Valorosos',
      icon: 'img.pgn',
      owner: true
    },
    { 
      id: '3',
      name: 'Legendários',
      icon: 'img.pgn',
      owner: true
    },
    { 
      id: '4',
      name: 'Valorosos',
      icon: 'img.pgn',
      owner: true
    },
    { 
      id: '5',
      name: 'Legendários',
      icon: 'img.pgn',
      owner: true
    },
    { 
      id: '6',
      name: 'Valorosos',
      icon: 'img.pgn',
      owner: true
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList 
       data={guilds}
       keyExtractor={item => item.id}
       renderItem={({ item }) => (
        <Guild 
          onPress={() => handleGuildSelect(item)}
          data={item}
        />
       )}
       showsVerticalScrollIndicator={false}
       ItemSeparatorComponent={() => <ListDivider isCenterd />}
       ListHeaderComponent={() => <ListDivider isCenterd />}
       contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
       style={styles.guilds}
      />
    </View>
  );
}