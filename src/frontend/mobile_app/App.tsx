import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';

const Blue600 = '#0F98C6';
const Blue900 = '#005680';

const Green300 = '#13BA95';
const Green600 = '#008D61';

const Gray600 = '#444444';
const Gray200 = '#EFEFEF';

const Error = '#4BBC07';
const Surface = '#BBE8FD';
const Background = '#1D1D1D';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Blue600,
    onPrimary: Gray200,
    secondary: Green300,
    onSecondary: Gray200,
  },
};

const Stack = createNativeStackNavigator();

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
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
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
