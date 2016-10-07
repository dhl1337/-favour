(function () {
    'use strict';
    angular
        .module('favourApp')
        .directive('navBar', navBar);

    function navBar () {
        var directive = {
            templateUrl: '../app/shared/navbar/navView.html',
            controller: NavController,
            controllerAs: 'navCtrl',
            bindToController: true
        };
        return directive;
    }

    function NavController (loginService, MainService) {
        var vm = this;

        vm.logout = logout;
        vm.currentUser = MainService.currentUser();

        function logout () {
            loginService.logout();
        }

    }
})();