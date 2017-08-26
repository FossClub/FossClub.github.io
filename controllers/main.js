
var app = angular.module('FossClub', [
  'ngRoute'
]);


app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "template/partials/home.html", controller: "PageCtrl"})
    .when("/projects", {templateUrl: "template/partials/projects.html", controller: "PageCtrl"})
 }]);


app.controller('PageCtrl', function () {
  console.log("controller");
});