$('#100').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/100/",
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });
});

for(var i = 0; i < 99; ++i)
    var value = '#' + i.toString();
    Console.log("Value: " + value)
    $(value).click(function(e){
        $.ajax({
            type: "POST",
            url: "http://129.21.76.35:5000/gpio/" + i.toString() + "/",
            success: function() { console.log("SUCCESS");},
            error: function() { console.log("FAIL");}
        });
    });

//$('#50').click(function(e){
//    $.ajax({
//        type: "POST",
//        url: "http://129.21.76.35:5000/gpio/50/",
//        success: function() { console.log("SUCCESS");},
//        error: function() { console.log("FAIL");}
//    });
//});
//
//$('#25').click(function(e){
//    $.ajax({
//        type: "POST",
//        url: "http://129.21.76.35:5000/gpio/25/",
//        success: function() { console.log("SUCCESS");},
//        error: function() { console.log("FAIL");}
//    });
//});
//
//$('#0').click(function(e){
//    $.ajax({
//        type: "POST",
//        url: "http://129.21.76.35:5000/gpio/0/",
//        success: function() { console.log("SUCCESS");},
//        error: function() { console.log("FAIL");}
//    });
//});