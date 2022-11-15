import React from 'react';
import {View, StyleSheet} from 'react-native';
import {COLOR_BACKGROUND_SHAPES, COLOR_WHITE} from '../../theme/colors';
import {vw} from '../../utils/StyleUtils';

//NOTE: Set up color to be passsed as a prop.
const BackgroundShape = () => {
  return (
    <View>
      <View style={styles.invertedBorder}>
        <View style={styles.invertedCornerMask} />
        <View style={styles.invertedCorner} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  invertedBorder: {
    position: 'relative',
    height: 125,
    width: vw(100),
    backgroundColor: COLOR_BACKGROUND_SHAPES,
    borderBottomEndRadius: 45,
    zIndex: -1,
  },
  invertedCornerMask: {
    position: 'absolute',
    borderTopLeftRadius: 45,
    backgroundColor: COLOR_WHITE,
    bottom: -50,
    height: 50,
    width: 45,
    zIndex: 1,
  },
  invertedCorner: {
    position: 'absolute',
    backgroundColor: COLOR_BACKGROUND_SHAPES,
    width: 45,
    height: 50,
    bottom: -45,
  },
});
export default BackgroundShape;
