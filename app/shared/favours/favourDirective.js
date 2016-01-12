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
                currUser: '='
            },
            controller: favourController,
            controllerAs: 'favourCtrl'
        };

        function favourController ($scope, MainService) {

            var vm = this;

            vm.dropDownEdit = dropDownEdit;
            vm.addFavoriteFvr = addFavoriteFvr;

            vm.currUser = $scope.currUser;
            vm.favours = $scope.favours;

            vm.favs = MainService.addFavoriteFavors();

            console.log(vm.favours.favorited);
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


            function dropDownEdit () {
                $('.ui.right.pointing.dropdown')
                    .dropdown()
                ;
            }
        }
        return directive;
    }
})();