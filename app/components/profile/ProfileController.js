(() => {
    angular
        .module('favourApp')
        .controller('ProfileController', ['MainService','$stateParams',ProfileController]);

    function ProfileController (MainService, $stateParams) {
        const vm = this;
        const currentUserId = $stateParams.userId;

        vm.user = MainService.getUser(currentUserId);

        $('.ui.rating').rating('disable');

    }
})();