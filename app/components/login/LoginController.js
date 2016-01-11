/**
 * Created by danle on 1/9/16.
 */
(function () {
    'use strict';
    angular
        .module('favourApp')
        .controller('LoginController', ['LoginService', LoginController]);

    function LoginController (LoginService) {
        var vm = this;

        vm.login = login;

        function login () {
            LoginService.loginWithFacebook();
        }
    }
})();