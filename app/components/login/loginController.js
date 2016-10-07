(() => {
    angular
        .module('favourApp')
        .controller('loginController', ['loginService', loginController]);

    function loginController (loginService) {
        const vm = this;

        vm.login = () => loginService.loginWithFacebook();

    }
})();