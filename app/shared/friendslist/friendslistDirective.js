/**
 * Created by danle on 1/13/16.
 */
(function () {
    angular
        .module('favourApp')
        .directive('friendsList', friendsList);

    function friendsList () {
        var directive = {
            templateUrl: '../app/shared/friendslist/friendslistView.html',
            scope: {
                friend: '='
            },
            controller: 'MainController',
            controllerAs: 'main'
        };
        return directive
    }
})();