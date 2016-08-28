(function() {

angular
    .module('jonWardApp')
    .controller('ApplicationController', ApplicationController);

    function ApplicationController($scope, $timeout) {
        console.log('ApplicationController');

    };

})();