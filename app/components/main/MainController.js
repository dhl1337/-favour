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
        vm.getFavors = getFavors;
        vm.addFavoriteFvr = addFavoriteFvr;
        vm.dropDownFilter = dropDownFilter;
        vm.dropDownEdit = dropDownEdit;
        vm.postModal = postModal;
        vm.addFavor = addFavor;

        vm.favs = MainService.addFavoriteFavors();
        vm.users = MainService.getUsers();


        function currentUser () {
            vm.currUser = MainService.currentUser();
        }
        currentUser();


        function getFavors () {
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
        getFavors();

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
            console.log('hello');
        }

        function addFavoriteFvr (favor) {
            //console.log(vm.favs);
            if (!favor.favorited) {
                favor.favorited = true;
                vm.favs.$add(favor.$id);
            } else {
                favor.favorited = false;
                for (var i=0;i<vm.favs.length;i++){
                    if (vm.favs[i].$value == favor.$id){
                        vm.favs.$remove(i);
                    }
                }

            }
        }
        function dropDownEdit () {
            $('.ui.right.pointing.dropdown')
                .dropdown()
            ;
        }
        function dropDownFilter () {
            $('.ui.dropdown')
                .dropdown()
            ;
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
})();