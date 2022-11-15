import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLOR_GREYBLUE, COLOR_WHITE} from '../../../theme/colors';
import Search from '../../../assets/icons/Search.svg';

// interface Props {
//   onChange: () => void;
// }

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Search height={20} width={20} fill={COLOR_GREYBLUE} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor={COLOR_GREYBLUE}
        // onChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 220,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_GREYBLUE,
    borderWidth: 1.5,
    borderRadius: 25,
    overflow: 'hidden',
  },
  icon: {
    margin: 6,
  },
  input: {
    color: COLOR_GREYBLUE,
    height: '100%',
    margin: 0,
    padding: 0,
  },
});

export default SearchInput;
