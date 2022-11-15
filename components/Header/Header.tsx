import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Header.styles';
import BackgroundShape from '../Background/BackgroundShape';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>My Palette</Text>
      <BackgroundShape />
    </View>
  );
};

export default Header;
