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

    $('.ui .item').on('click', function() {
        $('.ui .item').removeClass('active');
        $(this).addClass('active');
    });

    $('#pencilIcon').click(function () {
        // initialize all modals
        $('.coupled.modal')
            .modal({
                allowMultiple: true
            })
        ;
        // open second modal on first modal buttons
        $('#preview')
            .modal('attach events', '.favorQues.modal .button')
        ;
        // show first immediately
        $('#favorQuest')
            .modal('show')
        ;
        $('#preview .ui.negative.button').on('click', function(){
            $('#preview')
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

    $('#messageFavour').click(function () {
        console.log('hello');
        $('#comment')
            .modal('show')
        ;
    });

});