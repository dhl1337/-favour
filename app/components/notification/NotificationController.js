/**
 * Created by danle on 1/12/16.
 */
(function () {
    angular
        .module('favourApp')
        .controller('NotificationController', ['MainService', 'notificationService', NotificationController]);

    function NotificationController (MainService, notificationService) {
        var vm = this;
        vm.approve = approve;
        vm.currUser = MainService.currentUser();

        var currUser = MainService.currentUser();

        function approve(request) {
            //console.log(request);
            notificationService.approveFriend(request, vm.currUser);
            //console.log(request, currUser.$id);
        }

        vm.pendings = notificationService.getPendingFriends(currUser.$id);

        vm.deletePending = function (id) {
            //console.log(id);
            notificationService.deletePendingFriends(id, vm.currUser);
        }
    }
})();