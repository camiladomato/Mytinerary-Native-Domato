import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Activities= () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.texto}>Activities</Text>
        
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
  texto:{
    fontSize: 25,
    color: 'white',
    width: '80%',
    marginTop: 50,
  },

});

export default Activities