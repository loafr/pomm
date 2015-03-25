$(document).ready(function() {

$('.vex-email-login').click(function(){
        vex.dialog.open({
            message: 'Enter your username and password:',
            input: '' +
                '<input name="username" type="text" placeholder="Username" required />' +
                '<input name="password" type="password" placeholder="Password" required />' +
            '',
            buttons: [
                $.extend({}, vex.dialog.buttons.YES, { text: 'Login' }),
                $.extend({}, vex.dialog.buttons.NO, { text: 'Back' })
            ],
            callback: function () {
                $('.vex-email-login').replaceWith('<a id="nText vex-email-logout" class="vex-email-logout"><button type="button" class="btn btn-default navbar-btn">Log Out</button></a>');
            }
        });
});
$('.vex-email-logout').click(function(){
    console.log("hello");
    $('#vex-email-logout').replaceWith('<a id="nText vex-email-logout" class="vex-email-login"><button type="button" class="btn btn-default navbar-btn">Log In</button></a>');
}); 
});