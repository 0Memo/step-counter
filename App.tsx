import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Kalam-Regular': require('./assets/fonts/Kalam-Regular.ttf'),
    'Kalam-Bold': require('./assets/fonts/Kalam-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Kalam-Regular',
    fontSize: 24,
  },
  boldText: {
    fontFamily: 'Kalam-Bold',
    fontSize: 24
  },
});
