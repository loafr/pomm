$(document).ready(function() {

    $("#dialog").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 100
        },
        hide: {
            effect: "explode",
            duration: 100
        }
    });

    $("#requestQuote").click(function() {
        $("#dialog").dialog("open");
    });

});