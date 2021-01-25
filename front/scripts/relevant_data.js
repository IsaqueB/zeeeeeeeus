async function relevant_data_update(){
    await $.get("http://localhost:3000/list_by_date/").then(request => {
        let avg_weight = 0
        let avg_price = 0
        request.forEach( function(purchase){
            avg_weight += parseInt(purchase.weight)
            avg_price += parseInt(purchase.price)
        })
        avg_weight = ((avg_weight/30).toFixed(2)+" kg")
        avg_price = ("R$ "+(avg_price/30).toFixed(2))
        
        document.getElementById('peso_30').innerHTML = avg_weight
        document.getElementById('gasto_30').innerHTML = avg_price
    })
}