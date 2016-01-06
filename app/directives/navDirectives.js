/**
 * Created by danle on 1/5/16.
 */
(function () {
    angular
        .module('app')
        .directive('navDirectives', navDirectives);

    function navDirectives () {
        var directive = {
            link: link,
            templateUrl: 'view/nav-partialViewl.html',
            controller: NavController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function link (scope, element, attrs) {

        }
    }

    function NavController () {
        var vm = this;

    }
})();