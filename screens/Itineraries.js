import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'
import {useEffect,useState} from 'react'
import {connect} from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions'


const Itineraries= (props) => {
  const [citySelect, setCitySelect] = useState(null)
  useEffect(()=>{setCitySelect(props.listaCities.find(city => city._id ))
    props.cargarItinerarios()
    } , [])

  if (!citySelect ) {
      return <Text>Loading...</Text>
  }
    
    return(
      <>
      <View style={styles.container} >
        <Text >{citySelect.city}</Text>
      </View>
      <View >
              <Text>{citySelect.info}</Text>
          </View>
          {!props.listaItinerary.length ? <Text className="txt-dont">We don't have any itineraries yet!</Text>
      : <View> 
      {props.listaItinerary.map((itinerary)=>{
        var imagenItinerary = ciudad.path.slice(10,ciudad.path.length)
        
        return(
        <View>
              <Text>{itinerary.title}</Text>
              <View > 
                <Image source={{uri:'https://mitinerary-domato.herokuapp.com/assets/'+ imagenItinerary }} style={styles.foto} /> 
              </View> 
                <Text>{itinerary.authorName}</Text>
              <View>
                      <Text>{Array(itinerary.price).fill(<Image source={require('../assets/billete.png')} style={styles.foto} />)} </Text>
                      <Text>{Array(itinerary.duration).fill(<Image source={require('../assets/reloj.png')} style={styles.foto} />)} </Text>
                      <Text><Image source={require('../assets/megusta.png')} style={styles.foto} /></Text>
              </View>
          </View>        
          )
      })}
      </View>
      }
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

