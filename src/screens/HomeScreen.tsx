import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import ColoursList from '../components/ColoursList/ColoursList';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import {styles} from './HomeScreen.styles';

const HomeScreen = () => {
  const [showList, setShowList] = useState(false);
  const [sortList, setSortList] = useState(false);
  const [favorite, setFavorite] = useState(false);
  // const [colourList, setColourList] = useState([]);

  const navigation = useNavigation();

  // useEffect(() => {
  //   fetchColourList();
  // }, [])

  const onPressShowList = () => {
    setShowList(!showList);
  };

  const handleSortList = () => {
    setSortList(!sortList);
  };

  const handleColourBlockPress = () => {
    navigation.navigate('ColourDetails');
  };

  const onPressFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <View style={styles.backgroundContainer}>
      <Header />
      <View style={styles.colourList}>
        {!showList && (
          <ColoursList
            favoriteState={favorite}
            onPressFavorite={onPressFavorite}
            sortState={sortList}
            onSortList={handleSortList}
            onColourPress={handleColourBlockPress}
          />
        )}
      </View>
      <Footer showList={showList} onPressShowList={onPressShowList} />
    </View>
  );
};

export default HomeScreen;
