app.controller('messageController',function($scope,$http){

      $scope.envoyer=function (contact) {
      	        
                 if(contact.name && contact.sujet && contact.email && contact.message){
                     $http.post('/contact',contact).then(function (response) {
                         console.log(contact);
                         
                     });
                 }else{
                     console.log('no sending');
                 }
             };

   });