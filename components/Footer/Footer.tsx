import React from 'react';
import {View} from 'react-native';
import {styles} from './Footer.styles';
import BackgroundShape from '../Background/BackgroundShape';
import ShowListButton from '../Buttons/ShowListButton';

interface Props {
  showList: boolean;
  onPressShowList: () => void;
}

const Footer: React.FC<Props> = ({showList, onPressShowList}) => {
  return (
    <View style={styles.footerContainer}>
      <ShowListButton showList={showList} onPressShowList={onPressShowList} />
      <View style={styles.flipShape}>
        <BackgroundShape />
      </View>
    </View>
  );
};

export default Footer;
