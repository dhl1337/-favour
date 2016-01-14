/**
 * Created by danle on 1/12/16.
 */
(function () {
    angular
        .module('favourApp')
        .controller('NotificationController', ['MainService', NotificationController]);

    function NotificationController (MainService) {
        var vm = this;
        vm.approve = approve;
        vm.currUser = MainService.currentUser();

        var currUser = MainService.currentUser();

        function approve(request) {
            //console.log(request);
            MainService.approveFriend(request, vm.currUser);
            //console.log(request, currUser.$id);
        }

        vm.pendings = MainService.getPendingFriends(currUser.$id);

        vm.deletePending = function (id) {
            MainService.deletePendingFriends(id, vm.currUser);
        }
    }
})();