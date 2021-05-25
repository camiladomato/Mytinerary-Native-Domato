
import axios from 'axios'

const citiesActions ={
    cargarCities: (props) => {
        console.log(props)
        return (dispatch, getstate) => {
            axios.get('https://mitinerary-domato.herokuapp.com/api/cities/')
            .then(response => dispatch ({type: 'CARGAR_CITIES', payload:response.data.response}))
            .catch(error => console.log(error))
        } 
    },

    filterCities:(e) => {
        return  (dispatch, getState) =>{ dispatch({type: 'FILTER_CITIES' , payload: e })
        }
    },


}
export default citiesActions 