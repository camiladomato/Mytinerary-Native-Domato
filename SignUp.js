import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SignUp= () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.texto}>Login to account:</Text>
        <View style={styles.formulario}>
            <TextInput placeholder="Enter your Name"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}/>
            <TextInput placeholder="Enter your LastName"
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
            <TextInput placeholder="Enter your Photo (url)"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}/>
            <TextInput placeholder="Choose your country"
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
    justifyContent:'center',
    width: '100%',
  },
  texto:{
    fontSize: 25,
    color: 'white',
    width: '80%',
    marginTop: 50,
  },
  botonEnv:{
    color:'#09ABF5',
    backgroundColor:'white',
    fontSize: 20,
    borderRadius: 5,
    padding:10,
    marginTop: 15,
  }
});

export default SignUp