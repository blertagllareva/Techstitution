$(document).ready(function() {
    $('.toggle').hide();
    $('button').click(function() {
    $('.toggle').slideToggle('slow');
    
    });
});

$(document).ready(function() {

    var $submit = $("#submit_prog").hide(),
        $cbs = $('input[name="prog"]').click(function() {
            $submit.toggle( $cbs.is(":checked") );
        });

});