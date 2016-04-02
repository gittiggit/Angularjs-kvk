var myApp = angular.module("myModule", []);

var myController = function($scope){
    $scope.message = "Angularjs application";
}

myApp.controller("myController", myController);

//myApp.controller("myController", function($scope){
//    $scope.message = "Angularjs application";
//});

// Now we have a module, we have a controller, and the controller is
// registered with that module.