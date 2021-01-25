import React from 'react'
import { StyleSheet, Text, Image, Animated, View} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class Purchase extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            weight: props.weight,
            price: props.price,
            formated: false,
            createdAt: props.createdAt,
            expended: false,
            height: new Animated.Value(45)
        }
    }

    formatDate(){
        let hour = this.state.createdAt[11] + this.state.createdAt[12]
        let minute = this.state.createdAt[14] + this.state.createdAt[15]
        let day = this.state.createdAt[8] + this.state.createdAt[9]
        let month = this.state.createdAt[5] + this.state.createdAt[6]
        let year = this.state.createdAt[0] + this.state.createdAt[1] + this.state.createdAt[2] + this.state.createdAt[3]
        let response = hour+":"+minute+"  "+day+"/"+month+"/"+year
        this.setState(() => {
            return {createdAt: response, formated: true}
        })
    }

    expand(){
        this.state.formated ? null : this.formatDate()
        if(this.state.expended){
            Animated.timing(this.state.height, {
                toValue: 45,
                duration: 200,
                useNativeDriver: false
              }).start(()=>{
                this.setState(() => {
                    return {expended: !this.state.expended}
                })
              });
        }
        else{
            Animated.timing(this.state.height, {
                toValue: 85,
                duration: 200,
                useNativeDriver: false
              }).start(()=>{
                this.setState(() => {
                    return {expended: !this.state.expended}
                })
              });
        }
    }
    render() {
        return(

            <>
            <TouchableHighlight activeOpacity={0.9} underlayColor='#ffffff' onPress={() => this.expand()}>
                    <Animated.View style={this.state.expended ? [styles.Expended,{height: this.state.height}] : [styles.Normal,{height: this.state.height}]}>
                        
                        <View style={{display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
                            <Image source={require("../img/money.png")} style={[this.state.expended ? {tintColor: '#FFFFFF'} : {tintColor: '#000000'}, {width: 15, height: 15, marginRight: 10}]} tintColor="white"/>
                            <Text style={this.state.expended ? styles.TextExpended : styles.TextNormal}>
                                {this.state.price}
                            </Text>
                        </View>

                        <View style={{display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
                            <Text style={this.state.expended ? styles.TextExpended : styles.TextNormal}>
                                {this.state.weight} kg
                            </Text>
                        </View>

                        <View style={{display: "flex", flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
                            <Image source={require("../img/time.png")} style={[this.state.expended ? {display:'flex',tintColor: '#FFFFFF'} : {display: 'none',tintColor: '#000000'}, {width: 15, height: 15, marginRight: 10}]} tintColor="white"/>
                            <Text style={this.state.expended ? [{display:'flex'}, styles.TextExpended] : [{display: 'none'}, styles.TextNormal]}>
                                {this.state.createdAt}
                            </Text>
                        </View>

                    </Animated.View>
            </TouchableHighlight>
                
            </>
      )}
}
    
const styles = StyleSheet.create({
    Normal: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#EFEFEF",
        width: '100%',
    },
    Expended:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#17abf0',
    },
    TextNormal:{
        color: '#000000'
    },
    TextExpended:{
        color: '#FFFFFF'
    }
  });
export default Purchase