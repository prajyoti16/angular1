var app = angular.module('studentApp', []);
app.controller('StudentController', function($scope){
    $scope.student = {
        name: 'Prajyoti Pawar',
        roll: '3049',
        course: 'cse'
        };
 });