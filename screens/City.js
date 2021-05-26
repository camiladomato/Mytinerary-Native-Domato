import React from 'react';
import { Image, ScrollView, StyleSheet, Text,  TextInput,  View } from 'react-native';
import Itineraries from './Itineraries'
import itinerariesActions from '../redux/actions/itinerariesActions'
import citiesActions from '../redux/actions/citiesActions'
import {connect} from 'react-redux'
import {useEffect,useState} from 'react'

const City= (props) => {
  console.log(props.route.params)
  const [ciudad, setCiudad] = useState([])
    const idCiudad = props.route.params
  
  useEffect(() => {
    setCiudad(
        props.listaCities.find(ciudad => ciudad._id === idCiudad)
    )
    props.cargarItinerarios(idCiudad)
},[])
  

    
    return (
   
       <ScrollView>
         
         <View style={styles.container}>
                                  <Image source={{uri: 'https://mitinerary-domato.herokuapp.com/assets/newyork.jpeg' }} style={styles.foto} />
                                  <Text style={styles.title}>{[ciudad.city + " " + "("+ ciudad.country+")"]}</Text>
                                  <Text style={styles.texto}>{ciudad.info}</Text>
                                                      
                                  {!props.listaItinerary.length 
                                      ? <Text style={styles.textoItinerary} >We don't have any itineraries yet!</Text>
                                      : <Itineraries />
                                  }
        </View>     
                             
       </ScrollView>
   
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#09ABF5',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  title:{
    fontSize: 25,
    color: 'white',
    width: '90%',
    marginTop: 5,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#000000a0",
    opacity: 0.7,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"

  },
  texto:{
    fontSize: 15,
    color: 'white',
    width: '90%',
    marginTop: 20,
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

  },
  foto:{
    height:220,
    width:400,
    marginBottom:20,
  },

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