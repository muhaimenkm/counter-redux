import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aabbcc'
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#aabbcc'
  },
  btn:{
    flex:1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
    color: 'white',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 50
  },
  result:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default styles;
