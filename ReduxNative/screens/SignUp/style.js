
import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      backgroundColor: 'rgb(205, 224, 236)',
      

    },
    scroll: {
      flex: 1,
    },
    header: {
      alignItems: 'center',
      marginTop: 20,
    },
    headerText1: {
      fontSize: 36,
      fontFamily: 'Boogaloo',
    },
    headerText2: {
      fontSize: 15,
      marginVertical: 5,
      textAlign: 'center',
    },
    loginView: {
      justifyContent: 'center',
      alignContent: 'center',
    },
    loginTouchable: {
      flexDirection: 'row',
      borderColor: 'black',
      borderWidth: 2,
      backgroundColor: 'white',
      marginHorizontal: 16,
      height: 58,
      alignItems: 'center',
      // justifyContent: 'space-around',
      borderRadius: 8,
      marginTop: 16,
    },
    touchableBox: {
      flexDirection: 'row',
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 2,
      marginHorizontal: 16,
      height: 58,
      alignItems: 'center',
  
      borderRadius: 8,
      marginTop: 8,
    },
    mainlineView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
  
    lineView1: {
      height: 0,
      borderWidth: 0.3,
      backgroundColor: '#1E3C60',
      width: 100,
      marginRight: 16,
    },
    lineView2: {
      height: 0,
      borderWidth: 0.3,
      backgroundColor: '#1E3C60',
      width: 100,
      marginLeft: 16,
    },
    catView: {
      flexDirection: 'row',
      marginHorizontal: 21,
      marginVertical: 10,
      justifyContent: 'flex-start',
    }, // cat stands for Checkbox,  agree text and tremsCondition
    touchableCheckBox: {
      width: 15,
      height: 15,
      borderColor: 'black',
      borderWidth: 1,
      padding: 2,
    },
    modalView: {
      backgroundColor: 'white',
      marginBottom: 30,
      height: 470,
      borderRadius: 20,
      marginHorizontal: 16,
    },
    modalScroll: {
      borderWidth: 1,
      borderColor: '#F2F1FA',
      marginHorizontal: 12,
      backgroundColor: '#F2F1FA',
      borderRadius: 8,
      marginVertical: 18,
    },
    modalTextHeading: {
      fontSize: 23,
      lineHeight: 24,
      letterSpacing: 0.05,
      color: '#1E3C60',
      marginHorizontal: 10,
      fontFamily: 'NunitoSans-Bold',
      marginVertical: 16,
    },
    modalText: {
      lineHeight: 24,
      fontSize: 16,
      letterSpacing: 0.05,
      color: '#1E3C60',
      marginHorizontal: 12,
      marginVertical: 13,
      fontFamily: 'NunitoSans-Regular',
    },
  
    modalOkView: {
      marginVertical: 20,
    },
    modalTouchableOk: {
      justifyContent: 'center',
      backgroundColor: '#94E864',
      alignItems: 'center',
      borderRadius: 20,
      height: 30,
      marginHorizontal: 10,
    },
    goView: {
      backgroundColor: 'rgb(205, 224, 236)',
      borderColor: 'rgb(205, 224, 236)',
      borderWidth: 1,
      alignItems: 'center',
      height: 80,
    },
    inputCointainer: {
      textAlign: 'center',
      borderColor: 'black',
      borderWidth: 2,
      marginTop: 16,
      height: 58,
      marginHorizontal: 16,
      borderRadius: 10,
    },
    goTouchable: {
      backgroundColor: '#94E864',
      width: '90%',
      alignItems: 'center',
      height: 40,
      justifyContent: 'center',
      borderRadius: 20,
    },
    input2Cointainer: {
      textAlign: 'center',
      borderColor: 'black',
      borderWidth: 2,
      marginTop: 16,
      height: 58,
      width: 140,
      borderRadius: 16,
    },
  });