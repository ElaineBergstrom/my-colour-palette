import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {COLOR_BLACK, COLOR_WHITE} from '../../theme/colors';

interface Props {
  onPress: () => void;
}

const ColourBlock: React.FC<Props> = ({onPress}) => {
  const text = 'HeX WORLD';
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.titleText}>{text}</Text>
      <View style={{backgroundColor: 'blue', height: '100%', width: '100%'}} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    borderRadius: 18,
    borderColor: COLOR_BLACK,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 2,
    marginLeft: 12,
    textAlign: 'left',
    fontSize: 18,
    color: COLOR_WHITE,
    zIndex: 5,
  },
});

export default ColourBlock;
