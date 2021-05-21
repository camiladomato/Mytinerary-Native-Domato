import React from 'react'
import axios from 'axios'

const citiesActions ={
    cargarCities: () => {
        console.log("llegue")
        return (dispatch, getstate) => {
            axios.get('https://mitinerary-domato.herokuapp.com/api/cities/')
            .then(response => dispatch ({type: 'CARGAR_CITIES', payload:response.data.response}))
            .catch(error => console.log(error))
        } 
    },

    filterCities:(value) => {
        return  (dispatch, getState) =>{ dispatch({type: 'FILTER_CITIES' , payload:value})
        }
    },


}
export default citiesActions 