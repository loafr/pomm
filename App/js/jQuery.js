$(document).ready(function() {

$('#requestQuote').click(function(){
        vex.dialog.open({
            message: 'Enter your Information where you can easily be reached:',
            input: '' +
                '<input name="Name" type="text" placeholder="Name" required />' +
                '<input name="e-mail" type="text" placeholder="e-mail" required />' +
                '<input name="phone" type="text" placeholder="Phone Numner" required />' +
            '',
            buttons: [
                $.extend({}, vex.dialog.buttons.YES, { text: 'OK' }),
                $.extend({}, vex.dialog.buttons.NO, { text: 'Cancel' })
            ]
        });
    });
});