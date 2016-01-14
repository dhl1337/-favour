/**
 * Created by danle on 1/13/16.
 */
(function () {
    angular
        .module('favourApp')
        .service('notificationService', ['$firebaseArray', 'fb', notificationService]);

    function notificationService ($firebaseArray, fb) {

        this.getPendingFriends = function (currentId) {
            console.log('looking for: ', currentId);
            var ref = new Firebase (fb.url +'/users/'+ currentId +'/pendingRequest');
            var pendingFriendsArr = $firebaseArray(ref);
            console.log('found: ', pendingFriendsArr);
            return pendingFriendsArr;
        };

        this.pendingFriends = function (friend, currUser) {
            var ref = new Firebase(fb.url + '/users/' + friend.$id + '/pendingRequest');
            var newFriendArr = $firebaseArray(ref);
            newFriendArr.$add(currUser);
        };

        this.approveFriend = function (friend, currUser) {
            //console.log(friend);
            var ref = new Firebase(fb.url + '/users/' + currUser.$id+ '/friendList');
            //console.log(ref);
            var confirmFriendArr = $firebaseArray(ref);
            confirmFriendArr.$add(friend);
        };


        this.deletePendingFriends = function (id, currUser) {
            var ref = new Firebase(fb.url + '/users/' + currUser.$id + '/pendingRequest/' + id);
            ref.remove();
        };

        //this.currentFriends = function (pendingFriend) {
        //    var ref = new Firebase(fb.url + '/users/' + friendId + '/currentFriends');
        //    var currFriendArr = $firebaseArray(ref);
        //    currFriendArr.$add(pendingFriend);
        //};

        this.confirmFriend = function (request) {
            //console.log(currentUser.uid, request);
        }
    }
})();