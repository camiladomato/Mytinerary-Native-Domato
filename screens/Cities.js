import React, { useEffect } from 'react'
import {  StyleSheet, Text, TextInput, View , ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'



const Cities= (props) => {
useEffect(()=>{props.cargarCiudades()},[])
  
  return (
    <>
    <View style={styles.container}>
            <Text style={styles.texto}>Cities!</Text>
                  <TextInput placeholder="Search here"
                  placeholderTextColor= "black"
                  color = "black"
                  style = {styles.input}/>    
          {props.listaCities.map(city =>{
            return(
                <View>
                    <ImageBackground source={{uri:`${city.path}`}} style={styles.foto} key={city.city}></ImageBackground>
                    <Text style={styles.texto}> {city.city}</Text>

                </View>
            )
          } ) }
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
  foto:{
    height:30,
    width:30,
  }

});
const mapStateToProps = state =>{
  return{
      listaCities: state.city.cities,
      //listaItinerary: state.itinerary.itinerarios,
        
  }
}
const mapDispatchToProps = {
      cargarCiudades: citiesActions.cargarCities,
      //cargarItinerarios: itineraryActions.cargarItinerarios,
     
}  
export default connect (mapStateToProps, mapDispatchToProps) (Cities)