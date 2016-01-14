/**
 * Created by danle on 1/11/16.
 */
(function () {
    angular
        .module('favourApp')
        .directive('profile', profile);

    function profile () {
        var directive = {
            templateUrl: '../app/shared/profile/profileView.html',
            scope: {
                currUser: '=',
            },
            controller: profileController,
            controllerAs: 'profile'
        };

        function profileController ($scope) {
            var vm = this;
            vm.currUser = $scope.currUser;
            vm.favors = $scope.favors;
            console.log(vm.favors);
        }

        return directive;
    }
})();