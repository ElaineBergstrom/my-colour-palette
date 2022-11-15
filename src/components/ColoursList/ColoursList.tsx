import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../Search/SearchBar';
import ColourBlock from './ColourBlock';

interface Props {
  sortState: boolean;
  favoriteState: boolean;
  onPressFavorite: () => void;
  onSortList: () => void;
  onColourPress: () => void;
  onChangeText: (text: string) => void;
}

const ColoursList: React.FC<Props> = ({
  sortState,
  onSortList,
  onColourPress,
  onPressFavorite,
  favoriteState,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <SearchBar sortState={sortState} onPressSort={onSortList} onChangeText={onChangeText} />
      <ColourBlock onPressFavorite={onPressFavorite} favoriteState={favoriteState} onPress={onColourPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
});

export default ColoursList;
