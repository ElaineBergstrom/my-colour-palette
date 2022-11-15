import {StyleSheet} from 'react-native';
import { vw } from '../../utils/StyleUtils';

export const styles = StyleSheet.create({
  footerContainer: {
    position: 'relative',
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
});
