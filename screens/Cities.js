import React, { useEffect } from 'react'
import {  StyleSheet, Text,  View , Image, ScrollView , TextInput } from 'react-native'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'


const Cities= (props) => {

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
                                    <View  key={ciudad.city}  style={styles.container} >
                                      
                                    <View style={styles.verMas}>
                                    <Text  style={styles.texto}>{ciudad.city}</Text>
                                    <Text  style={styles.subtexto} onPress={()=> props.navigation.navigate('City', ciudad._id)}>View  more...</Text>
                                    </View>
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
    fontSize: 20,
    color: 'white',
    margin:15,

  },
  subtexto:{
    color: '#09ABF5',
    backgroundColor: 'white',
    fontSize:15,
    margin:3,
    padding:4,
    borderRadius: 5,
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
    height:360,
    width:420,
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
    textAlign: 'center',
    borderRadius: 5,
  },
  verMas:{
    flexDirection: 'row',
    alignItems: 'center',
  
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
      cargarCiudades: citiesActions.cargarCities,
      cargarItinerarios: itinerariesActions.cargarItinerarios,
      buscar: citiesActions.filterCities
      
     
}  
export default connect (mapStateToProps, mapDispatchToProps) (Cities)
