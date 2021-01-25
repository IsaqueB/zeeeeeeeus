import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

async function sendForm(price,weight){
    let request
    let object = {
      'weight': weight,
      'price': price
    }
    try{
        request = await axios.post("http://192.168.42.34:3000/new_purchase",object)
        console.warn("Enviado com Sucesso")
    }catch(err){
      console.log("Aconteceu um erro")
      console.warn(err)
    }
  }

class App extends React.Component {
    constructor(){
      super()
      this.price = ''
      this.weight = ''
    }
    render(){
      return (
        <View style={styles.container}>
          <Text>Peso</Text>
          <TextInput style={styles.input} placeholder="Insira aqui o peso do pacote" keyboardType="numeric" onChangeText={(value)=>{this.price = value}}></TextInput>
          <Text>Preço</Text>
          <TextInput style={styles.input} placeholder="Insira aqui o preço do pacote" keyboardType="numeric" onChangeText={(value)=>{this.weight = value}}></TextInput>
          <Button color="#17abf0" title="Enviar" onPress={(()=>sendForm(this.price,this.weight))}></Button>
        </View>
      );
    }
  }
  
  export default App
  
  const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:"5%",
        paddingBottom:"5%",
        backgroundColor: '#fdfdfd',
        elevation: 4
      },
      input:{
        textAlign: "center",
        backgroundColor: '#FAFAFA',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#7F7F7F",
        padding: 5,
        marginTop: 20,
        marginBottom: 20,
        minWidth: 200,
        minHeight: 30
      },
  });