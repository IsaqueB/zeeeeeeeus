function update_days_by_month(month){
  $(function(){
    month = parseInt(month)
    var $select_day = $('.select_day')
    today = new Date()
    today.setMonth(month)
    today.setDate(0)
    if(parseInt($('.select_day option:last-child').val()) != today.getDate()){
      $select_day.empty()
      for(let day = 0; day < today.getDate(); day++){
        $select_day.append("<option value="+(day+1)+" class='dia_select'>"+(day+1)+"</option>")
      }
    }
  })
  }
function update_days(){
  console.log("here5")
  $(function(){
    var $select_day = $('.select_day')
    $select_day.empty()
    today = new Date()
    today.setMonth(today.getMonth()+1)
    today.setDate(0)
    for(let day = 0; day < today.getDate(); day++){
      $select_day.append("<option value="+(day+1)+" class='dia_select'>"+(day+1)+"</option>")
    }
  })
}
