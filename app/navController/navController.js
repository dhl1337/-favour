/**
 * Created by danle on 1/3/16.
 */
(function(){

    function navController (MainService) {
        var vm = this;

        vm.logout = function () {
            MainService.logout();
            console.log('hello');
        }

        vm.hello = 'can you hear me';
    }

    angular
        .module('app')
        .controller('navController',['MainService', navController])
})();