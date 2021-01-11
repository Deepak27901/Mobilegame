import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  TouchableHighlight,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {styles} from './style'
import {ScrollView} from 'react-native-gesture-handler';
//import {SafeAreaView} from 'react-native-safe-area-context';
//import { BlurView } from 'react-native-blur';

const loginOptions = [
  {
    image: require('../../assets/Images/facebook.png'),
    text: 'Sign in with Facebook',
  },
  {
    image: require('../../assets/Images/apple1.png'),
    text: 'Sign in with Apple',
  },
  {
    image: require('../../assets/Images/google.png'),
    text: 'Sign in with Google',
  },
];

const SignUp = () => {
  const [isChecked, setisChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const check = () => {
    setisChecked(!isChecked);
  };

  return (
    <>
      <KeyboardAvoidingView behavior="position" style={styles.mainView}>
        <ScrollView bounces={false}>
          <View style={styles.header}>
            <Text style={styles.headerText1}>GameApart</Text>
            <Text style={styles.headerText2}>
              Sign in or sign up with your social account
            </Text>
          </View>

          <View style={styles.loginView}>
            {loginOptions.map((option,index) => {
              return (
                <TouchableOpacity style={styles.loginTouchable} key={index}>
                  <Image style={{marginHorizontal: 20}} source={option.image} />
                  <Text style={{fontSize: 20, marginHorizontal: 5}}>
                    {option.text}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <View style={styles.mainlineView}>
            <View style={styles.lineView1}></View>
            <Text style={{fontSize: 16}}>OR</Text>

            <View style={styles.lineView2}></View>
          </View>
          <View style={styles.catView}>
            {/* cat stands for Checkbox,  agree text and tremsCondition  */}

            <TouchableOpacity onPress={check} style={styles.touchableCheckBox}>
              {isChecked && (
                <Image
                  style={{width: 10, height: 10}}
                  source={require('../../assets/Images/tick1.png')}
                />
              )}
            </TouchableOpacity>

            <Text
              style={{alignSelf: 'center', fontSize: 10, marginHorizontal: 8}}>
              I agree to the GameApart
            </Text>

            <Modal
             animationType="none"
             transparent={true}
             
             
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View style={{justifyContent: 'center',backgroundColor:'rgba(0,0,0,0.5)', flex: 1}}>
                <View style={{}}>
                  <Text style={styles.modalText}></Text>

                  <View style={styles.modalView}>
                    <ScrollView style={styles.modalScroll}>
                      <Text style={styles.modalTextHeading}>
                        Terms and Conditions.
                      </Text>
                      <Text style={styles.modalText}>
                        Eu dolor pariatur occaecat consectetur mollit et
                        laboris. Cupidatat nostrud dolore laboris ex dolor
                        deserunt adipisicing. Ipsum Lorem ex consequat ullamco
                        veniam ea magna nostrud et esse labore enim. Veniam
                        minim cupidatat duis veniam veniam culpa consectetur
                        laboris. Excepteur nostrud adipisicing Lorem duis nulla
                        pariatur voluptate elit quis. Mollit amet irure
                        consectetur ex dolor
                      </Text>
                    </ScrollView>

                    <View style={styles.modalOkView}>
                      <TouchableOpacity
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                        style={styles.modalTouchableOk}>
                        <Text style={{fontSize: 18, lineHeight: 24}}>OK</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>


            <TouchableHighlight
              onPress={() => {
                setModalVisible(true);
              }}>
              <Text
                style={{
                  fontSize: 10,
                  textDecorationLine: 'underline',
                  color: 'red',
                }}>
                terms and conditions.
              </Text>
            </TouchableHighlight>
          </View>

          <TextInput
            style={styles.inputCointainer}
            placeholder="Enter Your Email"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 16,
            }}>
            <TextInput
              style={styles.input2Cointainer}
              placeholder="First Name"
            />
            <TextInput
              style={styles.input2Cointainer}
              placeholder="Last Name"
            />
          </View>
          <TextInput
            style={styles.inputCointainer}
            placeholder="Enter Your Password"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginHorizontal: 21,
              marginVertical: 10,
            }}>
            {/*        
        <CheckBox nstyle={{}} onClick={()=>{setisChecked(!isChecked)}} isChecked={isChecked}/> */}

            <Text style={{alignSelf: 'center'}}>Already have an account?</Text>

            <TouchableOpacity style={{justifyContent: 'center'}}>
              <Text style={{color: 'red'}}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.goView}>
        <TouchableOpacity style={styles.goTouchable}>
          <Text style={{fontSize: 22, fontWeight: '500'}}>GO</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 12, marginVertical: 15}}>
          © 2020 GameApart. Copy and we'll hunt you down.
        </Text>
      </View>
    </>
  );
};


export default SignUp;
