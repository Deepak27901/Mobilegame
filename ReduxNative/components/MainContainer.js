import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {buyApple} from '../Redux/apple/appleAction';

const MainContainer = (props) => {
  console.log(props, 'hellooo');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.fruitStorecontainer}>
        <Text style={styles.fruitText}>Fruit Store</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text>
          Apple
          
        </Text>
        <Text>100 per/kg</Text>
        <Image
          style={styles.appleImage}
          source={require('../assets/Images/apple.png')}
        />
        <TouchableOpacity style={styles.addToCart} onPress={props.buyApple}>
  <Text style={styles.addToCart}>Add To Cart-{props.numOfApple}</Text>
  <Text>Total:{props.apple_rate}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{props.navigation.navigate("usersContainer")}}>
        <Text>go to user container</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginVertical:20}} onPress={()=>props.navigation.navigate("secondContainer")}>
          <Text>Go To Second Container</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    numOfApple: state.apple.numOfApple,
    apple_rate:state.apple.apple_rate
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyApple: () => dispatch(buyApple()),
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    borderRadius: 2,
  },

  fruitStorecontainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  secondContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 10,
    borderWidth: 2,
   
    marginHorizontal: 60,
    marginTop: 20,
  
  },
  fruitText: {
    fontSize: 20,
  },
  appleImage: {
    width: 100,
    height: 100,
  },
  addToCart: {
    borderRadius: 2,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
