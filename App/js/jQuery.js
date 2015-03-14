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
            // buttons: [
            // 	$.extend({}, vex.dialog.buttons.NO, { text: 'Twitter Login' }),
            //     $.extend({}, vex.dialog.buttons.NO, { text: 'Google Login' })
            // ],
            callback: function (data) {
                $('.demo-result-login').show().html('' +
                    '<h4>Result</h4>' +
                    '<p>' +
                        'Username: <b>' + data.username + '</b><br/>' +
                        'Password: <b>' + data.password + '</b>' +
                    '</p>' +
                '')
            }
        });
});


$('.demo-button').click(function(){
	vex.dialog.open({
    message: 'How would you like to Login?',
    contentCSS: { width: '800px' },
    buttons: [
        $.extend({}, vex.dialog.buttons.NO, { className: 'vex-dialog-button-Google vex-button-login-center', text: 'Google', click: function($vexContent, event) {
            $vexContent.data().vex.value = '1st';
            vex.close($vexContent.data().vex.id);
        }}),
        $.extend({}, vex.dialog.buttons.NO, { className: 'vex-dialog-button-Twitter vex-button-login-center', text: 'Twitter', click: function($vexContent, event) {
            $vexContent.data().vex.value = '2nd';
            vex.close($vexContent.data().vex.id);
        }}),
        $.extend({}, vex.dialog.buttons.NO, { className: 'vex-dialog-button-Facebook vex-button-login-center', text: 'Facebook', click: function($vexContent, event) {
            $vexContent.data().vex.value = '3rd';
            vex.close($vexContent.data().vex.id);
        }}),
        $.extend({}, vex.dialog.buttons.NO, { className: 'vex-dialog-button-Email vex-button-login-center vex-email-login', text: 'Email', click: function($vexContent, event) {
            $vexContent.data().vex.value = '4th';
            vex.close($vexContent.data().vex.id);
        }})
    ],
    callback: function(value) {
        // value will be one of the following:
        // false, "1st", "2nd", "3rd"
        console.log('Choice', value);
    }
});
});






});