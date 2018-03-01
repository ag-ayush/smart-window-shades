//TODO: Change the string:steps
$.ajax({
    type: "GET",
    url: "http://129.21.76.35:5000/gpio/get/current/",
    dataType: "jsonp"
    jsonp : false,
    jsonpCallback: false,
    cache: true,

    success: function(msg) {
        $.each(msg.response.docs, function (index, doc){
          $.each(doc, function (key, val) {
            console.log(key + 'is' + val);
          });
        }
    }

    error: function() { console.log("FAIL");}
});