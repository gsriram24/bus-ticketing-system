import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    flex:1,
  },

  headerContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center' ,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
  },
  headerText: {
    alignSelf:'center',
    fontSize: 20,
    fontFamily:'sans-serif',
    fontWeight: '100',
    textAlign: 'center',
    color: '#5887f9',
  },
  QRContainer: {
    flex: 8,
  },
});
