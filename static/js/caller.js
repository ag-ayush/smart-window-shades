$('#100').click(function(e){
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "http://129.21.76.35:5000/gpio/100/",

        success: function() {
            console.log("SUCCESS");
        },
        error: function() {
            console.log("FAIL");
        }
    });
});