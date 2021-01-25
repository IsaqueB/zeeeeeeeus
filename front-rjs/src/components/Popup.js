import React from 'react'
import '../styles/Popup.css'
import close_button from '../img/close_button.png'
import dog_image from '../img/logo.jpg'



class Popup extends React.Component{
    constructor(props){
        super(props)
        this.toggle = props.toggle
        this.purchaseInfo = {
            _id: props._id,
            weight: props.weight,
            price: props.price,
            createdAt: props.createdAt
        }
    }
    render(){
        return(
            <div class="Popup">
              <div class="innerPopup">
                    <div class="PopupClose"onClick={() => this.toggle()}>
                        <img id="closebutton" src={close_button} alt=""></img>
                    </div>
                    <div class="PopupContent">
                        <div id="PopupContentHeader"style={{
                            display: 'flex',
                            justifyContent: "space-evenly",
                            alignItems: 'center',
                            width: '100%',
                            marginTop: '5%',
                            marginBottom: '15%'
                        }}>
                            <img id="item_photo" src={dog_image} alt=""></img>
                            {this.purchaseInfo._id}
                        </div>
                        <div style={{
                            display: "flex", 
                            justifyContent:"space-evenly", 
                            width: "100%",
                            }}>
                            <label>Peso: {this.purchaseInfo.weight}</label>
                            <label>Preço: {this.purchaseInfo.price}</label>
                        </div>
                    </div>
              </div>
            </div>
        )
    }
}

export default Popup