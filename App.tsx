/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, createContext, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import WeekRowView from './src/Views/WeekRowView/index';
import { Kollavarsham } from 'kollavarsham';
import { 
  addMonthsToDate, 
  formattedDate, 
  substractMonthsFromDate,
 } from './src/Models/CalendarFunctions'
import {
getCurrentLocation
} from './src/Models/LocationMethods'
/**for storing settings */
interface CurrentSettingContextType {
  system: 'SuryaSiddhanta',
    latitude: number,
    longitude: number
}
const CurrentSettingContext = createContext<CurrentSettingContextType | null>(null);

function App(): React.JSX.Element {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentSetting, setCurrentSetting] = useState<CurrentSettingContextType>({
    system: 'SuryaSiddhanta',
    latitude: 10,
    longitude: 76.2
  });

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    // This code runs when the component mounts
    setLoaded(true);
    let location =  getCurrentLocation().then(location => {
      if (location != undefined) {
     currentSetting.latitude = location.latitude;
     currentSetting.longitude = location.longitude;
 }
 })
    // Optionally, you can return a cleanup function to run when the component unmounts
    return () => {
      // Cleanup logic
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  /** function to change months in calendar view */
  const goToNextMonth = () => {
    setCurrentMonth(addMonthsToDate(currentMonth, 1));
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(substractMonthsFromDate(currentMonth, 1));
  };

  return (
    <CurrentSettingContext.Provider value={currentSetting}>
    <SafeAreaView style={{flex: 1}}>
       <TouchableOpacity onPress={goToPreviousMonth}>
        <Text>Previous Month</Text>
      </TouchableOpacity>
       <Text style= {styles.formattedDate}>{formattedDate(currentMonth)}</Text> 
      <TouchableOpacity onPress={goToNextMonth}>
        <Text>Next Month</Text>
      </TouchableOpacity>
      <ScrollView>
      <WeekRowView date={currentMonth} latitude={currentSetting.latitude} longitude={currentSetting.longitude}/>
      </ScrollView>
     
    </SafeAreaView>
    </CurrentSettingContext.Provider>
  );
}

const styles = StyleSheet.create({
    formattedDate: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold'
    }
});

export default App;
function onComponentLoad() {
  throw new Error('Function not implemented.');
}

