import React from 'react';
import Cities from './screens/Cities';
import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './redux/reducers/mainReducer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button,View, Text, ImageBackground ,StyleSheet } from 'react-native';


const image = { uri: "https://i.imgur.com/XSVletw.jpg" };
function Welcome({navigation}) {

  return (
    
      <View style={{ flex: 1, alignItems: 'center' ,justifyContent:'center'}}>
      
      
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>MyTinerary!</Text>
      
      <View  style={styles.botones}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
          color="black"
        />
        <Button
          title="Cities"
          onPress={() => navigation.navigate('Cities')}
          color="black"
        />
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('SignIn')}
          color="black"
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          color="black"
          
        />
      </View>
      </ImageBackground>
    </View>
    
  );
  
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column"
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center",
    alignContent:"center",
    width:400,
    flex: 1,
  },
  text: {
    color: "white",
    width:420,
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  botones:{
    flexDirection:"row",
    justifyContent: "center",
    alignContent:"center",
  }
});


const Stack = createStackNavigator();
const App= () => {

const store = createStore(mainReducer, applyMiddleware(thunk))


  return (
     <Provider store={store}>
      
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cities" component={Cities} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
      
      
      
       
      
     </Provider>
     
  );
}


export default App
