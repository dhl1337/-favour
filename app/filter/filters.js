/**
 * Created by danle on 1/8/16.
 */
(function () {
    angular
        .module('app')
        .filter('favorFilter', favorFilter);

    function favorFilter () {
        return function (favoriteFavor) {
            return favoriteFavor.filter(function (currUserId) {
                return currUserId;
            });
        };
    }

})();