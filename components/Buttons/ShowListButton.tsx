import React from 'react';
import {Pressable} from 'react-native';
import ClosedEye from '../../assets/icons/EyeClosed.svg';
import OpenedEye from '../../assets/icons/EyeOpened.svg';
import {COLOR_BLACK} from '../../theme/colors';
import {styles} from './ShowListButton.styles';

interface Props {
  showList: boolean;
  onPressShowList: () => void;
}

const ShowListButton: React.FC<Props> = ({showList, onPressShowList}) => {
  if (showList) {
    return (
      <Pressable style={styles.buttonContainer} onPress={onPressShowList}>
        {<ClosedEye height={30} width={30} fill={COLOR_BLACK} style={styles.icon} />}
      </Pressable>
    );
  } else {
    return (
      <Pressable style={styles.buttonContainer} onPress={onPressShowList}>
        {<OpenedEye height={30} width={30} fill={COLOR_BLACK} style={styles.icon} />}
      </Pressable>
    );
  }
};

export default ShowListButton;
