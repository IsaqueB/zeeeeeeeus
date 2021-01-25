function expandPurchase(element){
      if(element.getAttribute("class") == "purchase"){
        element.setAttribute("class","purchase_ext")
	      element.children[1].setAttribute("id","delete_button")

      }
      else{
        element.setAttribute("class","purchase")
      	element.children[1].setAttribute("id","close_invisible")
      }
    }
    function expandNewPurchase(element){
      if(element.getAttribute("class") == "new_purchase_form"){
        element.setAttribute("class","new_purchase_form_ext")
      }
      else{
        element.setAttribute("class","new_purchase_form")
      }
    }