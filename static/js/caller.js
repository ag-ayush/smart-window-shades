//Creates a click event for buttons 0 to 100
for(var i = 0; i < 101; ++i) {
    (function (i) {
        var value = '#' + i.toString();
        $(value).click(function(e){
            $.ajax({
                type: "POST",
                url: "http://129.21.76.35:5000/gpio/" + i.toString() + "/",
                success: function() { console.log("Success");},
                error: function() { console.log("Fail");}
            });
        });
    })(i);
}

/* Original */
//$('#100').click(function(e){
//    $.ajax({
//        type: "POST",
//        url: "http://129.21.76.35:5000/gpio/100/",
//        success: function() { console.alert("SUCCESS");},
//        error: function() { console.alert("FAIL");}
//    });
//});