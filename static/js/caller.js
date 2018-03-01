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

            $.get("http://129.21.76.35:5000/gpio/get/current/", function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
             });
        });
    })(i);
}

/* Original */
//$('#100').click(function(e){
//    $.ajax({
//        type: "POST",
//        url: "http://129.21.76.35:5000/gpio/100/",
//        success: function() { console.log("SUCCESS");},
//        error: function() { console.log("FAIL");}
//    });
//});

$('#up').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/set/current/up",
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });
});
$('#down').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/set/current/down",
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });
});

//TODO: Change the string:steps
$('#steps').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/set/steps/<string:steps>/",
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });
});