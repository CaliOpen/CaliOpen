import './modules/setup.ts';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Settings } from './screens/Settings';
import { theme } from './modules/ui';
import { RootStackParamList } from './modules/routes';
import { SCREEN_HOME, SCREEN_SETTINGS } from './screens/consts';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={SCREEN_HOME}
          screenOptions={{
            headerMode: 'screen',
            title: 'Caliopen',
            headerTintColor: theme.colors.onPrimary,
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
          }}
        >
          <Stack.Screen name={SCREEN_HOME} component={Home} />
          <Stack.Screen name={SCREEN_SETTINGS} component={Settings} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}
