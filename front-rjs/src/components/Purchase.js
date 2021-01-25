import React from 'react'
import Popup from './Popup'
import '../styles/Purchase.css'

class Purchase extends React.Component{
  constructor(props){
    super(props)
    this._id = props._id
    this.weight = props.weight
    this.price = props.price
    this.createdAt = props.createdAt
    this.state = {
        expanded: false
    }
  }
  
  handleClick = () => {
      this.setState({
          expanded: !this.state.expanded
      })
  }

  render(){
    return(
        <div>
            <div class="purchase" onClick={() => this.handleClick()}>
                <label id="visible">
                    {this._id}
                </label>
            </div>
            {this.state.expanded ? <Popup 
                _id={this._id} 
                weight={this.weight}
                price={this.price}
                createdAt={this.createdAt}
                toggle={this.handleClick}/>
                : null
            }
        </div>
    )
  }

}

export default Purchase;