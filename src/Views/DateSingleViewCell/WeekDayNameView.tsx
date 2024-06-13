import React from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles';

const WeekDayNamesView: React.FC<({dayName: string})> = ({dayName}) => {
    return (
      <View style={[styles.dayCell, styles.dayCellNormal]}>
        <Text style={styles.dayNameCell}>{dayName}</Text>
    </View>
    );
  }

  export default WeekDayNamesView;