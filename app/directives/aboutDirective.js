/**
 * Created by danle on 1/9/16.
 */
(function () {
    angular
        .module('app')
        .directive('about', about);

    function about () {
        var directive = {
            templateUrl: '../app/view/about.html',
            controller: aboutController,
            bindToController: true
        };
        return directive;
    }

    function aboutController () {
        $('.ui.accordion')
            .accordion()
        ;
    }
})();