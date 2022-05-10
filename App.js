import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppRegistry } from 'react-native';
import DrawerNavigation from './navigation/DrawerNavigation';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';






export function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);



export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);