/**
 * Created by danle on 1/5/16.
 */
(function () {
    angular
        .module('app')
        .directive('navBar', navBar);

    function navBar () {
        var directive = {
            templateUrl: '../app/view/nav-partialView.html',
            controller: NavController,
            controllerAs: 'navCtrl',
            link: link,
            bindToController: true
        };
        return directive;
    }

    function link (scope, element, attribute) {
        element.find('.ui .item').on('click', function () {
            angular.element('.ui .item')
                .removeClass('active');
            angular.element(this)
                .addClass('active');
        })
    }

    function NavController (MainSvc) {
        var vm = this;

        vm.logout = function () {
            MainSvc.logout();
        };

        //$('.ui .item').on('click', function() {
        //    $('.ui .item').removeClass('active');
        //    $(this).addClass('active');
        //});
    }
})();