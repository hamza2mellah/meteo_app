var app=angular.module('app',['ngRoute']);



app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "/templates/home.html",
        controller:'homeController'
    })
    .when("/about", {
        templateUrl : "/templates/about.html",
        controller:'aboutController'
    })
    .when("/message", {
        templateUrl : "/templates/message.html",
        controller:'messageController'
    })
    
    .otherwise({redirectTo:'/home'});
});