function send_new_purchase(e){
    e.preventDefault();
    formData = new FormData(formulario)
    let inputs = formData.entries()
    let object = {}
    for(let position of inputs)
      object[position[0]] = position[1]
    
    console.log(object)
    let np_post = $.post("http://localhost:3000/new_purchase", object);
    update_purchases()
  }