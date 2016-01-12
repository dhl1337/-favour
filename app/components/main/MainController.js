/**
 * Created by danle on 1/5/16.
 */
(function () {
    'use strict';
    angular
        .module('favourApp')
        .controller('MainController',['MainService', '$stateParams', MainController]);

    function MainController (MainService) {

        var vm = this;

        vm.currentUser = currentUser;
        vm.dropDownFilter = dropDownFilter;
        vm.getFavours = getFavours;
        //vm.addFavoriteFvr = addFavoriteFvr;

        vm.favs = MainService.addFavoriteFavors();
        vm.users = MainService.getUsers();

        currentUser();
        getFavours();


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

        //function addFavoriteFvr (favor) {
        //    if (!favor.favorited) {
        //        favor.favorited = true;
        //        vm.favs.$add(favor.$id);
        //    } else {
        //        favor.favorited = false;
        //        for (var i=0;i<vm.favs.length;i++){
        //            if (vm.favs[i].$value == favor.$id){
        //                vm.favs.$remove(i);
        //            }
        //        }
        //
        //    }
        //}


        function dropDownFilter () {
            $('.ui.dropdown')
                .dropdown()
            ;
        }
    }
})();