import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  enDateText: {
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black'
  },
  dayCell: {
    // aspectRatio: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    flexDirection: 'column',
  },
  dayCellNormal: {
    width: '14.28%', // 7 days in a week
  },
  dayCellZoom: {
    width: '20%',
    aspectRatio: 1, 
  },
  MalayalamStarText: {
    fontSize: 11,
    marginVertical: 4,
  },
  MalayalamMonthText: {
    flex: 1,
    fontSize: 11,
  },
  mlTextRow: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  mlDateText: {
    fontSize: 11,
  },
  outsideMonth: {
    backgroundColor: '#f5f5f5',
  },
  dayNameCell:{
    textAlign: 'center',
    margin: 5,
  },
})
export default styles;