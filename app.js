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
                templateUrl: 'app/home/homeView.html'})
            .when('/main', {
                templateUrl: 'app/main/mainView.html',
                controller:'mainController',
            })
            .when('/profile',
                {templateUrl: 'app/profile/profileView.html'})
            .otherwise(
                {redirectTo: '/home'});
    }

})();