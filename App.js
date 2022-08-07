import React from 'react';
import { Text, View, TextInput, ImageBackground,
	StyleSheet, Dimensions } from 'react-native';

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
      </View>
	
);
};

export default BackgroundImg;

const styles = StyleSheet.create({
text: {
	textAlign:'center',
  marginTop:50,
  
},

});
