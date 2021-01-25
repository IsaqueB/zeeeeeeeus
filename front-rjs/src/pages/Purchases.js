import React from 'react'
import PurchaseList from '../components/PurchaseList'

class Purchases extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <PurchaseList/>
    )
  }

}

export default Purchases;