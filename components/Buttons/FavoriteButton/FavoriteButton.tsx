import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import LineHeart from '../../../assets/icons/EmptyHeart.svg';
import FullHeart from '../../../assets/icons/FillHeart.svg';
import {COLOR_WHITE} from '../../../theme/colors';

interface Props {
  favoriteState: boolean;
  onPressFavorite: () => void;
}

const FavoriteButton: React.FC<Props> = ({favoriteState, onPressFavorite}) => {
  if (!favoriteState) {
    return (
      <Pressable style={styles.buttonContainer} onPress={onPressFavorite}>
        <LineHeart height={20} width={20} fill={COLOR_WHITE} />
      </Pressable>
    );
  } else {
    return (
      <Pressable style={styles.buttonContainer} onPress={onPressFavorite}>
        <FullHeart height={20} width={20} fill={COLOR_WHITE} />
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    zIndex: 6,
  },
});

export default FavoriteButton;
