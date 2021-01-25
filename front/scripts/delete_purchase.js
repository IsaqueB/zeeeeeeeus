const { update } = require("../../back/models/purchases");

async function delete_purchase(elem){
    delete_id = elem.parentElement.id
    console.log(delete_id)
    let request = await $.ajax({
        url: 'http://localhost:3000/delete_purchase/'+delete_id,
        type: 'DELETE',
        success: function(result) {
            alert("Compra Deletada")
            update_purchases()
        }
    });
}