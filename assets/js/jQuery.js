/**
 * Created by danle on 1/2/16.
 */
$(document).ready(function(){

    $(window).scroll({
            previousTop: 0
        },
        function() {
            var currentTop = $(window).scrollTop();
            if (currentTop < this.previousTop) {
                $("#navMenu").show();
            } else {
                $("#navMenu").hide();
            }
            this.previousTop = currentTop;
        });

    $('.content > #favourFilter > .item').on('click', function() {
        $('#favourFilter > .item').removeClass('active');
        $(this).addClass('active');
    });

    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });




    $('.ui.rating')
        .rating('disable')
    ;
});