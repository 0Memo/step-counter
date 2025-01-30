import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FontsLoaded from './src/components/fontLoaded';
import Value from './src/components/Value';
import RingProgress from './src/components/RingProgress';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
// import React from 'react';
import useHealthData from './src/hooks/useHealthData';
import { AntDesign } from '@expo/vector-icons';
// import AppleHealthKit from 'react-native-health';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const STEPS_GOAL = 10_000;

export default function App() {
  const [date, setDate] = useState(new Date());
  const { steps, flights, distance } = useHealthData(date);

  const changeDate = (numDays: number) => {
    const currentDate = new Date(date); // Create a copy of the current date
    // Update the date by adding/subtracting the number of days
    currentDate.setDate(currentDate.getDate() + numDays);

    setDate(currentDate); // Update the state variable
  };

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
      <View style={styles.datePicker}>
        <AntDesign
          onPress={() => changeDate(-1)}
          name="left"
          size={20}
          color="#C3FF53"
        />
        <Text style={styles.date}>{date.toDateString()}</Text>

        <AntDesign
          onPress={() => changeDate(1)}
          name="right"
          size={20}
          color="#C3FF53"
        />
      </View>

      <RingProgress
        radius={150}
        strokeWidth={50}
        progress={steps / STEPS_GOAL}
      />

      <View style={styles.values}>
        <Value label="Steps" value={steps.toString()} />
        <Value label="Distance" value={`${(distance / 1000).toFixed(2)} km`} />
        <Value label="Flights Climbed" value={flights.toString()} />
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
  },
  datePicker: {
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  date: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    marginHorizontal: 20,
  },
});
