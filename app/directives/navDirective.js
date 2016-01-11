/**
 * Created by danle on 1/9/16.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .directive('navBar', navBar);

    function navBar () {
        var directive = {
            templateUrl: '../app/view/nav-partialView.html',
            controller: NavController,
            controllerAs: 'navCtrl',
            bindToController: true
        };
        return directive;
    }

    function NavController (LoginService, MainSvc) {
        var vm = this;

        vm.logout = logout;
        vm.currentUser = MainSvc.currentUser();



        //console.log(vm.userId);
        function logout () {
            LoginService.logout();
        };

    }
})();