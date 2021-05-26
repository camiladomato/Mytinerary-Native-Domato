import React from 'react';
import { StyleSheet, Text, TextInput, View , Image} from 'react-native';

const SignUp= () => {
  const [newUser,setNewUser] = useState ({name:"",lastName:"",email:"",password:"",urlImage:"",country:""})
  const [selectedValue, setSelectedValue] = useState("country")
  
  const readInput= e => {
      const campo = e.name
      const valor = e.value
      setNewUser({
          ...newUser,
          [campo]:valor
      })
  }

  const send = async (e = null ) => { 
       var user =  newUser 
      const respuesta = await props.crearUsuario(user)
     
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
            onChangeText={readInput} 
            />
            <TextInput placeholder="Enter your LastName"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            onChangeText={readInput}
            value={newUser.lastName}
            />
            <TextInput placeholder="Enter your Email"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            value={newUser.email}
            onChangeText={readInput}/>
            <TextInput placeholder="Enter your Password"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            value={newUser.password}/>
            <TextInput placeholder="Enter your Photo (url)"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}
            onChangeText={readInput}/>
            <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            style = {styles.input}
            >
              {paises.map(pais =>{
                            return (
                              <Picker.Item label="Country" value={pais}> {pais} </Picker.Item>
                            )
                        })}
     
            </Picker>
            
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

export default SignUp