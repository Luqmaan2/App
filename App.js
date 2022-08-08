import React from 'react';
import { Text, View, TextInput, ImageBackground,
	StyleSheet, Dimensions ,Image} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const BackgroundImg = () => {
return (
	<View>
    
		<ImageBackground
    source={{uri :'https://raw.githubusercontent.com/Luqmaan2/App/main/test.png'}}
    style={{
      height:screenHeight,
      width:screenWidth,
      flex:1,
    }}
    >
      </ImageBackground>
      <Text style={styles.text}>Hello</Text>
      <Image
      source={{uri:'https://raw.githubusercontent.com/Luqmaan2/App/main/20220724_193120-removebg-preview%20-%20Copy%20(2).png'}}
      style={styles.img}
      />
      </View>
	
);
};

export default BackgroundImg;

const styles = StyleSheet.create({
text: {
	textAlign:'center',
  marginTop:50,
  color:'#F0EAEA',  

},
img:{
height:60,
width:50,
alignItems:'center',
alignSelf:'center',
alignContent:'center'
},

});
