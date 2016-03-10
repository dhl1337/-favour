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
        vm.pendingFriend = pendingFriend;
        vm.user = MainService.getUser(currentUserId);
        //console.log('this is the user',vm.user);

        vm.currUser = MainService.currentUser();

        function pendingFriend () {
            //console.log('this is the user',vm.currUser);
            MainService.pendingFriends(vm.user, vm.currUser);
        };

        $('.ui.rating')
            .rating('disable')
        ;

    }
})();