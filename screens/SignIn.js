import React from 'react';
import { StyleSheet, Text, TextInput, View , Image , Alert} from 'react-native';
import { useState } from 'react'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'

const SignIn= (props) => {
 
  const [userLoggedIn,setUserLoggedIn] =(useState({email:"",password:""}))
   
  const readInputForm= (e , campo)=> {
      setUserLoggedIn({
          ...userLoggedIn,
          [campo]: e
      })
  }
  const sendForm =async () =>{
    await props.loguearUsuario(userLoggedIn)  
}

  
  return (
    <>
    <View style={styles.container}>
    <Image source={require('../assets/signin.png')} style={styles.fotoSignin}/>
      <Text style={styles.texto}>Login to account:</Text>
        <View style={styles.formulario}>
            
            <TextInput placeholder="Enter your Email"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input} 
            value={userLoggedIn.email}
            onChangeText={(e)=>readInputForm(e, 'email')} />
            <TextInput placeholder="Enter your Password"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input} 
            value={userLoggedIn.password}  
            onChangeText={(e)=>readInputForm(e, 'password')} />
            <Text style={styles.botonEnv} onPress={sendForm} >Send</Text>    
            
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
    marginTop:30,
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
    height:340,
    width:420,
  }
});

const mapDispatchToProps ={
  loguearUsuario : userActions.loguearUsuario
}

export default connect(null,mapDispatchToProps)(SignIn)