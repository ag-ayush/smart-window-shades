$('#100').click(function(e){
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "129.21.76.35:5000" + $("#100".val()),

        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }
    });
});