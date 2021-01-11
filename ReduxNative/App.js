// import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import React from 'react';
import 'react-native-gesture-handler';
import MainContainer from './components/MainContainer';
import usersContainer from './components/usersContainer'
import secondContainer from './components/secondContainer'
//import SignUp from './components/SignUp'
import {Provider} from 'react-redux'
import store from './Redux/store'
import SignUp from './screens/SignUp'
import AniView from './components/AniView'


const Stack = createStackNavigator();
const App = () => {
  
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
      
          name="MainContainer"
          component={MainContainer}
          options={{headerShown: false}}
         
        />
 <Stack.Screen
      
      name="usersContainer"
      component={usersContainer}
      options={{headerShown: true}}
     
    />
    <Stack.Screen
      
      name="secondContainer"
      component={secondContainer}
      options={{headerShown: false}}
     
    />
    <Stack.Screen
      
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
     
    />
     <Stack.Screen
      
      name="AniView"
      component={AniView}
      options={{headerShown: false}}
     
    />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
