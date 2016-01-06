/**
 * Created by danle on 1/5/16.
 */
(function () {
    angular
        .module('app')
        .service('MainSvc', ['$firebaseObject', '$firebaseArray', '$firebaseAuth', 'fb','$location','$window', MainSvc]);

    function MainSvc ($firebaseObject, $firebaseArray, $firebaseAuth, fb, $location, $window) {
        var currentUser = null;
        var ref = new Firebase(fb.url);
        var usersRef = ref.child("users");

        //login with facebook
        this.loginWithFacebook = function () {
            usersRef.authWithOAuthPopup("facebook", function(error, user) {
                if (error) {
                    alert("Login Failed!", error);
                } else if (user) {
                    usersRef.child(user.uid).set({
                        id: user.uid,
                        name: user.facebook.displayName,
                        pic: user.facebook.profileImageURL});
                    $window.location.href="/#/main";
                }
            });
        };

        //current userid
        ref.onAuth(function (user) {
            currentUser = user;
        });

        //this.currentUserName = currentUser.facebook.displayName;

        //logout the user
        this.logout = function () {
            ref.unauth();
            $location.path('/home');
        };

        //getting current user info
        this.getUsers = function () {
            var ref = new Firebase(fb.url+'/users/'+ currentUser.uid);
            var obj =  $firebaseObject(ref);
            return obj;
        };


        this.getFavors = function() {
            var ref = new Firebase(fb.url+'/favor/');
            var favorArr = $firebaseArray(ref);
            return favorArr;
        };

    }
})();