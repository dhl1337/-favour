/**
 * Created by danle on 1/5/16.
 */
(function () {
    angular
        .module('app')
        .directive('navBar', navBar);

    function navBar () {
        var directive = {
            link: link,
            templateUrl: '../app/view/nav-partialView.html',
            controller: NavController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function link (scope, element, attrs) {

        }
    }

    function NavController (MainSvc) {
        var vm = this;

        vm.logout = function () {
            MainService.logout();
        }
    }
})();