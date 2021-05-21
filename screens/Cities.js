import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Cities= () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.texto}>Cities!</Text>
        
            <TextInput placeholder="Search here"
            placeholderTextColor= "black"
            color = "black"
            style = {styles.input}/>    
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
  texto:{
    fontSize: 25,
    color: 'white',
    width: '80%',
    marginTop: 50,
  },

});

export default Cities