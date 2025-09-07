import React, {useCallback, useState} from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';
import { KollavarshamDate } from 'kollavarsham';
import { isDayOfSameMonth } from '../../Models/CalendarFunctions';

interface DateSingleCellViewProps {
  mlDate: KollavarshamDate;
  currentMonth: Date;
}

const DateSingleCellView: React.FC<DateSingleCellViewProps> = ({ mlDate, currentMonth }) => {
  const isCurrentMonth = isDayOfSameMonth(mlDate.gregorianDate, currentMonth);
  const [isCellClicked, setIsCellClicked] = useState(false)
  const handlePress = useCallback(() => {
    setIsCellClicked((isClicked) => !isClicked);
    console.log(isCellClicked, mlDate.year);
  }, [isCellClicked, mlDate.year]);
  return (
    <View style={[styles.dayCell, 
                  !isCellClicked ? styles.dayCellNormal : styles.dayCellZoom, 
                  !isCurrentMonth && styles.outsideMonth]}>
      <Text style={styles.MalayalamStarText} numberOfLines={1}> {mlDate.mlNaksatraName} </Text>
      <Text style={styles.enDateText} onPress={handlePress}> {mlDate.gregorianDate.getDate()} </Text>
      <View style={styles.mlTextRow}>
      <Text style={styles.MalayalamMonthText}> {mlDate.mlMasaName} </Text>
      <Text style={styles.mlDateText}>{mlDate.date}</Text>
      </View>
      </View>
  );
}
export default DateSingleCellView;