/**
 * Created by danle on 1/5/16.
 */
(function () {
    angular
        .module('app')
        .service('MainSvc', ['$firebaseObject', '$firebaseArray', '$firebaseAuth', 'fb','$location','$window', MainSvc]);

    function MainSvc ($firebaseObject, $firebaseArray, $firebaseAuth, fb, $location, $window) {

        //login with facebook
        this.loginWithFacebook = function () {
            var ref = new Firebase (fb.url);
            var authObj = $firebaseAuth(ref);

            authObj.$authWithOAuthPopup("facebook")
                .then(function(authData) {
                    ref.child('users').child(authData.uid).set({
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

        var currentUser = null;
        var ref = new Firebase(fb.url);
        ref.onAuth(function (user) {
            if(user) {
                currentUser = user;
                this.currentUserName = currentUser.facebook.displayName;
            } else {
                console.log('user got blank');
            }
        });

        //getting current user info
        this.getUsers = function () {
            if(currentUser) {
                console.log('Got User: ',  currentUser);
                var ref = new Firebase(fb.url+'/users/'+currentUser.uid);
                return $firebaseObject(ref);
            } else {
                console.log('No Current User');
                return null;
            }
        };

        ////logout the user
        this.logout = function () {
            var ref = new Firebase (fb.url);
            ref.unauth();
            $location.path('/home');
        };

        this.getFavors = function() {
            var ref = new Firebase(fb.url+'/favor/');
            var favorArr = $firebaseArray(ref);
            return favorArr;
        };

    }
})();