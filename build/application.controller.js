(function() {

angular
    .module('jonWardApp')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$state']

    function ApplicationController($state) {
        var vm = this;

        vm.$state = $state;
        console.log($state);
    };

})();