angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
    $scope.link = {};
    $scope.link.url;

    $scope.addLink = function(){
      $scope.loading = true;
      Links.addLink($scope.link)
        .then(function(){
          $scope.loading = false;
          $loacation.path('/');
           $scope.link.url = ' ';
        })
        .catch(function(error){console.log(error);
        });
    };

});
