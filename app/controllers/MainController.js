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

        vm.getUser = function () {
            vm.user = MainSvc.getUser();
            console.log(vm.user)
        };
        vm.getUser();

        vm.getFavors = function () {
            vm.favors = MainSvc.getFavors();
            for (var i = 0; i < vm.favors.length; i++) {
                if (vm.user.favorites.indexOf(vm.favors[i]) !== -1) {
                    vm.favors[i].isStar = true;
                } else {
                    vm.favors[i].isStar = false;
                }
            }
        };
        vm.getFavors();



        vm.addFavor = function (favorTitle, favorContent) {
            vm.favor = {
                name: vm.user.name,
                image: vm.user.image,
                favorTitle: favorTitle,
                favorContent: favorContent,
                date: Firebase.ServerValue.TIMESTAMP
            };
            vm.favors.$add(vm.favor);
        };


        vm.activeFavorite = function (id) {
            console.log(id);
            vm.favorites = MainSvc.favoriteFavors();
            if (vm.favorites.indexOf(id) === -1) {
                vm.favorites.$add(id);
            }

            $('.ui.rating')
                .rating(
                    'setting', 'clearable', true
                )
            ;
        };
        vm.openCommmentModal = function () {
                $('#comment')
                    .modal('show');
        };

        vm.click = function () {
            $('.ui.right.pointing.dropdown')
                .dropdown()
            ;
        };

        vm.postMessageFavour = function () {
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
        $('.ui.dropdown')
            .dropdown()
        ;

        $('#SignInBtn').click(function(){
            $('.ui.modal')
                .modal('show')
            ;
        });
        $('.ui.accordion')
            .accordion()
        ;
    }
})();