import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../theme/colors';
import {vh, vw} from '../utils/StyleUtils';

export const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: COLOR_WHITE,
    height: vh(100),
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colourList: {
    marginTop: 20,
    height: vh(60),
    width: vw(75),
    justifyContent: 'center',
    zIndex: 5,
  },
});
