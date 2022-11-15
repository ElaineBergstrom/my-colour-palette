import React from 'react';
import {StyleSheet, View} from 'react-native';
import SortButton from '../Buttons/SortButton/SortButton';
import SearchInput from './SearchInput/SearchInput';

interface Props {
  sortState: boolean;
  onPressSort: () => void;
}

const SearchBar: React.FC<Props> = ({sortState, onPressSort}) => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <SortButton sortState={sortState} onPressSort={onPressSort} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 35,
    marginBottom: 30,
  },
});

export default SearchBar;
