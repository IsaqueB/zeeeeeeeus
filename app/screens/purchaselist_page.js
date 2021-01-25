import React from 'react'
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import Header from '../components/header'
import ListPurchases from '../components/list_purchases'

class HomePage extends React.Component {

    constructor(props){
        super()
    }

    render() {
        return(
                <>
                    <Header style={styles.Home} title="Suas Compras"/>
                    <ListPurchases/>
                </>
            
      )}
}
    
const styles = StyleSheet.create({
    Home: {
        flex: 1,
        elevation: 99,
    },
  });
export default HomePage