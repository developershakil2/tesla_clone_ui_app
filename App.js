import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CardList from './assets/components/cardList/cardList';
import Header from './assets/components/header';

export default function App() {
  return (
    <View style={styles.container}>

      <Header />

      <CardList />

      <StatusBar style="auto" />
    </View>
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
