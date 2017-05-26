angular.module('quoteBook').controller('mainCtrl', function($scope, mainService){
    
    $scope.test = "Hello World!";

    $scope.quotes = mainService.getQuotes();
});