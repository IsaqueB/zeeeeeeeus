import React from "react"
import fetch from 'node-fetch'
import Purchase from './Purchase'
import "../styles/PurchaseList.css"

class PurchaseList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            isloaded: false
        }
    }

    async requestData(){
        let data = await (await fetch('http://192.168.42.158:3000/list_all/')).json()
        let aux_vector = []
        for(let iterator = 0; iterator < 10; iterator++){
            aux_vector.push(<Purchase 
                _id={data[iterator]._id}
                weight={data[iterator].weight} 
                price={data[iterator].price}
                createdAt={await this.formatDate(data[iterator].createdAt)}
                />)
        }
        this.setState({
            data: aux_vector
        })
    }

    formatDate(date){
        let hour = date[11] + date[12]
        let minute = date[14] + date[15]
        let day = date[8] + date[9]
        let month = date[5] + date[6]
        let year = date[0] + date[1] + date[2] + date[3]
        return '('+hour+":"+minute+" - "+day+"/"+month+"/"+year+')'
    }

    componentDidMount(){
        this.requestData()
    }

    

    render(){
        return(
            <div id="minarolita">{this.state.data}</div>
        )
    }
}

export default PurchaseList