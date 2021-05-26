import React from 'react'
import { StyleSheet, Text, TextInput, View , Image} from 'react-native';
import { useState } from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions';

const SignUp= (props) => {
  const [newUser,setNewUser] = useState ({name:"",lastName:"",email:"",password:"",urlImage:"",country:""})
  
  const readInput= (e , campo)=> {
    
      setNewUser({
          ...newUser,
          [campo]: e
      })
  }

  const send = async () => {
       await props.crearUsuario(newUser)
     
  }
  var paises = ["Russia","Argentine","France","Spain","United States","Germany","Italy","Mexico"] 
  return (
    <>
    <View style={styles.container}>
    <Image source={require('../assets/signup1.png')} style={styles.fotoSignUp}/>
      <Text style={styles.texto}>Login to account:</Text>
        <View style={styles.formulario}>
            <TextInput placeholder="Enter your Name"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            value={newUser.name}
            onChangeText={(e)=>readInput(e, 'name')}
            />
            <TextInput placeholder="Enter your LastName"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            onChangeText={(e)=>readInput(e, 'lastName')}
            value={newUser.lastName}
            />
            <TextInput placeholder="Enter your Email"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            value={newUser.email}
            onChangeText={(e)=>readInput(e, 'email')}/>
            <TextInput placeholder="Enter your Password"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            value={newUser.password}
            onChangeText={(e)=>readInput(e,'password')}/>
            <TextInput placeholder="Enter your Photo (url)"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            onChangeText={(e)=>readInput(e ,'urlImage')}/>
          
         
          <RNPickerSelect 
                    onValueChange={(value) => readInput(value,"country")}
                    useNativeAndroidPickerStyle={false}
                    placeholder={{ label: "Select your country", value:"italia" }}
                    items={
                        paises.map(pais => {
                            return(
                                {label:pais, value: pais}
                            )
                        })
                    }
                />
            
            
            <Text style={styles.botonEnv} onPress={send}>Send</Text>

            
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
  fotoSignUp:{
    height:250,
    width:420,
  }
});

const mapDispatchToProps ={
  crearUsuario: userActions.crearUsuario
 }
 
 
 export default connect (null , mapDispatchToProps)(SignUp)