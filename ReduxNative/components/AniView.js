import React from 'react';
import {View, Text, Animated,PanResponder,} from 'react-native';


const Aniview = () => {
  const position = new Animated.ValueXY({x: 0, y: 0})
//   Animated.timing(position, {
//     toValue: {x: 200, y: 300},
// duration:6000
   
    
//   }).start()
  const rotate=position.x.interpolate({
      inputRange:[0,100],
      outputRange:['0deg','360deg']
      })
      const pan=PanResponder.create({
        onMoveShouldSetPanResponder:()=>true ,
        onPanResponderMove:Animated.event([null,
            {dx:position.x,dy:position.y}
        ]) ,
        onPanResponderRelease:()=>{
           Animated.spring(position,{
            toValue:{x:0,y:0},
            bounciness:15
           }).start()
        }
      })

  return (
    <View style={{flex: 1,justifyContent:"center",alignItems:"center"}}
    >
    <Animated.View 
    {...pan.panHandlers}
    style={{
        height: 100,
        width: 100,
        
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        transform:[
           {translateX:position.x},
             {translateY:position.y},
            {rotate:rotate}
          
        ]
      }}>
    
        <Text>Move</Text>
        </Animated.View>
      </View>
 
  );
};
export default Aniview;
