import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './redux/configureStore';
import ColourDetailScreen from './screens/ColourDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import {vh} from './utils/StyleUtils';

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
