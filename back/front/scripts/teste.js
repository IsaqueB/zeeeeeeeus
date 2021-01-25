    alert('b')
    $(function(){
        var $right_container = $('.purchases_list')
        $.ajax({
            type: 'GET',
            url: '/teste.html',
            success: function(data){
                $right_container.replaceWith(data)
                
            },
        })
    })
