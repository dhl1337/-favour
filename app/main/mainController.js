/**
 * Created by danle on 1/2/16.
 */
(function(){

    function mainController (MainService) {
        var vm = this;

        vm.getFavors = function () {
            vm.favors = MainService.getFavors();
        };
        vm.getFavors();

        vm.getUsers = function () {
            vm.users = MainService.getUsers();
        };
        vm.getUsers();

        vm.currentUser = MainService.currentUserName;

        vm.logout = function () {
            MainService.logout();
        };
        vm.addFavor = function (favorTitle, favorContent) {
            vm.favor = {
                name: vm.users.name,
                pic: vm.users.pic,
                favorTitle: favorTitle,
                favorContent: favorContent,
                date: Firebase.ServerValue.TIMESTAMP
            };
            console.log(vm.favor);
            vm.favors.$add(vm.favor);
        };

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


    }

    angular
        .module('app')
        .controller('mainController', ['MainService', mainController]);
})();