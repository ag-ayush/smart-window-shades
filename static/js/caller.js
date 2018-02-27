$('#100').click(function(){
    $.ajax({
        type: "POST",
        url: "https://129.21.76.35:5000/gpio/100/",
        crossDomain: true,
//      Needed because of callback gibberish in url at the end.
        jsonp : false,
        jsonpCallback: '',

        dataType: 'jsonp',
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });
});