import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './src/theme/theme.ts';
import Navigation from './src/navigation/Navigation.tsx';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
