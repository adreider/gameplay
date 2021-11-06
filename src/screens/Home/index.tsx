import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Appointment } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';

import { styles } from './styles';

export function Home(){
  const [category, setCategory] = useState('');

  const navigation = useNavigation()

  const appointments = [ 
    { 
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '05/10 às 09:00',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    { 
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '05/10 às 09:00',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    
  ]

  function HandleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
       
    
        <CategorySelect 
          categorySelected={category}
          setCategory={HandleCategorySelect}
        />
   

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 7"
        />

        <FlatList 
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment 
              data={item}
              onPress={handleAppointmentDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}