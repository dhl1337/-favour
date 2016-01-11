/**
 * Created by danle on 1/9/16.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .service('LoginService', ['$firebaseAuth', '$location', '$window', 'fb', LoginService]);

    function LoginService ($firebaseAuth, $location, $window, fb) {

        //login with facebook
        this.loginWithFacebook = function () {
            var ref = new Firebase (fb.url);
            var authObj = $firebaseAuth(ref);

            authObj.$authWithOAuthPopup("facebook")
                .then(function(authData) {
                    ref.child('users').child(authData.uid).update({
                        uid: authData.uid,
                        name: authData.facebook.displayName,
                        image: authData.facebook.profileImageURL
                    });
                    $window.location.href="/#/main";
                })
                .catch(function(error) {
                    console.error("Authentication failed:", error);
                });
        };

        //logout the user
        this.logout = function () {
            var ref = new Firebase (fb.url);
            ref.unauth();
            $location.path('/home');
        };
    }

})();