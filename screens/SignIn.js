import React from 'react';
import { StyleSheet, Text, TextInput, View , Image } from 'react-native';

const SignIn= () => {
  return (
    <>
    <View style={styles.container}>
    <Image source={require('../assets/signin.png')} style={styles.fotoSignin}/>
      <Text style={styles.texto}>Login to account:</Text>
        <View style={styles.formulario}>
            <TextInput placeholder="Enter your Email"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}/>
            <TextInput placeholder="Enter your Email"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}/>
            <TextInput placeholder="Enter your Password"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}/>
            <Text style={styles.botonEnv}>Send</Text>    
            
        </View>
    </View>
    </>
  
    )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#09ABF5',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  input:{
    width: '80%',
    height:40,
    backgroundColor: 'white',
    marginTop: 10,
    textAlign: 'center'
  },
  formulario:{
    alignItems:'center',
    width: '100%',
  },
  texto:{
    fontSize: 20,
    color: 'white',
    width: '80%',
  },
  botonEnv:{
    color:'#09ABF5',
    backgroundColor:'white',
    fontSize: 20,
    borderRadius: 5,
    padding:10,
    marginTop: 15,
  },
  fotoSignin:{
    height:360,
    width:420,
  }
});

export default SignIn