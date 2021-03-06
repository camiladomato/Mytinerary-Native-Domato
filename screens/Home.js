
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Carrousel from './Carrousel'



const Home= ({navigation}) => {
  return (
    <>
     <ScrollView>
        <View style={styles.container}>
        <Image source={require('../assets/imghome.png')} style={styles.fotoHome}/>
          <Text style={styles.subtexto}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
          <Text style={styles.boton} onPress={() => navigation.navigate('Cities')}>Lest go!</Text>  
          
            <Carrousel />
         
          </View>

       
        </ScrollView>
       
  
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
    width: '85%',
    marginTop: 20,
  },
  fotoHome:{
    height: 480,
    width: 400,
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