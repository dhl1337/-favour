/**
 * Created by danle on 1/2/16.
 */
(function(){

    function mainService (fb, $firebaseArray) {

        this.getFavors = function() {
            var ref = new Firebase(fb.url+'/favor/');
            var favorArr = $firebaseArray(ref);
            return favorArr;
        }

    }

    angular
        .module('app')
        .service('mainService',['fb', '$firebaseArray', mainService]);
})();