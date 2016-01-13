/**
 * Created by danle on 1/11/16.
 */
(function () {
    angular
        .module('favourApp')
        .directive('reviewModal', reviewModal);

    function reviewModal () {
        var directive = {
            templateUrl: '../app/shared/review/reviewmodalView.html',
            controller: reviewController,
            controllerAs: 'review'
        };

        function reviewController () {
            var vm = this;
            vm.addReview = addReview;



            vm.checkboxModel = {};

            function addReview () {
                $('.coupled.modal')
                    .modal({
                        allowMultiple: true
                    })
                ;
                // open second modal on first modal buttons
                $('#reviewPreview')
                    .modal('attach events', '#reviewPost .button')
                ;
                // show first immediately
                $('#reviewPost')
                    .modal('show')
                ;
                $('#reviewPreview .ui.negative.button').on('click', function(){
                    $('#preview')
                        .modal('show')
                    ;
                })
            }

            $('#reviewStar')
                .rating('enable')
            ;


        }
        return directive;
    }
})();