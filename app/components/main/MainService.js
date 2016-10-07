(function () {
    'use strict';
    angular
        .module('favourApp')
        .service('MainService', ['$firebaseObject', '$firebaseArray', 'fb', MainService]);

    function MainService ($firebaseObject, $firebaseArray, fb) {
        var currentUser = null;
        var ref = new Firebase(fb.url);
        ref.onAuth(function (user) {
            if(user) {
                currentUser = user;
            } else {
                console.log('user got blank');
            }
        });

        //getting current user info
        this.currentUser = function () {
            if(currentUser) {
                //console.log('Got User: ',  currentUser);
                var ref = new Firebase(fb.url+'/users/'+currentUser.uid);
                return $firebaseObject(ref);
            } else {
                console.log('No Current User');
                return null;
            }
        };

        //getting the users
        this.getUsers = function () {
            var ref = new Firebase(fb.url+'/users/');
            var usersArr = $firebaseArray(ref);
            return usersArr;
        };

        this.getUser = function (userId) {
            var ref = new Firebase (fb.url + '/users/' + userId);
            return $firebaseObject(ref);
        };


        this.getFavors = function() {
            var ref = new Firebase(fb.url+'/favor/');
            var favorArr = $firebaseArray(ref);
            return favorArr;
        };


        this.addFavoriteFavors = function () {
            var ref = new Firebase(fb.url+'/favorites/'+currentUser.uid);
            var favsArr = $firebaseArray(ref);
            return favsArr;
        };

        this.addFavor = function (newfavor) {
            var ref = new Firebase(fb.url+'/favor');
            var favArr = $firebaseArray(ref);
            favArr.$add(newfavor);
        };

        this.editFavor = function (id, updatedFavour) {
            var ref = new Firebase(fb.url+'/favor/'+id);

            ref.update({
                image: updatedFavour.image,
                name: updatedFavour.name,
                date: updatedFavour.date,
                favorTitle: updatedFavour.favorTitle,
                favorContent: updatedFavour.favorContent
            });
        };

        this.getFriends = function (currentId) {
            var ref = new Firebase(fb.url + '/users/' + currentId.$id +'/friendList');
            var friendsArr = $firebaseArray(ref);
            return friendsArr;
        };
        //
        //this.getPendingFriends = function (currentId) {
        //    console.log('looking for: ', currentId);
        //    var ref = new Firebase (fb.url +'/users/'+ currentId +'/pendingRequest');
        //    var pendingFriendsArr = $firebaseArray(ref);
        //    console.log('found: ', pendingFriendsArr);
        //    return pendingFriendsArr;
        //};
        //
        this.pendingFriends = function (friend, currUser) {
            var ref = new Firebase(fb.url + '/users/' + friend.$id + '/pendingRequest');
            var newFriendArr = $firebaseArray(ref);
            newFriendArr.$add(currUser);
        };
        //
        //this.approveFriend = function (friend, currUser) {
        //    //console.log(friend);
        //    var ref = new Firebase(fb.url + '/users/' + currUser.$id+ '/friendList');
        //    //console.log(ref);
        //    var confirmFriendArr = $firebaseArray(ref);
        //    confirmFriendArr.$add(friend);
        //};
        //
        //
        //this.deletePendingFriends = function (id, currUser) {
        //    var ref = new Firebase(fb.url + '/users/' + currUser.$id + '/pendingRequest/' + id);
        //    ref.remove();
        //};
    }
})();