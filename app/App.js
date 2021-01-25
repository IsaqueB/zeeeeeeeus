import React from 'react';
import { Animated, Button, StyleSheet, TouchableOpacity, Image, View, ImageBackground } from 'react-native';
import Home from './screens/home_page'
import Main from './screens/purchaselist_page'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'aa',
      expanded: false,
      slideAnim: new Animated.Value(-200),
      fadeAnim: new Animated.Value(0),
      drawerPosition: 'absolute',
      drawerDisplay: 'flex'
    }
  }

  selector(new_page){
    this.setState(() => {
      return {page: new_page}
    })
    this.slideContainer()
  }

  slideContainer(){
    if(this.state.expanded){
      Animated.parallel([
          Animated.timing(this.state.slideAnim,{
          toValue: -200,
          duration: 300,
          useNativeDriver: true
          }),
        Animated.timing(this.state.fadeAnim,{
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        })]).start(() => this.setState(() =>{
          return {expanded: false, drawerPosition: 'relative', drawerDisplay: 'none'}
        }))
    }else{
      this.setState(() =>{
        return {drawerPosition: 'absolute', drawerDisplay: 'flex'}
      })
      Animated.parallel([
        Animated.timing(this.state.slideAnim,{
        toValue: 0,
        duration: 300,
        useNativeDriver: true
        }),
        Animated.timing(this.state.fadeAnim,{
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true
        })]).start()
      this.setState(() =>{
        return {expanded: true}
      })
    }
  }

  HandleClickOutside(event){
    console.warn("a")
  }

  render(){
    return (
        <View style={styles.View}>
            <View style={styles.LoadedContent}>
              <Image source={require("./img/dog3.png")} style={{position: 'absolute',width: 250, height: 250, bottom: 0, right: 0}}/>
              <Teste style={styles.LoadedContent} s={(this.state.page)}/>
            </View>

          <Animated.View style={{backgroundColor: "#000000", height: '100%', width: '100%', elevation: 6, opacity: this.state.fadeAnim, position: this.state.drawerPosition, display: this.state.drawerDisplay}}/>

          <TouchableOpacity activeOpacity={0.5}style={{height:'100%',width: '100%', position: this.state.drawerPosition, display: this.state.drawerDisplay}} onPress={(()=>this.slideContainer())}/>


          <TouchableOpacity style={styles.MenuButton} activeOpacity={0.5} onPress={(()=>this.slideContainer())}>
            <Image source={require("./img/menu.png")} tintColor="white"/>
          </TouchableOpacity>
          

          <Animated.View style={[styles.SideMenu,{translateX: this.state.slideAnim}]}>
            <TouchableOpacity activeOpacity={0.5} onPress={(()=>this.slideContainer())}>
              <Image source={require("./img/close.png")} tintColor="white"/>
            </TouchableOpacity>
            <Button style={styles.Button} title="aa" onPress={(()=>this.selector("aa"))}/>
            <Button style={styles.Button} title="bb" onPress={(()=>this.selector("bb"))}/>
            <Button style={styles.Button} title="cc" onPress={(()=>this.slideContainer())}/>
          </Animated.View>
          
        </View>
    );
  }
}
function Teste(props){

  switch(props.s){
    case 'aa':
      return <Home/>
    case 'bb':
      return <Main/>
  }
}
const styles = StyleSheet.create({
  View:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  LoadedContent:{
    flex: 1,
  },
  SideMenu:{
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#17abf0',
    elevation: 8,
  },
  MenuButton:{
    position: 'absolute',
    left: 5,
    top: 15,
  },
});
export default App
