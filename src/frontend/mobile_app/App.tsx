import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Settings } from './screens/Settings';
import { theme } from './modules/ui';
import { RootStackParamList } from './modules/routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerMode: 'screen',
            title: 'Caliopen',
            headerTintColor: theme.colors.onPrimary,
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
          }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="settings" component={Settings} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}
