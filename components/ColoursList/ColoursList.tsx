import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from '../Search/SearchBar';
import ColourBlock from './ColourBlock';

interface Props {
  sortState: boolean;
  onSortList: () => void;
  onColourPress: () => void;
}

const ColoursList: React.FC<Props> = ({sortState, onSortList, onColourPress}) => {
  return (
    <View style={styles.container}>
      <SearchBar sortState={sortState} onPressSort={onSortList} />
      <ColourBlock onPress={onColourPress} />
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
