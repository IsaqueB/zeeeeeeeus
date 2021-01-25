import React from 'react'
import '../styles/RelevantData.css'

class RelevantData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: props.data,
            dataType: props.type,
        }
    }

    componentDidMount(){
        let avarage = 0
        switch(this.state.dataType){
            case 'weight':
                this.state.data.forEach(function (purchase){
                    avarage += parseInt(purchase.weight)
                })
                avarage = (avarage/30).toFixed(2)
                break
            case 'price':
                this.state.data.forEach( function(purchase){
                    avarage += parseInt(purchase.price)
                })
                avarage = (avarage/30).toFixed(2)
                break
            default:
                break
        }
        this.setState({
            avg: avarage
        })
    }

    textSelect(){
        switch(this.state.dataType){
            case 'weight':
                return (
                    "Gasto médio em R$: "+this.state.avg
                );
            case 'price':
                return (
                    "Você comprou: "+this.state.avg+" kg"
                );
            default: 
                return (
                    "Que merda cê fez, mermão?"
                )
        }
    }

    render(){
        return(
            <div id="relevant_data">
                <label id="relevant_data_label">{this.textSelect()}</label>
            </div>
            )
    }
}
  
export default RelevantData;