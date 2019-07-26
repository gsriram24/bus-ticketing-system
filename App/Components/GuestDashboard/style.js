import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#ffffff',
  },

  headerContainer: {
    flex:6,
    alignItems:'center',
    justifyContent:'center' ,
    backgroundColor: 'transparent',
  },
  headerText: {
    alignSelf:'center',
    fontSize: 24,
    fontWeight: '300',
    fontFamily:'sans-serif',
    textAlign: 'center',
    color: '#65499c',
  },
  QRContainer: {
    alignItems: 'flex-start',
    flex:9,
  },
gradient1: {
  width:40,
  height: 40,
  borderRadius: 25,
  alignItems:'center',
  justifyContent:'center',
  backgroundColor: '#D44638'
},
gradient2: {
width:40,
height: 40,
borderRadius: 25,
alignItems:'center',
justifyContent:'center',
backgroundColor: '#25D366'
},
gradient3: {
width:40,
height: 40,
borderRadius: 25,
alignItems:'center',
justifyContent:'center',
backgroundColor: '#0078FF'

},
gradient4: {
width:40,
height: 40,
borderRadius: 25,
alignItems:'center',
justifyContent:'center',
backgroundColor: '#0078FF'
},
button: {
  width:40,
  marginLeft:17,
  height:40,
  borderRadius:25,
  backgroundColor:'#ffffff',
  alignItems:'center',
  justifyContent:'center',
},
});
