import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Carrusel = () => {



    const city = [
        { id: 1, nombre: "Rome", url: 'https://imgur.com/75VaTiu' },
        { id: 2, nombre: "Cancun", url: 'https://imgur.com/SHy1H37' },
        { id: 3, nombre: "Ibiza", url: 'https://imgur.com/uk3k54w' },
        { id: 4, nombre: "New York", url: 'https://imgur.com/K9OaME2' },
        { id: 5, nombre: "Chicago", url: 'https://imgur.com/YRwhszt' },
        { id: 6, nombre: "Paris", url: 'https://imgur.com/oirkSPy' },
        { id: 7, nombre: "Amsterdam", url: 'https://imgur.com/viIqjof' },
        { id: 8, nombre: "Barcelona", url: 'https://imgur.com/6nzASae' },
        { id: 9, nombre: "Milan", url: 'https://imgur.com/VDKY1TB' },
        { id: 10, nombre: "Buenos Aires", url: 'https://imgur.com/VYoCvjM' },
        { id: 11, nombre: "Moscow", url: 'https://imgur.com/kD0pv2G' },
        { id: 12, nombre: "Berlin", url: 'https://imgur.com/ybXyi6h' },
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
                ref={(c) => { _carousel = c; }}
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
        height: 300,
        width: "90%"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        backgroundColor: "#000000a0",
        width: 324,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    containerCarrusel: {
        marginBottom: 20,
        marginTop: 20,
    },


});
export default Carrusel