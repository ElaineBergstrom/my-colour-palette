import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import ArrowLeft from '../../../assets/icons/ArrowLeft.svg';
import {COLOR_WHITE} from '../../../theme/colors';

interface Props {
  onGoBack: () => void;
}

const BackButton: React.FC<Props> = ({onGoBack}) => {
  return (
    <Pressable style={styles.buttonContainer} onPress={onGoBack}>
      <ArrowLeft height={50} width={50} fill={COLOR_WHITE} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
});

export default BackButton;
