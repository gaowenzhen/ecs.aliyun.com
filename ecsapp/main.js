 var ecsapp = angular.module('ecsapp', ["ui.router"]);

 ecsapp.run(function($rootScope) {

 });


 myapp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

     //home
     $stateProvider.state({
         name: "home",
         url: "/home",
         templateUrl: "tlp/list.html",
         controller: "listctrl"
     });



     $urlRouterProvider.otherwise('/home');


 }]);
