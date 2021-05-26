import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground , Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Carrusel = () => {
    const city = [
        { id: 1, nombre: "Rome", url: 'https://i.imgur.com/75VaTiu.jpg' },
        { id: 2, nombre: "Cancun", url: 'https://i.imgur.com/SHy1H37.jpg' },
        { id: 3, nombre: "Ibiza", url: 'https://i.imgur.com/uk3k54w.jpg' },
        { id: 4, nombre: "New York", url: 'https://i.imgur.com/K9OaME2.jpg' },
        { id: 5, nombre: "Chicago", url: 'https://i.imgur.com/YRwhszt.jpg' },
        { id: 6, nombre: "Paris", url: 'https://i.imgur.com/oirkSPy.jpg' },
        { id: 7, nombre: "Amsterdam", url: 'https://i.imgur.com/fRVyOFo.jpg' },
        { id: 8, nombre: "Barcelona", url: 'https://i.imgur.com/6nzASae.jpg' },
        { id: 9, nombre: "Milan", url: 'https://i.imgur.com/VDKY1TB.jpg' },
        { id: 10, nombre: "Buenos Aires", url: 'https://i.imgur.com/VYoCvjM.jpg' },
        { id: 11, nombre: "Moscow", url: 'https://i.imgur.com/kD0pv2G.jpg' },
        { id: 12, nombre: "Berlin", url: 'https://i.imgur.com/ybXyi6h.jpg' },
    ]

    const _renderItem = ({ item, index }) => {
        return (
            < View key={item.id} style={styles.slide} >
                <ImageBackground source={{ uri: item.url }} style={styles.image}>
                    <Text style={styles.text}  >{item.nombre}</Text>
                </ImageBackground>
            </View >
        )
    }

    return (
        <View style={styles.containerCarrusel}>
            <Carousel
                data={city}
                sliderWidth={500}
                itemWidth={400}
                renderItem={_renderItem}
                layout={"stack"}
                loop={true}
                autoplay={true}
            />
 
        </View>
    )
}

const styles = StyleSheet.create({

    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: 240,
        width: 420,
        
    },
    text: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        backgroundColor: "#000000a0",
        opacity: 0.7,
        width: 420,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    containerCarrusel: {
        marginBottom: 20,
        marginTop: 20,
    
    },
    slide:{
        height: 240,
        width: 420,
    }


});
export default Carrusel