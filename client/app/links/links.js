angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

    $scope.getLinks = function(){
      Links.getLinks()
        .then(function(data){
          $scope.data.links = data;
          console.log('this is scope: ', $scope.data.links);
        })
        .catch(function(err){
          console.error(err);
        })
    };
    $scope.getLinks();
    console.log('links data is : '+ JSON.stringify($scope.data));
    console.log('this is scope: ', $scope.data.links);
});
