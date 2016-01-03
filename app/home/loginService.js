/**
 * Created by danle on 1/2/16.
 */
(function(){
    'use strict';

    function loginService (fb, $location, $firebaseObject) {

        var currentUser = null;
        var ref = new Firebase(fb.url);
        var usersRef = ref.child("users");

        //login with facebook
        this.loginWithFacebook = function () {
            usersRef.authWithOAuthPopup("facebook", function(error, user) {
                if (error) {
                    console.log("Login Failed!", error);
                } else if (user) {
                    usersRef.child(user.uid).set({
                        id: user.uid,
                        name: user.facebook.displayName,
                        pic: user.facebook.profileImageURL});
                    $location.path('/main');
                }
            });
        };

        //current userid
        ref.onAuth(function (user) {
            currentUser = user;
        });

        //logout the user
        this.logout = function () {
            var authObj = $firebaseAuth(currentUser);
            authObj.$unAuth();
            $location.path('/home')
        }

        //getting current user info
        this.getUsers = function () {
            var ref = new Firebase(fb.url+'/users/'+ currentUser.uid);
            var obj =  $firebaseObject(ref);
            return obj;
        };

    }

    angular
        .module('app')
        .service('loginService',['fb','$location', '$firebaseObject', loginService]);
})();