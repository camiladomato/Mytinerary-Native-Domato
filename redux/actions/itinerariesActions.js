import axios from 'axios';

const itinerariesActions ={
    cargarItinerarios: (id) => {
        return (dispatch, getstate) => {
            axios.get('http://mitinerary-domato.herokuapp.com/api/itinerary/'+id)
            .then(response => dispatch({type: 'CARGAR_ITINERARIO', payload: response.data.response}))
            .catch(error => console.log(error))
        } 
    },
 
   
}
export default itinerariesActions 