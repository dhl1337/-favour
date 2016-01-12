/**
 * Created by danle on 1/10/16.
 */
(function () {
    angular
        .module('favourApp')
        .controller('ProfileController', ['MainService','$stateParams',ProfileController]);

    function ProfileController (MainService, $stateParams) {
        var vm = this;
        var currentUserId = $stateParams.userId;

        vm.user = MainService.getUser(currentUserId);

        $('.ui.rating')
            .rating('disable')
        ;

    }
})();