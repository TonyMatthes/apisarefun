//define angular, bracket are any further dependencies we may need in the future
let app = angular.module('TacoApp', []);
//define controller
app.controller('TacoController', ['$http', function ($http) {
    let vm = this;

    vm.message='hey';
}]);