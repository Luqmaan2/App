import React from 'react';
import { Text } from 'react-native';
import { View ,Image} from 'react-native-web';

const test =()=>{

  return(
    <View>
    <Image
      source={require('./favicon.png')}
  
  style={{width: 200, height: 200,alignCenter:'center',alignSelf:'center',alignItems:'center',}}
      />
<Text style={{alignText:'center',
alignSelf:'center',
alignCenter:'center',
alignItems:'center',
marginRight:20,
}}>Hello</Text>
    </View>
  );
}




export default test;
