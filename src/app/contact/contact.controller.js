(function() {

    'use strict'

    angular
        .module('jonWardApp')
        .controller('ContactController', ContactController);

        function ContactController() {
            console.log('i am the CONTACT CONTROLLER');
        }

})();