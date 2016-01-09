/**
 * Created by danle on 1/8/16.
 */
(function () {
    angular
        .module('app')
        .filter('favorFilter', favorFilter);

    function favorFilter () {
        return function (favoriteFavor) {
            for (var i = 0; i < favoriteFavor.length; i++) {
                if (!favoriteFavor[i]) {
                    console.log('hello');
                }
            }
        };
    }

})();