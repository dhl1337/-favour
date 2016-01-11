/**
 * Created by danle on 1/9/16.
 */
(function () {
    angular
        .module('favourApp')
        .directive('about', about);

    function about () {
        var directive = {
            templateUrl: '../app/shared/about/aboutView.html',
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