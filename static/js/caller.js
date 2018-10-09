//Creates a click event for buttons 0 to 100
for(var i = 0; i < 101; ++i) {
    (function (i) {
        var value = '#' + i.toString();
        $(value).click(function(e){
            $.ajax({
                type: "POST",
                url: "http://shades.student.rit.edu:5000/gpio/" + i.toString(),
                success: function() { console.log("Success");},
                error: function() { console.log("Fail");}
            });

            put_shade_height();
        });
    })(i);
}

//Put shade height on the webpage
function put_shade_height(){
    $.get("http://shades.student.rit.edu:5000/gpio/get/current", function(data, status){
                //data is jsonp, I want to print the first value in it as html
                var obj = JSON.parse(data);
                $('#perc').html(obj["data"] + " %");
             });
}

//Set up or down of the curtain
$('#up').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://shades.student.rit.edu:5000/gpio/set/current/up",
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });

    put_shade_height();
});
$('#down').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://shades.student.rit.edu:5000/gpio/set/current/down",
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });

    put_shade_height();
});

// Set MAX steps on the Pi
$('#steps').click(function(e){
    var val = $("#input_count").val()
    $.ajax({
        type: "POST",
        url: "http://shades.student.rit.edu:5000/gpio/set/steps/" + val,
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });
});

// Moves motor by steps
$('#move').click(function(e){
    var val = $("#input_steps").val()
    $.ajax({
        type: "POST",
        url: "http://shades.student.rit.edu:5000/gpio/move/" + val,
        success: function() { console.log("SUCCESS");},
        error: function() { console.log("FAIL");}
    });

    put_shade_height();
});
