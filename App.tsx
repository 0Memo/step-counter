import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontsLoaded from './src/components/fontLoaded';
import Value from './src/components/Value';
import RingProgress from './src/components/RingProgress';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
// import AppleHealthKit from 'react-native-health';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      // Load fonts
      await Font.loadAsync({
        'Kalam-Bold': require('./assets/fonts/Kalam-Bold.ttf'),
        // Add other fonts as needed
      });

      // Hide splash screen once fonts are loaded
      setFontsLoaded(true);
      SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);
  
  if (!FontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.mainTitle}>
        <Text style={styles.boldText}>¡Cuenta tus pasos!</Text>
      </View> */}

      <RingProgress progress={ 0.7 } />

      <View style={styles.values}>
        <Value label='Pasos' value='1219' />
        <Value label='Distancia' value='0,7km' />
        <Value label='Vuelos subidos' value='0,7km' />
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a070c',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginVertical: 50
  },
  mainTitle: {
    position: "absolute",
    top: 130,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    color: '#f5f5f5'
    
  },
  boldText: {
    fontFamily: 'Kalam-Bold',
    fontSize: 32,
    letterSpacing: 1.5,
    color: '#f5f5f5'
  }
});
