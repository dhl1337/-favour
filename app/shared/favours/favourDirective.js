(() => {
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

            const vm = this;

            vm.currUser = $scope.currUser;
            vm.favours = $scope.favours;
            vm.a = $scope.a;

            vm.favs = MainService.addFavoriteFavors();

            vm.addFavoriteFvr = favor => {
                if (!favor.favorited) {
                    favor.favorited = true;
                    vm.favs.$add(favor.$id);
                } else {
                    favor.favorited = false;
                    for (let i=0; i < vm.favs.length; i++){
                        if (vm.favs[i].$value == favor.$id){
                            vm.favs.$remove(i);
                        }
                    }

                }
            };

            vm.editFavour = () => {
                var b = {
                    image: vm.favours.image,
                    name: vm.favours.name,
                    date: vm.favours.date,
                    favorTitle: vm.favours.favorTitle,
                    favorContent: vm.favours.favorContent,
                };
                vm.b = b;

                $('#editPost').modal('show');
            };

            vm.update = () => MainService.editFavor(vm.favours.$id, vm.b);

            vm.deleteModal = () => $('#deletePost').modal('show');

            vm.dropDownEdit = () => $('.ui.right.pointing.dropdown').dropdown();

        }
        return directive;
    }
})();