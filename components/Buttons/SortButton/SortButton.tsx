import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {COLOR_GREYBLUE} from '../../../theme/colors';
import SortAscending from '../../../assets/icons/SortAscending.svg';
import SortDescending from '../../../assets/icons/SortDescending.svg';

interface Props {
  sortState: boolean;
  onPressSort: () => void;
}

const SortButton: React.FC<Props> = ({sortState, onPressSort}) => {
  if (sortState) {
    return (
      <Pressable style={styles.buttonContainer} onPress={onPressSort}>
        <SortAscending height={25} width={25} fill={COLOR_GREYBLUE} />
      </Pressable>
    );
  } else {
    return (
      <Pressable style={styles.buttonContainer} onPress={onPressSort}>
        {<SortDescending height={25} width={25} fill={COLOR_GREYBLUE} />}
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    padding: 5,
    marginLeft: 5,
  },
});

export default SortButton;
