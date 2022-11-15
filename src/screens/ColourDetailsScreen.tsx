import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackgroundShape from '../components/Background/BackgroundShape';
import {COLOR_BACKGROUND_SHAPES, COLOR_WHITE} from '../theme/colors';
import {vh} from '../utils/StyleUtils';

const ColourDetailScreen = () => {
  //Note: Implement my own Back Button instead of stacks default one.
  return (
    <View style={styles.backgroundContainer}>
      <View>
        {/* <View style={styles.icon}>
          <BackButton onPress={onGoBack} />
        </View> */}
        <View style={styles.shape} />
        <BackgroundShape />
      </View>
      <View>
        <Text style={styles.text}>"Name of Color"</Text>
        <Text style={styles.text}>"Hex#"</Text>
      </View>
      <View style={styles.flipShape}>
        <BackgroundShape />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: COLOR_WHITE,
    height: vh(100),
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
  },
  shape: {
    height: 300,
    backgroundColor: COLOR_BACKGROUND_SHAPES,
    zIndex: 5,
  },
  flipShape: {
    transform: [
      {
        scaleY: -1,
      },
      {
        scaleX: -1,
      },
    ],
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    zIndex: 6,
  },
});

export default ColourDetailScreen;
