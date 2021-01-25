import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


class Header extends React.Component {
    constructor(props){
      super(props)
    }

    render(){
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      );
    }
  }
  
  export default Header
  
  const styles = StyleSheet.create({
      container: {
        height: 70,
        backgroundColor: '#17abf0',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text:{
        fontFamily: "Roboto",
        fontSize: 20,
        color: '#FFF'
      },
  });