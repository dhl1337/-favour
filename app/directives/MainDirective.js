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
            bindToController: true
        };
        return directive;
    }

    function NavController (MainSvc) {
        var vm = this;

        vm.logout = function () {
            MainSvc.logout();
        };

        $('.ui .item').on('click', function() {
            $('.ui .item').removeClass('active');
            $(this).addClass('active');
        });
    }
})();