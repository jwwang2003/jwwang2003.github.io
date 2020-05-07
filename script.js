(function () {

    var app = angular.module('sampleApp',['ngRoute']);

    app.config(function ($routeProvider){
        $routeProvider
            .when('/aboutme',{
                templateUrl:'aboutme.html'
            })
            .when('/blog', {
                templateUrl:'blog.html'
            })
            .when('/projects', {
                templateUrl:'projects.html'
            })
            .when('/resume', {
                templateUrl:'resume.html'
            })
            .when('/contact', {
                templateUrl:'contact.html'
            })
            .otherwise({ redirectTo:'/'});
    });
})();