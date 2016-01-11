/**
 * Created by danle on 1/10/16.
 */
(function () {
    angular
        .module('favourApp')
        .controller('ProfileController', ['MainSvc','$stateParams',ProfileController]);

    function ProfileController (MainSvc, $stateParams) {
        var vm = this;
        var currentUserId = $stateParams.userId;
        vm.user = MainSvc.getUser(currentUserId);

        $('.ui.rating')
            .rating('disable')
        ;
    }
})();