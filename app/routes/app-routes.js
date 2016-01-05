/**
 * Created by danle on 1/4/16.
 */
(function () {
    angular
        .module('app')
        .config(['$routeProvider', config]);

    function config ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/homeView.html'
            })
            .when('/main', {
                templateUrl: 'app/main/mainView.html',
                controller:'mainController',
            })
            .when('/register', {
                templateUrl: 'app/register/reigsterView.html'
            })
            .when('/profile', {
                templateUrl: 'app/profile/profileView.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
})();