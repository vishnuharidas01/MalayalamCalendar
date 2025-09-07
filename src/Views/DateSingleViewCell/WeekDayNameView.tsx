import React from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';

interface WeekDayNameProps {
  dayName: string
}
const WeekDayNamesView: React.FC<WeekDayNameProps> = ({dayName}) => {
    return (
      <View style={[styles.dayCell, styles.dayCellNormal]}>
        <Text style={styles.dayNameCell}>{dayName}</Text>
    </View>
    );
  }

  export default React.memo (WeekDayNamesView);