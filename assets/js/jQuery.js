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
                $(".ui.menu").show();
            } else {
                $(".ui.menu").hide();
            }
            this.previousTop = currentTop;
        });

    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });


    $('.favor').click(function () {
        // initialize all modals
        $('.coupled.modal')
            .modal({
                allowMultiple: true
            })
        ;
// open second modal on first modal buttons
        $('.previewFavor.modal')
            .modal('attach events', '.favorQues.modal .button')
        ;
// show first immediately
        $('.favorQues.modal')
            .modal('show')
        ;
        $('.previewFavor.modal .ui.negative.button').on('click', function(){
            $('.favorQues.modal')
                .modal('show')
            ;
        })
    });

    $('.ui.rating')
        .rating('disable')
    ;

    $('#SignInBtn').click(function(){
        $('#modeldiv')
            .modal('show')
        ;
    });

    $('.ui.dropdown')
        .dropdown()
    ;


});