import React from 'react';
import { StyleSheet, Text,  View } from 'react-native';
import Itineraries from './Itineraries'
import itinerariesActions from '../redux/actions/itinerariesActions'
import citiesActions from '../redux/actions/citiesActions'
import {connect} from 'react-redux'

const City= (props) => {
  console.log(props)
   
   // const idCiudad = props.route.params
    //const nombreCiudad = prop.route.name
    return (
  
       <View style={styles.container}>
            
                                
        <Text style={styles.texto}>City Select!</Text>
        <Text style={styles.texto}>more Info...</Text>
                             
                         
        {!props.listaItinerary.length 
            ? <Text style={styles.textoItinerary} >We don't have any itineraries yet!</Text>
            : <Itineraries />
        } 
        </View>     
   
   
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
    width: '50%',
    marginTop: 50,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#000000a0",
    opacity: 0.7,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  textoItinerary:{
    fontSize: 25,
    color: 'white',
    width: '80%',
    marginTop: 50,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#000000a0",
    opacity: 0.7,
    width: 420,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"

  }

});
const mapStateToProps = state =>{
    return{
        listaCities: state.city.cities,
        listaItinerary: state.itinerary.itinerarios,
        filterCities: state.city.filterCities
                
    }
  }
  const mapDispatchToProps = {
        cargarItinerarios: itinerariesActions.cargarItinerarios,
        buscar: citiesActions.filterCities
        
       
  }  

  export default connect (mapStateToProps, mapDispatchToProps) (City)