import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../theme/colors';

export const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 45,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLOR_WHITE,
    elevation: 5,
    zIndex: 1,
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },
  icon: {
    zIndex: 3,
    transform: [
      {
        rotate: '315deg',
      },
    ],
  },
});
