import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const secondContainer = () => {
  return (
    <View style={styles.mainView}>
       <ScrollView>
      <View style={styles.header}>
        <Text style={{fontSize: 36,fontFamily:"Boogaloo"}}>GameApart</Text>
        <Text style={{fontSize: 15, marginVertical: 5,textAlign:"center"}}>
          Sign in or sign up with your social account
        </Text>
      </View>
     
      <View style={{flex: 0.4,justifyContent:"center",alignContent:"center",}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderColor: 'black',
            borderWidth: 2,
            backgroundColor:"white",
            marginHorizontal: 16,
            height: 58,
            alignItems: 'center',
           // justifyContent: 'space-around',
            borderRadius: 8,
            marginTop: 16,
            
          }}>
          <Image style={{marginHorizontal:20}}source={require('../assets/Images/facebook.png')} />
          <Text style={{fontSize: 20,marginHorizontal:5}}>Sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableBox}>
          <Image  style={{marginHorizontal:20}}source={require('../assets/Images/apple1.png')} />
          <Text style={{fontSize: 20,marginHorizontal:5}}>Sign in with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableBox}>
          <Image style={{marginHorizontal:20}} source={require('../assets/Images/google.png')} />
          <Text style={{fontSize: 20,marginHorizontal:5}}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
     
      <View
        style={{
          flex: 0.2,
          flexDirection: 'row',
        justifyContent:"center",
          alignItems: 'center',
          marginTop: 20,
        }}>
        <View style={{height:0,borderWidth:0.3,backgroundColor:'#1E3C60',width:100,marginRight:16}}></View>
        <Text style={{fontSize:16}}>OR</Text>
       
        <View style={{height:0,borderWidth:0.3,backgroundColor:'#1E3C60',width:100,marginLeft:16}}></View>
      </View>
      <View style={{
        flex: 0.4,}}>
        <TextInput
          style={styles.textCointainer}
          placeholder="Enter Your Email"
        />
        <TextInput
          style={styles.textCointainer}
          placeholder="Enter Your Password"
        />
        <Text style={{alignSelf: 'center'}}>
          Need an account? <Text style={{color: 'red'}}>Sign up</Text>
        </Text>
     
      </View>
      </ScrollView>
      <View style={{}}>
     <View style={{backgroundColor:"red",borderWidth:1,borderRadius:10,}}>
<Text style={{fontSize:50}}>hello</Text>

     </View>


   </View>
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  mainView: {
    // flex: 1,
    backgroundColor: 'rgb(205, 224, 236)',
  },
  scroll: {
    flex: 1,
  },
  header: {
    // flex: 0.2,
    alignItems: 'center',
    marginTop: 40,
  },
  touchableBox: {
    flexDirection: 'row',
    borderColor: 'black',
    backgroundColor:"white",
    borderWidth: 2,
    marginHorizontal: 16,
    height: 58,
    alignItems: 'center',
 
    borderRadius: 8,
    marginTop: 8,
    
  },
  
  textCointainer: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 16,
    height: 58,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  
});

export default secondContainer;
