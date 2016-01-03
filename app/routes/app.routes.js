/**
 * Created by danle on 1/2/16.
 */
(function(){
    angular
        .module('app', ['ngRoute'])
        .config(config);

    function config ($routeProvider) {
        $routeProvider
            .when('/home',{templateUrl: 'app/home/homeView.html'})
            .when('/main',{templateUrl: 'app/main/mainView.html',controller:'mainController'})
            .when('/profile', {templateUrl: 'app/profile/profile.view.html'})
            .otherwise({redirectTo: '/home'});
    }
})();