$('#100').click(function(){
    $.ajax({
        type: "POST",
        url: "https://129.21.76.35:5000/gpio/100/",
        crossDomain: true,
        dataType: 'jsonp',
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");},
        beforeSend: setHeader
    });
});