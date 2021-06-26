import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import SpaceCraft from "./screens/SpaceCrafts";
import DailyPic from "./screens/DailyPic";
import StarMap from "./screens/StarMap";

const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Space Craft" component={SpaceCraft} />
        <Stack.Screen name="Star Map" component={StarMap} />
        <Stack.Screen name="Daily Picture" component={DailyPic} />
      </Stack.Navigator>
   </NavigationContainer>
    
  );
}

export default App;