import React from 'react'
import NavbarItem from './NavbarItem'
import '../styles/Navbar.css'

import HomeIcon from '../img/home.png'
import PurchasesIcon from '../img/list.png'
import NewPurchaseIcon from '../img/new_purchase.png'
import InfoIcon from '../img/about.png'

class Navbar extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      expanded: false,
      show: false,
      changePage: props.updatePageCallbackFunction
    }
    
  }


  componentDidMount(){
    const NavbarElement = document.getElementById("Navbar")
    NavbarElement.ontransitionstart = (e) => {
      if (e.srcElement.id === "Navbar")
        if (!this.state.expanded){
          this.setState({show: false})
        }
    }
    NavbarElement.ontransitionend = (e) => {
      if (e.srcElement.id === "Navbar")
        if (this.state.expanded){
          this.setState({show: true})
        }
    }
  }

  render(){
    return (
      <div id="Navbar" 
      className={this.state.expanded ? "NavbarExtended" : "NavbarRetracted"}
      onClick={() => {
        this.setState({expanded: !this.state.expanded})
      }}> 
        <div onClick={() => {
          if(this.state.expanded){
            this.state.changePage('home')
          }
        }}>
          <NavbarItem img={HomeIcon} label="Iniciar" show={this.state.show}/>
        </div>
        <div onClick={() => {
          if(this.state.expanded){
            this.state.changePage('purchases')
          }
        }}>
          <NavbarItem img={PurchasesIcon} label="Compra" show={this.state.show}/>
        </div>
        <div onClick={() => {
          if(this.state.expanded){
            this.state.changePage('newpurchase')
          }
        }}>
          <NavbarItem img={NewPurchaseIcon} label="Nova Compra" show={this.state.show}/>
        </div>
        <div onClick={() => {
          if(this.state.expanded){
            this.state.changePage('info')
          }
        }}>
          <NavbarItem img={InfoIcon} label="Sobre" show={this.state.show}/>
        </div>

      </div>
    );
  }
}

  export default Navbar;