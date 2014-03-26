$(document).on("pageinit", "#loginForm", function () {
    $("#form1").on("submit", function (event) {
        event.preventDefault();

        $.ajax({
            type: "GET",
            url: "http://softwarehuttest.x10.mx/public/account/login/",
            data: $("#form1").serialize(),
            success: function (data) {
                console.log(data);
                if (data.loggedIn) {
                    $.mobile.changePage("#home");
                } else {
                    alert("You entered the wrong username or password. Please try again.");
                }
            }
        });
    });
});

$(document).ready( function() {     

    $('#add_list').click( function() {
        var listDescription = $('#list_description').val();

        $('.expense_list').prepend('<div>' + listDescription + '</div>'); 
        $('#list_form')[0].reset();
        return false;                           
    });     
}); 


//back button for all pages less home
$.mobile.page.prototype.options.addBackBtn = "true"; 
$.mobile.page.prototype.options.backBtnText = "Go Back";