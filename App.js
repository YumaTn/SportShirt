import { StyleSheet } from 'react-native';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import SignUp from './components/Login/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        style={styles.container}
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="login"
          component={Login} /> */}
        <Stack.Screen
          name="Navigation"
          component={Navigation} />
        {/* <Stack.Screen
          name="SignUp"
          component={SignUp} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
