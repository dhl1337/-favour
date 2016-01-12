/**
 * Created by danle on 1/11/16.
 */
(function () {
    angular
        .module('favourApp')
        .directive('postFavour', postFavour);

    function postFavour () {
        var directive = {
            templateUrl: '../app/shared/postfavour/postfavourView.html',
            scope: {
              currUser: '=currentUser'
            },
            controller: postFavourController,
            controllerAs: 'post'
        };

        function postFavourController (MainService, $scope) {
            var vm = this;
            vm.addFavor = addFavor;
            vm.postModal = postModal;
            vm.currUser = $scope.currUser;

            function addFavor (favorTitle, favorContent) {
                var favor = {
                    uid: vm.currUser.uid,
                    name: vm.currUser.name,
                    image: vm.currUser.image,
                    favorTitle: favorTitle,
                    favorContent: favorContent,
                    date: Firebase.ServerValue.TIMESTAMP
                };
                MainService.addFavor(favor);
            }

            function postModal () {
                $('.coupled.modal')
                    .modal({
                        allowMultiple: true
                    })
                ;
                // open second modal on first modal buttons
                $('#preview')
                    .modal('attach events', '#favorQuest .button')
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
            }
        }
        return directive;
    }
})();