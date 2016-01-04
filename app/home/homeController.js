/**
 * Created by danle on 1/2/16.
 */
(function(){
    'use strict';

    function homeController (MainService) {

        var vm = this;
        vm.login = function () {
            MainService.loginWithFacebook();
        }
    }

    angular
        .module('app')
        .controller('homeController',['MainService', homeController]);
})();