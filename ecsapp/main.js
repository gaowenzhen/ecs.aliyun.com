 var ecsapp = angular.module('ecsapp', ["ui.router"]);

 ecsapp.run(function($rootScope) {

 });


 ecsapp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

     //home
     $stateProvider.state({
         name: "home",
         url: "/home",
         templateUrl: "ecsapp/tlp/home.html",
         controller: "homectrol"
     });

     $stateProvider.state({
         name: "home.Overview",
         url: "/Overview",
         templateUrl: "ecsapp/tlp/Overview.html"
     });

     $stateProvider.state({
         name: "home.Examples",
         url: "/Examples",
         templateUrl: "ecsapp/tlp/Examples.html"
     });

     $stateProvider.state({
         name: "home.disk",
         url: "/disk",
         templateUrl: "ecsapp/tlp/disk.html"
     });

     $urlRouterProvider.otherwise('/home/Overview');

 }]);

 ecsapp.controller('homectrol', ['$scope', '$state', function($scope, $state) {

     //开合产品与服务
     $scope.isProductOpen = false;
     $scope.toggleProductDropdown = function(evnte) {
         $scope.isProductOpen = !$scope.isProductOpen;
     }

     //左边菜单切换迷你
     $scope.isSidebarFold = false;
     $scope.toggleSidebarStatus = function() {
         $scope.isSidebarFold = !$scope.isSidebarFold;
     }

     //左边子菜单开合
     $scope.categoryUnfoldIndex = 0;
     $scope.titleClickHandler = function($index) {
         if ($scope.categoryUnfoldIndex != $index) {
             $scope.categoryUnfoldIndex = $index;
         } else {
             $scope.categoryUnfoldIndex = 0;
         }

     }

     //开启栏目配置
     $scope.manageClickHandler = function() {

     }


     //右边菜单开启（中间菜单）
     $scope.productNavBar = true;
     $scope.collapseProductNavbar = function() {
         $scope.productNavBar = !$scope.productNavBar;
     }

     $scope.navScene = "main";

     $scope.product = {
         item2: false,
         item1: true
     };

     $scope.showproduct = function(item) {

         $scope.product = {
             item2: false,
             item1: false
         };

         if (item == 1) {
           $scope.product.item1=true;
         }

          if (item == 2) {
           $scope.product.item2=true;
         }

     }





     $scope.searchClickHandler = function(evnte) {

         alert("消息内管理-测试");
     }

     //中间菜单是否选中
     $scope.checkActive = function() {

         var Activeurl = $state.current.url;
         var munes = {
             disk: false,
             Examples: false,
             Overview: false
         };

         if (Activeurl == "/Overview") {
             munes.Overview = true;
         }

         if (Activeurl == "/Examples") {
             munes.Examples = true;
         }

         if (Activeurl == "/disk") {
             munes.disk = true;
         }

         return munes
     }

 }]);

 //反馈窗口控制器
 ecsapp.controller("feedbcakctrl", ["$scope", function($scope) {

     $scope.feedback = {
         email: "",
         content: ""
     }

     //验证邮箱
     $scope.emailError = null;
     $scope.checkEmail = function() {
         var email = $scope.feedback.email;
         if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g.test(email)) {
             $scope.emailError = false;
         } else {
             $scope.emailError = true;
         }
     }

     //验证输入字数
     $scope.checkContent = function() {
         var content = $scope.feedback.content;
         if (content.length > 400) {
             return true;
         } else {
             return false
         }
     }

     //打开反馈窗口
     $scope.formPanel = false;
     $scope.feedbcak = function() {
         $scope.formPanel = !$scope.formPanel;
     }

 }]);
