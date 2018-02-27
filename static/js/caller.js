$('#100').click(function(){
    $.ajax({
        type: "POST",
        url: "https://129.21.76.35:5000/gpio/100/",
//      Needed because of callback gibberish in url at the end.
        jsonp : false,
        jsonpCallback: false,

        dataType: 'jsonp',
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });
});