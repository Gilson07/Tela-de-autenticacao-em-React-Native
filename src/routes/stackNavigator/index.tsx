import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import SignIn from '@/screens/authentication/signIn';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
  );
}

export default App;