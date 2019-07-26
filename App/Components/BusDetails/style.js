import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#ffffff',
  },
  pickerBox: {
    marginTop:20,
    marginLeft:12,
    width:325,
    borderWidth: 1,
    borderRadius:6,
    borderColor:'#65499c',
  },
  headerContainer: {
    flex:0,
  },
  bodyContainer: {
    marginTop:20,
    flex: 1,
  },
  headerText: {
    marginTop:35,
    fontSize: 40,
    fontWeight: '300',
    fontFamily:'sans-serif',
    textAlign: 'center',
    color: '#65499c',
  },
  venueText: {
    marginLeft:10,
    marginTop:10,
    marginBottom:-12,
    fontWeight:'500',
    color:'#2979ff',
  },
  numberContainer: {
    flexDirection:'row',
    marginTop:20,
    marginLeft:12,
  },
  typeText: {
    marginTop:10,
    color: '#000000',
  },
  number1: {
    marginLeft:90,
  },
  number2: {
    marginLeft:79,
  },
  number3: {
      marginLeft:38,
    },
  fareContainer: {
    flexDirection:'row',
    marginTop:20,
  },
  fareText: {
    marginTop:2,
    fontSize:24,
  },
  fare: {
    fontSize:28,
    color:'#d50000'
  },
  payButton: {
    backgroundColor: '#5cb85c',
    height:50,
    width:250,
    marginTop:20,
    marginLeft:50,
    borderRadius:25,
  },
  payText: {
    color:'#ffffff',
    marginTop:7,
    alignSelf:'center',
    fontSize:24,
  },
});
