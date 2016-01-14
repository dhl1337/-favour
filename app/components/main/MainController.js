/**
 * Created by danle on 1/5/16.
 */
(function () {
    'use strict';
    angular
        .module('favourApp')
        .controller('MainController',['MainService', '$stateParams', 'notificationService', MainController]);

    function MainController (MainService, notificationService) {

        var vm = this;

        vm.currentUser = currentUser;
        vm.dropDownFilter = dropDownFilter;
        vm.getFavours = getFavours;
        vm.pendingFriend = pendingFriend;
        vm.favs = MainService.addFavoriteFavors();
        vm.users = MainService.getUsers();

        currentUser();
        getFavours();

        function pendingFriend (friend) {
            notificationService.pendingFriends(friend, vm.currUser);
        };

        vm.friends = MainService.getFriends(vm.currUser);


        function currentUser () {
            vm.currUser = MainService.currentUser();
        }
        function getFavours () {
            vm.favors = MainService.getFavors();
            vm.favors.$loaded(function(){
                for (var i = 0; i < vm.favors.length; i++) {
                    for (var j=0;j<vm.favs.length;j++) {
                        if (vm.favs[j].$value == vm.favors[i].$id) {
                            vm.favors[i].favorited = true;
                        }
                    }
                }
            })
        }

        function dropDownFilter () {
            $('.ui.dropdown')
                .dropdown()
            ;
        }
    }
})();