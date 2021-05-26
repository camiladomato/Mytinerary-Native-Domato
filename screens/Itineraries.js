import React from 'react'
import { StyleSheet, Text, View , Image,  ScrollView} from 'react-native'
import {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'


const Itineraries= (props) => {      
 
 return(
          <>
              {props.listaItinerary.map((itinerary)=>{
                  
                    <ScrollView>
                        <View style={styles.container}>
                                <Text style={styles.texto}>{itinerary.authorName}</Text>
                                <Text tyle={styles.texto}>{itinerary.title}</Text>
                              
                              <View style={styles.iconos}>
                                      <Text><Image source={require('../assets/billete.png')} style={styles.fotoIcono} /> </Text>
                                      <Text><Image source={require('../assets/reloj.png')} style={styles.fotoIcono} /> </Text>
                                      <Text><Image source={require('../assets/megusta.png')} style={styles.fotoIcono} /></Text>
                              </View>
                          </View>
                    </ScrollView>
                })}
          </>
  )     
}
     

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  texto:{
    fontSize: 25,
    color: 'white',
    width: '80%',
    marginTop: 50,
  },
  fotoIcono:{
    height:20,
    width:15,
    resizeMode: "cover",
    margin:10,
  },
  iconos:{
    justifyContent:"space-around",
    marginTop:43,
  }

});

const mapStateToProps = state =>{
  return{
    listaCities: state.city.cities,
    listaItinerary: state.itinerary.itinerarios,
        
  }
}
const mapDispatchToProps = {
      cargarItinerarios: itinerariesActions.cargarItinerarios,
     
}  
export default connect (mapStateToProps, mapDispatchToProps) (Itineraries)

