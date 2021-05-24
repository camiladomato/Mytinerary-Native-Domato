import React, { useEffect } from 'react'
import {  StyleSheet, Text,  View , Image, ScrollView , TextInput} from 'react-native'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import Itineraries from './Itineraries'



const Cities= (props) => {
useEffect(()=>{props.cargarCiudades()},[])
  
  return (
        <>
              <ScrollView>
              <View style={styles.container}>
                      <Text style={styles.title}>Cities!</Text>
                      <TextInput placeholder="Search here"
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
                              <Text>{ciudad.city}</Text>
                              <Image source={{uri:'https://mitinerary-domato.herokuapp.com/assets/'+ imagenSeleccionada }} style={styles.foto} />
                            </View>
                          )
                      })}                     
                    {props.filterCities.length < 0 && props.listaCities.map(city =>{
                      var imagen = city.path.slice(10,city.path.length)
                      return( 
                          <View style={styles.infoSelect} key={city.city}>
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
    fontSize: 30,
    color: 'white',
    width: '80%',
    marginTop: 60,
  },
  title:{
    fontSize: 30,
    color: 'white',
    width: '80%',
    marginTop: 80,
  },
  subTexto:{
    color:'white',
  },
  foto:{
    height:180,
    width:350,
    margin:10,
  },
  fotoN:{
    height:300,
    width:350,
    marginTop: 40,
    marginBottom:70,

  },
  fotosCities:{
    flex:1,
  },
  input:{
    width: '80%',
    height:40,
    backgroundColor: 'white',
    marginTop: 10,
    textAlign: 'center'
  },


});
const mapStateToProps = state =>{
  return{
      listaCities: state.city.cities,
      //listaItinerary: state.itinerary.itinerarios,
      filterCities: state.city.filterCities
              
  }
}
const mapDispatchToProps = {
      cargarCiudades: citiesActions.cargarCities,
      //cargarItinerarios: itineraryActions.cargarItinerarios,
      buscar: citiesActions.filterCities
      
     
}  
export default connect (mapStateToProps, mapDispatchToProps) (Cities)