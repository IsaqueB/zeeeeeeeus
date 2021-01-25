import React from 'react'
import { StyleSheet, View } from 'react-native';
import Header from '../components/header'
import Forms from '../components/new_purchase'

class HomePage extends React.Component {
    render() {
        return(
            <View style={styles.Home}>
                <Header title="Adicionar Nova Compra"></Header>
                <View style={{marginTop: '20%'}}/>
                <Forms/>
            </View>
      )}
}
    
const styles = StyleSheet.create({
    Home:{
        flex: 1,
    }
  });
export default HomePage