/**
 * Created by danle on 1/3/16.
 */
(function(){
    'use strict';
    angular
        .module('app', ['firebase', 'ngRoute'])
        .constant('fb', {
            url: 'https://needsfavor.firebaseio.com'
        })
        .config(['$routeProvider', config]);

    function config ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html'
            })
            .when('/main', {
                templateUrl: 'partials/main.html',
                controller:'MainCtrl',
            })
            .when('/register', {
                templateUrl: 'partials/reigster.html'
            })
            .when('/profile', {
                templateUrl: 'partials/profile.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
})();