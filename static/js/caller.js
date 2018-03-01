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

            put_shade_height();
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

function put_shade_height(){
    $.get("http://129.21.76.35:5000/gpio/get/current/", function(data, status){
                //data is jsonp, I want to print the first value in it as html
                var obj = JSON.parse(data);
                $('#perc').html(obj["data"] + " %");
             });
}

$('#up').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/set/current/up",
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });

    put_shade_height();
});

$('#down').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/set/current/down",
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });

    put_shade_height();
});

//TODO: Change the string:steps
$('#steps').click(function(e){
    var val = $("#input").val()
    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/set/steps/" + val,
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });
});