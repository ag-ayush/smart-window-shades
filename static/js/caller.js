$('#100').click(function(e){
    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/100/",
        success: function() { alert("SUCCESS");},
        error: function() { alert("FAIL");}
    });
});

var percents = [];
for(var i = 0; i < 101; ++i) {
    percents.push(i);
}

$.each(percents, function(e, item)) {
    var b = '#' + i.toString();
    $(b).click(function(e){
                $.ajax({
                    type: "POST",
                    url: "http://129.21.76.35:5000/gpio/" + item.toString() + "/",
                    success: function() { alert("SUCCESS");},
                    error: function() { alert("FAIL");}
                });
            });
}


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