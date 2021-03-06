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
    <SafeAreaView style={styles.mainView}>
      <ScrollView bounces={false} style={{}}>
        <View style={styles.header}>
          <Text style={{fontSize: 36, fontFamily: 'Boogaloo'}}>GameApart</Text>
          <Text style={{fontSize: 15, marginVertical: 5, textAlign: 'center'}}>
            Sign in or sign up with your social account
          </Text>
        </View>

        <View style={{justifyContent: 'center', alignContent: 'center'}}>
          <TouchableOpacity
            style={{
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
            }}>
            <Image
              style={{marginHorizontal: 20}}
              source={require('../assets/Images/facebook.png')}
            />
            <Text style={{fontSize: 20, marginHorizontal: 5}}>
              Sign in with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableBox}>
            <Image
              style={{marginHorizontal: 20}}
              source={require('../assets/Images/apple1.png')}
            />
            <Text style={{fontSize: 20, marginHorizontal: 5}}>
              Sign in with Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableBox}>
            <Image
              style={{marginHorizontal: 20}}
              source={require('../assets/Images/google.png')}
            />
            <Text style={{fontSize: 20, marginHorizontal: 5}}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              height: 0,
              borderWidth: 0.3,
              backgroundColor: '#1E3C60',
              width: 100,
              marginRight: 16,
            }}></View>
          <Text style={{fontSize: 16}}>OR</Text>

          <View
            style={{
              height: 0,
              borderWidth: 0.3,
              backgroundColor: '#1E3C60',
              width: 100,
              marginLeft: 16,
            }}></View>
        </View>
        <View style={{}}>
          <TextInput
            style={styles.textCointainer}
            placeholder="Enter Your Email"
          />
          <TextInput
            style={styles.textCointainer}
            placeholder="Enter Your Password"
          />
          <View style={{flexDirection:"row",justifyContent:"center"}}>
             <TouchableOpacity>
          <Text style={{alignSelf: 'center'}}>
            Need an account? 
          </Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={{color: 'red'}}>Sign up</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  <View style={{backgroundColor: 'rgb(205, 224, 236)',borderColor:'rgb(205, 224, 236)', borderWidth: 1, 
  borderRadius: 10,alignItems:"center" ,height:80,marginTop:10,}}>
      <TouchableOpacity style={{backgroundColor:'#94E864',width:'90%',alignItems:"center",height:40,justifyContent:"center",borderRadius:20}}>
        <Text style={{fontSize: 22,fontWeight:"500"}}>GO</Text>
        </TouchableOpacity>
      <Text style={{fontSize:12, marginVertical:15}}>© 2020 GameApart. Copy and we'll hunt you down.</Text>
      </View>
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'rgb(205, 224, 236)',
  },
  scroll: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop:20
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
