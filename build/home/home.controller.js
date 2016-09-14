(function() {

    'use strict'

    angular
        .module('jonWardApp')
        .controller('HomeController', HomeController);

        function HomeController() {
            console.log('i am the HOME CONTROLLER');
        }

})();