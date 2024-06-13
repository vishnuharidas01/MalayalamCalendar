import React from "react";
import styles from './styles';
import DateSingleCellView from "../DateSingleViewCell/DateSingleCellView";
import { Text, View } from "react-native";
import { eachDayOfMonthOfInterval, generateCalendar } from '../../Models/CalendarFunctions';
import { Kollavarsham, KollavarshamDate } from 'kollavarsham';
import WeekDayNamesView from "../DateSingleViewCell/WeekDayNameView";
import { getCurrentLocation } from "../../Models/LocationMethods";



// Define the prop types for the component
interface WeekRowViewProps {
  date: Date;
  latitude: number;
  longitude: number;
}

const WeekRowView: React.FC<WeekRowViewProps> =({date, latitude, longitude})=> {
    const days = eachDayOfMonthOfInterval(date)
    const calendar = generateCalendar(date)

    const options = React.useMemo(() => ({
      system: 'SuryaSiddhanta',
      latitude: latitude,
      longitude: longitude
    }), [latitude, longitude]);
    
    const kollavarsham = new Kollavarsham(options);
    const today = kollavarsham.fromGregorianDate(new Date)
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthTitle = kollavarsham.fromGregorianDate(date)
    return (
      
      <View style={styles.monthContainer}>
          <View style={{width: "100%", alignItems: "center"}}><Text style={{fontSize: 20,
      fontWeight: 'bold'}}>{monthTitle.mlMasaName} {today.year}</Text></View>
       
        {daysOfWeek.map((day, index) => (
          <WeekDayNamesView key={index} dayName={day} />
        ))
        }
{calendar.map((week: Date[]) => (
  week.map((day) => (
    <DateSingleCellView key={day.getDate()} mlDate={kollavarsham.fromGregorianDate(day)} currentMonth={date}/>
  
   ))
)
)}
      </View>
    );
  };

  export default WeekRowView;