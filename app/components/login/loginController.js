/**
 * Created by danle on 1/11/16.
 */
(function () {
    'use strict';
    angular
        .module('favourApp')
        .controller('loginController', ['loginService', loginController]);

    function loginController (loginService) {
        var vm = this;

        vm.login = login;

        function login () {
            loginService.loginWithFacebook();
        }
    }
})();