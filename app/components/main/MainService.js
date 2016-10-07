(() => {
    angular
        .module('favourApp')
        .service('MainService', ['$firebaseObject', '$firebaseArray', 'fb', MainService]);

    function MainService ($firebaseObject, $firebaseArray, fb) {
        let currentUser = null;
        let ref = new Firebase(fb.url);

        ref.onAuth(user => user ? currentUser = user : console.log('user got blank'));

        //getting current user info
        this.currentUser = () => {
            if (currentUser) {
                const ref = new Firebase(fb.url+'/users/'+currentUser.uid);
                return $firebaseObject(ref);
            } else {
                return null;
            }
        };

        //getting the users
        this.getUsers = () => {
            const ref = new Firebase(fb.url+'/users/');
            const usersArr = $firebaseArray(ref);
            return usersArr;
        };

        this.getUser = userId => {
            const ref = new Firebase (fb.url + '/users/' + userId);
            return $firebaseObject(ref);
        };


        this.getFavors = () => {
            const ref = new Firebase(fb.url+'/favor/');
            const favorArr = $firebaseArray(ref);
            return favorArr;
        };


        this.addFavoriteFavors = () => {
            const ref = new Firebase(fb.url+'/favorites/'+currentUser.uid);
            const favsArr = $firebaseArray(ref);
            return favsArr;
        };

        this.addFavor = newfavor => {
            const ref = new Firebase(fb.url+'/favor');
            const favArr = $firebaseArray(ref);
            favArr.$add(newfavor);
        };

        this.editFavor = (id, updatedFavour) => {
            const ref = new Firebase(fb.url+'/favor/'+id);

            ref.update({
                image: updatedFavour.image,
                name: updatedFavour.name,
                date: updatedFavour.date,
                favorTitle: updatedFavour.favorTitle,
                favorContent: updatedFavour.favorContent
            });
        };
    }
})();