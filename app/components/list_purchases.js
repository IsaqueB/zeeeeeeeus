import React from 'react'
import { View, Text, FlatList, Button, Image } from 'react-native';
import Purchase from './purchase'
import axios from 'axios';


class ListPurchases extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            is_loaded: false,
            purchases: [],
            last_listed_month: new Date().getMonth()
        }
    }

    async requestData(month){
        if(!this.state.is_loaded){
            try{
                let request = await axios.get("http://192.168.42.34:3000/list_by_date/"+month)
                let new_purchases_vector = this.state.purchases
                request.data.forEach((purchase) => {
                    new_purchases_vector.push(purchase)
                })
                this.setState(() => {
                    return {is_loaded: true, purchases: new_purchases_vector}
                })
            }catch(err){
                console.warn(err)
            }
        }
    }

    MonthGroup = (month_purchases) => {
        return (
            <View>
                <Text>
                    x
                </Text>
            </View>
        )
    }

    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#CED0CE",
            }}
          />
        );
    }

    render() {
        this.requestData(this.state.last_listed_month)
        if(this.state.is_loaded){
            return ( 
                <View style={{flex: 1}}>
                    {this.MonthGroup("aaa")}
                <FlatList
                  data={this.state.purchases}
                  renderItem={({ item }) => (
                    <Purchase weight={item.weight} price={item.price} createdAt={item.createdAt} />
                  )}
                  keyExtractor={item => item._id}
                  ItemSeparatorComponent={this.renderSeparator}
                  style={{marginTop: 1}}
                />


                <Button title="Press Me" onPress={() => {
                    this.setState(() => {
                        return {is_loaded: false, last_listed_month: this.state.last_listed_month-1}
                    })
                }}></Button>
                
                </View>
                
            )
        }
        else{
            return(
                <View style={{flex: 1, display: "flex", justifyContent: "center", alignItems: 'center'}}>
                    <Image source={require("../img/loading.jpeg")} style={{width: 250, height: 250, bottom: 0, right: 0}}/>
                </View>
            ) 
        }
    }
}

export default ListPurchases