import React from 'react'

import HomePage from '../pages/Home'
import PurchasesPage from '../pages/Purchases'
import NewPurchasePage from '../pages/NewPurchase'
import InfoPage from '../pages/Info'

import '../styles/LoadedContent.css'

class LoadedContent extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      current_page: props.currentPage
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.currentPage !== prevProps.currentPage)
      this.setState({current_page: this.props.currentPage})
  }

  pageSelector(){
    switch (this.state.current_page){
      case 'home':
        return <HomePage/>
      case 'purchases':
        return <PurchasesPage/>
      case 'newpurchase':
        return <NewPurchasePage/>
      case 'info':
        return <InfoPage/>
      default:
        return "FUDEU PORRAN"
    }
  }

  render(){
    return (
      <div className="LoadedContent">
        {this.pageSelector()}
      </div>
    );
    }
}
  
  export default LoadedContent;