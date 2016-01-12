/**
 * Created by danle on 1/11/16.
 */
(function () {
    angular
        .module('favourApp')
        .directive('favour', favour);

    function favour () {
        var directive = {
            templateUrl: '../app/shared/favours/favourView.html',
            scope: {
                favours: '=',
                currUser: '=',
                a: '='
            },
            controller: favourController,
            controllerAs: 'favourCtrl'
        };

        function favourController ($scope, MainService) {

            var vm = this;

            vm.dropDownEdit = dropDownEdit;
            vm.addFavoriteFvr = addFavoriteFvr;
            vm.editFavour = editFavour;
            vm.deleteModal = deleteModal;
            vm.update = update;

            vm.currUser = $scope.currUser;
            vm.favours = $scope.favours;
            vm.a = $scope.a;

            vm.favs = MainService.addFavoriteFavors();



            function addFavoriteFvr (favor) {
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

            function editFavour () {
                var b = {
                    image: vm.favours.image,
                    name: vm.favours.name,
                    date: vm.favours.date,
                    favorTitle: vm.favours.favorTitle,
                    favorContent: vm.favours.favorContent,
                };
                vm.b = b;

                $('#editPost')
                    .modal('show')
                ;

            }
            function update () {
                MainService.editFavor(vm.favours.$id, vm.b);
            }
            function deleteModal () {
                $('#deletePost')
                    .modal('show')
                ;
            }
            function dropDownEdit () {
                $('.ui.right.pointing.dropdown')
                    .dropdown()
                ;
            }
        }
        return directive;
    }
})();