app.controller('homeController',function($scope,$http){
      $scope.displaying=false;
      $scope.name='';
      $scope.Math=Math;
      
      $scope.chercher=function(){
      	$scope.url='http://api.openweathermap.org/data/2.5/forecast/daily?q='+$scope.name+'&mode=json&units=metric&cnt=10&appid=3ea871eb35e13d0d47ec64bdc755ef01';
      	$http.get($scope.url)
        .success(function (response) {
        $scope.displaying=true;
        $scope.content=response;
        $scope.city=response.city.name;
        $scope.country=response.city.country;
        console.log($scope.content);
        })
        
      }

   });