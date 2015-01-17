angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = {};
    $scope.link.url;

    $scope.addLink = function(){
      Links.addLink($scope.link)
        .success(function(arg1){
          console.log(arg1);
           $scope.link.url = ' ';
        })
    };

});
