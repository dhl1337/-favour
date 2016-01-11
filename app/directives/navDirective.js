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

    function NavController (LoginService) {
        var vm = this;
        vm.logout = logout;
        vm.activeNavItem = activeNavItem;

        function logout () {
            LoginService.logout();
        };

        function activeNavItem () {
            $('.ui .item').removeClass('active');
            $(this).addClass('active');
        };

        $('.ui .item').on('click', function() {
            $('.ui .item').removeClass('active');
            $(this).addClass('active');
        });
        //$('.ui .item').on('click', function() {
        //    $('.ui .item').removeClass('active');
        //    $(this).addClass('active');
        //});
    }
})();