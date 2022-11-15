import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import ColourDetailScreen from './src/screens/ColourDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/store/configureStore';
import {vh} from './src/utils/StyleUtils';

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.body}>
          <RootStack.Navigator initialRouteName="Home">
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="ColourDetails" component={ColourDetailScreen} />
          </RootStack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 0,
    padding: 0,
    height: vh(100),
    boxSizing: 'border-box',
  },
});

export default App;
