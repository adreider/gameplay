import React, { useState } from 'react';
import {
  View
} from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

export function Home(){
  const [category, setCategory] = useState('');

  function HandleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
       
      <View>
        <CategorySelect 
          categorySelected={category}
          setCategory={HandleCategorySelect}
        />
      </View>
    </View>
  );
}