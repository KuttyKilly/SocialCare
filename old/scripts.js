//script to log in and move to homepage when log in success or alert and stay on log in page when fail.
$(document).on("pageinit", "#loginForm", function () {
    $("#form1").on("submit", function (event) {
        //event.preventDefault();
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

//script to append information on expenditure page
$(document).ready( function() {     

    $('#add_list').click( function() {
        var listDescription = $('#list_description').val();
        var payment = $('#payment').val();


        $('.expense_list').prepend('<div>' + "\u00A3 "  + listDescription + "\t\t\t" + payment + "\t" + '</div>'); 
        
        /*        
        $.ajax({
        type:"Post",
        url:"http://softwarehuttest.x10.mx/public/user/spent/?amount="+listDescription+"&account="+payment,
        async:true,
        cache:false,
        success:function(data) {
        if (data.loggedIn) {
                    $.mobile.changePage("#expense");
                } else {
                    alert("Invalie Entry");
                }
        } 

        });
        */
        
        $('#list_form')[0].reset();
        return false;                           
    });     
}); 

//dropdown
$(document).ready(function() {
    $('.menu').dropit();
});


//back button for all pages less home
$.mobile.page.prototype.options.addBackBtn = "true"; 
$.mobile.page.prototype.options.backBtnText = "Go Back";

