(() => {
    angular
        .module('favourApp')
        .service('loginService', ['$firebaseAuth', '$location', '$window', 'fb', loginService]);

    function loginService ($firebaseAuth, $location, $window, fb) {

        this.loginWithFacebook = () => {
            const ref = new Firebase (fb.url);
            const authObj = $firebaseAuth(ref);

            authObj.$authWithOAuthPopup("facebook")
                .then(({uid, facebook} = authData) => {
                    ref.child('users').child(uid).update({
                        uid: uid,
                        name: facebook.displayName,
                        image: facebook.profileImageURL
                    });
                    $window.location.href="/#/main";
                })
                .catch(error => {
                    console.error("Authentication failed:", error);
                });
        };

        this.logout = () => {
            const ref = new Firebase (fb.url);
            ref.unauth();
            $location.path('/home');
        };
    }

})();
