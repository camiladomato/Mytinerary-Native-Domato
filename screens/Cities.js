import React, { useEffect } from 'react'
import {  StyleSheet, Text,  View , Image, ScrollView , TextInput} from 'react-native'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import Itineraries from './Itineraries'
import itinerariesActions from '../redux/actions/itinerariesActions'


const Cities= (props) => {
  console.log(props)
useEffect(()=>{props.cargarCiudades()},[])
  
  return (
        <>
              <ScrollView>
              <View style={styles.container}>
              <Image source={require('../assets/cities.png')} style={styles.fotoCity}/>
                      <TextInput placeholder="Search here..."
                                  placeholderTextColor= "black"
                                  color = "black"
                                  style = {styles.input}
                                  onChangeText ={(e) => {props.buscar(e)}}
                                  />
                    {props.filterCities.length === 0 
                        ? <Image source={require('../assets/noresult.png')} style={styles.fotoN}/>

                        : props.filterCities.map((ciudad , _id) => {
                          var imagenSeleccionada = ciudad.path.slice(10,ciudad.path.length)
                          return(
                            <View  key={ciudad.city}  style={styles.container}>
                              <Text  style={styles.texto}>{ciudad.city}</Text>
                              <Image source={{uri:'https://mitinerary-domato.herokuapp.com/assets/'+ imagenSeleccionada }} style={styles.foto} />
                            </View>
                          )
                      })}                     
                   {props.filterCities.length < 0 && props.listaCities.map(city =>{
                      var imagen = city.path.slice(10,city.path.length)
                      return( 
                          <View style={styles.container} key={city.city}>
                              <Text style={styles.texto} > {city.city}</Text>
                              <Image source={{uri:'https://mitinerary-domato.herokuapp.com/assets/'+ imagen}} style={styles.foto} />
                              {!props.listaItinerary.length 
                              ? <Text >We don't have any itineraries yet!</Text>
                              : <Itineraries />
                              } 
                          </ View>
                          )      
                    })} 
                    
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
    justifyContent: 'center',
 
  },
  texto:{
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    marginBottom:10,
  },
  foto:{
    height:220,
    width:400,
    marginBottom:20,
  },
  fotoN:{
    height:400,
    width:400,
    marginTop: 20,
    marginBottom:10,
  },
  fotoCity:{
    height:310,
    width:420,
    marginTop: 30,
  },
  fotosCities:{
    flex:1,
  },
  input:{
    width: '80%',
    height:40,
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom:20,
    textAlign: 'center'
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
      cargarCiudades: citiesActions.cargarCities,
      cargarItinerarios: itinerariesActions.cargarItinerarios,
      buscar: citiesActions.filterCities
      
     
}  
export default connect (mapStateToProps, mapDispatchToProps) (Cities)
