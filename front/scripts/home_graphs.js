async function graph_function(data, graph_id,color,title,axes_title){
    let data_for_graph = await req_data(data)
    var ctx = document.getElementById(graph_id).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data_for_graph.graph_labels,
            datasets: [{
                label: data,
                backgroundColor: 'rgba('+color+',0.5)',
                borderColor: 'rgba('+color+',1)',
                borderWidth: 2,
                barPercentage: 1,
                data: data_for_graph.graph_data
            }]
        },
        options: {
            title:{
                display: true,
                text: title,
            },
            legend:{
                display: false,
            },
            maintainAspectRatio: false, 
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
                        display: true,
                        labelString: axes_title
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
                        return axes_title+": "+tooltipItem.value
                    }
                }
            }
        }
    });
}
async function req_data(data){
    let graph_labels = []
    let graph_data = []
    let request = await $.get("http://localhost:3000/list_by_date/").then(request => {

        let last_day_of_last_month = new Date() //Last Day of Last Month
        last_day_of_last_month.setDate(0)

        let initial_date = ((new Date()).getDate()-29)

        let today = new Date()
        

        //
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
        switch (data){
            case "weight":
                request.forEach(function(purchase){
                    let day = new Date(purchase.createdAt)
                    graph_data[graph_labels.indexOf(day.getDate())] += purchase.weight
                })
                break
            case "price":
                request.forEach(function(purchase){
                    let day = new Date(purchase.createdAt)
                    graph_data[graph_labels.indexOf(day.getDate())] += purchase.price
                })
                break
        }
    })
    return {
        graph_labels: graph_labels,
        graph_data: graph_data,
    }

}