import React from 'react'
import '../styles/NavbarItem.css'

class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      image: props.img,
      label: props.label,
      navbar_expanded: props.show,
    }
  }
  
  componentDidUpdate(prevProps){
    if(this.props.show !== prevProps.show)
      this.setState({navbar_expanded: this.props.show})
  }

  render(){
    return ( 
        <div className="NavbarItem">
          <label id={this.state.navbar_expanded ? 'ExtraInfoVisible' : 'ExtraInfoHidden'}>
            {this.state.label}
          </label> 
          <div className="NavbarItemIconContainer">
            <img src={this.state.image} alt="" className="NavbarItemIcon"/>
          </div>
        </div>
    );
  }
}

  export default Navbar;