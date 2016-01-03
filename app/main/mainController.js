/**
 * Created by danle on 1/2/16.
 */
(function(){

    function mainController (mainService) {
        var vm = this;

        vm.getFavors = function () {
            vm.favors = mainService.getFavors();
        };
        vm.getFavors();
    }

    angular
        .module('app')
        .controller('mainController', ['mainService', mainController]);
})();