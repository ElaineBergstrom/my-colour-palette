import React from 'react';
import {View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import {COLOR_BLACK, COLOR_WHITE} from '../../theme/colors';
import FavoriteButton from '../Buttons/FavoriteButton/FavoriteButton'

interface Props {
  favoriteState: boolean;
  onPressFavorite: () => void;
  onPress: () => void;
}

//Note: Look into better way to place button for favoriting
const ColourBlock: React.FC<Props> = ({onPress, favoriteState, onPressFavorite}) => {
  const text = '#d53032';
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.titleText}>{text}</Text>
        <View style={{backgroundColor: '#d53032', height: '100%', width: '100%'}} />
      </TouchableOpacity>
      <View style={styles.favorite}>
        <FavoriteButton favoriteState={favoriteState} onPressFavorite={onPressFavorite} />
      </View>
    </>
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
  favorite: {
    padding: 10,
    position: 'absolute',
    right: 0,
    top: 150,
    zIndex: 6,
  },
});

export default ColourBlock;
