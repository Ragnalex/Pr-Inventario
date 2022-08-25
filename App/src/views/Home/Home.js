
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Button, Alert, Image } from 'react-native'
import React from 'react'
import Layout from '../../Components/Layout';
import { SafeAreaView } from 'react-native-safe-area-context';

const finanzas = require('../../imgs/FondoFinanzas.png');
const inventario = require('../../imgs/FondoInventario.png');



const Home = () => {

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <Layout>
      <SafeAreaView style={styles.container}>

        <View style={styles.itemContainer}>
          <View style={{marginHorizontal: 5, backgroundColor:"#8593EC", width: 150}}>
            <TouchableOpacity onPress={() => Alert.alert('Prueba boton finanzas')}>
              <Image
                style={styles.tinyLogo}
                source={ finanzas }
              />
              <Text style={styles.text}>Finanzas</Text>
            </TouchableOpacity>
            
          </View>
          

          <Separator/>

          <View style={{marginHorizontal: 5, backgroundColor:"#8593EC", width: 150}}>
            <TouchableOpacity onPress={() => Alert.alert('Prueba boton Inventario')}>
            <Image
              style={styles.tinyLogo}
              source={ inventario }
            />
            <Text style={styles.text}>Inventario</Text>
            </TouchableOpacity>
          </View>
          
        </View>
          

      </SafeAreaView>



    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: "center"
  },
  image: {

  },
  button: {
    marginHorizontal: 10,
  },
  itemContainer: {
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    backgroundColor: "#f194ff",
  },
  separator: {
    marginHorizontal: 8,
    marginVertical: 5,
    borderLeftColor: '#737373',
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: "center",
  }
});

export default Home;
