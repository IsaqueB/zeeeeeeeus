function update_purchases(){
    $(function(){
        var $purchases = $('.purchases')
        $purchases.empty()
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/list_all',
            dataType: 'json',
            success: function(data){
                purchases = data.all_purchases
                purchases.forEach( function(valor,chave) {
                    let hour = valor.createdAt[11]+valor.createdAt[12]
                    let minute = valor.createdAt[14]+valor.createdAt[15]
                    let day = valor.createdAt[8]+valor.createdAt[9]
                    let month = valor.createdAt[5]+valor.createdAt[6]
                    let year = valor.createdAt[0]+valor.createdAt[1]+valor.createdAt[2]+valor.createdAt[3]
                    $purchases.append('<div class="purchase" onclick="expandPurchase(this)"><label class="txt_purchase">R$: '+valor.price+",  "+valor.weight+' KG; comprada ás: '+hour+':'+minute+' do dia '+day+'/'+month+'/'+year+'</label><button id="close_invisible" onclick="delete_purchase"><img id="close_button" src="img/close_button.png"></button></div>')
                });
            },
        })
    })
}
