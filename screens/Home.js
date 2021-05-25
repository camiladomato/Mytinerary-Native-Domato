
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Carrousel from './Carrousel'



const Home= () => {
  return (
    <>
     
        <View style={styles.container}>
        <Image source={require('../assets/imghome.png')} style={styles.fotoHome}/>
          <Text style={styles.subtexto}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
          <Text style={styles.boton}>Lest go!</Text>  
          </View>

        <Carrousel />
       
  
    </>
  
    )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#09ABF5',
    alignItems: 'center',
      
  },
  subtexto:{
    fontSize:18,
    color: 'white',
    width: '80%',
    marginTop: 25,
  },
  fotoHome:{
    height: '75%',
    width:'100%',
  },
  boton:{
    color:'#09ABF5',
    backgroundColor:'white',
    fontSize: 20,
    borderRadius: 5,
    padding:10,
    marginTop: 30,

  }
});

export default Home