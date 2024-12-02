import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Stat from './labelValue';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Kalam-Regular': require('./assets/fonts/Kalam-Regular.ttf'),
    'Kalam-Bold': require('./assets/fonts/Kalam-Bold.ttf'),
    'Kalam-Light': require('./assets/fonts/Kalam-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainTitle}>
        <Text style={styles.boldText}>¡Cuenta tus pasos!</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Stat label='Pasos' value='1219' />
        <Stat label='Distancia' value='0,7km' />
      </View>

      <Stat label='Vuelos subidos' value='0,7km' />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16101b',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },
  mainTitle: {
    position: "absolute",
    top: 220,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center"
    
  },
  title: {
    fontFamily: 'Kalam-Light',
    fontSize: 22,
    color: '#f5f5f5'
  },
  text: {
    fontFamily: 'Kalam-Regular',
    fontSize: 30,
    color: '#f5f5f5'
  },
  boldText: {
    fontFamily: 'Kalam-Bold',
    fontSize: 32,
    letterSpacing: 1.5,
    color: '#f5f5f5'
  },
  marginTop: {
    marginTop: 20
  }
});
