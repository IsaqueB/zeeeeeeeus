async function update_purchases(){
    await $.get("http://localhost:3000/list_all/").then(request => {
        update_container(request)
    })
}
async function refine_purchases(month_req, day_req){
    if(month_req == '99'){
        await $.get("http://localhost:3000/list_all/").then(request => {
        update_container(request)
        })
    }
    else if(day_req == '99'){
        await $.get("http://localhost:3000/list_by_date/"+month_req).then(request => {
            update_container(request)
        })
    }
    else{
        await $.get("http://localhost:3000/list_by_date/"+month_req+"/"+day_req).then(request => {
            update_container(request)
        })
    }
}
function update_container(data){
    {
        var $purchases = $('.purchases')
        $purchases.empty()
        if (data.length == 0){
            $purchases.append('<div class="purchase" id="none" onclick="expandPurchase(this)"><label class="txt_purchase">Nenhuma compra</label></div>')
        }
        else{
            $purchases.empty()
            purchases = data
            purchases.forEach( function(valor) {
                let hour = valor.createdAt[11]+valor.createdAt[12]
                let minute = valor.createdAt[14]+valor.createdAt[15]
                let day = valor.createdAt[8]+valor.createdAt[9]
                let month = valor.createdAt[5]+valor.createdAt[6]
                let year = valor.createdAt[0]+valor.createdAt[1]+valor.createdAt[2]+valor.createdAt[3]
                $purchases.append('<div class="purchase" id='+valor._id+'><div class="txt_purchase"><img id="data_image" src="img/time.png"><label>'+hour+':'+minute+'</label><img id="data_image" src="img/day.png"><label>'+day+'/'+month+'/'+year+'</label></div><div class="extratxt_purchase"><img id="data_image" src="img/money.png">'+valor.price+' | <label>'+valor.weight+'</label><img id="data_image" src="img/weight.png"></div><button id="delete_button" onclick="delete_purchase(this)"><img id="close_button" src="img/close_button.png"></button></div>')
            })
        }
    }
}
