/**
 * Created by danle on 1/2/16.
 */
(function(){
    'use strict';

    function homeController (loginService) {

        this.login = function () {
            loginService.loginWithFacebook();
        }
    }

    angular
        .module('app')
        .controller('homeController',['loginService', homeController]);
})();