import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Importar VIEWS

import HomeScreen from "./src/views/Home/Home";
import { ScreenContainer } from 'react-native-screens';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={HomeScreen} 
            options={({ navigation }) => ({
            title: "Inventario",
            headerStyle: {
              backgroundColor: "#222f3e",
            },
            headerTitleStyle: {
              color: "#ffffff",
            },
            headerRight: () => (
              <Button
              onPress={() => alert('Probando un boton de popup')}
              title="Test"
              color="#98A4F9"
              />
              /*<TouchableOpacity
                onPress={() => navigation.navigate("TaskFormScreen")}
              >
                <Text style={{ color: "#fff", marginRight: 20, fontSize: 15 }}>
                  New
                </Text>
              </TouchableOpacity>*/
            ),
          })}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}



export default App;


