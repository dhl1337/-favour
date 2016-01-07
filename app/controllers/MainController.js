/**
 * Created by danle on 1/5/16.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .controller('MainCtrl',['MainSvc', '$stateParams', MainCtrl]);

    function MainCtrl (MainSvc, $stateParams) {
        var vm = this;

        vm.login = function () {
            vm.user = MainSvc.loginWithFacebook();
        };


        vm.currentUser = function () {
            MainSvc.currentUserName();
        };

        vm.currentUsers = function () {
            vm.user = MainSvc.getUser();
        };

        vm.users = MainSvc.getUsers();

        vm.getFavors = function () {
            vm.favors = MainSvc.getFavors();
        };
        vm.getFavors();

        vm.getUser = function () {
            vm.user = MainSvc.getUser();
        };

        vm.addFavor = function (favorTitle, favorContent) {
            vm.favor = {
                name: vm.user.name,
                image: vm.user.image,
                favorTitle: favorTitle,
                favorContent: favorContent,
                date: Firebase.ServerValue.TIMESTAMP
            };
            console.log(vm.favor);
            vm.favors.$add(vm.favor);
        };

        vm.getUser();

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

        $('.ui.dropdown')
            .dropdown()
        ;

        $('.reply').click(function () {
            $('#comment')
                .modal('show')
            ;
        });

        $('.ui.rating')
            .rating('disable')
        ;

        $('#SignInBtn').click(function(){
            $('#modeldiv')
                .modal('show')
            ;
        });
        $('.ui.accordion')
            .accordion()
        ;
    }
})();