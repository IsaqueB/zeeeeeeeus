function update_days_by_month(month){
  $(function(){
    month = parseInt(month)
    var $select_day = $('#select_day')
    today = new Date()
    today.setMonth(month+1)
    today.setDate(0)
    if(parseInt($('#select_day option:last-child').val()) != today.getDate()){
      $select_day.empty()
      $select_day.append("<option value="+99+" class='dia_select'>Dias</option>")
      if(month != 99){
        for(let day = 0; day < today.getDate(); day++){
          $select_day.append("<option value="+(day+1)+" class='dia_select'>"+(day+1)+"</option>")
        }
      }
    }
  })
  }
function update_days(){
  $(function(){
    var $select_day = $('#select_day')
    $select_day.empty()
    today = new Date()
    today.setMonth(today.getMonth()+1)
    today.setDate(0)
    $select_day.append("<option value="+99+" class='dia_select'>Dias</option>")
    for(let day = 0; day < today.getDate(); day++){
      $select_day.append("<option value="+(day+1)+" class='dia_select'>"+(day+1)+"</option>")
    }
  })
}
