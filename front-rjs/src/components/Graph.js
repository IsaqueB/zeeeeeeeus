import React from 'react'
import Chart from 'chart.js'
import fetch from 'node-fetch'
import '../styles/Graph.css'
import RelevantData from './RelevantData'

class Graph extends React.Component{

    constructor(props){
        super(props)
        this.chartRef = React.createRef();
        this.state = {
            dataFetched: {},
            isDataLoaded: false,
            dataType: props.type
        }
    }

    async getDataFromAPI(){
        let request = await fetch('http://192.168.42.158:3000/list_by_date/')
        this.setState({
            dataFetched: await request.json(),
            isDataLoaded: true
        })
    }           

    componentDidMount(){
        this.getDataFromAPI()
        .then(() => {
            if(this.state.dataFetched.length !== 0){
                this.myChart = this.generateGraph()
                this.setState({
                    isloaded: true
                })
            }
        })
        
    }

    generateGraph(){

        let dataFormatted = this.formatData()

        return (
            new Chart(this.chartRef.current,{
                type: 'bar',
                data: {
                    labels: dataFormatted.graph_labels,
                    datasets: [{
                    label: this.state.dataType,
                    data: dataFormatted.graph_data,
                    backgroundColor: '#112233'
                    }]
                },
                options: {
                    legend:{
                        display: false,
                    },
                    title:{
                        display: true,
                        text: this.state.dataType,
                    },
                    scales: {
                        xAxes: [{
                            scaleLabel:{
                                display: true,
                                labelString: 'dias'
                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            scaleLabel:{
                                display: false
                            },
                            gridLines: {
                                display: false,
                            }
                        }]
                    },
                    tooltips:{
                        callbacks:{
                            title: function(tooltipItem){
                                return  "Compra do dia: "+tooltipItem[0].label
                            },
                            label: function(tooltipItem){
                                return this._data.datasets[0].label + ": "+tooltipItem.value
                            }
                        }
                    }
                },
            })
        )
    }

    formatData(){
        let graph_labels = []
        let graph_data = []
        let x = []
        x["price"] = 1
        x["weight"] = 2

        
        let last_day_of_last_month = new Date() //Last Day of Last Month
        last_day_of_last_month.setDate(0)
        let initial_date = ((new Date()).getDate()-29)
        let today = new Date()

        for(let index = initial_date; index <= today.getDate(); index++){//Preenchendo vetor labels
            if(index <= 0){
                graph_labels.push(index+last_day_of_last_month.getDate())
                graph_data.push(0)
            }
            else{
                graph_labels.push(index)
                graph_data.push(0)
            }
        }
        switch (this.state.dataType){
            case "weight":
                this.state.dataFetched.forEach(function(purchase){
                    let day = new Date(purchase.createdAt)
                    graph_data[graph_labels.indexOf(day.getDate())] += purchase.weight
                })
                break
            case "price":
                this.state.dataFetched.forEach(function(purchase){
                    let day = new Date(purchase.createdAt)
                    graph_data[graph_labels.indexOf(day.getDate())] += purchase.price
                })
                break
            default:
                break
        }
        return {
            graph_labels: graph_labels,
            graph_data: graph_data,
        }
    }

    render(){
        if (this.state.isDataLoaded === true){
            if(this.state.dataFetched.length === 0){
                return(
                    <label>Você não comprou nada ainda :(</label>
                )
            }
            else{
                return(
                    <div style={{display: "flex", flexDirection: "column", textAlign:"center"}}>
                        <div id="div">
                            <canvas width="100" height="60"ref={this.chartRef} />
                        </div>
                        <RelevantData type={this.state.dataType} data={this.state.dataFetched}/>
                    </div>
                )
            }
        }
        else{
            return(
                <label>Carregando ;)</label>
            )
        }
    }
}

export default Graph