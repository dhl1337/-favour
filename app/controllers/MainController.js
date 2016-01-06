/**
 * Created by danle on 1/5/16.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .controller('MainCtrl',['MainSvc', MainCtrl]);

    function MainCtrl (MainSvc) {
        var vm = this;

        vm.getFavors = function () {
            vm.favors = MainSvc.getFavors();
        };
        vm.getFavors();

        vm.getUsers = function () {
            vm.users = MainSvc.getUsers();
        };
        vm.getUsers();

        vm.currentUser = MainSvc.currentUserName;

        vm.login = function () {
            MainSvc.loginWithFacebook();
        };

        vm.logout = function () {
            MainSvc.logout();
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

        $('#newsCommentIcon').click(function () {
            console.log('hello');
            $('#hello')
                .modal('show')
            ;
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
    }
})();