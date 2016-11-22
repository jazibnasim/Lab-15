(function() {
var app = angular.module("jazibApp", ["ngRoute"]); // create the module

app.config(function($routeProvider) {
    $routeProvider.when("/form", {
        templateUrl: "views/form.html",
        controller: 'formController'
      
    });
    $routeProvider.when("/view", {
        templateUrl: "views/view.html",
        controller: 'viewController'

   
        
    });


    $routeProvider.otherwise({
        templateUrl: "views/surprise.html",
    });
});

})();