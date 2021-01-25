import React from 'react'

import Navbar from './components/Navbar.js'
import LoadedContent from './components/LoadedContent.js'

import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home'
    }
    this.handleNavbarItemClick = this.handleNavbarItemClick.bind(this)
  }

  handleNavbarItemClick(new_page){
    this.setState({
      page: new_page
    })
  }

  render(){
    return (
      <div class="Teste">
        <Navbar updatePageCallbackFunction={this.handleNavbarItemClick}/>
        <LoadedContent currentPage={this.state.page}/>
      </div>
    );
  }
}

export default App;
