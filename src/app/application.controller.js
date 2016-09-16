(function() {

angular
    .module('jonWardApp')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$state', '$mdSidenav']

    function ApplicationController($state, $mdSidenav) {
        var vm = this;

        vm.$state = $state;
        console.log($state);

        vm.openSideNav = function() {
            $mdSidenav('left').toggle();
        };

    };

})();